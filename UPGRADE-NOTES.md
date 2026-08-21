# APEX landing upgrade

This build keeps the existing public sections, CMS, Products, Blogs, Careers and API structure intact while replacing the noisy hero presentation with a cleaner APEX landing system.

## What changed

- Added a full-screen APEX initialization sequence on homepage load.
- Centered the APEX logo during initialization.
- Added a slim deterministic progress line.
- Added locally adapted React Bits Split Flap Text for system-status transitions.
- Added locally adapted React Bits Dot Field for restrained pointer-reactive background motion.
- Rebuilt `AP_ArchitectureVisual` as a background system of layered planes/rings instead of floating dashboard cards.
- Removed the floating architecture cards, random hero card clutter and coral multi-dot headline artifact.
- Recentered the hero around one strong headline, body copy and two CTAs.
- Preserved the rest of the website and CMS architecture.
- Preserved Tailwind + Flexbox/Grid responsive architecture.
- Added reduced-motion handling.

## Files most relevant to the upgrade

- `app/components/AP_Loader.tsx`
- `app/components/AP_SplitFlapText.tsx`
- `app/components/AP_DotField.tsx`
- `app/components/AP_ArchitectureVisual.tsx`
- `app/components/AP_Hero.tsx`
- `app/screens/AP_HomeScreen.tsx`
- `shared/globals.css`

The approved visual concept is included at `design-reference/APEX-loading-concept.png` for reference only; the live hero is built from HTML/SVG/CSS/canvas rather than using the screenshot as a raster background.
