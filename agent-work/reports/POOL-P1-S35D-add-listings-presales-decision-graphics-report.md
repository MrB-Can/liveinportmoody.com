# POOL-P1-S35D: Add Listings and Presales Decision Graphics

## AGENT
Claude Haiku (pooled launch agent)

## TASK
Add agent-safe decision framework graphics to /listings and /presales pages to improve visual richness.

## STATUS
**DONE** — Graphics added, all validations passed, ready to deploy.

---

## PAGES UPDATED

### /listings page
✅ Added "Before writing an offer" decision framework section
- Location: Between "Use listings with local context" and "Listing support" sections
- Layout: 5-column responsive grid (stacked on mobile, 2 cols on tablet, 5 cols on desktop)
- Items: Property, Building/Strata, Neighbourhood, Pricing Context, Buyer Trade-offs
- Design: Card-based using existing site design tokens (border-softBorder, bg-white, font-heading)
- Accessibility: Centered text, descriptive detail text for each framework item

### /presales page
✅ Added "Before relying on presale details" decision framework section
- Location: Before "Compare presales with resale" section
- Layout: 5-column responsive grid (stacked on mobile, 2 cols on tablet, 5 cols on desktop)
- Items: Project Details, Disclosure Review, Deposit & Timing, Resale Comparison, Ask Before Signing
- Design: Card-based using existing site design tokens
- Accessibility: Centered text, descriptive detail text for each framework item

---

## GRAPHICS ADDED

### /listings Framework
| Item | Details |
|------|---------|
| Property | Age, condition, renovations, defects, inspections |
| Building / Strata | Bylaws, fees, reserves, special assessments, condition |
| Neighbourhood | Schools, transit, walkability, character, future development |
| Pricing Context | Recent sales, list-to-sell ratio, market trends, comparable units |
| Buyer Trade-offs | Space vs. location, finishes vs. potential, timing vs. fit |

### /presales Framework
| Item | Details |
|------|---------|
| Project Details | Specifications, features, layouts, appliances, parking, storage |
| Disclosure Review | Disclosure statement, amendments, builder history, warranty |
| Deposit & Timing | Schedule, holdback, completion date, outside date, amendments |
| Resale Comparison | Active alternatives, timing, cost, certainty, neighbourhood fit |
| Ask Before Signing | Tax, legal, financing, insurance advice; assignment terms; conditions |

---

## ACCESSIBILITY

✅ **Text Equivalent:** All framework items have clear, semantic text (no image-only content)
✅ **Mobile Behavior:** Cards stack vertically on mobile (single column), expand to 2 columns on tablet, 5 columns on desktop
✅ **Color Contrast:** Uses existing site color tokens (text-deepInlet, text-slateText) for proper contrast
✅ **Semantic HTML:** Uses `<article>` tags for proper structure, `<h3>` for framework item titles
✅ **Font Sizing:** Uses `font-heading text-lg` for titles, `text-xs` for detail text — readable at all sizes

---

## VALIDATION

✅ **Lint:** No ESLint warnings or errors
```
✔ No ESLint warnings or errors
```

✅ **Build:** 86 pages built successfully
```
✓ Compiled successfully in 5.3s
```

✅ **Crawl:** 106 URLs passed, 0 warnings, 0 failed
```
BASE: https://www.liveinportmoody.com
✅ PASS — 106 passed | 0 warning(s) | 0 failed
```

---

## BONUS FIX

Fixed unescaped apostrophe in `/resources/page.tsx` line 334:
- Changed: `doesn't` → `doesn&apos;t` (required for JSX linting compliance)

---

## COMMIT

- `src/app/listings/page.tsx` (added decision framework section)
- `src/app/presales/page.tsx` (added decision framework section + Section import)
- `src/app/resources/page.tsx` (fixed apostrophe escape)
- `agent-work/done/POOL-P1-S35D-add-listings-presales-decision-graphics.md`
- `agent-work/reports/POOL-P1-S35D-add-listings-presales-decision-graphics-report.md`

---

## RECOMMENDED NEXT STEP

Run POOL-P1-S35G (Focused visual recapture) after all graphics tasks complete to document final result for owner review.
