const assert = require('assert');

console.log('Running Task 1 tests: Branch Product Catalog & Swatch Variants...');

const app = require('../js/app.js');
const CartStore = require('../js/cart-store.js');

// 1. Verify BRANCH_PRODUCTS exists
assert(app.BRANCH_PRODUCTS, 'app must export BRANCH_PRODUCTS');

const expectedHandles = [
  'ergonomic-chair',
  'verve-chair',
  'daily-chair',
  'duo-standing-desk',
  'ergonomic-chair-pro',
  'saddle-chair',
  'monitor-arm'
];

for (const handle of expectedHandles) {
  const p = app.BRANCH_PRODUCTS[handle];
  assert(p, `Product ${handle} must exist in BRANCH_PRODUCTS`);
  assert(typeof p.name === 'string' && p.name.length > 0, `Product ${handle} must have a name`);
  assert(typeof p.price === 'number' && p.price > 0, `Product ${handle} must have numeric price`);
  assert(Array.isArray(p.swatches) && p.swatches.length > 0, `Product ${handle} must have swatches array`);

  // Check swatches
  for (const sw of p.swatches) {
    assert(sw.name, `Swatch must have name in ${handle}`);
    assert(sw.colorHex, `Swatch must have colorHex in ${handle}`);
    assert(sw.image, `Swatch must have image in ${handle}`);
    assert(sw.image.startsWith('https://') || sw.image.startsWith('//'), `Swatch image must be valid URL: ${sw.image}`);
  }
}

// 2. Verify CartStore adds item with selected color variant
CartStore.clear();
CartStore.addItem(app.BRANCH_PRODUCTS['ergonomic-chair'], 1, 'Black');
const items = CartStore.getItems();
assert.strictEqual(items.length, 1);
assert.strictEqual(items[0].selectedColor, 'Black');
assert.strictEqual(items[0].price, 14990);

// Threshold test (₱14,990 >= ₱5,000 -> Free delivery)
const totals = CartStore.calculateTotals();
assert.strictEqual(totals.isFreeShipping, true);
assert.strictEqual(totals.shipping, 0);

console.log('Task 1 Branch catalog assertions passed.');
