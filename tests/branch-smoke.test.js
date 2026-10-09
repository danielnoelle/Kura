const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('Running Task 5 tests: Branch Furniture End-to-End Smoke Test Suite...');

const CartStore = require('../js/cart-store.js');
const app = require('../js/app.js');

// 1. Cart store & free shipping threshold (₱5,000.00 PHP)
CartStore.clear();
assert.strictEqual(CartStore.getItems().length, 0);

// Add item below threshold: Monitor Arm (₱4,990 PHP)
CartStore.addItem(app.BRANCH_PRODUCTS['monitor-arm'], 1, 'Matte White');
let totals = CartStore.calculateTotals();
assert.strictEqual(totals.subtotal, 4990);
assert.strictEqual(totals.isFreeShipping, false);
assert.strictEqual(totals.shipping, 350); // ₱350 PHP standard shipping
assert.strictEqual(totals.amountToFreeShipping, 10); // ₱5,000 - ₱4,990 = ₱10
assert.strictEqual(totals.total, 5340);

// Add Ergonomic Chair (₱14,990 PHP) -> subtotal becomes ₱19,980 >= ₱5,000 -> Free shipping
CartStore.addItem(app.BRANCH_PRODUCTS['ergonomic-chair'], 1, 'Black');
totals = CartStore.calculateTotals();
assert.strictEqual(totals.subtotal, 19980);
assert.strictEqual(totals.isFreeShipping, true);
assert.strictEqual(totals.shipping, 0);
assert.strictEqual(totals.amountToFreeShipping, 0);
assert.strictEqual(totals.total, 19980);

// 2. Quantity updates and removal
CartStore.updateQty('ergonomic-chair', 2);
assert.strictEqual(CartStore.getItems().find(i => i.id === 'ergonomic-chair').qty, 2);
CartStore.removeItem('ergonomic-chair');
assert.strictEqual(CartStore.getItems().some(i => i.id === 'ergonomic-chair'), false);

// 3. Workspace Bundle Customizer 15% Discount calculations
const bundleTotals = app.calculateWorkspaceBundleTotals({
  chair: 'ergonomic-chair',
  desk: 'duo-standing-desk',
  arm: 'monitor-arm'
});
assert.strictEqual(bundleTotals.originalTotal, 42970);
assert.strictEqual(bundleTotals.discount, 6445.50);
assert.strictEqual(bundleTotals.finalTotal, 36524.50);

// 4. HTML structure inspection
const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const expectedElements = [
  'top-utility-bar',
  'branch-navbar',
  'hero-branch',
  'press-strip',
  'bestsellers',
  'branch-collection-grid',
  'ergonomics-difference',
  'bundle-builder',
  'enterprise-teams',
  'reviews',
  'guarantees',
  'faq',
  'cart-drawer',
  'drawer-overlay',
  'checkout-modal'
];
for (const elId of expectedElements) {
  assert(html.includes(`id="${elId}"`), `index.html must have id="${elId}"`);
}

// 5. CSS structure inspection
const css = fs.readFileSync(path.join(__dirname, '../css/styles.css'), 'utf8');
assert(css.includes('.top-utility-bar'), 'css must define .top-utility-bar');
assert(css.includes('.branch-navbar'), 'css must define .branch-navbar');
assert(css.includes('.branch-collection-grid'), 'css must define .branch-collection-grid');
assert(css.includes('.swatch-btn'), 'css must define .swatch-btn');
assert(css.includes('@media (max-width: 768px)'), 'css must define mobile breakpoint');

console.log('Task 5 Branch End-to-End Smoke Test Suite passed with 100% success.');
