# Design Specification: KURA (蔵) — Wood-Fired Ceramic Studio & Tea Ware

**Date:** 2026-10-09  
**Status:** Approved by User  
**Target Deliverable:** High-Converting Limited-Batch E-Commerce Landing Page  

---

## 1. Executive Summary & Brand Positioning

**KURA (蔵)** is an independent ceramic studio producing limited-edition, wood-fired stoneware and ceremonial tea vessels fired in an authentic multi-chamber Anagama climbing kiln in Shigaraki, Japan. Each piece is thrown and sculpted by hand, then exposed to 72 continuous hours of natural split red pine flame and fly-ash melting at temperatures exceeding 1,300°C. No commercial powdered glazes are used; all surfaces, crystals, and vitreous drippings are created naturally through the interaction of clay minerals, wood ash, and kiln atmosphere.

### Core Conversion Objectives
1. **Museum-Grade Visual Authority & Tactile Luxury**: Reject generic e-commerce templates and flat AI-style layouts. Establish an editorial gallery presentation pairing deep charcoal obsidian tones with warm unbleached parchment and terracotta ash accents.
2. **Authentic Scarcity & Drop Dynamics**: Implement a live batch release architecture ("Batch 07: Pine-Ash Anagama Firing — Only 48 of 150 Vessels Remaining") featuring real-time reservation timers, inventory decrementing, and limited edition identifiers.
3. **High Average Order Value (AOV) Bundle Builder**: Drive multi-item cart conversion via an interactive 3-step "Ceremonial Suite Builder" that calculates a 15% package discount in real time.
4. **Frictionless Reactive Cart & Express Checkout**: Provide an instant-open slide-out cart drawer with a 10-minute hold reservation timer, free insured courier progress bar ($150 threshold), and an in-modal 1-page checkout flow complete with an interactive numbered Certificate of Authenticity.

---

## 2. Visual Identity & Design System

### 2.1 Color Palette
- **Void Obsidian (`#121110`)**: Primary dark background canvas, representing charcoal embers and cooled kiln fireboxes.
- **Washi Parchment (`#F5EFE6`)**: Warm, unbleached tactile off-white used for primary text, prominent headlines, and elevated container highlights.
- **Wood-Ash Terracotta (`#C86D48`)**: Primary conversion accent color for CTAs, live drop badges, countdown pills, and pricing highlights.
- **Mineral Celadon (`#3A5043`)**: Secondary accent for kiln temperature badges, terroir authenticity seals, and guaranteed transit markers.
- **Smoked Iron (`#1C1A18`)**: Elevated surface background for cards, modals, and the cart drawer.
- **Subtle Muted Earth (`#8E867E`)**: Secondary metadata, technical specs, firing logs, and border strokes.
- **Borders & Dividers**: `1px solid rgba(245, 239, 230, 0.08)` to preserve whisper-quiet separation without harsh contrast.

### 2.2 Typography
- **Display Headings**: `Cinzel` / `Playfair Display` (Google Fonts) — timeless, editorial serif conveying Japanese studio pottery heritage and fine art provenance.
- **Technical Subheadings & Data**: `Space Grotesk` / `DM Mono` — clean, spaced uppercase (`letter-spacing: 0.08em`) for batch codes, firing temperatures, timestamps, and inventory units.
- **Body & UI**: `Plus Jakarta Sans` — refined modern sans-serif with high legibility for product descriptions, cart totals, and checkout inputs.

### 2.3 Spatial & Elevation Rules
- Atmospheric ember glows behind flagship vessels: `radial-gradient(circle at center, rgba(200, 109, 72, 0.12) 0%, transparent 70%)`.
- Floating cards with tactile borders: `border: 1px solid rgba(245, 239, 230, 0.08); box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6)`.
- Border radius: `6px` on product cards and buttons, `9999px` on micro-badges and tags, preserving architectural precision.

---

## 3. Page Architecture & Conversion Funnel

### 3.1 Live Scarcity & Dispatch Ticker
- **Batch Announcement**: `"Batch No. 07: Pine-Ash Anagama Firing • 48 of 150 Vessels Remaining • Worldwide Express Dispatch"`.
- **Live Reservation Timer**: Real-time counter for the current drop window (`03h 41m 18s`).
- **Courier Indicator**: Complimentary insured courier transit on acquisitions over $150.

### 3.2 Glassmorphic Navigation Header
- **Brand Wordmark**: Minimal letterspaced `K U R A` with subtle studio subtitle `蔵 • SHIGARAKI`.
- **Navigation Links**:
  - `The Drop (Catalog)` (`#catalog`)
  - `Glaze & Terroir` (`#glaze-inspector`)
  - `Ceremonial Sets` (`#bundle-builder`)
  - `The 72-Hour Firing` (`#firing-log`)
  - `Collector FAQ` (`#faq`)
- **Cart Trigger**: Dynamic cart drawer button showing active item count badge, subtotal, and remaining reservation time indicator.

### 3.3 Flagship Hero Section
- **Kicker Tag**: `AUTUMN 2026 WOOD-FIRING • 72-HOUR RED PINE EMBERS`
- **Headline**: `"Formed by hand. Transformed by flame."`
- **Sub-headline**: `"Wood-fired stoneware and ceremonial vessels from an unbroken 400-year studio pottery lineage. No artificial glazes—colored entirely by natural fly-ash melt at 1,300°C. Each piece is unique, numbered, and unrepeatable."`
- **Conversion Triggers**:
  - Primary CTA: `"Acquire From Batch 07"` (Smooth scroll to catalog with active glow).
  - Secondary CTA: `"Curate A Ceremonial Set (-15%)"` (Scrolls directly to bundle builder).
- **Hero Vessel Showcase**:
  - Editorial presentation of *The Yohēn Kuro Chawan (Vessel No. 01)* with lighting highlight.
  - Floating Live Status Card: `Only 3 pieces remaining of 18 fired • Ash Fly: Natural Pine • Firing Temperature: 1,305°C`.
- **Social Proof Strip**:
  - Press mentions: Architectural Digest, Kinfolk, Monocle, Cereal Magazine.
  - Collector Rating: 4.98/5 across 1,420+ global acquisitions.
  - 100% Breakage-Free Courier Delivery Guarantee.

### 3.4 Limited Batch Release Catalog (6 Flagship Vessels)
- **Category Filter Pills**:
  - `All Vessels (6)`
  - `Matcha Chawan (Tea Bowls)`
  - `Katakuchi & Pourers`
  - `Yunomi & Guinoomi (Cups)`
  - `Vases & Tokkuri`
- **Product Card Roster**:
  1. *No. 01: Yohēn Kuro Chawan* — Shigaraki coarse stoneware, flame flash front ($195 | 3 left).
  2. *No. 02: Kohiki Katakuchi Pourer* — Feldspar slip with wood-ash drip ($140 | 5 left).
  3. *No. 03: Iga Ash-Glazed Flower Vessel* — Heavy vitrified glass puddles ($260 | 1 left).
  4. *No. 04: Kuroneri Guinoomi Sake Cup* — Iron-rich clay, faceted hand carve ($68 | 8 left).
  5. *No. 05: Shino Crackle Yunomi* — Thick feldspathic milky glaze, iron blush ($82 | 4 left).
  6. *No. 06: Yakishime Shiboridashi Teapot* — Unglazed high-density clay ($210 | 2 left).
- **Card Interactive Features**:
  - Live stock badge (`"Only 2 remaining"`).
  - One-click **"Quick Acquire"** button that immediately adds to cart and opens drawer.
  - **"Inspect Vessel"** modal trigger displaying high-res visual, firing specs, dimension data, and kiln chamber location.

### 3.5 Interactive Glaze & Terroir Inspector
- **Glaze Mode Switcher**:
  - `Natural Pine Ash Fly` (Green-gold vitrified glass puddles).
  - `Crawling Shino Glaze` (Milky feldspar with snowflake micro-crackle and iron flash).
  - `Iron Yohēn Reduction` (Deep metallic charcoal with iridescent blue flame blooms).
- **Tactile Inspector Card**:
  - High-detail tactile surface view and descriptive mouthfeel/texture analysis.
  - Kiln parameter display: Chamber zone, peak temperature curve (`1,290°C – 1,320°C`), reduction duration, and wood consumption.

### 3.6 Ceremonial Bundle Configurator (High AOV Engine)
- **3-Step Interactive Configurator**:
  - **Step 1: Flagship Chawan** — Select between *Vessel No. 01 (Yohēn Kuro - $195)* or *Vessel No. 05 (Shino Crackle - $82)*.
  - **Step 2: Whisk & Tool** — Select *100-Prong Takayama Bamboo Chasen & Hand-Carved Scoop ($42)* or Skip.
  - **Step 3: Ceremonial Tea** — Select *Single-Estate Uji Gokō Reserve Matcha 30g ($38)* or Skip.
- **Dynamic Discount Engine**:
  - Calculates individual total vs discounted bundle price (15% discount applied automatically when 2+ items selected).
  - Real-time savings readout: `"You save $41.25 with the Ceremonial Suite bundle"`.
  - One-click `"Add Bundle To Cart"` action.

### 3.7 The 72-Hour Anagama Craft Difference
- **Visual Contrast Matrix**:
  - *Commercial Factory Ceramics*: Slip-cast molds $\rightarrow$ Electric kiln firing (6h) $\rightarrow$ Toxic synthetic glazes $\rightarrow$ Mass-produced, uniform, lifeless.
  - *KURA Wood-Fired Heritage*: Hand-thrown on kick-wheel $\rightarrow$ 72-hour continuous Anagama wood firing $\rightarrow$ 5 tons of split red pine embers $\rightarrow$ 100% natural ash glaze with unrepeatable patina.

### 3.8 Master Potter Provenance & Kiln Thermal Log
- Profile of Master Potter Kenzo Mori (11th generation ceramicist).
- Interactive firing log showing hourly temperature increments and chamber reduction logs.

### 3.9 Collector Social Proof, Guarantees & Accordion FAQ
- Verified collector reviews with acquisition photos and star ratings.
- **The KURA Triple Guarantee**:
  - *Zero-Breakage Transit Guarantee*: Custom foam-fitted and double-boxed; free instant replacement.
  - *Terroir Purity*: 100% lead-free, non-toxic natural wood ash.
  - *Generational Longevity*: Fully vitrified stoneware crafted to last centuries.
- **Interactive FAQ Accordion**:
  - Seasoning and care for wood-fired pottery.
  - How the 10-minute cart hold reservation works.
  - Worldwide insured express shipping times and customs handling.
  - Tomobako wooden collector box packaging details.

### 3.10 Studio Newsletter & Footer
- Private early-access invite for Batch 08 firing with $25 studio credit on first acquisition.
- Craft Council certifications, carbon-neutral forestry seals, legal links, and studio address in Shigaraki.

---

## 4. Reactive Shopping Cart Drawer & Express Checkout

### 4.1 Cart Store & State Management
- State object: `items: [{ id, name, price, originalPrice, qty, image, subtitle, isBundle }]`.
- Storage persistence via `localStorage` key `kura_cart_v1`.
- Dynamic subtotal, free shipping threshold calculation ($150 target), packaging option (Paulownia Tomobako wood box +$18).
- **10-Minute Reservation Hold Timer**:
  - Real-time countdown clock in cart header.
  - Auto-resets on adding items; displays urgency notice when under 2 minutes.

### 4.2 Seamless Express Checkout Modal
- Instant overlay modal triggered from cart drawer:
  - Order summary breakdown with item thumbnails and total.
  - Simulated 1-click Express Buttons: Apple Pay, Google Pay, Insured Credit Card.
  - Live mock checkout submission with tactile loading feedback.
  - **Numbered Certificate of Authenticity Preview**:
    - Generates dynamic certificate with unique serial (e.g. `KURA-B07-V14`), firing date, potter seal, and owner name.

---

## 5. Technical Architecture & File Organization

```
kura/
├── index.html          # Semantic HTML5, accessibility ARIA attributes, meta tags
├── css/
│   └── styles.css      # Design tokens, responsive grid/flexbox, keyframes, scroll styling
├── js/
│   └── app.js          # Reactive cart store, inventory tracker, countdown timers, modals, glaze inspector
├── tests/
│   └── validation.js   # Automated test suite validating data consistency, pricing calculations, cart states
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-10-09-kura-ceramics-landing-page-design.md
```

### 5.1 Quality Gates & Benchmarks
- Clean semantic HTML5, zero external build dependencies.
- 100% responsive across desktop (1440px+), laptop (1024px), tablet (768px), and mobile (375px).
- Smooth 60fps micro-interactions with hardware-accelerated transitions (`transform`, `opacity`).
- Automated headless browser/node unit testing verifying bundle discount mathematics, cart operations, and reservation timers.
