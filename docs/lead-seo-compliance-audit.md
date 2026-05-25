# Lead Capture, SEO, Metadata, and Compliance Audit

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
- `/buy`
- `/sell`
- `/market`
- `/move-to-port-moody`
- `/resources`
- `/contact`

## Metadata Fixed

- No route architecture changes were needed.
- Confirmed route metadata is present through `createMetadata()` for the inspected SEO routes.
- Confirmed expected title patterns are produced by the metadata helper, which appends `| Live in Port Moody` to page-specific titles.

## Lead Metadata Fixed

- Added `intent:general-local-question` tags to global local-question forms on `/` and `/contact`.
- Normalized `/buy` listing review tag from `intent:listing-review` to `intent:buyer-listing-review`.
- Added `intent:buyer-guidance` and `lead_type:buyer` to the final buyer guidance form.
- Added `intent:seller-micro-market-value` and `lead_type:seller` to seller value forms.
- Added `lead_type:buyer` to relocation guidance.
- Added neighbourhood metadata tags to the generic neighbourhood guidance form:
  - `neighbourhood_name:Port Moody`
  - `neighbourhood_slug:port-moody`
- Normalized listing support and building inquiry message metadata formatting:
  - `intent:listing-search-support`
  - `intent:building-inquiry`
- Confirmed Treetops inquiry form routes complex buyer, owner value, watch, strata/document question, and comparison intents with complex metadata.

## MLS Reciprocity Compliance

- Confirmed `/listings` contains the required copy:
  "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
- Added the same required copy to listing CTA contexts on:
  - `/`
  - `/buildings`
  - `/complexes`
  - `/complexes/treetops-101-parkside-drive`
- Confirmed no fake listing cards, sold listing tables, scraped listing data, or custom listing detail pages were found in inspected rendered routes.

## Verification Language

- Confirmed standard verification language appears on:
  - `/neighbourhoods`
  - `/neighbourhoods/heritage-mountain`
  - `/complexes`
  - `/complexes/treetops-101-parkside-drive`
  - `/buildings`
- Added the standard verification note to `/neighbourhoods/heritage-mountain`.

## Compliance Issues Found

- Stale, unreferenced file `src/data/complexes/treetops.ts` still contains older unsupported Treetops copy, including exact drive-time-style references and obsolete size/range language. It is not imported by the current Treetops page, so it does not affect the live route, but it should be deleted or updated in a cleanup sprint.
- The CRM schema stores extra structured context mostly through `tags`, `resourceName`, and `message` because the lead payload does not currently include first-class fields for `listing_url`, `listing_address`, `complex_name`, or `building_name`.

## Unresolved Risks

- The MLS Reciprocity URL depends on `NEXT_PUBLIC_GVR_RECIPROCITY_SEARCH_URL`; if unset, `/listings` correctly shows a connection placeholder.
- Some metadata titles receive the global `| Live in Port Moody` suffix automatically. If exact unsuffixed titles are required for specific pages, `createMetadata()` will need a future opt-out.
- Existing preview pages/cards intentionally avoid individual detail pages until those guides are built.

## Verification

- `npm run lint`: passed.
- `npm run build`: passed.
