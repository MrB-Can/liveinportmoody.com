# Route Integration and Content QA Audit

Date: 2026-05-21

## Routes Inspected

- `/`
- `/explore`
- `/neighbourhoods`
- `/neighbourhoods/heritage-mountain`
- `/complexes`
- `/complexes/treetops-101-parkside-drive`
- `/buildings`
- `/listings`

## Issues Fixed

- `/neighbourhoods`: fixed an inert "Find my best-fit area" button by linking it to the neighbourhood guidance form section.
- `/neighbourhoods`: fixed typo `Glanayre` to `Glenayre`.
- `/neighbourhoods/heritage-mountain`: replaced unsupported exact townhouse size and detached lot-size ranges with cautious copy that asks users to verify property-specific details.

## Relationship Checks

- `/neighbourhoods` links to `/neighbourhoods/heritage-mountain`.
- `/neighbourhoods/heritage-mountain` links to `/complexes/treetops-101-parkside-drive`.
- `/complexes` links to `/complexes/treetops-101-parkside-drive`.
- `/complexes/treetops-101-parkside-drive` links back to `/neighbourhoods/heritage-mountain`.
- `/listings` links to `/neighbourhoods`, `/complexes`, `/buildings`, `/market`, and `/buy`.
- `/buildings` links to `/listings` and has building inquiry anchors/forms.
- `/explore` links to `/neighbourhoods`, `/complexes`, `/buildings`, `/listings`, `/market`, `/buy`, `/sell`, `/resources`, and `/move-to-port-moody`.

## Issues Found

- No fake listings were found on inspected routes.
- No published sold data, sold ranges, average days on market, or price-per-square-foot tables were found on inspected routes.
- No unauthorized external photos were found in inspected route code. Placeholder visual blocks are styled and labelled as placeholders or preview/orientation modules.
- Status language is mostly consistent: `Guide live` for live guides and `Preview` for preview pages/cards.
- `/listings` uses an MLS Reciprocity placeholder state if `NEXT_PUBLIC_GVR_RECIPROCITY_SEARCH_URL` is not configured, which is appropriate and not presented as fake listings.

## Issues Deferred

- `/` includes a "Team photo coming soon" placeholder. It is intentional and styled, but final launch should replace it with approved team photography or a stronger branded placeholder.
- Some preview cards use non-functional preview states instead of detail pages. This is intentional based on sprint scope and should remain until individual pages are created.
- `data/complexes.ts` currently preserves compatibility with both legacy `guideStatus` checks and newer display labels. A later cleanup can normalize status values after active route work is complete.

## Verification

- `npm run lint`: passed.
- `npm run build`: passed.
- Route smoke tests returned `200` for the inspected public routes.
