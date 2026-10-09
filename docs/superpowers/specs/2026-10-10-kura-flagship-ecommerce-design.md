# Design Specification: KURA (蔵) Flagship E-Commerce Landing Page

**Date:** 2026-10-10  
**Status:** Approved by User  
**Target Architecture:** High-Converting E-Commerce Layout with Real Studio Photography & Artisanal Interactive Features  

---

## 1. Executive Summary & Design Vision

**KURA (蔵)** combines the intuitive, proven UX of premier luxury e-commerce with real, high-resolution photography and artisanal interactive features. 

Rather than relying on generic template formulas or unconventional split-screen experiments, KURA delivers a familiar, highly effective e-commerce conversion flow elevated with distinct Japanese studio pottery craft:
1. **Real High-Resolution Studio Photography**: Authentic photography of hand-thrown wood-fired stoneware, chawans, pourers, whisks, and ceremonial matcha.
2. **Tactile Sound Synthesis (Web Audio API)**: Optional ambient red pine charcoal frequency toggle and acoustic wood clicks on cart addition (pure native code, zero external audio assets).
3. **Interactive Glaze & Thermal Inspector**: Real macro photography exploring natural pine fly-ash vitrification, crawling feldspar crackle, and metallic reduction.
4. **Ceremonial Ritual Suite Configurator**: 3-step interactive ritual set customizer calculating an automatic 15% package discount in real time.
5. **Scarcity & Reservation Engine**: 10-minute cart hold timer, live batch countdown, and real-time inventory bounds.
6. **Reactive Cart Drawer & Numbered Certificate**: Free courier delivery progress meter ($150 target), Tomobako inscribed box option (+$18), 1-touch simulated express checkout, and dynamic Numbered Certificate of Provenance generator.

---

## 2. Layout Structure & Conversion Flow

### 2.1 Sticky Scarcity Ticker & Header
- **Top Announcement Strip**: `BATCH NO. 07: Pine-Ash Anagama Firing • 48 of 150 Vessels Remaining • Complimentary Insured Courier on orders over $150`.
- **Live Reservation Countdown**: Real-time counter ticking down to drop closure (`03h 41m 18s`).
- **Glassmorphic Navigation Bar**:
  - Wordmark `K U R A` with vermilion kanji seal `蔵`.
  - Audio frequency toggle button: `[ ◉ KILN CHARCOAL FREQUENCY ]`.
  - Navigation anchors: `#collection`, `#inspector`, `#ritual-suite`, `#craft`, `#provenance`, `#faq`.
  - Cart trigger button displaying live specimen count badge and subtotal.

### 2.2 Hero Showcase (Appetite & Authority)
- **Tag**: `AUTUMN 2026 WOOD-FIRING • 72-HOUR RED PINE EMBERS`.
- **Headline**: `"Formed by hand. Transformed by flame."`
- **Sub-headline**: Editorial narrative detailing unrepeatable 1,300°C wood-fired stoneware from an unbroken 400-year pottery lineage in Shigaraki.
- **Conversion Actions**: Primary CTA `"Acquire From Batch 07"` and secondary CTA `"Curate Ceremonial Suite (-15%)"`.
- **Flagship Visual**: Large high-resolution photography showcase of the Yohēn Kuro Chawan with floating accession badge (`Only 3 remaining • Chamber 01 • 1,305°C`).
- **Social Proof Bar**: Architectural Digest, Kinfolk, Monocle, Wallpaper*.

### 2.3 Flagship Collection Grid (6 Curated Artifacts)
- **Category Filter Pills**: `All Specimens (6)`, `Chawan (Tea Bowls)`, `Katakuchi & Pourers`, `Yunomi & Cups`, `Teapots & Vases`.
- **Product Card Roster (Real High-Res Imagery)**:
  1. *No. 01: Yohēn Kuro Chawan* ($195 | 3 left) — Black coarse stoneware tea bowl.
  2. *No. 02: Kohiki Katakuchi Pourer* ($140 | 5 left) — Handcrafted spouted server with feldspar slip.
  3. *No. 03: Iga Ash-Glazed Flower Vase* ($260 | 1 left) — Heavy natural emerald vitrified glass tears.
  4. *No. 04: Kuroneri Guinoomi Sake Cup* ($68 | 8 left) — Knife-faceted iron stoneware cup.
  5. *No. 05: Shino Crackle Yunomi* ($82 | 4 left) — Milky feldspathic crackle with iron blush.
  6. *No. 06: Yakishime Shiboridashi Teapot* ($210 | 2 left) — Handleless flat Gyokuro teapot.
- **Card Interactive Features**: Live remaining stock badge, image hover zoom, technical firing specs table, and `"Quick Acquire"` button with acoustic click.

### 2.4 Interactive Glaze & Terroir Inspector
- Switch between `Natural Pine Ash Fly`, `Crawling Shino Glaze`, and `Iron Yohēn Reduction`.
- High-res macro surface inspection with telemetry readout: Peak Chamber Heat, Reduction Mode, and Pine Fuel Consumption.

### 2.5 Ceremonial Ritual Suite Builder (High AOV Engine)
- 3-step interactive customizer:
  - Step 1: Flagship Chawan (toggle between No. 01 Yohēn $195 or No. 05 Shino $82).
  - Step 2: Artisan Bamboo Whisk (100-prong Takayama Chasen - $42).
  - Step 3: Ceremonial Matcha (Single-estate Uji Gokō 30g tin - $38).
- Real-time calculation applying automatic 15% discount for 2+ suite items.
- 1-click `"Acquire Ceremonial Suite"` action depositing all items into vault.

### 2.6 The 72-Hour Anagama Craft Difference & Provenance
- Side-by-side comparison: Commercial factory pottery vs KURA wood-fired heritage.
- Master Potter Kenzo Mori (11th generation) profile and interactive 72-hour firing thermal curve.
- Collector Triple Guarantee: Zero-breakage transit guarantee, terroir purity, generational longevity.
- Verified collector testimonials and collapsible FAQ accordion.

### 2.7 Reactive Cart Drawer & Numbered Certificate
- Slide-out right-side drawer:
  - Proximity meter for free express courier delivery ($150 target).
  - 10-minute hold reservation timer with Renew action.
  - Item quantity steppers (+/-) respecting remaining batch stock limits.
  - Inscribed Paulownia Wood Box (Tomobako) toggle (+$18).
  - 1-touch Express Acquisition (Apple Pay / Google Pay / Card).
  - Live Certificate of Provenance generator with unique serial (`KURA-B07-VXX`) and master vermilion seal.

---

## 3. Verified Media & Asset Architecture

- **Hero Ceramic Showcase**: `https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80`
- **Specimen 01 (Yohēn Kuro Chawan)**: `https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80`
- **Specimen 02 (Kohiki Pourer)**: `https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80`
- **Specimen 03 (Iga Vase)**: `https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80`
- **Specimen 04 (Kuroneri Guinoomi)**: `https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80`
- **Specimen 05 (Shino Yunomi)**: `https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80`
- **Specimen 06 (Yakishime Shiboridashi)**: `https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80`
- **Takayama Bamboo Chasen Whisk**: `https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80`
- **Ceremonial Uji Matcha**: `https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80`
- **Kiln Fire & Craft**: `https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1200&q=80`

---

## 4. Technical File Structure

```
kura/
├── index.html          # Semantic HTML5 e-commerce layout with real imagery
├── css/
│   └── styles.css      # Design tokens, responsive grid, card styling, drawer, animations
├── js/
│   ├── audio-synth.js  # Web Audio API kiln frequency and acoustic click synthesizer
│   ├── cart-store.js   # Reactive cart state, inventory stock caps, 15% bundle discount
│   └── app.js          # UI controller, countdown timers, modals, inspector, audio hooks
└── tests/
    ├── audio-synth.test.js
    ├── cart.test.js
    ├── css-tokens.test.js
    ├── html-structure.test.js
    ├── app-logic.test.js
    └── e2e-smoke.test.js
```
