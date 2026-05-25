# Neighbourhood Rollout Plan — Sprint 18A

**Status:** In Progress  
**Data Model Created:** 2026-05-25  
**Template Component:** Ready for integration  
**First Page Target:** Heritage Woods (after maps finalized)

---

## Overview

This document outlines the strategy for adding comprehensive neighbourhood guides across Port Moody and nearby communities after the map implementation (Sprint 17E) is complete.

The neighbourhood system is built on:
- **Data Layer:** `src/data/neighbourhoodGuides.ts` — single source of truth for all neighbourhood content
- **Template Component:** `src/components/neighbourhoods/NeighbourhoodGuideTemplate.tsx` — reusable layout shell
- **Route Pattern:** Dynamic routes under `/neighbourhoods/[slug]/page.tsx` (after map completion)

---

## Neighbourhood Taxonomy

### Port Moody Neighbourhoods (areaType: "port_moody_neighbourhood")

**Published (Live):**
- Heritage Mountain (`heritage-mountain`) — **Live, not to be edited during Sprint 18A**

**Draft (Ready for Integration):**
1. **First Batch (4 pages):**
   - Heritage Woods
   - Mountain Meadows
   - Moody Centre
   - College Park
   - Glenayre

2. **Second Batch (4 pages):**
   - North Shore / Ioco / Pleasantside
   - Barber Street
   - Suter Brook
   - Newport Village

3. **Future (2 pages):**
   - Klahanie
   - Seaview

### Nearby Communities (areaType: "nearby_community")

Not Port Moody neighbourhoods; separate municipality codes:
- **Anmore** (`anmore`, municipality: "Anmore")
- **Belcarra** (`belcarra`, municipality: "Belcarra")

---

## Data Schema

### NeighbourhoodGuide Type

All neighbourhood guides follow this structure in `neighbourhoodGuides.ts`:

```typescript
interface NeighbourhoodGuide {
  // Identity
  name: string
  slug: string
  municipality: "Port Moody" | "Anmore" | "Belcarra" | "Coquitlam"
  areaType: "port_moody_neighbourhood" | "nearby_community"

  // Status & Access
  status: "draft" | "preview" | "published" | "hidden"
  publicUrl?: string

  // Content
  shortSummary: string
  intro: string
  bestFor: string[]
  housingTypes: string[]
  tradeOffs: string[]

  // Location & Features
  schools: SchoolInfo[]
  schoolVerificationNote?: string
  parks: ParkInfo[]
  trails: TrailInfo[]
  transitAndAccess: string
  walkabilityNotes: string

  // Guidance
  buyerNotes: string[]
  sellerNotes: string[]
  relatedComplexes: RelatedComplex[]
  relatedBuildings: RelatedBuilding[]

  // Listings
  listingsConfig: NeighbourhoodListingsConfig

  // Media & SEO
  photoStatus: "not_started" | "in_progress" | "complete" | "pending_approval"
  heroImage?: string
  mapLabel?: string
  seoTitle: string
  seoDescription: string

  // FAQ
  faq: FaqItem[]

  // Map coordinates
  latitude: number
  longitude: number
}
```

### Supporting Types

**SchoolInfo:**
```typescript
interface SchoolInfo {
  name: string
  type: "elementary" | "secondary" | "k-12"
  catchmentNote?: string
  district: string
  verificationLink?: string
}
```

**ParkInfo, TrailInfo, RelatedComplex, RelatedBuilding:** See `neighbourhoodGuides.ts` for full definitions.

---

## Content Standards

### School Language

**Rule:** Never state "Home X is in catchment for School Y" without verification.

**Approved language:**
- "Some homes may fall within catchment for School X"
- "Commonly associated with School X for residents"
- "Subject to SD43 boundary verification"

**Always include:** "Always verify exact address with SD43 before assuming enrollment."

### Commute Times

**Rule:** No exact "minutes from" claims.

**Approved language:**
- "Transit access varies by location; verify specific address"
- "Car helpful for daily errands"
- "Good transit to [landmark], car beneficial for outer areas"

### Housing Claims

**Rule:** Describe existing housing, not certainties.

**Approved language:**
- "Mix of detached homes and townhouses"
- "Primarily detached homes with some condos"
- "Development ongoing; verify current housing mix"

### Pricing & Market Claims

**Rule:** No price predictions, averages, or appreciation claims.

**Approved language:**
- "Range of housing types and price points"
- "Pricing driven by [tangible factors: lot size, condition, location]"
- "Monitor development timelines for market implications"

---

## Page Structure (NeighbourhoodGuideTemplate)

All neighbourhood pages follow this structure:

1. **Back Link** — `/neighbourhoods` index
2. **Hero** — Name, intro, status badge
3. **Verification Note** — Standard disclaimer
4. **Quick Facts & Bars** — Summary stats and scoring (to be populated per neighbourhood)
5. **Best For** — FitCards component
6. **Housing Types** — List of common housing
7. **Trade-offs** — Things to consider (highlighted)
8. **Schools** — School info with SD43 verification language
9. **Parks & Trails** — Location and feature details
10. **Transit & Walkability** — Access summary
11. **Buyer Notes** — Guidance (strata, grading, catchments, etc.)
12. **Seller Notes** — Market positioning
13. **Related Complexes** — Placeholder (no complexes wired yet)
14. **Related Buildings** — Placeholder (no buildings wired yet)
15. **Listings Module** — Placeholder (awaits MLS Reciprocity integration)
16. **FAQ** — Neighbourhood-specific questions
17. **CTA Section** — "Ask a question" placeholder

---

## Listings Module Integration

**Current Status:** Placeholder only. No real listings rendered.

**Dependencies:**
- MLS Reciprocity API integration must be complete
- NeighbourhoodListingsConfig mode must be set to one of:
  - `gvr_area_search` — Use GVR API area search
  - `saved_search_url` — Link to saved search
  - `vendor_idx_url` — Link to vendor IDX
  - `manual_link` — Link to MLS site
  - `none` — No listings section (for draft pages)

**Timeline:** To be integrated after MLS Reciprocity is live.

---

## Photo & Asset Requirements

### Hero Images

**Status:** Not started for draft neighbourhoods.

**Requirements:**
- Representative neighbourhood scenes (street, park, homes)
- Local Port Moody photography preferred
- Must have explicit usage rights
- Placeholder acceptable until approved asset available

### Map Labels

All guides include a `mapLabel` for the neighbourhood map (in mapPoints.ts).

---

## School Verification Standard

**Before publishing any page with school info:**

1. ✓ Verify school names and districts are current
2. ✓ Check for any boundary changes in past 12 months
3. ✓ Include "verify with SD43" language in copy
4. ✓ Link to official SD43 site or school page
5. ✓ Use cautious language ("may fall within", "commonly associated with")
6. ✓ Include `schoolVerificationNote` at top of schools section

**Never assume:** Don't say "homes in X neighbourhood attend Y school" — always caveat.

---

## SEO Fields

Each guide has:
- **seoTitle** — 50-60 chars, neighbourhood name + "Port Moody Neighbourhood Guide"
- **seoDescription** — 150-160 chars, brief summary + key features

Example:
```
seoTitle: "Heritage Mountain Port Moody Neighbourhood Guide"
seoDescription: "A local guide to Heritage Mountain in Port Moody, including housing types, townhouse complexes, parks, trails, schools, transit, buyer notes, and seller notes."
```

---

## Integration Timeline

### Sprint 18A (Current)
- ✓ Data model created (`neighbourhoodGuides.ts`)
- ✓ Draft data seeded for all 12+ neighbourhoods
- ✓ Template component created (`NeighbourhoodGuideTemplate.tsx`)
- ✓ Rollout documentation completed
- No routes added yet (waiting for map completion)

### Sprint 18B+ (After Maps)
1. **Week 1:** Create dynamic `/neighbourhoods/[slug]/page.tsx` route
2. **Week 2:** Integrate Heritage Woods (first draft)
3. **Week 3:** Add Mountain Meadows, Moody Centre, College Park, Glenayre
4. **Week 4+:** Continue with second batch

### MLS Integration Timeline (Parallel)
- When MLS Reciprocity is ready, update `listingsConfig` mode for each neighbourhood
- Add corresponding listings UI to template or separate component

---

## Recommended First Batch

**Publish in this order (rationale):**

1. **Heritage Woods** — Newer development, popular with buyers
2. **Mountain Meadows** — High buyer interest, established character
3. **Moody Centre** — Urban lifestyle angle, downtown revitalization
4. **College Park** — Student market + family market
5. **Glenayre** — Quiet residential, well-understood neighbourhood

**Why this order:**
- Mix of neighbourhood types (new, established, urban, quiet)
- Covers different buyer personas
- Less overlap with existing Heritage Mountain page
- Can leverage existing photography/maps progressively

---

## Leilani's Content Conversion Notes

**If intros or descriptions from Leilani are available:**

Conversion rules:
1. Keep warm, local tone ✓
2. Remove overcertain claims (schools, commute times, certainty) ✓
3. Convert parks/trails into structured arrays ✓
4. Add school verification language ✓
5. Include buyer/seller perspective notes ✓
6. Update photography status and placeholders ✓

All draft data in `neighbourhoodGuides.ts` follows these rules.

---

## Files Modified / Created

**New Files:**
- `src/data/neighbourhoodGuides.ts` — Complete data model with 12+ neighbourhood drafts
- `src/components/neighbourhoods/NeighbourhoodGuideTemplate.tsx` — Reusable layout component
- `docs/neighbourhood-rollout-plan.md` — This document

**Not Modified (Per Sprint Constraints):**
- ❌ `/neighbourhoods/page.tsx`
- ❌ `/neighbourhoods/heritage-mountain/page.tsx`
- ❌ Map components
- ❌ `mapPoints.ts`

**Next Steps (Sprint 18B+):**
- Create dynamic route `/neighbourhoods/[slug]/page.tsx`
- Integrate template into dynamic route
- Publish first batch of neighbourhood pages
- Add listings module when MLS Reciprocity ready

---

## Quality Checklist

Before publishing any neighbourhood page:

- ✓ Data accurate and current
- ✓ School language includes "verify with SD43"
- ✓ No overcertain commute claims
- ✓ No fake data or statistics
- ✓ SEO title/description filled
- ✓ Hero image status set appropriately
- ✓ FAQ includes 3-5 relevant questions
- ✓ Buyer and seller notes complete
- ✓ Build passes (npm run build)
- ✓ Lint passes (npm run lint)
- ✓ No 404s from internal links
- ✓ Mobile responsive (tested on mobile)
- ✓ Related complexes/buildings accurate if linked

---

## Reference

- **Data file:** `src/data/neighbourhoodGuides.ts`
- **Component:** `src/components/neighbourhoods/NeighbourhoodGuideTemplate.tsx`
- **Map integration:** Awaits Sprint 17E completion
- **Related docs:** `/final-launch-blockers.md`, `/route-integration-audit.md`

For questions or updates, reference this plan document.
