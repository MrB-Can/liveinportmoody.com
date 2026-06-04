# POOL-P0-S36A Report: Final Public Copy Hardening Scan, Fix, and Deploy

**AGENT:** Claude Sonnet 4.6  
**TASK:** POOL-P0-S36A — Final Public Copy Hardening Scan, Fix, and Deploy  
**STATUS:** ✅ COMPLETE  
**Date:** June 3, 2026

---

## Summary

Completed a full denylist scan across `src/`, `data/`, and `public/`, identified all public-facing staging language, removed every violation, added an automated scan script, and deployed to production. All fixes follow the "hide the section if no real assets exist" rule — no placeholder text was added.

---

## Violations Found and Fixed

### A. Treetops page (`src/app/complexes/treetops-101-parkside-drive/page.tsx`)

**Removed entire workboard block:**
- "Treetops photos needed" (visible `<p>` text)
- "Future photo set" (visible `<p>` heading)
- Bullet list: entrance sign, internal lane, forested path, amenity building
- "Uses owner-approved photography only. No listing or competitor images are used."

**Also fixed:** two-column grid layout updated to single column since the photo column was removed.

### B. Complex template components — PlaceholderImageBlock captions

All 5 shared complex detail components were rendering `caption="Replace with a professional photo..."` as public `<figcaption>` text. Removed `PlaceholderImageBlock` entirely from each:

| File | Removed caption |
|------|----------------|
| `ComplexHero.tsx` | `Replace with a professional photo of ${name} entrance, signage, or street view.` |
| `ComplexAmenities.tsx` | `Replace with a professional photo of the amenity or recreation facility.` |
| `ComplexDetails.tsx` | `Replace with a professional photo of an exterior architectural detail or internal lane.` |
| `ComplexLocation.tsx` | `Replace with a professional photo of the street or neighbourhood context.` |
| `ComplexParksAndTrails.tsx` | `Replace with a professional photo of a nearby trail or park.` |

Affects all complex detail pages: Treetops, Aria Townhomes, College Park, Discovery Ridge, Klahanie.

### C. BuildingMapPlaceholder (`src/components/buildings/BuildingMapPlaceholder.tsx`)

Removed the "Future additions" pin from `mapPins` array. This was rendering as a visible dark badge label on the /buildings page map.

### D. NeighbourhoodMapPlaceholder (`src/components/neighbourhoods/neighbourhood-map-placeholder.tsx`)

Removed the `<p>` containing "Planned labels: Suter Brook, Newport Village, ..." — workboard annotation visible inside the map card.

---

## Denylist Scan Script

Created `scripts/public-copy-denylist-scan.mjs`:
- Scans `src/`, `data/`, `public/` for staging/workboard language patterns
- Skips known-safe paths (middleware, data type definitions, the coming-soon system route)
- Exit 0 = clean, Exit 1 = violations
- Run: `node scripts/public-copy-denylist-scan.mjs`

**Post-fix scan result:**
```
✅ Clean — no denylist violations found
```

---

## Validation

### Lint
```
✔ No ESLint warnings or errors
```

### Build
```
✓ Compiled successfully in 23.4s
✓ Generated 86 static pages
```

### Smoke Test
```
✅ PASS — 71 passed | 0 failed
```

### Crawl (Prelaunch)
```
✅ PASS — 106 passed | 0 failed
```

---

## Deployment

### Commit
```
0361c68 S36A: Remove public staging language from complex components and Treetops page
```

### Deployment
- **Deployment URL:** https://liveinportmoody-l6x5cnarf-paul-1527s-projects.vercel.app
- **Deployment ID:** dpl_2FiYA9EaznuNMXizaR4bwRWt8mQW
- **Status:** READY

---

## Post-Deploy Checks

### Route Health
```
✅ https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive → HTTP/2 200
✅ https://www.liveinportmoody.com/buildings/the-grande → HTTP/2 200
✅ https://www.liveinportmoody.com/neighbourhoods → HTTP/2 200
✅ https://www.liveinportmoody.com/buildings → HTTP/2 200
```

### Live Denylist Grep (production HTML)
```
✅ /complexes/treetops-101-parkside-drive — no violations in rendered HTML
✅ /buildings — "Future additions" absent
✅ /neighbourhoods — "Planned labels:" absent
```

### Error Logs
```
No logs found for paul-1527s-projects/liveinportmoody.com (past 1 hour)
✅ No errors detected
```

---

## False Positives (Confirmed Safe — No Fix Needed)

| Match | File | Reason |
|-------|------|--------|
| `coming-soon` | `src/middleware.ts`, `src/data/`, `src/components/newsletter-signup.tsx` | Code identifier / routing path, not rendered text |
| `internal lane` | `treetops/page.tsx:79`, `treetops/page.tsx:208` | Legitimate real estate description of the complex layout — not workboard language |
| `messagePlaceholder` | Form components | HTML textarea `placeholder` attribute — not visible text in the DOM body |
| `SocialFeedPlaceholder` | Component | Renders real Instagram/Facebook links |
| `TeamImagePlaceholder` | Component | Renders real team photo |
| `Map orientation` | `map-placeholder.tsx` | Default aria-label text, not a public staging phrase |

---

## Files Changed

- `src/app/complexes/treetops-101-parkside-drive/page.tsx`
- `src/components/complexes/ComplexHero.tsx`
- `src/components/complexes/ComplexAmenities.tsx`
- `src/components/complexes/ComplexDetails.tsx`
- `src/components/complexes/ComplexLocation.tsx`
- `src/components/complexes/ComplexParksAndTrails.tsx`
- `src/components/buildings/BuildingMapPlaceholder.tsx`
- `src/components/neighbourhoods/neighbourhood-map-placeholder.tsx`
- `scripts/public-copy-denylist-scan.mjs` *(new)*

---

## Recommended Next Steps

S36A is deployed. S36B and S36C are now unblocked:

1. **S36B** — Independent live public-copy audit (automated crawl of production HTML against denylist)
2. **S36C** — Final visual recapture of hardened pages
3. **S36D** — Final queue and launch readiness check (after S36B and S36C)
