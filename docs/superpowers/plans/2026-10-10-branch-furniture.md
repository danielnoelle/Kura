# Branch Furniture Flagship Storefront Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a pixel-precise, high-converting recreation of Branch Furniture (`branchfurniture.ca`), featuring real Branch ergonomic products, interactive color swatch image switching, a visual ergonomics hotspot explorer, a 3-step workspace bundle customizer with an automatic 15% discount, and a reactive slide-out cart drawer with express checkout.

**Architecture:** Semantic HTML5 layout (`index.html`), Branch design system stylesheet (`css/styles.css`), reactive cart store (`js/cart-store.js`), and interactive client controllers (`js/app.js`). Zero external build steps, running natively in any browser.

**Tech Stack:** HTML5, Modern CSS3 (Flexbox, Grid, Custom Properties), Vanilla ES6+ JavaScript, Node.js assert test runner.

**Spec:** `docs/superpowers/specs/2026-10-10-branch-furniture-design.md`

## Global Constraints

- Replicates the exact layout, colors, and typography of Branch Furniture (`branchfurniture.ca`).
- Canvas: Oatmeal Cream `#FBF9F5` / Pure White `#FFFFFF`, Dark Slate `#1A1A1A`, Forest Olive `#2C3E35`, Terracotta `#C0583A`.
- Real Branch product lines: Ergonomic Chair ($369), Verve Chair ($599), Daily Chair ($259), Duo Standing Desk ($549), Ergonomic Chair Pro ($499), Saddle Chair ($319), Monitor Arm ($129).
- Free Shipping threshold fixed at `$150.00 CAD`; standard delivery fee is `$25.00 CAD` below threshold.
- Workspace bundle discount: automatic 15% discount applied when 2 or more suite items are added.
- Interactive color swatches on product cards: clicking a swatch updates the product card image preview.
- 100% green automated test suite.

## Review Focus

1. **Color Swatch Image Switching:** Clicking swatches on any card must smoothly update the card's active image without layout flicker.
2. **Bundle Discount Calculation Precision:** 15% bundle discount on multi-item workspace suites must compute accurately to the cent.
3. **Cart Drawer State & Free Shipping Meter:** Adding items must open the slide-out drawer, update the $150 free delivery progress bar, and prevent document background scrolling.
4. **Empty Cart Checkout Guard:** Attempting to proceed through express checkout with 0 items must be blocked with an informative message.
5. **Responsive Collapse:** Mobile viewports (under 768px) must collapse navigation cleanly, preserve touch targets ($\ge 44$px), and stack cards fluidly.

---

### Task 1: Branch Product Catalog & Interactive Swatch Engine (TDD)

**Files:**
- Modify: `js/cart-store.js`
- Modify: `js/app.js`
- Create: `tests/branch-catalog.test.js`

**Interfaces:**
- Produces: `BRANCH_PRODUCTS` database in `js/app.js` and `CartStore` variant support:
  - Each product has `id`, `name`, `price`, `rating`, `reviewCount`, `tag`, `features`, and `swatches: [{ name, colorHex, image }]`.
  - `CartStore.addItem(product, qty, selectedColor)`: records item and selected color variant.

- [ ] **Step 1: Write failing test**
Create `tests/branch-catalog.test.js` asserting product data structure, swatch options, and cart variant tracking.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/branch-catalog.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement `BRANCH_PRODUCTS` in `js/app.js` and update `CartStore`**
Add full catalog with swatch variants and direct Branch CDN URLs.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/branch-catalog.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add js/app.js js/cart-store.js tests/branch-catalog.test.js
git commit -m "feat(catalog): configure Branch ergonomic products and color swatch variants"
```

---

### Task 2: Branch Design System & Responsive Stylesheet (CSS)

**Files:**
- Modify: `css/styles.css`
- Create: `tests/branch-css.test.js`

**Interfaces:**
- Produces: Complete Branch Furniture stylesheet:
  - Utility top bar (`.top-utility-bar`, tabs, CAD selector)
  - Sticky glassmorphic navbar (`.branch-navbar`, logo `BRANCH`, quiz button, cart trigger)
  - Hero section (`.hero-branch`, split layout, review badge, CTAs)
  - Collection grid (`.branch-collection-grid`, `.product-card`, `.swatch-group`, `.swatch-btn`)
  - Ergonomics Hotspot Visualizer (`.ergonomics-section`, `.hotspot-card`)
  - Workspace Bundle Builder (`.bundle-builder-section`, `.bundle-card`, `.summary-box`)
  - B2B Enterprise section (`.enterprise-section`, partner logos)
  - Testimonials & Reviews (`.reviews-section`, star ratings, verified buyer badges)
  - Collapsible FAQ accordion (`.faq-item`, `.faq-answer`)
  - Slide-out Cart Drawer (`.branch-cart-drawer`, `.drawer-overlay`, free shipping meter, upsell items)
  - Responsive media queries (`@media (max-width: 1024px)` and `@media (max-width: 768px)`).

- [ ] **Step 1: Write failing CSS test**
Create `tests/branch-css.test.js` asserting presence of Branch styling classes and responsive rules.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/branch-css.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement `css/styles.css`**
Write clean Scandinavian-modern styles matching Branch Furniture's exact visual design.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/branch-css.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add css/styles.css tests/branch-css.test.js
git commit -m "feat(css): implement Branch Furniture design system, swatches, and cart drawer"
```

---

### Task 3: Branch Semantic Architecture & Product Grid (HTML)

**Files:**
- Modify: `index.html`
- Create: `tests/branch-html.test.js`

**Interfaces:**
- Consumes: `css/styles.css`, `js/cart-store.js`, `js/app.js`.
- Produces: Complete semantic HTML5 layout for Branch storefront:
  - `#top-utility-bar` (For Home / For Business switch)
  - `#branch-navbar` (Logo, categories, quiz CTA, cart trigger)
  - `#hero-branch` (Headline, subhead, CTAs, Wirecutter proof badge, hero image)
  - `#press-strip` (Press logos)
  - `#bestsellers` (Product grid with 7 Branch products, color swatch buttons, quick add)
  - `#ergonomics-difference` (5-point ergonomics feature visualizer)
  - `#bundle-builder` (3-step workspace setup with 15% discount)
  - `#enterprise-teams` (B2B corporate trust section)
  - `#reviews` (Verified customer reviews)
  - `#guarantees` & `#faq` (30-day trial, 10-year warranty, collapsible accordion)
  - `#footer` (Multi-column footer, newsletter)
  - `#cart-drawer` & `#drawer-overlay` (Slide-out drawer with free delivery progress, upsells, express checkout)
  - `#checkout-modal` (Express order confirmation receipt)

- [ ] **Step 1: Write failing HTML test**
Create `tests/branch-html.test.js` asserting all section IDs, product cards, and swatch attributes.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/branch-html.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement updated `index.html`**
Reconstruct the entire HTML document matching the Branch Furniture layout.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/branch-html.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add index.html tests/branch-html.test.js
git commit -m "feat(html): build complete Branch Furniture semantic storefront"
```

---

### Task 4: Interactive Controllers, Swatch Switching & Cart Drawer Engine (JS)

**Files:**
- Modify: `js/app.js`
- Create: `tests/branch-app.test.js`

**Interfaces:**
- Consumes: `BRANCH_PRODUCTS`, `CartStore`.
- Produces:
  - Live color swatch switching (updates card `img.src` instantly on click).
  - Category filtering (All, Chairs, Desks, Bundles).
  - Workspace Bundle Customizer (Step 1 Chair, Step 2 Desk, Step 3 Accessory) with 15% discount.
  - Cart Drawer open, close, line item steppers (+/-), upsell addition, Tomobako/accessory addition.
  - Free delivery progress bar update ($150 target).
  - Empty cart checkout validation guard.
  - Express checkout submission and order receipt modal.
  - FAQ accordion toggle.

- [ ] **Step 1: Write failing controller test**
Create `tests/branch-app.test.js` asserting controller methods and bundle discount calculations.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/branch-app.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement controller logic in `js/app.js`**
Complete all event listeners and DOM binding.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/branch-app.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add js/app.js tests/branch-app.test.js
git commit -m "feat(js): implement swatch switcher, bundle customizer, and cart drawer controllers"
```

---

### Task 5: End-to-End Smoke Test Suite & Regression Verification

**Files:**
- Modify: `tests/branch-smoke.test.js`
- Modify: `package.json`

**Interfaces:**
- Consumes: All project files.
- Produces: Comprehensive automated regression test asserting full user journey.

- [ ] **Step 1: Write `tests/branch-smoke.test.js`**
Exercise the full Branch e-commerce flow: swatch click, quick add, free shipping unlocked, bundle discount calculation, checkout guard.

- [ ] **Step 2: Update `package.json` with `npm test` script**
Configure clean test runner.

- [ ] **Step 3: Run full test suite**
Run: `npm test`
Expected: PASS (all suites pass with 0 errors).

- [ ] **Step 4: Commit**
```bash
git add tests/branch-smoke.test.js package.json
git commit -m "test: verify end-to-end Branch Furniture storefront experience"
```
