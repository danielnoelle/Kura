# KURA Spatial Curatorial Monograph Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bespoke, artist-grade e-commerce experience for KURA (蔵) using a Spatial Dual-Viewport Monograph architecture, featuring a pinned curatorial telemetry spine (38%), an unconstrained exhibition canvas (62%) with dynamic cursor lighting, native Web Audio ambient kiln frequencies, and a docked bottom artifact vault tray with upward-sliding acquisition drawer.

**Architecture:** Split-viewport grid layout with a stationary editorial spine and scroll-driven exhibition canvas. Pure vanilla ES6+ with Web Audio API sound synthesis (`js/audio-synth.js`), reactive cart and inventory bounds store (`js/cart-store.js`), telemetry scroll-spy and lighting controllers (`js/app.js`), and responsive spatial styles (`css/styles.css`). Zero external build dependencies.

**Tech Stack:** HTML5, CSS3 Grid/Flexbox/Keyframes, Vanilla ES6+ JavaScript, Web Audio API, Node.js assert test runner.

**Spec:** `docs/superpowers/specs/2026-10-09-spatial-curatorial-monograph-design.md`

## Global Constraints

- Replaces cookie-cutter DTC layouts with a dual-viewport spatial architecture (desktop 38% pinned spine / 62% exhibition canvas).
- Palette: Void Obsidian (`#100F0E`), Washi Parchment (`#F4EFE6`), Pine-Ash Terracotta (`#C86D48`), Mineral Celadon (`#3A5043`).
- Left spine stays stationary with active telemetry HUD (chamber, temp, reduction state, edition stock), curatorial index, and audio toggle.
- Right canvas features room-by-room exhibition spreads with dynamic cursor specular highlights on specimens.
- Discards generic right slide-out cart drawer; implements floating bottom artifact tray with upward-sliding acquisition floor drawer.
- Zero external audio files: Web Audio API generates ambient pine charcoal warmth natively.
- 100% green automated test suite.

## Review Focus

1. **Dual-Viewport Independence:** Right canvas scrolling must not desync or jerk the left pinned monograph spine on desktop.
2. **Web Audio Lifecycle Safety:** AudioContext must initialize only on explicit user click to satisfy browser autoplay policies without console warnings.
3. **Scroll Spy Telemetry Precision:** IntersectionObserver thresholds must cleanly update current room telemetry coordinates without jitter.
4. **Bottom Vault Tray Responsiveness:** Docked artifact tray must remain accessible across desktop and mobile without obstructing room navigation.
5. **Inventory Bounds & Discount Fidelity:** Purchasing limited specimens must respect maxStock limits and compute the 15% ceremonial suite discount deterministically.

---

### Task 1: Native Web Audio Kiln Frequency Synthesizer (TDD)

**Files:**
- Create: `js/audio-synth.js`
- Create: `tests/audio-synth.test.js`

**Interfaces:**
- Produces: `KilnAudio` module with methods:
  - `toggle(enabled)`: starts or pauses synthesized pine ember crackle.
  - `playArtifactClick()`: acoustic wood tick when specimen lands in bottom tray.
  - `getState()`: returns `{ isPlaying, isSupported }`.

- [ ] **Step 1: Write failing test**
Create `tests/audio-synth.test.js` asserting module structure, state management, and mock audio context lifecycle.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/audio-synth.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement `js/audio-synth.js`**
Synthesize organic white-noise burst crackle and subtle low-frequency resonance using native Web Audio API (or safe mock in test environment).

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/audio-synth.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add js/audio-synth.js tests/audio-synth.test.js
git commit -m "feat(audio): implement native Web Audio kiln frequency synthesizer"
```

---

### Task 2: Spatial Dual-Viewport Stylesheet & Dynamic Lighting (CSS)

**Files:**
- Modify: `css/styles.css`
- Create: `tests/spatial-css.test.js`

**Interfaces:**
- Consumes: Palette tokens from spec.
- Produces: Split-viewport grid (`.monograph-layout`, `.curatorial-spine`, `.exhibition-canvas`), room containers (`.exhibition-room`), cursor lighting styles (`.specimen-stage`, `.specimen-light-glint`), bottom artifact tray (`.vault-dock-tray`), upward-sliding floor drawer (`.vault-floor-drawer`), and mobile single-column responsive collapse.

- [ ] **Step 1: Write failing CSS test**
Create `tests/spatial-css.test.js` asserting required spatial selectors and grid properties exist.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/spatial-css.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement spatial styles in `css/styles.css`**
Implement the complete dual-viewport layout, vertical typographic transforms, room framing, interactive kiln diagram, and bottom artifact tray transitions.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/spatial-css.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add css/styles.css tests/spatial-css.test.js
git commit -m "feat(css): implement spatial dual-viewport layout, room spreads, and bottom vault tray"
```

---

### Task 3: Spatial Monograph Semantic Architecture (HTML)

**Files:**
- Modify: `index.html`
- Create: `tests/spatial-html.test.js`

**Interfaces:**
- Consumes: `css/styles.css`, `js/audio-synth.js`, `js/cart-store.js`, `js/app.js`.
- Produces: Semantic dual-viewport DOM:
  - Left Pinned Frame: Vertical spine, Telemetry HUD (`#telemetry-hud`, chamber, temp, stock), Audio toggle button (`#btn-audio-toggle`), Curatorial Index (`#curatorial-index`).
  - Right Exhibition Canvas: Room 01 Proclamation, Room 02 Anagama Cross-Section, Room 03 Specimen Rooms 1-6 with lighting stages, Room 04 Ritual Suite Mat, Room 05 Firing Archive & Provenance.
  - Bottom Artifact Dock: `#vault-dock-tray` with live specimen tokens and valuation.
  - Floor Acquisition Drawer: `#vault-floor-drawer` with express checkout and live certificate generator.

- [ ] **Step 1: Write failing HTML test**
Create `tests/spatial-html.test.js` verifying presence of spatial containers and sections.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/spatial-html.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement updated `index.html`**
Rebuild markup to the spatial curatorial monograph architecture with full accessibility.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/spatial-html.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add index.html tests/spatial-html.test.js
git commit -m "feat(html): implement spatial curatorial monograph and bottom vault dock"
```

---

### Task 4: Scroll Spy Telemetry, Dynamic Lighting & Vault Controller (JS)

**Files:**
- Modify: `js/app.js`
- Create: `tests/spatial-app.test.js`

**Interfaces:**
- Consumes: `CartStore`, `KilnAudio`.
- Produces: IntersectionObserver scroll-spy updating telemetry in real time, mouse-tracking specular highlight on specimens, audio synthesizer binding, bottom artifact tray reactivity, and upward floor drawer animations.

- [ ] **Step 1: Write failing controller test**
Create `tests/spatial-app.test.js` asserting telemetry room mappings and vault dock methods.

- [ ] **Step 2: Run test to verify it fails**
Run: `node tests/spatial-app.test.js`
Expected: FAIL.

- [ ] **Step 3: Implement controller enhancements in `js/app.js`**
Wire IntersectionObserver, cursor lighting mousemove handlers, audio synthesizer toggle, and bottom tray animations.

- [ ] **Step 4: Run test to verify it passes**
Run: `node tests/spatial-app.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add js/app.js tests/spatial-app.test.js
git commit -m "feat(js): implement scroll-spy telemetry HUD, cursor specular lighting, and vault dock controller"
```

---

### Task 5: End-to-End Smoke Test Suite & Final Polish

**Files:**
- Modify: `tests/e2e-smoke.test.js`

**Interfaces:**
- Consumes: All project files.
- Produces: Automated integration test validating the entire spatial user journey: audio toggle, scroll spy room navigation, specimen claiming into bottom tray, free courier threshold calculations, 15% ritual suite discount, and certificate issuance.

- [ ] **Step 1: Update `tests/e2e-smoke.test.js`**
Incorporate spatial monograph selectors, bottom vault tray checks, and telemetry validations.

- [ ] **Step 2: Run full test suite**
Run:
```bash
node tests/audio-synth.test.js
node tests/spatial-css.test.js
node tests/spatial-html.test.js
node tests/spatial-app.test.js
node tests/cart.test.js
node tests/e2e-smoke.test.js
```
Expected: PASS (all suites exit 0).

- [ ] **Step 3: Commit**
```bash
git add tests/e2e-smoke.test.js
git commit -m "test: verify end-to-end spatial curatorial monograph experience"
```
