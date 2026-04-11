# Design System Specification: The "Mercenary Technical" Framework

## 1. Overview & Creative North Star: "Bioluminescent Brutalism"
This design system is built for high-stakes, tactical environments where information is a weapon and status is derived from technical precision. We move beyond the standard "SaaS Blue" aesthetic to create a **"Bioluminescent Brutalist"** experience. 

The Creative North Star is **The Digital Dossier**. Every screen should feel like a redacted intelligence report being viewed on a high-end, clandestine terminal. We achieve this by blending the cold, rigid geometry of brutalist architecture with the organic, fluid movement of bioluminescent light.

**Editorial Principles:**
*   **Intentional Asymmetry:** Never center-align hero content. Use heavy left-weighted layouts with "light-leaks" (bioluminescent blooms) bleeding in from the right edge.
*   **Tactical Depth:** Use layers of "Brushed Metal" and "Textured Glass" to create a sense of physical hardware.
*   **Technical Authority:** Typography is large, sharp, and unapologetic. Information density is high but meticulously organized through tonal shifts rather than lines.

---

## 2. Colors & Surface Architecture
The palette is rooted in the void of deep space, punctuated by high-energy electrical discharges.

### The Palette (Material Design 3 Mapping)
*   **Background:** `#141313` (A deep, near-black void)
*   **Primary (Bioluminescent Violet):** `#e0b6ff` / Container: `#7824b8`
*   **Secondary (Tactical Cyan):** `#e6feff` / Container: `#00f4fe`
*   **Surface Tiers:** 
    *   `surface_container_lowest`: `#0e0e0e` (Deep recessed panels)
    *   `surface_container_high`: `#2a2a2a` (Elevated dossier cards)

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. They are "noisy" and amateur. Boundaries must be defined by:
1.  **Tonal Shifts:** A `surface_container_low` card sitting on a `surface` background.
2.  **Bioluminescent Glow:** A 1px neon glow effect using `primary` at 30% opacity, but only on the top or left edge (asymmetrical lighting).
3.  **Procedural Noise:** Using a subtle grain texture to differentiate a sidebar from the main content area.

### Glass & Texture
Main interface panels should utilize **Textured Glassmorphism**. 
*   **Backdrop Blur:** 12px to 20px.
*   **Surface:** `surface_variant` at 40% opacity.
*   **Texture Overlays:** Apply a subtle 5% opacity "Brushed Metal" or "Film Grain" SVG filter to all glass panels to give them a tactical, hardware-grade feel.

---

## 3. Typography: The Technical Voice
We use typography to convey authority. The contrast between the wide, brutalist headers and the narrow, monospaced data creates a "Mercenary" aesthetic.

*   **Display & Headlines (Space Grotesk):** These are your "Aggressive" elements. Use `display-lg` (3.5rem) with tight letter-spacing (-0.04em). These should feel like they were stamped onto the screen.
*   **Data & Technicals (Geist Mono):** All secondary text, labels, and metadata must use Geist Mono. This reinforces the "Code/Intelligence" vibe.
*   **Body (Inter):** Reserved for long-form reading. Inter provides the necessary legibility to balance the aggression of the display type.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is not simulated by light from above, but by light from within (bioluminescence).

*   **The Layering Principle:** Stack `surface_container_lowest` for the "base" of the application, and use `surface_container_high` for active "Dossier Panels."
*   **Ambient Shadows:** We do not use black shadows. Use a "Glow Shadow" in `primary` or `secondary` color tokens at 5% opacity with a 40px blur. This makes components look like they are emitting light onto the surface below.
*   **The Ghost Border Fallback:** If a container requires a boundary (e.g., in a complex data grid), use the `outline_variant` token at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons: Tactical Actuators
*   **Primary:** Solid `primary` background with `on_primary` (dark violet) text. **0px Border Radius**.
*   **Secondary:** Ghost variant. No background. `outline` border (20% opacity). On hover, a "Bioluminescent Bloom" (radial gradient) follows the cursor behind the glass.
*   **States:** Transitions must be instant (50ms) to mimic military hardware responsiveness.

### Dossier Panels (Cards)
*   **Structure:** No rounded corners (`0px`). 
*   **Header:** A 4px `secondary_fixed` vertical accent bar on the left side.
*   **Texture:** A subtle noise overlay.
*   **Separation:** Use vertical whitespace (32px or 64px) instead of divider lines.

### Inputs: Command Line Style
*   **Visuals:** Underline only. Use `secondary` for the active underline color with a `0 0 10px` outer glow (Neon Boundary).
*   **Typography:** All input text must be `Geist Mono` to feel like terminal entries.

### Specialized Components: "The Pulse"
*   **Status Indicators:** Instead of a static dot, use a "Bioluminescent Pulse"—a soft, breathing radial gradient that expands and contracts behind the status label.
*   **Glitch Transitions:** When navigating between views, use a subtle 100ms "chromatic aberration" effect to reinforce the tactical, high-tech aesthetic.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical glows. If the top-left of a panel glows, the bottom-right should be in deep shadow.
*   **Do** treat typography as a UI element. Overlap a large `display-lg` header behind a `surface-container` to create depth.
*   **Do** use monochromatic icons (Geist Mono character set or custom thin-stroke tactical icons).

### Don't
*   **Don't** use border-radius. Every element must be sharp (`0px`).
*   **Don't** use standard drop shadows. If it doesn't look like it's glowing or physically layered, it doesn't belong.
*   **Don't** use "Soft" colors. Stick to the high-contrast violet, cyan, and deep blacks. No pastels.
*   **Don't** use divider lines. If the layout feels messy, increase the `surface_container` contrast or add more padding.