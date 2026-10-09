const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('Running Task 2 tests: Branch Design System CSS Architecture...');

const cssPath = path.join(__dirname, '../css/styles.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

const requiredSelectors = [
  '.top-utility-bar',
  '.branch-navbar',
  '.branch-nav-logo',
  '.hero-branch',
  '.branch-collection-grid',
  '.product-card',
  '.swatch-group',
  '.swatch-btn',
  '.ergonomics-section',
  '.hotspot-card',
  '.bundle-builder-section',
  '.bundle-card',
  '.enterprise-section',
  '.branch-cart-drawer',
  '.drawer-overlay',
  '.shipping-progress-track'
];

for (const selector of requiredSelectors) {
  assert(
    cssContent.includes(selector),
    `CSS must define Branch selector: ${selector}`
  );
}

// Verify responsive media queries exist
assert(
  cssContent.includes('@media (max-width: 1024px)') || cssContent.includes('@media(max-width: 1024px)'),
  'CSS must define responsive breakpoint for 1024px'
);
assert(
  cssContent.includes('@media (max-width: 768px)') || cssContent.includes('@media(max-width: 768px)'),
  'CSS must define responsive breakpoint for 768px'
);

console.log('Task 2 Branch CSS assertions passed.');
