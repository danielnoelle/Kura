# Design Specification: Branch Furniture (Canada) Flagship Storefront

**Date:** 2026-10-10  
**Target:** Pixel-Precise Recreation of Branch Furniture (`https://www.branchfurniture.ca/`)  
**Design Philosophy:** Clean, Modern Scandinavian-Ergonomic Direct-to-Consumer (DTC) E-Commerce  

---

## 1. Brand Identity & Visual Design System

Branch Furniture is the premier direct-to-consumer office furniture brand engineered with ergonomic specialists in New York and Italy. The visual identity is bright, warm, architectural, and highly functional.

### 1.1 Color Palette
- **Canvas Base:** `#FFFFFF` (Pure White) and `#FBF9F5` (Oatmeal Cream Alabaster).
- **Secondary Containers & Cards:** `#F3EFEA` (Warm Muted Stone) and `#F7F5F0`.
- **Primary Text & Headings:** `#1A1A1A` (Off-Black Charcoal) with `#595753` for subtitles.
- **Action Buttons & Accents:** `#111111` (Deep Black), `#2C3E35` (Branch Forest Olive), and `#C0583A` (Warm Terracotta for discount pills and sale badges).
- **Borders & Dividers:** `1px solid rgba(0, 0, 0, 0.08)`.

### 1.2 Typography
- **Wordmark:** `BRANCH` in bold geometric uppercase sans with `letter-spacing: 0.12em`.
- **Headings:** Modern geometric sans (`Plus Jakarta Sans` / `Inter`) with clean editorial line-heights and generous tracking.
- **Product Metadata & Pricing:** Tabular sans numerals with bold weight.

---

## 2. Page Hierarchy & Functional Modules

### 2.1 Utility Top Bar & Scarcity Announcement
- Left: `For Home` | `For Business` tab switcher.
- Center: `Free Shipping on Orders Over $150 • 30-Day Risk-Free Trial • 10-Year Warranty`.
- Right: Region indicator `🇨🇦 CAD ($)`.

### 2.2 Glassmorphic Navigation Header
- Logo: `BRANCH`.
- Category Navigation: `Chairs`, `Desks`, `Bundles`, `Accessories`, `Branch for Business`, `Reviews`.
- Quick Utilities: Search, `Take Chair Quiz` CTA pill, Account, and Cart trigger button with live count badge e.g. `[ 2 ]`.

### 2.3 Hero Section (Award-Winning Ergonomic Authority)
- Pre-header Kicker: `AWARD-WINNING ERGONOMIC DESIGN`.
- Title: `Office Furniture That Works.`
- Subtitle: `Calibrated support for 8+ hours of daily focus. Designed with ergonomic specialists in NYC and Italy. Direct-to-consumer pricing with fast Canadian delivery.`
- Primary CTAs: `Shop Ergonomic Chairs` and `Build Workspace Bundle (-15%)`.
- Trust Proof: `★ 4.8 / 5 from over 24,000+ verified customer reviews • Wirecutter's Pick for Best Office Chair`.
- Real Hero Media: High-resolution Branch studio showcase.

### 2.4 Press & Authority Proof Strip
- Logos: `The New York Times (Wirecutter)`, `TechCrunch`, `Forbes`, `GQ`, `Architectural Digest`, `Fast Company`.

### 2.5 Ergonomic Bestsellers (Interactive Collection Grid)
- Filter pills: `All Furniture`, `Ergonomic Chairs`, `Standing Desks`, `Workspace Bundles`.
- Real Flagship Product Roster:
  1. *Ergonomic Chair* ($369 CAD) — Interactive color swatches (Black, Grey, Blue).
  2. *Verve Chair* ($599 CAD) — Interactive color swatches (Galaxy Black, Mist White).
  3. *Daily Chair* ($259 CAD) — Interactive color swatches (Linden Green, Slate).
  4. *Duo Standing Desk* ($549 CAD) — Interactive wood swatches (Charcoal, Walnut).
  5. *Ergonomic Chair Pro* ($499 CAD) — Interactive color swatches (Mineral Grey, Boulder).
  6. *Saddle Chair* ($319 CAD) — Interactive color swatches (Dove White, Carbon).
  7. *Ergonomic Monitor Arm* ($129 CAD).
- **Interactive Swatch Selector**: Clicking a color dot live-swaps the product image on the card!
- Card Badges: `WIRECUTTER BEST PICK`, `BESTSELLER`, `DESIGN AWARD`.
- Feature Bullets: `8 Points of Adjustment`, `Breathable Double-Woven Mesh`, `Synchronous Tilt`.

### 2.6 The Branch Difference (Interactive Ergonomics Hotspot Visualizer)
- Visual diagram highlighting:
  - 1. Adjustable Ergonomic Lumbar Support
  - 2. Synchronous Tilt Mechanism
  - 3. 3D Armrest Range
  - 4. High-Density Contoured Seat Cushion
  - 5. Dual-Motor Whisper-Quiet Lift

### 2.7 Interactive Workspace Bundle Builder (Save 15%)
- 3-step interactive setup:
  - Step 1: Flagship Chair (Ergonomic Chair $369 or Verve Chair $599)
  - Step 2: Standing Desk (Duo Standing Desk $549 or Skip)
  - Step 3: Accessory (Monitor Arm $129 or Skip)
- Live discount engine applying an automatic 15% discount for 2+ pieces.
- 1-click `"Add Workspace Bundle to Cart"`.

### 2.8 Branch for Business & Corporate Trust
- B2B Enterprise Section: `"Furnishing hybrid workspaces for Google, Shopify, Casper, and thousands more."`

### 2.9 Verified Customer Reviews & Social Proof
- Customer cards with photos, verified buyer checkmarks, star ratings, and detailed ergonomics feedback.

### 2.10 Risk-Free Guarantees & Collapsible FAQ
- 30-Day Risk-Free Trial, 10-Year Warranty, Fast Assembly.
- Collapsible interactive FAQ accordion.

### 2.11 Reactive Slide-Out Cart Drawer
- Free Delivery Progress Bar ($150 CAD target).
- Line item list with color swatch indicator, quantity steppers, and remove.
- Quick in-drawer upsell carousel (Felt Desk Mat, Monitor Arm).
- 1-Click Express Checkout Buttons: Shop Pay, Apple Pay, Google Pay, Card.
- Complete purchase receipt confirmation modal.

---

## 3. Technical File Organization

```
kura/
├── index.html          # Semantic HTML5 Branch storefront layout
├── css/
│   └── styles.css      # Branch design tokens, responsive grid, swatches, cart drawer
├── js/
│   ├── cart-store.js   # Cart state, variants, bundle discounts, shipping threshold
│   └── app.js          # Interactive swatches, filters, bundle builder, drawer, modals
├── package.json        # Project metadata and test scripts
└── tests/
    ├── branch-catalog.test.js
    ├── branch-css.test.js
    ├── branch-html.test.js
    ├── branch-app.test.js
    └── branch-smoke.test.js
```
