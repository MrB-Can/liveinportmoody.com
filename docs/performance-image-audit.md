# Performance and Image Audit - Sprint 28B

## Image Asset Sizes (Oversized Assets)
The following PNG hero images in `public/` are significantly oversized (>1.5MB). Converting these to WebP could save 80-90% in file size:
- `public/hero-buy.png` (2.6M)
- `public/hero-sell.png` (2.4M)
- `public/hero-move.png` (2.4M)
- `public/hero-market.png` (2.1M)
- `public/hero-about.png` (2.0M)
- `public/hero-contact.png` (1.8M)
- `public/hero-resources.png` (1.7M)
- `public/hero-legal.png` (1.6M)

**Recommendation:** Convert these hero assets to WebP using the existing `hero-home.webp` (196K) as a benchmark.

## Component Audit

### `ImageHero` (`src/components/image-hero.tsx`)
- **Issue:** `priority` attribute is only applied if `homeSizing={true}`. Other pages using `ImageHero` at the top of the viewport will suffer from LCP delays as Next.js will lazy-load the hero image.
- **Issue:** `imageAlt` defaults to an empty string. While decorative images should have empty alt, hero images often describe the "vibe" or location and benefit from descriptive alt text.
- **Fix:** Update `ImageHero` to accept a `priority` prop or default to `true`.

### `TeamMemberCard` (`src/components/team-member-card.tsx`)
- **Observation:** Properly handles missing photos with a "photo coming soon" placeholder.
- **Observation:** Uses `sizes` attribute correctly for responsive loading.

### `ContextImage` (`src/components/context-image.tsx`)
- **Observation:** Correctly uses `fill` and `sizes`. Accepts an optional `priority` prop.

## Layout Shift (CLS) Risks
- The `ImageHero` uses `fill` within a container that has `min-height` defined via utility classes. This is generally safe for CLS.
- `TeamMemberCard` uses `aspect-[4/5]` on the image container, which prevents layout shift when the image loads.

## Unused Artifacts
- No large unused screenshot artifacts found outside of forbidden directories.

## Action Plan
1. Update `ImageHero` to support/default to `priority`.
2. Check pages for missing hero alt text.
3. Replace oversized PNG heroes with WebP equivalents (if tools available) or flag for conversion.
