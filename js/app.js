/**
 * KURA (蔵) — Storefront Application Controller (Philippines)
 * Manages interactive color swatches, category filtering,
 * workspace bundle customizer (15% savings in PHP), reactive slide-out
 * cart drawer with free shipping progress meter, and express checkout.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./cart-store.js'));
  } else {
    root.BranchApp = factory(root.CartStore);
  }
})(typeof self !== 'undefined' ? self : this, function (CartStore) {
  'use strict';

  // --- Official Catalog Database (Philippine Peso Pricing) ---
  const BRANCH_PRODUCTS = {
    'ergonomic-chair': {
      id: 'ergonomic-chair',
      handle: 'ergonomic-chair',
      name: 'Ergonomic Chair',
      tag: 'WIRECUTTER BEST PICK',
      price: 14990,
      compareAtPrice: 17990,
      rating: 4.8,
      reviews: 4892,
      category: 'chairs',
      description: 'The award-winning workhorse. Made to support 8+ hours of focus with 8 points of adjustment and double-woven breathable mesh.',
      features: [
        '8 Points of Adjustment (tilt tension, tilt lock, armrests, lumbar, seat depth)',
        'Double-Woven Breathable Italian Mesh Backrest',
        'Removable & Height-Adjustable Lumbar Cushion'
      ],
      swatches: [
        {
          name: 'Black',
          colorHex: '#1A1A1A',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/files/bb1.webp?v=1762198436'
        },
        {
          name: 'Grey',
          colorHex: '#999999',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/files/bw1.webp?v=1717687130'
        },
        {
          name: 'Blue',
          colorHex: '#2B4C6F',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/Blueergmin_c566667a-2cc7-4f08-bdbb-5fbe5335161f.jpg?v=1717687130'
        }
      ]
    },
    'verve-chair': {
      id: 'verve-chair',
      handle: 'verve-chair',
      name: 'Verve Chair',
      tag: 'DESIGN AWARD',
      price: 24990,
      compareAtPrice: 28990,
      rating: 4.9,
      reviews: 1840,
      category: 'chairs',
      description: 'Sculptural elegance meets engineered ergonomics. 3D knit suspension that cradles your spine through every angle.',
      features: [
        'Custom 3D Knit V-Suspension Backrest for Dynamic Response',
        'Integrated Omnidirectional Lumbar Support Ring',
        'Ultra-Smooth Synchronous Dynamic Recline System'
      ],
      swatches: [
        {
          name: 'Galaxy Black',
          colorHex: '#1A1A1A',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/galaxyhero.jpg?v=1762295347'
        },
        {
          name: 'Mist White',
          colorHex: '#E6E4DF',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/files/PDPhero2-1.webp?v=1739917972'
        }
      ]
    },
    'daily-chair': {
      id: 'daily-chair',
      handle: 'daily-chair',
      name: 'Daily Chair',
      tag: 'COMPACT COMFORT',
      price: 10990,
      compareAtPrice: 12990,
      rating: 4.7,
      reviews: 920,
      category: 'chairs',
      description: 'Minimalist posture support for home offices, student nooks, and collaborative workspaces.',
      features: [
        'Organic Linen Textured Upholstered Cushion',
        'Pneumatic Height Lift & Responsive Tilt Tension',
        'Lightweight Reinforced Nylon 5-Star Swivel Base'
      ],
      swatches: [
        {
          name: 'Linden Green',
          colorHex: '#6B7A68',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/DCLindenHero.jpg?v=1758663428'
        },
        {
          name: 'Slate Charcoal',
          colorHex: '#3A3D40',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/files/daily-chair_ec94880a-8a42-4065-adde-001f69884bc4.webp?v=1762198756'
        }
      ]
    },
    'duo-standing-desk': {
      id: 'duo-standing-desk',
      handle: 'duo-standing-desk',
      name: 'Duo Standing Desk',
      tag: 'BESTSELLER',
      price: 22990,
      compareAtPrice: 26990,
      rating: 4.9,
      reviews: 2150,
      category: 'desks',
      description: 'The sit-stand desk designed for daily rhythm. Dual whisper-quiet motors, soft beveled edge, and 4 programmable memory presets.',
      features: [
        'Dual-Motor Lift with 275 lb Capacity (<45 dB Acoustic Level)',
        'Contoured Ergonomic Beveled Forearm Edge',
        'OLED Digital Display with 4 Height Presets & Child Lock'
      ],
      swatches: [
        {
          name: 'Charcoal / White',
          colorHex: '#333333',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/duo-charcoal_white.jpg?v=1734737901'
        },
        {
          name: 'Walnut / White',
          colorHex: '#7B4E2B',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/duo-walnut_white.jpg?v=1776692456'
        }
      ]
    },
    'ergonomic-chair-pro': {
      id: 'ergonomic-chair-pro',
      handle: 'ergonomic-chair-pro',
      name: 'Ergonomic Chair Pro',
      tag: 'PERFORMANCE ERGONOMICS',
      price: 19990,
      compareAtPrice: 23990,
      rating: 4.9,
      reviews: 1420,
      category: 'chairs',
      description: 'Engineered for intensive 10+ hour workflows with active posture tracking and aircraft aluminum structure.',
      features: [
        'Dynamic 4D Articulating Armrests (Height, Width, Depth, Pivot)',
        'Self-Adjusting Synchro-Tilt with 4-Position Lock Angle',
        'Cast Aluminum Framework and High-Density Matrix Cushion'
      ],
      swatches: [
        {
          name: 'Mineral Grey',
          colorHex: '#A8A6A1',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/files/mineral.jpg?v=1734728064'
        },
        {
          name: 'Boulder Black',
          colorHex: '#222222',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/files/boulder.jpg?v=1734728064'
        }
      ]
    },
    'saddle-chair': {
      id: 'saddle-chair',
      handle: 'saddle-chair',
      name: 'Saddle Chair',
      tag: 'ACTIVE POSTURE',
      price: 12990,
      compareAtPrice: 14990,
      rating: 4.6,
      reviews: 650,
      category: 'chairs',
      description: 'Active posture perching chair for height-adjustable sit-stand workstations. Aligns hips and opens breathing.',
      features: [
        'Anatomical Pelvic Crest Saddle Pan Cushion',
        'Curved Solid Scandinavian Ash Swivel Pedestal',
        'High-Altitude Heavy Duty Gas Lift Cylinder'
      ],
      swatches: [
        {
          name: 'Dove White',
          colorHex: '#EAE6E1',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/ILOA-dove-min.jpg?v=1734734414'
        },
        {
          name: 'Carbon',
          colorHex: '#1A1A1A',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/ILOAPlus-black-min.jpg?v=1734734414'
        }
      ]
    },
    'monitor-arm': {
      id: 'monitor-arm',
      handle: 'monitor-arm',
      name: 'Ergonomic Monitor Arm',
      tag: 'ERGONOMIC ESSENTIAL',
      price: 4990,
      compareAtPrice: 5990,
      rating: 4.8,
      reviews: 1120,
      category: 'accessories',
      description: 'Elevate your screen to exact cervical spine eye level. Gas spring counterbalance for feather-light adjustments.',
      features: [
        'Gas-Spring Counterbalance Support (Holds 4.4 to 19.8 lbs)',
        '360° Portrait & Landscape Display Pivot',
        'Integrated Concealed Cable Routing Channel'
      ],
      swatches: [
        {
          name: 'Matte White',
          colorHex: '#FFFFFF',
          image: 'https://cdn.shopify.com/s/files/1/0124/5662/4187/files/LDT69-C012WHITEscene-pic01_b81ab794-fe3c-432b-9373-2183c574f6fb.webp?v=1763671901'
        }
      ]
    }
  };

  // State for active workspace bundle configuration
  let bundleConfig = {
    chairHandle: 'ergonomic-chair',
    stepsActive: {
      chair: true,
      desk: true,
      arm: true
    }
  };

  const roundCents = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

  // --- Calculate Workspace Bundle Totals (PHP) ---
  const calculateWorkspaceBundleTotals = (selectedSteps = {}) => {
    let rawSum = 0;
    let itemCount = 0;

    if (selectedSteps.chair) {
      const chairProduct = BRANCH_PRODUCTS[selectedSteps.chair];
      if (chairProduct) {
        rawSum += chairProduct.price;
        itemCount++;
      }
    }

    if (selectedSteps.desk) {
      const deskProduct = BRANCH_PRODUCTS[selectedSteps.desk];
      if (deskProduct) {
        rawSum += deskProduct.price;
        itemCount++;
      }
    }

    if (selectedSteps.arm) {
      const armProduct = BRANCH_PRODUCTS[selectedSteps.arm];
      if (armProduct) {
        rawSum += armProduct.price;
        itemCount++;
      }
    }

    const originalTotal = roundCents(rawSum);
    let discount = 0;
    if (itemCount >= 2) {
      discount = roundCents(originalTotal * 0.15);
    }
    const finalTotal = roundCents(Math.max(0, originalTotal - discount));

    return {
      originalTotal,
      discount,
      finalTotal,
      itemCount
    };
  };

  // --- Toast Manager ---
  const showToast = (message) => {
    if (typeof document === 'undefined') return;
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3200);
  };

  // --- Cart Drawer Manager ---
  const openCartDrawer = () => {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('drawer-overlay');
    const closeBtn = document.getElementById('cart-close-btn');

    if (drawer && overlay) {
      drawer.classList.add('active');
      overlay.classList.add('active');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('drawer-open');
      if (closeBtn) closeBtn.focus();
    }
  };

  const closeCartDrawer = () => {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('drawer-overlay');
    const cartBtn = document.getElementById('cart-btn');

    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('drawer-open');
      if (cartBtn) cartBtn.focus();
    }
  };

  // --- Checkout Modal Manager ---
  const openCheckoutModal = (orderTotal) => {
    const modal = document.getElementById('checkout-modal');
    const totalEl = document.getElementById('modal-order-total');
    if (totalEl) {
      totalEl.textContent = `₱${orderTotal.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} PHP`;
    }
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }
  };

  const closeCheckoutModal = () => {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }
  };

  // --- Update Cart Drawer UI ---
  const updateCartDrawerUI = () => {
    const store = (typeof window !== 'undefined' && window.CartStore) ? window.CartStore : CartStore;
    if (!store) return;

    const items = store.getItems();
    const totals = store.calculateTotals();

    // 1. Badge & Counts
    const navBadge = document.getElementById('cart-nav-badge');
    const drawerCount = document.getElementById('cart-drawer-count');
    const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

    if (navBadge) navBadge.textContent = String(totalQty);
    if (drawerCount) drawerCount.textContent = `(${totalQty})`;

    // 2. Shipping Progress Bar
    const shippingStatus = document.getElementById('shipping-progress-status');
    const shippingFill = document.getElementById('shipping-meter-fill');

    if (shippingStatus && shippingFill) {
      if (totals.subtotal <= 0) {
        shippingStatus.textContent = `Add ₱${store.FREE_SHIPPING_THRESHOLD.toLocaleString('en-PH', { minimumFractionDigits: 2 })} PHP for Free Nationwide Delivery`;
        shippingFill.style.width = '0%';
      } else if (totals.isFreeShipping) {
        shippingStatus.textContent = '🎉 You have unlocked Free Nationwide Delivery!';
        shippingFill.style.width = '100%';
      } else {
        shippingStatus.textContent = `Add ₱${totals.amountToFreeShipping.toLocaleString('en-PH', { minimumFractionDigits: 2 })} PHP for Free Nationwide Delivery`;
        const percentage = Math.min(100, Math.max(0, (totals.subtotal / store.FREE_SHIPPING_THRESHOLD) * 100));
        shippingFill.style.width = `${percentage}%`;
      }
    }

    // 3. Render Cart Items
    const itemsContainer = document.getElementById('cart-items-container');
    if (itemsContainer) {
      if (items.length === 0) {
        itemsContainer.innerHTML = `
          <div class="empty-cart-view" id="empty-cart-view" style="text-align: center; padding: 48px 24px; color: var(--color-text-muted);">
            <p style="font-family: var(--font-serif); font-size: 1.125rem; font-weight: 700; color: var(--color-text-main); margin-bottom: 8px;">Your cart is empty</p>
            <p style="font-size: 0.875rem;">Discover our ergonomic chairs and standing desks to start your setup.</p>
          </div>
        `;
      } else {
        itemsContainer.innerHTML = items.map(item => `
          <div class="cart-item-row" data-id="${item.id}" data-color="${item.selectedColor || ''}">
            <div class="cart-item-thumb">
              <img src="${item.image || ''}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-color">${item.selectedColor ? `Color: ${item.selectedColor}` : 'Standard Edition'}</div>
              <div class="cart-item-price">₱${(item.price * item.qty).toLocaleString('en-PH')} PHP</div>
              <div class="cart-item-controls">
                <div class="qty-stepper">
                  <button class="qty-btn btn-qty-dec" data-id="${item.id}" aria-label="Decrease quantity">−</button>
                  <span class="qty-val">${item.qty}</span>
                  <button class="qty-btn btn-qty-inc" data-id="${item.id}" aria-label="Increase quantity">+</button>
                </div>
                <button class="btn-remove-item" data-id="${item.id}" aria-label="Remove item">Remove</button>
              </div>
            </div>
          </div>
        `).join('');

        // Bind Steppers and Remove
        itemsContainer.querySelectorAll('.btn-qty-inc').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            const target = items.find(i => i.id === id);
            if (target) {
              store.updateQty(id, target.qty + 1);
              updateCartDrawerUI();
            }
          });
        });

        itemsContainer.querySelectorAll('.btn-qty-dec').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            const target = items.find(i => i.id === id);
            if (target) {
              store.updateQty(id, target.qty - 1);
              updateCartDrawerUI();
            }
          });
        });

        itemsContainer.querySelectorAll('.btn-remove-item').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            store.removeItem(id);
            updateCartDrawerUI();
            showToast('Item removed from cart.');
          });
        });
      }
    }

    // 4. Update Summary Lines (PHP)
    const subtotalEl = document.getElementById('cart-subtotal');
    const discountRow = document.getElementById('cart-discount-row');
    const discountEl = document.getElementById('cart-discount');
    const shippingEl = document.getElementById('cart-shipping');
    const totalEl = document.getElementById('cart-total');

    if (subtotalEl) subtotalEl.textContent = `₱${totals.subtotal.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} PHP`;

    if (discountRow && discountEl) {
      if (totals.discount > 0) {
        discountRow.style.display = 'flex';
        discountEl.textContent = `-₱${totals.discount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} PHP`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    if (shippingEl) {
      shippingEl.textContent = totals.isFreeShipping ? 'FREE' : (totals.subtotal > 0 ? `₱${totals.shipping.toLocaleString('en-PH', { minimumFractionDigits: 2 })} PHP` : '₱0.00 PHP');
    }

    if (totalEl) totalEl.textContent = `₱${totals.total.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} PHP`;
  };

  // --- Update Bundle Summary UI ---
  const updateBundleSummaryUI = () => {
    const selectedSteps = {
      chair: bundleConfig.stepsActive.chair ? bundleConfig.chairHandle : null,
      desk: bundleConfig.stepsActive.desk ? 'duo-standing-desk' : null,
      arm: bundleConfig.stepsActive.arm ? 'monitor-arm' : null
    };

    const bundleTotals = calculateWorkspaceBundleTotals(selectedSteps);

    const origEl = document.getElementById('bundle-orig-price');
    const finalEl = document.getElementById('bundle-final-price');
    const savingsEl = document.getElementById('bundle-savings-tag');

    if (origEl) origEl.textContent = `₱${bundleTotals.originalTotal.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;
    if (finalEl) finalEl.textContent = `₱${bundleTotals.finalTotal.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;

    if (savingsEl) {
      if (bundleTotals.discount > 0) {
        savingsEl.style.display = 'inline-block';
        savingsEl.textContent = `Save ₱${bundleTotals.discount.toLocaleString('en-PH', { minimumFractionDigits: 2 })} (15% Off)`;
      } else {
        savingsEl.style.display = 'none';
      }
    }
  };

  // --- Bind Event Listeners ---
  const bindEvents = () => {
    const store = (typeof window !== 'undefined' && window.CartStore) ? window.CartStore : CartStore;

    // 1. Interactive Swatches on Product Cards
    document.querySelectorAll('.swatch-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const swatchBtn = e.currentTarget;
        const swatchGroup = swatchBtn.closest('.swatch-group');
        const card = swatchBtn.closest('.product-card');
        const newImgUrl = swatchBtn.dataset.img;

        if (swatchGroup) {
          swatchGroup.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
          swatchBtn.classList.add('active');
        }

        if (card && newImgUrl) {
          const img = card.querySelector('.card-img-wrap img');
          if (img) {
            img.src = newImgUrl;
          }
        }
      });
    });

    // 2. Quick Add Buttons on Cards
    document.querySelectorAll('.quick-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const handle = e.currentTarget.dataset.handle;
        if (!handle || !BRANCH_PRODUCTS[handle]) return;

        const product = BRANCH_PRODUCTS[handle];
        const card = e.currentTarget.closest('.product-card');
        let selectedColor = '';
        if (card) {
          const activeSwatch = card.querySelector('.swatch-btn.active');
          if (activeSwatch && activeSwatch.dataset.color) {
            selectedColor = activeSwatch.dataset.color;
          }
        }

        // Get currently displayed image
        let itemImg = product.swatches && product.swatches[0] ? product.swatches[0].image : '';
        if (card) {
          const displayedImg = card.querySelector('.card-img-wrap img');
          if (displayedImg && displayedImg.src) {
            itemImg = displayedImg.src;
          }
        }

        store.addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: itemImg
        }, 1, selectedColor);

        updateCartDrawerUI();
        openCartDrawer();
        showToast(`Added ${product.name} to cart.`);
      });
    });

    // 3. Category Filter Pills
    document.querySelectorAll('.filter-pills .filter-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const targetCategory = e.currentTarget.dataset.category;
        document.querySelectorAll('.filter-pills .filter-pill').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');

        document.querySelectorAll('.product-card').forEach(card => {
          const cardCat = card.dataset.category;
          if (targetCategory === 'all' || cardCat === targetCategory) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // 4. Bundle Builder: Chair Toggle (Ergonomic vs Verve)
    const btnOptErgo = document.getElementById('btn-bundle-opt-ergo');
    const btnOptVerve = document.getElementById('btn-bundle-opt-verve');
    const bundleImgChair = document.getElementById('bundle-img-chair');
    const bundleTitleChair = document.getElementById('bundle-title-chair');
    const bundleDescChair = document.getElementById('bundle-desc-chair');
    const bundlePriceChair = document.getElementById('bundle-price-chair');

    if (btnOptErgo && btnOptVerve) {
      btnOptErgo.addEventListener('click', () => {
        btnOptErgo.classList.add('active');
        btnOptVerve.classList.remove('active');
        bundleConfig.chairHandle = 'ergonomic-chair';
        const p = BRANCH_PRODUCTS['ergonomic-chair'];
        if (bundleImgChair) bundleImgChair.src = p.swatches[0].image;
        if (bundleTitleChair) bundleTitleChair.textContent = p.name;
        if (bundleDescChair) bundleDescChair.textContent = p.description;
        if (bundlePriceChair) bundlePriceChair.textContent = `₱${p.price.toLocaleString('en-PH')}.00`;
        updateBundleSummaryUI();
      });

      btnOptVerve.addEventListener('click', () => {
        btnOptVerve.classList.add('active');
        btnOptErgo.classList.remove('active');
        bundleConfig.chairHandle = 'verve-chair';
        const p = BRANCH_PRODUCTS['verve-chair'];
        if (bundleImgChair) bundleImgChair.src = p.swatches[0].image;
        if (bundleTitleChair) bundleTitleChair.textContent = p.name;
        if (bundleDescChair) bundleDescChair.textContent = p.description;
        if (bundlePriceChair) bundlePriceChair.textContent = `₱${p.price.toLocaleString('en-PH')}.00`;
        updateBundleSummaryUI();
      });
    }

    // 5. Bundle Step Toggles
    document.querySelectorAll('.btn-bundle-select').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const step = e.currentTarget.dataset.step;
        const card = e.currentTarget.closest('.bundle-card');
        if (!step || !card) return;

        bundleConfig.stepsActive[step] = !bundleConfig.stepsActive[step];
        if (bundleConfig.stepsActive[step]) {
          card.classList.add('selected');
          e.currentTarget.textContent = 'Selected in Bundle';
        } else {
          card.classList.remove('selected');
          e.currentTarget.textContent = '+ Add to Bundle';
        }
        updateBundleSummaryUI();
      });
    });

    // 6. Add Full Bundle to Cart
    const btnAddBundle = document.getElementById('btn-add-bundle');
    if (btnAddBundle) {
      btnAddBundle.addEventListener('click', () => {
        let addedCount = 0;

        if (bundleConfig.stepsActive.chair) {
          const chair = BRANCH_PRODUCTS[bundleConfig.chairHandle];
          store.addItem({
            id: chair.id,
            name: chair.name,
            price: chair.price,
            image: chair.swatches[0].image,
            isBundleItem: true
          }, 1, chair.swatches[0].name);
          addedCount++;
        }

        if (bundleConfig.stepsActive.desk) {
          const desk = BRANCH_PRODUCTS['duo-standing-desk'];
          store.addItem({
            id: desk.id,
            name: desk.name,
            price: desk.price,
            image: desk.swatches[0].image,
            isBundleItem: true
          }, 1, 'Charcoal');
          addedCount++;
        }

        if (bundleConfig.stepsActive.arm) {
          const arm = BRANCH_PRODUCTS['monitor-arm'];
          store.addItem({
            id: arm.id,
            name: arm.name,
            price: arm.price,
            image: arm.swatches[0].image,
            isBundleItem: true
          }, 1, 'Matte White');
          addedCount++;
        }

        if (addedCount > 0) {
          updateCartDrawerUI();
          openCartDrawer();
          showToast(`Added ${addedCount} workspace items to cart with bundle discount.`);
        } else {
          showToast('Please select at least one item for your bundle.');
        }
      });
    }

    // 7. In-Drawer Upsell Quick Add
    const btnAddUpsell = document.getElementById('btn-add-upsell');
    if (btnAddUpsell) {
      btnAddUpsell.addEventListener('click', () => {
        const arm = BRANCH_PRODUCTS['monitor-arm'];
        store.addItem({
          id: arm.id,
          name: arm.name,
          price: arm.price,
          image: arm.swatches[0].image
        }, 1, 'Matte White');
        updateCartDrawerUI();
        showToast('Added Ergonomic Monitor Arm to cart.');
      });
    }

    // 8. Cart Drawer Open / Close Triggers
    const cartBtn = document.getElementById('cart-btn');
    const cartCloseBtn = document.getElementById('cart-close-btn');
    const drawerOverlay = document.getElementById('drawer-overlay');

    if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeCartDrawer);

    // 9. Express Checkout Triggers (Shop Pay, Apple Pay, Primary Checkout)
    const checkoutTriggers = ['btn-shoppay', 'btn-applepay', 'cart-checkout-btn'];
    checkoutTriggers.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', () => {
          const items = store.getItems();
          if (!items || items.length === 0) {
            showToast('Your cart is empty. Please select furniture first.');
            return;
          }
          const totals = store.calculateTotals();
          closeCartDrawer();
          openCheckoutModal(totals.total);
          store.clear();
          updateCartDrawerUI();
        });
      }
    });

    // 10. Checkout Modal Close Triggers
    const checkoutCloseBtn = document.getElementById('checkout-close-btn');
    const finishOrderBtn = document.getElementById('btn-finish-order');
    if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
    if (finishOrderBtn) finishOrderBtn.addEventListener('click', closeCheckoutModal);

    // 11. FAQ Accordion Toggle
    document.querySelectorAll('.faq-question-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const item = e.currentTarget.closest('.faq-item');
        if (!item) return;

        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          const b = i.querySelector('.faq-question-btn');
          if (b) b.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('open');
          e.currentTarget.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // 12. Quiz Button
    const quizBtn = document.getElementById('quiz-btn');
    if (quizBtn) {
      quizBtn.addEventListener('click', () => {
        const bestsellers = document.getElementById('bestsellers');
        if (bestsellers) {
          bestsellers.scrollIntoView({ behavior: 'smooth' });
          showToast('Browse our chairs below to match your posture needs.');
        }
      });
    }

    // 13. Top Utility Home/Business Tabs
    const tabHome = document.getElementById('tab-home');
    const tabBusiness = document.getElementById('tab-business');
    if (tabHome && tabBusiness) {
      tabHome.addEventListener('click', () => {
        tabHome.classList.add('active');
        tabBusiness.classList.remove('active');
      });
      tabBusiness.addEventListener('click', () => {
        tabBusiness.classList.add('active');
        tabHome.classList.remove('active');
        const enterprise = document.getElementById('enterprise-teams');
        if (enterprise) enterprise.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // 14. Floating Support Widget
    const supportWidget = document.getElementById('support-widget');
    if (supportWidget) {
      supportWidget.addEventListener('click', () => {
        showToast('💬 Manila Concierge: Live chat available Mon-Sat, 9AM-6PM. Email: concierge@kura.ph | Tel: (02) 8876-5432');
      });
    }

    // 15. Top Announcement Carousel Arrows
    const announcements = [
      '<a href="#bestsellers">Ergonomic essentials</a> to power your workday, and free nationwide delivery on orders over ₱5,000 PHP.',
      '<a href="#bestsellers">30-Day Risk-Free In-Home Trial</a>: Experience calibrated posture comfort across Luzon, Visayas, and Mindanao.',
      '<a href="#bundle-builder">Workspace Bundles</a>: Save an automatic 15% when bundling chairs and desks together.'
    ];
    let announcementIdx = 0;
    const annText = document.querySelector('.announcement-text');
    document.querySelectorAll('.carousel-arrow').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const isNext = e.currentTarget.textContent.includes('›');
        if (isNext) {
          announcementIdx = (announcementIdx + 1) % announcements.length;
        } else {
          announcementIdx = (announcementIdx - 1 + announcements.length) % announcements.length;
        }
        if (annText) annText.innerHTML = announcements[announcementIdx];
      });
    });

    // 16. Category Cards Filter Linking
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const titleEl = card.querySelector('.category-card-title');
        const titleText = titleEl ? titleEl.textContent.trim().toLowerCase() : '';
        if (titleText.includes('chair')) {
          const chairPill = document.querySelector('.filter-pill[data-category="chairs"]');
          if (chairPill) chairPill.click();
        } else if (titleText.includes('desk')) {
          const deskPill = document.querySelector('.filter-pill[data-category="desks"]');
          if (deskPill) deskPill.click();
        } else if (titleText.includes('accessor')) {
          const accPill = document.querySelector('.filter-pill[data-category="accessories"]');
          if (accPill) accPill.click();
        }
      });
    });

    // 17. Business Quote Button
    const quoteBtn = document.getElementById('btn-business-quote');
    if (quoteBtn) {
      quoteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('🏢 B2B Trade Desk: Volume inquiry received. An enterprise consultant will contact your team within 2 hours.');
      });
    }

    // 18. Account Button
    const accountBtn = document.getElementById('btn-header-account');
    if (accountBtn) {
      accountBtn.addEventListener('click', () => {
        showToast('👤 Philippine Customer Portal: Registered retail & trade account login active.');
      });
    }

    // 19. Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('🎉 Maraming salamat! ₱1,500 voucher code WELCOME-PH dispatched to your email.');
        newsletterForm.reset();
      });
    }

    // 20. Escape key closes drawers and modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
        closeCheckoutModal();
      }
    });
  };

  // --- Initialize App ---
  const init = () => {
    updateCartDrawerUI();
    updateBundleSummaryUI();
    bindEvents();
  };

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  return {
    BRANCH_PRODUCTS,
    calculateWorkspaceBundleTotals,
    updateCartDrawerUI,
    updateBundleSummaryUI,
    openCartDrawer,
    closeCartDrawer,
    openCheckoutModal,
    closeCheckoutModal
  };
});
