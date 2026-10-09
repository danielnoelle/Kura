/**
 * KURA (蔵) — Reactive Cart Store & Pricing Engine
 * Handles items state, pricing, bundle discounts, shipping thresholds,
 * tomobako packaging, inventory stock caps, and reservation timer.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CartStore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const STORAGE_KEY = 'kura_cart_v1';
  const RESERVATION_STORAGE_KEY = 'kura_reservation_v1';
  const HOLD_DURATION_SECONDS = 600; // 10 minutes
  const FREE_SHIPPING_THRESHOLD = 5000.00; // ₱5,000.00 PHP
  const STANDARD_SHIPPING_FEE = 350.00;    // ₱350.00 PHP
  const TOMOBAKO_FEE = 500.00;
  const BUNDLE_DISCOUNT_PERCENT = 0.15; // 15% discount for 2+ bundle items

  let state = {
    items: [],
    tomobako: false,
    reservationExpiry: null
  };

  const hasLocalStorage = () => {
    try {
      return typeof localStorage !== 'undefined';
    } catch (e) {
      return false;
    }
  };

  const loadState = () => {
    if (!hasLocalStorage()) return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state.items = Array.isArray(parsed.items) ? parsed.items : [];
        state.tomobako = Boolean(parsed.tomobako);
      }
      const savedExpiry = localStorage.getItem(RESERVATION_STORAGE_KEY);
      if (savedExpiry) {
        state.reservationExpiry = parseInt(savedExpiry, 10);
      }
    } catch (e) {
      console.warn('Failed to load cart state from localStorage', e);
    }
  };

  const persistState = () => {
    if (!hasLocalStorage()) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        items: state.items,
        tomobako: state.tomobako
      }));
      if (state.reservationExpiry) {
        localStorage.setItem(RESERVATION_STORAGE_KEY, String(state.reservationExpiry));
      }
    } catch (e) {
      console.warn('Failed to persist cart state', e);
    }
  };

  // Initialize from storage if available
  loadState();

  const resetReservationTimer = () => {
    state.reservationExpiry = Date.now() + (HOLD_DURATION_SECONDS * 1000);
    persistState();
    return state.reservationExpiry;
  };

  const isHoldExpired = () => {
    if (!state.reservationExpiry) return false;
    return state.reservationExpiry <= Date.now();
  };

  const getRemainingReservationSeconds = () => {
    if (!state.reservationExpiry) {
      resetReservationTimer();
    }
    const diff = Math.ceil((state.reservationExpiry - Date.now()) / 1000);
    return Math.max(0, diff);
  };

  const roundCents = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  const calculateTotals = () => {
    const rawSubtotal = state.items.reduce((sum, item) => {
      return sum + (item.price * item.qty);
    }, 0);

    const subtotal = roundCents(rawSubtotal);

    // Calculate bundle discount: 15% off bundle items if 2 or more bundle items are in cart
    const bundleItems = state.items.filter(item => Boolean(item.isBundleItem));
    const totalBundleQuantity = bundleItems.reduce((sum, item) => sum + item.qty, 0);

    let discount = 0;
    if (totalBundleQuantity >= 2) {
      const bundleSum = bundleItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
      discount = roundCents(bundleSum * BUNDLE_DISCOUNT_PERCENT);
    }

    // Shipping logic: free if subtotal >= $150, else $18 (or $0 if empty)
    let shipping = 0;
    let isFreeShipping = false;
    let amountToFreeShipping = FREE_SHIPPING_THRESHOLD;

    if (subtotal > 0) {
      if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        shipping = 0;
        isFreeShipping = true;
        amountToFreeShipping = 0;
      } else {
        shipping = STANDARD_SHIPPING_FEE;
        isFreeShipping = false;
        amountToFreeShipping = roundCents(FREE_SHIPPING_THRESHOLD - subtotal);
      }
    }

    const tomobakoFee = state.tomobako && subtotal > 0 ? TOMOBAKO_FEE : 0;
    const total = roundCents(Math.max(0, subtotal - discount + shipping + tomobakoFee));

    return {
      subtotal,
      discount,
      shipping,
      tomobakoFee,
      total,
      isFreeShipping,
      amountToFreeShipping,
      freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
      bundleDiscountPercent: 15,
      isHoldExpired: isHoldExpired()
    };
  };

  const addItem = (item, qty = 1, selectedColor = '') => {
    const max = (item.maxStock !== undefined && item.maxStock !== null)
      ? item.maxStock
      : ((item.stock !== undefined && item.stock !== null) ? item.stock : 10);
    let maxStockReached = false;
    const color = selectedColor || item.selectedColor || '';

    const existingIndex = state.items.findIndex(i => i.id === item.id && (i.selectedColor || '') === color);
    if (existingIndex > -1) {
      const currentQty = state.items[existingIndex].qty;
      if (currentQty >= max) {
        maxStockReached = true;
      } else {
        const targetQty = currentQty + qty;
        if (targetQty > max) {
          state.items[existingIndex].qty = max;
          maxStockReached = true;
        } else {
          state.items[existingIndex].qty = targetQty;
        }
      }
      if (item.isBundleItem) {
        state.items[existingIndex].isBundleItem = true;
      }
    } else {
      const initialQty = Math.min(qty, max);
      if (qty > max) {
        maxStockReached = true;
      }
      state.items.push({
        id: item.id,
        name: item.name,
        price: item.price,
        subtitle: item.subtitle || '',
        image: item.image || '',
        selectedColor: color,
        isBundleItem: Boolean(item.isBundleItem),
        edition: item.edition || '',
        maxStock: max,
        qty: initialQty
      });
    }

    resetReservationTimer();
    persistState();
    const totals = calculateTotals();
    totals.maxStockReached = maxStockReached;
    return totals;
  };

  const removeItem = (itemId) => {
    state.items = state.items.filter(item => item.id !== itemId);
    if (state.items.length === 0) {
      state.tomobako = false;
    }
    persistState();
    return calculateTotals();
  };

  const updateQty = (itemId, newQty) => {
    const parsedQty = parseInt(newQty, 10);
    if (isNaN(parsedQty) || parsedQty <= 0) {
      return removeItem(itemId);
    }
    const item = state.items.find(i => i.id === itemId);
    let maxStockReached = false;

    if (item) {
      const max = (item.maxStock !== undefined && item.maxStock !== null) ? item.maxStock : 10;
      if (parsedQty >= max) {
        item.qty = max;
        maxStockReached = true;
      } else {
        item.qty = parsedQty;
      }
      persistState();
    }
    const totals = calculateTotals();
    totals.maxStockReached = maxStockReached;
    return totals;
  };

  const toggleTomobako = (enabled) => {
    state.tomobako = Boolean(enabled);
    persistState();
    return calculateTotals();
  };

  const isTomobakoSelected = () => state.tomobako;

  const getItems = () => [...state.items];

  const clear = () => {
    state.items = [];
    state.tomobako = false;
    state.reservationExpiry = null;
    if (hasLocalStorage()) {
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(RESERVATION_STORAGE_KEY);
      } catch (e) {
        // ignore
      }
    }
  };

  // Test helper
  const setReservationExpiryForTesting = (timestamp) => {
    state.reservationExpiry = timestamp;
  };

  return {
    addItem,
    removeItem,
    updateQty,
    toggleTomobako,
    isTomobakoSelected,
    calculateTotals,
    resetReservationTimer,
    renewHold: resetReservationTimer,
    getRemainingReservationSeconds,
    isHoldExpired,
    setReservationExpiryForTesting,
    getItems,
    clear,
    FREE_SHIPPING_THRESHOLD,
    STANDARD_SHIPPING_FEE,
    TOMOBAKO_FEE
  };
});
