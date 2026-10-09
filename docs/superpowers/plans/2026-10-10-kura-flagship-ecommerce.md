# KURA Flagship E-Commerce Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premier luxury e-commerce landing page for KURA (蔵) using a proven, intuitive e-commerce layout featuring real studio photography, Web Audio ambient kiln sound design, an interactive glaze inspector, a 3-step ceremonial suite configurator with an automatic 15% discount, and a reactive slide-out cart drawer with a 10-minute hold timer and dynamic Numbered Certificate of Provenance generator.

**Architecture:** Semantic HTML5 e-commerce layout (`index.html`), luxury design-system stylesheet (`css/styles.css`), native Web Audio synthesizer (`js/audio-synth.js`), reactive cart and inventory bounds store (`js/cart-store.js`), and interactive UI controllers (`js/app.js`). Zero external build dependencies.

**Tech Stack:** HTML5, CSS3 Grid/Flexbox/Keyframes, Vanilla ES6+ JavaScript, Web Audio API, Node.js assert test runner.

**Spec:** `docs/superpowers/specs/2026-10-10-kura-flagship-ecommerce-design.md`

## Global Constraints

- Proven, familiar e-commerce page hierarchy (top scarcity banner, sticky nav, hero, collection grid, interactive inspector, bundle builder, craft difference, provenance, reviews, FAQ, footer, slide-out cart drawer).
- Real, verified high-resolution studio photography from Unsplash CDN.
- Web Audio API pine charcoal ambient sound toggle with zero external media files.
- Free courier shipping threshold fixed at `$150.00`; standard courier fee is `$18.00` below threshold.
- Ceremonial suite package discount: automatic 15% discount when 2 or more suite items are added.
- Cart hold reservation duration: 10 minutes (600 seconds) with live countdown and renew action.
- LocalStorage key: `kura_cart_v1`.
- 100% green automated test suite.

## Review Focus

1. **Real Image Load & Aspect Ratio Stability:** Images must render cleanly without layout shift or broken link placeholders.
2. **Catalog & Suite SKU Inventory Bounds:** Claiming pieces from both the catalog and the suite customizer must draw from the same edition stock pool (e.g. max 3 for Vessel 01).
3. **Empty Cart Checkout Guard:** Submitting the acquisition desk with 0 items must be blocked with an informative notice.
4. **Slide-Out Cart Drawer Accessibility:** Opening/closing the cart drawer must manage backdrop overlay and restore document scrolling.
5. **Deterministic Discount Currency Math:** 15% discount on the ceremonial suite must calculate accurately to the cent.

---

### Task 1: Real Product Catalog & Media Asset Verification (TDD)

**Files:**
- Modify: `js/app.js`
- Create: `tests/real-products.test.js`

**Interfaces:**
- Produces: `PRODUCTS` and `SUITE_ITEMS` with verified Unsplash image URLs, accurate pricing, and edition stock caps.

- [ ] **Step 1: Write failing test**
Create `tests/real-products.test.js` verifying that all 6 products in `PRODUCTS` define valid image URLs, numeric prices, and stock numbers.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/real-products.test.js`
Expected: FAIL.

- [ ] **Step 3: Update `PRODUCTS` in `js/app.js` with verified Unsplash URLs**
Incorporate real high-resolution imagery for all 6 catalog pieces and suite items.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/real-products.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add js/app.js tests/real-products.test.js
git commit -m "feat(catalog): configure real photography assets and inventory metadata"
```

---

### Task 2: Flagship E-Commerce Stylesheet & Layout System (CSS)

**Files:**
- Modify: `css/styles.css`
- Create: `tests/flagship-css.test.js`

**Interfaces:**
- Produces: Complete e-commerce stylesheet:
  - Top scarcity announcement strip with live pulsating indicator.
  - Glassmorphic navigation header with audio toggle and cart button.
  - Hero showcase with editorial typography, photography framing, metrics, and primary conversion triggers.
  - Collection card grid with real imagery, image zoom, remaining stock badges, specs table, and quick acquire.
  - Interactive Glaze Inspector layout with macro image cards.
  - Ceremonial Suite 3-step configurator cards with live selection states.
  - 72-Hour craft comparison matrix, provenance profile, reviews, and accordion FAQ.
  - Slide-out reactive Cart Drawer with free shipping meter, hold timer, steppers, and express checkout.
  - Certificate of Provenance styling.
  - Responsive media queries (`@media (max-width: 1024px)` and `@media (max-width: 768px)`).

- [ ] **Step 1: Write failing CSS test**
Create `tests/flagship-css.test.js` asserting presence of flagship e-commerce selectors.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/flagship-css.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement `css/styles.css`**
Update stylesheet with premier luxury styling and fluid responsive layout.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/flagship-css.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add css/styles.css tests/flagship-css.test.js
git commit -m "feat(css): implement flagship e-commerce layout, product cards, and cart drawer styles"
```

---

### Task 3: Flagship E-Commerce Semantic Architecture (HTML)

**Files:**
- Modify: `index.html`
- Create: `tests/flagship-html.test.js`

**Interfaces:**
- Consumes: `css/styles.css`, `js/audio-synth.js`, `js/cart-store.js`, `js/app.js`.
- Produces: Semantic HTML5 document containing:
  - Scarcity Ticker (`#scarcity-ticker`)
  - Navigation Header (`#main-nav`, Audio toggle `#btn-audio-toggle`, Cart trigger `#cart-btn`)
  - Hero Section (`#hero`, real photography, metrics, primary CTAs)
  - Collection Grid (`#collection`, 6 product cards with real imagery)
  - Glaze & Terroir Inspector (`#glaze-inspector`, tabs with real macro photography)
  - Ceremonial Ritual Suite Builder (`#ritual-suite`, 3-step customizer)
  - 72-Hour Anagama Craft Difference (`#craft`)
  - Master Potter Provenance & Thermal Log (`#provenance`)
  - Collector Guarantees & Testimonials (`#guarantees`, `#reviews`)
  - Collector FAQ Accordion (`#faq`)
  - Newsletter & Footer (`#newsletter`, `#footer`)
  - Slide-Out Cart Drawer (`#cart-drawer`, `#cart-drawer-overlay`, free shipping meter, items list, Tomobako box toggle, express checkout)
  - Express Checkout & Certificate Modals (`#checkout-modal`, `#certificate-modal`)

- [ ] **Step 1: Write failing HTML test**
Create `tests/flagship-html.test.js` asserting presence of all section IDs and real image elements.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/flagship-html.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement updated `index.html`**
Construct the complete semantic e-commerce markup with real image URLs, ARIA labels, and interactive triggers.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/flagship-html.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add index.html tests/flagship-html.test.js
git commit -m "feat(html): build flagship e-commerce landing page with real studio photography"
```

---

### Task 4: Interactive Controllers, Audio Hooks & Cart Drawer Engine (JS)

**Files:**
- Modify: `js/app.js`
- Create: `tests/flagship-app.test.js`

**Interfaces:**
- Consumes: `CartStore`, `KilnAudio`.
- Produces:
  - Scarcity batch countdown clock ticking in real time.
  - Category filter pills filtering collection cards.
  - Glaze Inspector tab switching with macro images and telemetry.
  - Ceremonial Suite customizer (Chawan 01/05 toggle, whisk, matcha) calculating 15% discount.
  - Audio synthesizer toggle button with animated wave bars.
  - Slide-out Cart Drawer open/close/steppers/Tomobako fee management.
  - Empty cart checkout validation.
  - Numbered Certificate of Provenance generation (`KURA-B07-VXX`).
  - FAQ accordion open/close logic.

- [ ] **Step 1: Write failing controller test**
Create `tests/flagship-app.test.js` asserting controller method contracts.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/flagship-app.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement controller logic in `js/app.js`**
Complete all event listeners and DOM binders.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/flagship-app.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add js/app.js tests/flagship-app.test.js
git commit -m "feat(js): implement flagship e-commerce controllers, cart drawer, and glaze inspector"
```

---

### Task 5: End-to-End Smoke Test Suite & Regression Verification

**Files:**
- Modify: `tests/e2e-smoke.test.js`

**Interfaces:**
- Consumes: All project files.
- Produces: Automated test suite asserting end-to-end user flows, real image existence, shipping boundaries, 15% discount math, and cart reservation timers.

- [ ] **Step 1: Update `tests/e2e-smoke.test.js`**
Ensure smoke test exercises the full e-commerce experience.

- [ ] **Step 2: Run all test suites**
Run:
```bash
node tests/audio-synth.test.js
node tests/cart.test.js
node tests/real-products.test.js
node tests/flagship-css.test.js
node tests/flagship-html.test.js
node tests/flagship-app.test.js
node tests/review-fixes.test.js
node tests/e2e-smoke.test.js
```
Expected: PASS (all suites exit 0).

- [ ] **Step 3: Commit**
```bash
git add tests/e2e-smoke.test.js
git commit -m "test: verify end-to-end flagship e-commerce experience"
```
