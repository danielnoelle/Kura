const assert = require('assert');

console.log('Running Task 4 tests: Branch Application Controllers & Logic...');

const app = require('../js/app.js');

// 1. Verify calculateWorkspaceBundleTotals exists
assert(typeof app.calculateWorkspaceBundleTotals === 'function', 'app must export calculateWorkspaceBundleTotals');

// 2. Test 3-piece bundle calculation with Ergonomic Chair
const bundle1 = app.calculateWorkspaceBundleTotals({
  chair: 'ergonomic-chair',
  desk: 'duo-standing-desk',
  arm: 'monitor-arm'
});

assert.strictEqual(bundle1.originalTotal, 42970);
assert.strictEqual(bundle1.discount, 6445.50);
assert.strictEqual(bundle1.finalTotal, 36524.50);
assert.strictEqual(bundle1.itemCount, 3);

// 3. Test 3-piece bundle calculation with Verve Chair
const bundle2 = app.calculateWorkspaceBundleTotals({
  chair: 'verve-chair',
  desk: 'duo-standing-desk',
  arm: 'monitor-arm'
});

assert.strictEqual(bundle2.originalTotal, 52970);
assert.strictEqual(bundle2.discount, 7945.50);
assert.strictEqual(bundle2.finalTotal, 45024.50);

// 4. Test 1-piece bundle (no discount for < 2 items)
const bundleSingle = app.calculateWorkspaceBundleTotals({
  chair: 'ergonomic-chair'
});

assert.strictEqual(bundleSingle.originalTotal, 14990);
assert.strictEqual(bundleSingle.discount, 0);
assert.strictEqual(bundleSingle.finalTotal, 14990);
assert.strictEqual(bundleSingle.itemCount, 1);

console.log('Task 4 Branch app logic assertions passed.');
