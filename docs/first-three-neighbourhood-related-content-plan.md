# First Three Neighbourhoods: Related Content & Listing Module Plan

**Date:** 2026-05-25  
**Status:** Sprint 19B - Data Planning & Recommendations (No Code Changes)  
**Preview Routes:** All three neighbourhoods live as noindex preview pages

---

## Executive Summary

This document prepares the next layer of content for Heritage Woods, Moody Centre, and Glenayre preview routes: related condo buildings, townhouse complexes, and listing module configuration.

**Key Decisions:**
- All listing modules default to `fallback` mode (no verified MLS Reciprocity URLs yet)
- Related buildings/complexes are recommended based on neighbourhood positioning and geographic context
- Lead metadata structure follows the MLS Reciprocity strategy document
- No code changes required at this stage; ready for a future sprint

---

## 1. Heritage Woods Neighbourhood

**Guide Positioning:** Developing neighbourhood with newer construction, diverse housing, accessible parks  
**Target Buyers:** Families seeking newer homes, established amenities, outdoor recreation  
**Current Route Status:** Preview/noindex  

### 1.1 Related Condo Buildings: RECOMMENDED AS NEARBY

**Recommendation:** Show as "Nearby buildings worth comparing" rather than "In Heritage Woods"

No condo buildings are currently assigned to Heritage Woods. However, related buildings in nearby walkable areas may appeal to Heritage Woods buyers:

| Building | Neighbourhood | Status | Reasoning |
|----------|---------------|--------|-----------|
| 50 Electronic Ave | Moody Centre | Preview | Urban alternative; for buyers comparing walkability |
| Platform | Moody Centre | Preview | Central option; SkyTrain proximity |
| George | Moody Centre | Preview | Established central; different lifestyle |
| Sonrisa | Moody Centre | Preview | Value/central trade-off |
| Aria 1 | Suter Brook | Preview | Walkable alternative; village setting |
| Aria 2 | Suter Brook | Preview | Higher-rise; central comparison |
| Libra | Suter Brook | Preview | Walkable village feel |

**Readiness Risks:**
- None of these are in Heritage Woods; positioning as "nearby" requires explicit CTA language
- All related buildings are preview status only (no live guides)
- Moody Centre buildings appeal to urban downsizers, not Heritage Woods demographic
- Unclear whether Heritage Woods buyers would be interested in downtown comparisons

**Recommendation:** Flag for future product decision:
- Option A: Don't show related buildings (focus on Heritage Woods-specific messaging)
- Option B: Show Moody Centre buildings with explicit "For urban comparison" context
- Option C: Wait for Heritage Woods-specific buildings to be added to the data

### 1.2 Related Townhouse Complexes: RECOMMENDED AS NEARBY

**Recommendation:** Show as "Nearby complexes in Port Moody" rather than "In Heritage Woods"

| Complex | Area | Status | Reasoning |
|---------|------|--------|-----------|
| Aria Townhomes | Moody Centre / Brewers Row | Preview | Urban townhouse option; newer feel aligns with Heritage Woods' development positioning |
| Klahanie townhomes | Klahanie | Preview | Alternative to detached homes; central Port Moody setting |

**Heritage Mountain complexes** (Treetops [live], Discovery Ridge [preview]) are geographically near but target different buyers (mature townhouses, quieter setting) vs. Heritage Woods (newer, diverse housing).

**Readiness Risks:**
- Both recommended complexes are in more central areas; may not match Heritage Woods' developing position
- No townhouse complexes currently assigned to Heritage Woods itself
- Aria Townhomes is Brewers Row/urban-access positioning (very different from Heritage Woods)

**Recommendation:** Similar to buildings—defer this until Heritage Woods-specific complexes exist or product strategy clarifies "nearby" vs. "in neighbourhood" distinction.

### 1.3 Listing Module Configuration

```typescript
{
  id: "heritage-woods-listings",
  contextType: "neighbourhood",
  displayName: "Heritage Woods Listings",
  listingSearchMode: "fallback",  // No verified MLS Reciprocity URL yet
  fallbackCta: {
    label: "Ask about homes in Heritage Woods",
    href: "/listings"
  },
  disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
  leadMetadata: {
    intent: "neighbourhood-listing-request",
    pagePath: "/neighbourhoods/heritage-woods",
    neighbourhoodName: "Heritage Woods",
    tags: [
      "source:liveinportmoody",
      "lead_type:buyer",
      "intent:neighbourhood-listing-request",
      "intent:listing-search-support",
      "neighbourhood:heritage-woods",
      "area:port-moody",
      "module_source:neighbourhood_listing_module"
    ]
  },
  provider: undefined,
  notes: "No verified MLS Reciprocity URL. Once GVR provides a tested Heritage Woods area filter, move to gvr_area_search mode."
}
```

**CTA Options:**
- Primary: "Ask about homes in Heritage Woods" → `/listings` with lead form
- Secondary: "View Port Moody listings" → `/listings`
- Form support: "Ask us what's active in Heritage Woods and what to verify before writing."

### 1.4 Open Questions & Risks

- [ ] Should Heritage Woods show Moody Centre buildings/complexes as "nearby comparisons," or remain focused on neighbourhood-only content?
- [ ] Are there Heritage Woods-specific condo buildings or complexes missing from the data?
- [ ] Does the neighbourhood have a distinct condo/townhouse presence, or is it primarily detached/townhouses?
- [ ] Geographic boundary clarity: which buildings/complexes are truly in Heritage Woods vs. adjacent areas?

---

## 2. Moody Centre Neighbourhood

**Guide Positioning:** Downtown core, walkable streets, shops, restaurants, waterfront, urban lifestyle  
**Target Buyers:** Urban-lifestyle seekers, downsizers, active buyers, convenience-focused  
**Current Route Status:** Preview/noindex  

### 2.1 Related Condo Buildings: RECOMMENDED FOR INCLUSION

**Recommendation:** Include all four as "Buildings in Moody Centre"

These are directly positioned in/for Moody Centre and already assigned to the neighbourhood:

| Building | Address | Status | Guide Ready | Photo Status |
|----------|---------|--------|-------------|--------------|
| 50 Electronic Ave | 50 Electronic Avenue, Port Moody | Preview | Guide-in-progress | Unknown |
| Platform | Unknown | Preview | Guide-in-progress | Unknown |
| George | Unknown | Preview | Guide-in-progress | Unknown |
| Sonrisa | Unknown | Preview | Guide-in-progress | Unknown |

**Readiness Status:**
- ✓ All 4 buildings have data files and preview guides
- ✓ All positioned correctly in Moody Centre
- ? Address data: Only 50 Electronic Ave has a full civic address
- ? Photo coverage: Unknown if guides have complete building photos
- ? Listing URLs: No MLS Reciprocity URLs verified yet

**Nearby Comparison Buildings (if distinct geography emerges):**
- Suter Brook buildings (Aria 1, Aria 2, Libra) — walkable but adjacent area, may appeal for comparison
- The Grande — Suter Brook positioning but mentions "Port Moody Centre context"

**Recommendation:** Include all 4 as primary related buildings. Defer Suter Brook comparisons until neighbourhood boundary questions are resolved.

### 2.2 Related Townhouse Complexes: RECOMMENDED FOR INCLUSION

**Recommendation:** Include Aria Townhomes as "Complex in Moody Centre"

| Complex | Address | Area | Status | Guide Ready | Notes |
|---------|---------|------|--------|-------------|-------|
| Aria Townhomes | Brew Street area | Moody Centre / Brewers Row | Preview | Preview only | Urban-access townhomes; newer construction |

**Positioning:** Aria Townhomes is positioned for buyers comparing urban-access townhome options in Moody Centre. This aligns with the neighbourhood's walkable, urban character.

**Other Complexes (Not Recommended for Moody Centre):**
- Treetops — Heritage Mountain; different demographic (families, mature landscaping)
- Discovery Ridge — Heritage Mountain; established family-oriented
- Klahanie townhomes — Different area; different positioning
- College Park townhomes — College Park; quieter residential

**Recommendation:** Include Aria Townhomes only. The distinction between Brewers Row and Port Moody Centre is unclear—may need geographic clarification for future phases.

### 2.3 Listing Module Configuration

```typescript
{
  id: "moody-centre-listings",
  contextType: "neighbourhood",
  displayName: "Moody Centre Listings",
  listingSearchMode: "fallback",  // No verified MLS Reciprocity URL yet
  fallbackCta: {
    label: "Ask about listings in Port Moody Centre",
    href: "/listings"
  },
  disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
  leadMetadata: {
    intent: "neighbourhood-listing-request",
    pagePath: "/neighbourhoods/moody-centre",
    neighbourhoodName: "Moody Centre",
    tags: [
      "source:liveinportmoody",
      "lead_type:buyer",
      "intent:neighbourhood-listing-request",
      "intent:listing-search-support",
      "neighbourhood:moody-centre",
      "area:port-moody",
      "module_source:neighbourhood_listing_module"
    ]
  },
  provider: undefined,
  notes: "No verified MLS Reciprocity URL. Moody Centre has strong listing activity; once GVR provides a tested filtered URL, move to gvr_area_search mode."
}
```

**CTA Options:**
- Primary: "Ask about listings in Port Moody Centre" → `/listings` with lead form
- Secondary: "View Port Moody listings" → `/listings`
- Form support: "Ask us what's active downtown and what to verify before making an offer."

### 2.4 Open Questions & Risks

- [ ] Should related buildings section include a reference to Suter Brook buildings as "nearby walkable options," or keep scope tight to Moody Centre only?
- [ ] Civic address data: Platform, George, and Sonrisa lack full addresses. Is this missing data or intentional (pre-launch buildings)?
- [ ] Listings readiness: All buildings are preview status. Should we wait for live guides before adding listing modules, or proceed with fallback mode?
- [ ] Aria Townhomes positioning: Is "Brew Street area / Moody Centre" the same neighbourhood, or should this be treated as nearby?

---

## 3. Glenayre Neighbourhood

**Guide Positioning:** Quiet, established, detached homes on varied lots, mature trees, privacy, family-friendly  
**Target Buyers:** Families, privacy-seekers, established-character buyers, schools/parks focus  
**Current Route Status:** Preview/noindex  

### 3.1 Related Condo Buildings: NOT RECOMMENDED FOR INCLUSION

**Recommendation:** Do not include condo buildings as "In Glenayre"

**Reasoning:**
- Glenayre is characterized by detached homes, not condos
- Adding downtown condo buildings misrepresents the neighbourhood's character
- Condo buyers and detached-home buyers have different priorities

**Potential Nearby Comparison Buildings (if buyer education is valuable):**
- Suter Brook buildings (Aria 1, Aria 2, Libra) — established, walkable, but urban vs. Glenayre's quiet setting
- The Grande — mentions "central condo lifestyle" vs. Glenayre's quiet character

**Recommendation:** Do not add condo buildings to related content. Glenayre should remain focused on detached homes and local townhouse options. If "downtown comparison" content is valuable for buyers considering alternatives, defer to a future product decision.

### 3.2 Related Townhouse Complexes: RECOMMENDED AS CONTEXTUAL ALTERNATIVES

**Recommendation:** Include as "Townhouse alternatives in Port Moody"—but position carefully to distinguish from Glenayre's detached-home focus

| Complex | Area | Status | Guide Ready | Positioning |
|---------|------|--------|-------------|-------------|
| College Park townhomes | College Park | Preview | Preview only | Quieter residential; similar family-focus to Glenayre |
| Klahanie townhomes | Klahanie | Preview | Preview only | More central; different feel than Glenayre |

**Readiness Risks:**
- College Park is a separate neighbourhood (draft status). Showing College Park townhomes as "related" may confuse neighbourhood boundaries
- Klahanie townhomes are more central/walkable; very different from Glenayre's quiet character
- None of these townhouse complexes are specifically in Glenayre

**Recommendation:** Consider deferring related complexes until Glenayre-specific options exist. If included, College Park townhomes are the closest match in positioning (quiet, family-oriented). Klahanie is too different.

### 3.3 Listing Module Configuration

```typescript
{
  id: "glenayre-listings",
  contextType: "neighbourhood",
  displayName: "Glenayre Listings",
  listingSearchMode: "fallback",  // No verified MLS Reciprocity URL yet
  fallbackCta: {
    label: "Ask about homes in Glenayre",
    href: "/listings"
  },
  disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
  leadMetadata: {
    intent: "neighbourhood-listing-request",
    pagePath: "/neighbourhoods/glenayre",
    neighbourhoodName: "Glenayre",
    tags: [
      "source:liveinportmoody",
      "lead_type:buyer",
      "intent:neighbourhood-listing-request",
      "intent:listing-search-support",
      "neighbourhood:glenayre",
      "area:port-moody",
      "module_source:neighbourhood_listing_module"
    ]
  },
  provider: undefined,
  notes: "No verified MLS Reciprocity URL. Glenayre appeals to family buyers; once GVR provides a tested filtered URL, move to gvr_area_search mode."
}
```

**CTA Options:**
- Primary: "Ask about homes in Glenayre" → `/listings` with lead form
- Secondary: "View Port Moody listings" → `/listings`
- Form support: "Ask us what's active in Glenayre and what to verify before making an offer."

### 3.4 Open Questions & Risks

- [ ] Glenayre's character (quiet, detached, family) suggests townhouse/condo content may not be relevant—should related content be omitted entirely?
- [ ] Neighbourhood boundary clarity: What areas are definitively "in Glenayre" vs. nearby alternatives?
- [ ] Are there detached-home communities or established townhouse complexes specifically in Glenayre that should be added to the data model?
- [ ] Target buyer personas: Does Glenayre attract condo downsizers or primarily established-home buyers? If downsizers are the secondary market, should urban building options be considered?

---

## 4. Building-Specific and Complex-Specific Listing Modules

### 4.1 Moody Centre Buildings Listing Modules

For each of the 4 Moody Centre condo buildings (50 Electronic Ave, Platform, George, Sonrisa), prepare a listing module when building guides are live:

```typescript
{
  id: "50-electronic-ave-listings",
  contextType: "building",
  displayName: "50 Electronic Ave Listings",
  listingSearchMode: "fallback",
  addressSearchUrl: undefined,  // To be tested with GVR when available
  fallbackCta: {
    label: "Ask about listings at 50 Electronic Ave",
    href: "/listings"
  },
  disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
  leadMetadata: {
    intent: "building-listing-support",
    pagePath: "/buildings/50-electronic-ave",
    buildingName: "50 Electronic Ave",
    address: "50 Electronic Avenue, Port Moody",
    tags: [
      "source:liveinportmoody",
      "lead_type:buyer",
      "intent:building-listing-support",
      "building:50-electronic-ave",
      "neighbourhood:moody-centre",
      "area:port-moody",
      "module_source:building_listing_module"
    ]
  },
  notes: "Address search URL to be verified with GVR. Test both full address and address-without-unit variations."
}
```

**Readiness:** Defer building-specific modules until building guides are promoted from preview to live.

### 4.2 Aria Townhomes Listing Module

```typescript
{
  id: "aria-townhomes-listings",
  contextType: "complex",
  displayName: "Aria Townhomes Listings",
  listingSearchMode: "fallback",
  addressSearchUrl: undefined,  // To be tested with GVR when available
  fallbackCta: {
    label: "Ask about listings in Aria Townhomes",
    href: "/listings"
  },
  disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
  leadMetadata: {
    intent: "complex-listing-support",
    pagePath: "/complexes/aria-townhomes",
    complexName: "Aria Townhomes",
    address: "Brew Street area, Port Moody",
    tags: [
      "source:liveinportmoody",
      "lead_type:buyer",
      "intent:complex-listing-support",
      "complex:aria-townhomes",
      "neighbourhood:moody-centre",
      "area:port-moody",
      "module_source:complex_listing_module"
    ]
  },
  notes: "Brew Street area location is approximate. Verify exact complex boundaries and strata name before testing GVR search."
}
```

**Readiness:** Defer until complex guide is promoted from preview to live.

---

## 5. Recommended Implementation Checklist

### Phase 1: Data Preparation (This Sprint)
- [ ] Document building/complex relationships for each neighbourhood (COMPLETE)
- [ ] Create listing module config templates (COMPLETE)
- [ ] Identify open questions and readiness risks (COMPLETE)
- [ ] Flag boundary/geography clarifications needed

### Phase 2: Before Neighbourhood Routes Go Live
- [ ] Clarify neighbourhood boundaries: heritage-woods, moody-centre, glenayre vs. adjacent areas
- [ ] Verify whether related content should show "in neighbourhood" or "nearby comparisons"
- [ ] Confirm which buildings/complexes have complete photo/guide coverage
- [ ] Test GVR MLS Reciprocity URLs for neighbourhood-level filtering
- [ ] Obtain civic addresses for Platform, George, Sonrisa if available

### Phase 3: When Building/Complex Guides Go Live
- [ ] Add related buildings array to Heritage Woods neighbourhood guide (pending decision)
- [ ] Add related buildings array to Moody Centre neighbourhood guide (50 Electronic Ave, Platform, George, Sonrisa)
- [ ] Add related complexes array to Moody Centre neighbourhood guide (Aria Townhomes)
- [ ] Add related complexes to Glenayre (pending decision on detached vs. townhouse positioning)
- [ ] Implement building-specific listing modules (fallback mode) when building guides are promoted to live
- [ ] Implement complex-specific listing modules (fallback mode) when complex guides are promoted to live

### Phase 4: When MLS Reciprocity URLs Verified
- [ ] Test neighbourhood-level GVR URLs (city filter, subarea/neighbourhood filter, property type filters)
- [ ] Test address-level GVR URLs for buildings (full address, address without unit)
- [ ] Test complex-name or strata-name GVR URLs (if supported)
- [ ] Update `listingSearchMode` and `listingUrl` in neighbourhood, building, and complex listing modules
- [ ] Document tested URLs, date, tester, provider, expected vs. actual results
- [ ] Transition from `fallback` mode to `gvr_area_search` or `gvr_address_search`

---

## 6. Content Risk Summary

### Data Gaps
- **Heritage Woods buildings:** No condo buildings assigned. Either none exist, or data is incomplete.
- **Heritage Woods complexes:** No townhouse complexes assigned. Data may be incomplete.
- **Glenayre buildings:** No buildings assigned. Aligns with detached-home positioning, but confirm.
- **Glenayre complexes:** Only College Park townhomes are positioned nearby; unclear if relevant.
- **Civic addresses:** Platform, George, and Sonrisa buildings lack full addresses.

### Boundary/Geography Risks
- **Moody Centre vs. Suter Brook:** The Grande mentions "Suter Brook / Port Moody Centre context." Verify boundary.
- **Moody Centre vs. Brewers Row:** Aria Townhomes is "Brew Street area / Moody Centre." Are these the same?
- **Klahanie vs. nearby areas:** Klahanie buildings description mentions "Rocky Point, Suter Brook, Newport Village." Confirm distinct geography.
- **Heritage Woods vs. adjacent areas:** No related content yet; clarify whether it's intentional or data incomplete.

### Readiness Risks
- **All related buildings/complexes are preview-only:** None have live guides. Linking to preview pages from neighbourhood pages may confuse users.
- **MLS Reciprocity testing not complete:** Listing modules must remain in fallback mode until verified URLs exist.
- **Glenayre's target audience:** Detached-home families. Condo/townhouse buildings may not be relevant; positioning should match buyer intent.

### Compliance Notes
- ✓ No IDX, fake listing cards, or sold data in any recommendations
- ✓ All listing modules default to fallback mode (conservative approach)
- ✓ MLS Reciprocity disclosure included in all modules
- ✓ Lead metadata structure follows MLS Reciprocity strategy guidelines
- ✓ No code changes required (data-only recommendations)

---

## 7. Next Steps & Approvals

### For Product/Design Review:
1. Confirm related buildings/complexes recommendations align with product vision
2. Clarify "in neighbourhood" vs. "nearby" positioning for related content
3. Decide whether Glenayre should include townhouse complex alternatives

### For Data Audit:
1. Verify Heritage Woods and Glenayre building/complex assignments (complete or intentionally empty?)
2. Add civic addresses for Platform, George, Sonrisa if available
3. Clarify neighbourhood boundaries and adjacent-area definitions

### For GVR/MLS Provider:
1. Request tested neighbourhood-level filtering URLs (city + subarea/neighbourhood)
2. Request tested address-level filtering URLs (building/complex address search)
3. Document query parameters, stability, and any restrictions on shared search URLs

### For Next Sprint (19C):
- Implement related buildings/complexes arrays in neighbourhood guides (data only, no route changes)
- Prepare building-specific listing modules (config only, ready for component implementation)
- Prepare complex-specific listing modules (config only, ready for component implementation)

---

## Appendix: Data Status Summary

| Item | Heritage Woods | Moody Centre | Glenayre | Notes |
|------|---|---|---|---|
| Guide Status | Preview | Preview | Preview | All noindex |
| Related Buildings | 0 assigned | 4 assigned | 0 assigned | Data completeness TBD |
| Related Complexes | 0 assigned | 1 assigned | 0 assigned | Data completeness TBD |
| Building Guides Live | N/A | 0 of 4 | N/A | All preview status |
| Complex Guides Live | N/A | 0 of 1 | N/A | All preview status |
| Listing Module Status | Ready (fallback) | Ready (fallback) | Ready (fallback) | No MLS URLs verified |
| Civic Address Data | N/A | Partial (1 of 4) | N/A | Platform, George, Sonrisa missing |
| Photo/Media Status | Unknown | Unknown | Unknown | Coverage check needed |
