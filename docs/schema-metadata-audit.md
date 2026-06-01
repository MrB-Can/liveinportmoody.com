# Schema and Metadata Audit

**Date:** June 1, 2026
**Agent:** Agent 6
**Sprint:** A6-S28E

## 1. Metadata Audit

### Default Metadata
- **metadataBase:** Set to `siteConfig.url` in `src/app/layout.tsx`.
- **Title Template:** `%s | ${siteConfig.name}`.
- **Default Title:** `Live in Port Moody`.
- **Description:** Uses `siteConfig.description`.

### OG Image
- **Global Config:** `/images/social/live-in-port-moody-og.png` (defined in `siteConfig.ogImage`).
- **Implementation:** `createMetadata` helper correctly applies it to `openGraph.images`.

### Canonical URLs
- **Implementation:** `createMetadata` helper correctly applies `alternates: { canonical: url }` based on the path.

### Robots / Noindex
- **Default:** Indexable.
- **Preview Routes:** Correctly set to `index: false`.
  - `/neighbourhoods/[slug]` (if status is `preview`)
  - `/buildings/[slug]` (if status is `preview`)
  - Specific complexes like `klahanie-townhomes`, `college-park-townhomes`, `discovery-ridge`, `aria-townhomes`.

## 2. Structured Data (Schema) Audit

### Organization Schema
- **File:** `src/app/layout.tsx` (via `src/lib/seo.ts`).
- **Type:** `Organization`.
- **Fields:** `name`, `url`, `description`.
- **Status:** Correct and conservative.

### WebSite Schema
- **File:** `src/app/layout.tsx` (via `src/lib/seo.ts`).
- **Type:** `WebSite`.
- **Fields:** `name`, `url`, `description`, `inLanguage`.
- **Status:** Correct and conservative.

### Restricted Schema Check
- **Review Schema:** Not present.
- **AggregateRating Schema:** Not present.
- **Award Schema:** Not present.
- **Offer/Listing/Sold Schema:** Not present.
- **Findings:** Verified that no forbidden schema types are used in the structured data scripts.

## 3. SEO Content Audit (Key Pages)

- **Home (/)**: Title and Description are research-focused ("Real Estate Decision Engine").
- **Buy (/buy)**: Targeted at buyer research and due diligence.
- **Sell (/sell)**: Focused on positioning and strategy.
- **Neighbourhoods (/neighbourhoods)**: Comparison-focused.
- **Buildings/Complexes**: All use "Preview" or "Guide" language appropriately.

## 4. Typos and Tiny Fixes
- None found during this audit.

## 5. Conclusion
The metadata and schema implementation is clean, conservative, and follows all launch safety rules. No forbidden schema was found. Preview routes are correctly hidden from search engines via `noindex`.
