# Design Specification: KURA Spatial Curatorial Monograph & Artifact Vault

**Date:** 2026-10-09  
**Status:** Approved by User  
**Target Architecture:** Non-Template Spatial Dual-Viewport Curatorial E-Commerce Experience  

---

## 1. Executive Summary & Design Philosophy

Generic e-commerce landing pages rely on a tired, cookie-cutter formula: sticky top navbar with text links, two-column hero, generic 3-column product cards with "Quick Add", standard accordion FAQs, and a predictable right-side slide-out cart drawer. 

**KURA (蔵)** rejects this formula entirely. Designed for artists, architects, and high-end ceramics collectors, this experience is structured as a **Spatial Curatorial Monograph with an Artifact Vault Dock**:
- It feels like holding a limited-edition museum exhibition monograph while retaining high-converting transactional power.
- It abandons the right-side cart drawer in favor of a tactile **Bottom Artifact Tray**, where claimed pieces physically land as archaeological specimen tags with real-time valuation and a 10-minute kiln reservation hold.
- It incorporates dynamic spatial lighting: as the user moves their cursor over a ceramic piece, specular light and ember shadows shift across the surface in real time.
- It features an optional Web Audio API ambient kiln frequency generator (subtle binaural red pine ember crackle—pure native code, zero external media assets).

---

## 2. Spatial Layout & Viewport Architecture

### 2.1 The Pinned Curatorial Spine (Left Viewport — 38% Desktop Width)
- **Stationary Structural Anchor**: Fixed to the left edge; remains pinned while the user journeys through the exhibition canvas on the right.
- **Vertical Typographic Spine**: Architectural typography running vertically along the frame: `KURA MONOGRAPH // VOL. 07 // ANAGAMA KILN SHIGARAKI`.
- **Active Specimen Telemetry HUD**:
  - Dynamically updates as the user scrolls through the gallery rooms using an IntersectionObserver scroll spy.
  - Displays: Current Room, Kiln Chamber Location, Peak Heat (e.g. `1,305°C`), Atmospheric Reduction State, and Surviving Batch Edition Count.
- **Analog Kiln Audio Synthesizer**:
  - Tactile toggle: `[ ◉ KILN CHARCOAL FREQUENCY ]`.
  - Uses native Web Audio API (white noise buffer + bandpass filter + periodic micro-clicks) simulating the gentle warmth of 72-hour pine embers.
- **Interactive Curatorial Index**:
  - Minimal list of the 6 flagship specimens with live survivor counts.
  - Clicking any item smoothly scrolls the right exhibition canvas directly to that room.

### 2.2 The Exhibition Canvas (Right Viewport — 62% Desktop Width)
- **Room 01: The Batch Proclamation & Hero Monograph**:
  - Unhurried editorial opening with oversized Japanese kanji watermark (`蔵`), bold display serif headline, and real-time batch countdown clock (`03h 41m 18s`).
- **Room 02: The Anagama Chamber Cross-Section**:
  - Interactive architectural schematic of the 3-chamber climbing wood-burning kiln.
  - Visualizes flame trajectories and highlights where each specimen was situated (Firebox Throat, Mid-Chamber, Rear Flue).
- **Room 03: Flagship Specimen Galleries (6 Rooms)**:
  - Each vessel is given its own unconstrained editorial space rather than a repetitive card grid.
  - Interactive specular lighting highlights that track cursor coordinates across the vessel silhouette.
  - Detailed physical accession notes (clay composition, shrinkage rate, firebox exposure, brix compatibility).
  - One-click **"Claim Specimen"** button with tactile confirmation toast and inventory cap enforcement.
- **Room 04: The Ritual Suite Mat**:
  - An interactive ceremonial preparation mat where collectors assemble their Chawan (No. 01 or No. 05) + Takayama Bamboo Whisk + Uji Ceremonial Matcha, unlocking an automatic 15% suite discount.
- **Room 05: The Firing Archive & Provenance**:
  - 11th-generation potter Kenzo Mori statement, hourly firing temperature log, and collector guarantees.

### 2.3 The Artifact Vault Tray & Floor Drawer (Bottom Screen Dock)
- **Bottom Artifact Tray (Replaces Right-Side Drawer)**:
  - Floating minimal obsidian bar docked at the bottom center of the viewport.
  - When an artifact is added, an animated miniature specimen badge drops into the tray with an acoustic micro-tick.
  - Displays: Total Acquired Items, Running Valuation, Free Insured Courier Status ($150 target), and live 10-Minute Reservation Hold Timer with Renew action.
- **The Upward-Sliding Vault Drawer**:
  - Clicking the tray unfolds an upward-sliding velvet-dark floor drawer.
  - Line-item quantity controls, Tomobako paulownia wood box packaging toggle (+$18), and express 1-click checkout options (Apple Pay / Card).
  - Live **Numbered Certificate of Provenance** preview with unique batch serial (`KURA-B07-VXX`), chamber data, and vermilion seal stamp.

---

## 3. Visual System & Typography

- **Canvas Void Obsidian (`#100F0E`)**: Matte gallery black.
- **Washi Parchment (`#F4EFE6`)**: Unbleached cream for typography and tactile accents.
- **Pine-Ash Terracotta (`#C86D48`)**: Primary conversion accent color.
- **Mineral Celadon (`#3A5043`)**: Chamber markers and authenticity indicators.
- **Display Typography**: `Cinzel` & `Playfair Display` (Google Fonts).
- **Technical Telemetry**: `Space Grotesk` (Google Fonts).
- **UI & Reading**: `Plus Jakarta Sans`.

---

## 4. Technical Stack & Implementation

- **Markup (`index.html`)**: Semantic HTML5 with split-screen dual-viewport layout and bottom vault dock.
- **Stylesheet (`css/styles.css`)**: Dual-viewport layout grid, vertical typography transforms, cursor lighting gradients, upward-sliding drawer animations, and mobile responsive stack.
- **Logic & Store (`js/cart-store.js` & `js/app.js`)**: Reactive cart state, Web Audio synthesizer, scroll spy telemetry updater, interactive kiln map, dynamic certificate generator.
- **Tests (`tests/`)**: 100% automated test coverage of pricing, inventory limits, and UI controllers.
