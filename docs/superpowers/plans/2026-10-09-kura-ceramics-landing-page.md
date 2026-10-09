# KURA Ceramics Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, high-converting e-commerce landing page for KURA (蔵), featuring limited-batch scarcity mechanics, an interactive glaze inspector, ceremonial bundle builder, reactive cart drawer with a 10-minute hold reservation timer, and an express checkout flow with dynamic certificate generation.

**Architecture:** Modular vanilla ES6+ client-side architecture with a dedicated reactive cart store (`js/cart-store.js`), UI and animation controllers (`js/app.js`), responsive design-system-driven stylesheet (`css/styles.css`), and semantic HTML5 (`index.html`). Zero external build steps, running natively in any browser.

**Tech Stack:** Semantic HTML5, Modern CSS3 (Grid, Flexbox, Custom Properties, Keyframe Animations), Vanilla ES6+ JavaScript, Node.js assert test runner.

**Spec:** `docs/superpowers/specs/2026-10-09-kura-ceramics-landing-page-design.md`

## Global Constraints

- Primary background: Void Obsidian (`#121110`), primary text: Washi Parchment (`#F5EFE6`), accent: Wood-Ash Terracotta (`#C86D48`).
- Editorial serif headings (`Cinzel` / `Playfair Display`), technical monospaced metadata (`Space Grotesk` / `DM Mono`), UI sans-serif (`Plus Jakarta Sans`).
- Free shipping threshold fixed at `$150.00`; standard shipping is `$18.00` if under threshold.
- Ceremonial bundle discount: 15% discount applied automatically when 2 or more suite items are selected.
- Cart reservation timer duration: 10 minutes (600 seconds) with countdown and expired state.
- LocalStorage key: `kura_cart_v1`.
- Touch target minimum: 44px; W3C accessibility compliance; zero external build dependencies.

## Review Focus

1. **Sub-threshold vs Free Shipping Boundary:** Cart totals at exactly $149.99 vs $150.00 must compute shipping correctly ($18 vs $0).
2. **Bundle Calculation Precision:** Applying 15% discount on multiple items must round currency cents deterministically without floating-point artifacts.
3. **Cart Reservation Expiration:** When reservation timer ticks to zero, clear or alert user without corrupting local storage state.
4. **Item Quantity Mutations:** Decrementing an item with quantity 1 must remove it cleanly; incrementing respects remaining batch inventory limits.
5. **Modal Accessibility & Focus Traps:** Closing modals via ESC key or backdrop click must restore scrollability to the background document.

---

### Task 1: Cart & Pricing Engine (TDD)

**Files:**
- Create: `tests/cart.test.js`
- Create: `js/cart-store.js`

**Interfaces:**
- Produces: `CartStore` object with methods:
  - `addItem(item, qty)`: returns updated state
  - `removeItem(itemId)`: returns updated state
  - `updateQty(itemId, newQty)`: returns updated state
  - `toggleTomobako(enabled)`: returns updated state (+$18 fee)
  - `calculateTotals()`: returns `{ subtotal, discount, shipping, tomobakoFee, total, isFreeShipping, amountToFreeShipping }`
  - `getRemainingReservationSeconds()`: returns remaining seconds
  - `resetReservationTimer()`: resets hold to 600s

- [ ] **Step 1: Write the failing test**

Create `tests/cart.test.js` with Node assert tests covering:
- Adding single items and calculating subtotal.
- Free shipping boundary (< $150 gets $18 shipping; >= $150 gets $0).
- 15% bundle discount calculation on multi-item suites.
- Tomobako wood-box gift wrapping addition ($18).
- Quantity modification and zero-quantity removal.
- 10-minute reservation countdown calculation.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/cart.test.js`
Expected: FAIL with `Cannot find module '../js/cart-store.js'`

- [ ] **Step 3: Implement `CartStore` in `js/cart-store.js`**

Implement pure state store with localStorage persistence, accurate cents-based math (`Math.round`), 15% bundle discount rules, and reservation timestamps. Support both Node.js (`module.exports`) and browser (`window.CartStore`) environments.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/cart.test.js`
Expected: PASS (all assertions succeed).

- [ ] **Step 5: Commit**

```bash
git add tests/cart.test.js js/cart-store.js
git commit -m "feat(cart): implement reactive cart store with pricing and discount engine"
```

---

### Task 2: Design System Tokens & Base CSS Architecture

**Files:**
- Create: `css/styles.css`
- Test: Visual verification & CSS syntax validation via test script

**Interfaces:**
- Consumes: Palette and typography variables defined in spec.
- Produces: CSS custom properties (`--bg-void`, `--text-parchment`, `--accent-terracotta`, `--accent-celadon`, `--surface-card`), reset rules, typography utility classes, button styles, grid layouts, drawer and modal animations.

- [ ] **Step 1: Write CSS syntax & token validation test**

Create `tests/css-tokens.test.js` asserting that `css/styles.css` defines all required custom properties (`--bg-void`, `--text-parchment`, `--accent-terracotta`, `--accent-celadon`, etc.) and key animation classes.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/css-tokens.test.js`
Expected: FAIL (file missing).

- [ ] **Step 3: Implement `css/styles.css`**

Implement comprehensive, high-fidelity styles:
- Google Fonts import (`Cinzel`, `Playfair Display`, `Space Grotesk`, `Plus Jakarta Sans`).
- Color variables, fluid font scales, and spacing units.
- Scarcity banner with pulsing live dot indicator.
- Glassmorphic sticky header with backdrop-filter.
- Hero grid with radial ember glow backdrop.
- Product cards with micro-zoom, remaining stock badges, and quick add buttons.
- Glaze inspector comparison tabs with tactile surface preview cards.
- Bundle builder 3-step configurator cards with active select states.
- 72-hour Anagama craft comparison table/cards.
- Slide-out Cart Drawer with sliding transform and backdrop overlay.
- Express Checkout Modal and Certificate of Authenticity styling.
- Responsive media queries (`@media (max-width: 1024px)` and `@media (max-width: 768px)`).

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/css-tokens.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add tests/css-tokens.test.js css/styles.css
git commit -m "feat(css): implement design tokens, layout grids, and interactive animations"
```

---

### Task 3: Semantic Markup & Complete Page Architecture

**Files:**
- Create: `index.html`
- Test: `tests/html-structure.test.js`

**Interfaces:**
- Consumes: `css/styles.css`, `js/cart-store.js`, `js/app.js`.
- Produces: Complete semantic DOM elements:
  - Header & Scarcity Ticker (`#scarcity-ticker`, `#main-nav`)
  - Hero Section (`#hero`, `#hero-cta`, `#hero-provenance`)
  - Batch 07 Catalog (`#catalog`, category filters, 6 vessel cards)
  - Glaze & Terroir Inspector (`#glaze-inspector`, 3 interactive tabs)
  - Ceremonial Bundle Builder (`#bundle-builder`, 3-step suite selector)
  - 72-Hour Anagama Craft Comparison (`#craft-comparison`)
  - Master Potter Provenance & Firing Log (`#provenance`)
  - Collector Testimonials & Guarantees (`#guarantees`, `#reviews`)
  - Collector FAQ Accordion (`#faq`)
  - Newsletter & Footer (`#newsletter`, `#footer`)
  - Cart Drawer (`#cart-drawer`, items container, threshold bar, checkout trigger)
  - Express Checkout Modal (`#checkout-modal`)
  - Certificate of Authenticity Modal (`#certificate-modal`)
  - Toast Notification Container (`#toast-container`)

- [ ] **Step 1: Write HTML structure test**

Create `tests/html-structure.test.js` verifying that `index.html` contains all key semantic section IDs, 6 product card articles, accessible ARIA tags, and script/stylesheet references.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/html-structure.test.js`
Expected: FAIL (file missing).

- [ ] **Step 3: Implement `index.html`**

Draft the complete, rich HTML5 document with high visual craftsmanship, handcrafted SVGs (botanical kiln stamps, ceramic vessels, tea whisks, guarantee badges), accessible semantic markup, schema.org Product metadata, and responsive viewport settings.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/html-structure.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add tests/html-structure.test.js index.html
git commit -m "feat(html): build complete semantic page architecture and interactive containers"
```

---

### Task 4: UI Controllers, Glaze Inspector & Bundle Builder Logic

**Files:**
- Create: `js/app.js`
- Test: `tests/app-logic.test.js`

**Interfaces:**
- Consumes: `CartStore` from `js/cart-store.js`.
- Produces: `App` controller managing:
  - Scarcity batch countdown timer (ticking every 1s).
  - Catalog category filtering (All, Chawan, Katakuchi, Cups, Vases).
  - Vessel Quick Add and Inspect Vessel modal previewer.
  - Glaze & Terroir Inspector tab switching (Pine Ash, Shino, Yohēn).
  - Ceremonial Bundle Builder selection state & real-time 15% discount computation.
  - Cart Drawer toggle (open, close, escape key, overlay click).
  - Free shipping progress bar DOM update.
  - Item increment, decrement, and removal triggers.
  - Tomobako wood-box toggle.
  - Express Checkout submission simulation with tactile loading state.
  - Dynamic Certificate of Authenticity generator (assigns unique serial e.g., `KURA-B07-V14`).
  - Interactive FAQ accordion open/close logic.
  - Toast notification queue.

- [ ] **Step 1: Write application logic test**

Create `tests/app-logic.test.js` testing:
- Bundle calculation logic matching spec discount rules.
- Inventory tracker bounds (cannot exceed available batch quantity).
- Certificate serial generation formatting (`KURA-B07-VXX`).
- Glaze inspector data integrity for all 3 glaze modes.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/app-logic.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement `js/app.js`**

Implement comprehensive, clean vanilla JavaScript handling all interactive DOM flows, event listeners, touch accessibility, dynamic rendering, and micro-feedback sounds/toasts.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/app-logic.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add tests/app-logic.test.js js/app.js
git commit -m "feat(js): implement UI controllers, glaze inspector, bundle builder, and checkout modals"
```

---

### Task 5: End-to-End Smoke Test Suite & Responsive Visual Polish

**Files:**
- Create: `tests/e2e-smoke.test.js`
- Modify: `css/styles.css` / `index.html` (for any visual refinements discovered)

**Interfaces:**
- Consumes: All project files.
- Produces: Automated comprehensive validation script running in Node.js, verifying:
  - Cart addition and drawer rendering.
  - Shipping threshold changes from sub-threshold ($140) to free shipping ($195).
  - 15% discount mathematical accuracy in bundle builder.
  - Zero broken links, missing image references, or unclosed HTML tags.
  - Responsive styles and breakpoint coverage.

- [ ] **Step 1: Write E2E smoke test script**

Create `tests/e2e-smoke.test.js` using Node.js to read and parse `index.html`, `css/styles.css`, `js/cart-store.js`, and `js/app.js` to simulate full user flows and verify end-to-end data integrity.

- [ ] **Step 2: Run test suite**

Run: `node tests/e2e-smoke.test.js`
Expected: PASS with 100% test coverage of critical e-commerce flows.

- [ ] **Step 3: Run all unit and integration tests together**

Run:
```bash
node tests/cart.test.js
node tests/css-tokens.test.js
node tests/html-structure.test.js
node tests/app-logic.test.js
node tests/e2e-smoke.test.js
```
Expected: All suites exit 0 with clean output.

- [ ] **Step 4: Commit**

```bash
git add tests/e2e-smoke.test.js css/styles.css index.html js/app.js
git commit -m "test: add comprehensive end-to-end smoke tests and finalize visual polish"
```
