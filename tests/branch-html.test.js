const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('Running Task 3 tests: Branch HTML Architecture...');

const htmlPath = path.join(__dirname, '../index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

const requiredElements = [
  '#top-utility-bar',
  '#branch-navbar',
  '#hero-branch',
  '#press-strip',
  '#bestsellers',
  '#ergonomics-difference',
  '#bundle-builder',
  '#enterprise-teams',
  '#reviews',
  '#guarantees',
  '#faq',
  '#cart-drawer',
  '#drawer-overlay',
  '#checkout-modal'
];

for (const selector of requiredElements) {
  const idName = selector.replace('#', '');
  assert(
    htmlContent.includes(`id="${idName}"`),
    `HTML must contain element ${selector}`
  );
}

// Verify product cards exist with data-handle
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
  assert(
    htmlContent.includes(`data-handle="${handle}"`),
    `HTML must include product card with data-handle="${handle}"`
  );
}

// Verify scripts
assert(htmlContent.includes('js/cart-store.js'), 'HTML must include js/cart-store.js');
assert(htmlContent.includes('js/app.js'), 'HTML must include js/app.js');

console.log('Task 3 Branch HTML assertions passed.');
