# Neighbourhood Preview Routes — Internal Linking Plan

**Date:** 2026-05-25  
**Sprint:** 19C  
**Status:** Planning (pre-QA, no implementation yet)  
**Purpose:** Document linking strategy for noindex preview neighbourhood routes after Agent 3 QA passes

---

## Executive Summary

Three neighbourhood guides are now live as noindex preview routes:
- `/neighbourhoods/heritage-woods`
- `/neighbourhoods/moody-centre`
- `/neighbourhoods/glenayre`

This document outlines where and how to link to these preview pages internally **after Agent 3 QA passes**, ensuring we drive traffic to the guides while keeping them excluded from search engines until intentionally published.

**Key principle:** Internal linking is safe for noindex pages. External linking and SEO discovery are not.

---

## Current Preview Routes & Status

### Routes (Live, Noindex)

| Neighbourhood | Route | Status | Robots | Sitemap |
|---|---|---|---|---|
| Heritage Woods | `/neighbourhoods/heritage-woods` | preview | noindex, follow | ❌ Excluded |
| Moody Centre | `/neighbourhoods/moody-centre` | preview | noindex, follow | ❌ Excluded |
| Glenayre | `/neighbourhoods/glenayre` | preview | noindex, follow | ❌ Excluded |
| Heritage Mountain | `/neighbourhoods/heritage-mountain` | published | index, follow | ✅ Included |

### Safety Status

- ✅ Noindex confirmed on all preview routes
- ✅ Sitemap exclusion confirmed (only Heritage Mountain included)
- ✅ No template placeholders remain (replaced with proper modules)
- ✅ School wording uses cautious language ("may be associated", "verify with SD43")
- ✅ Parks/trails source verification language present
- ✅ Value-growth language removed
- ✅ Listings fallback module present with MLS Reciprocity disclosure
- ✅ Contact form link points to real `/contact` page

**Awaiting:** Agent 3 QA pass before any internal linking implementation

---

## Recommended Linking Locations

### ✅ SAFE TO LINK (After QA Passes)

#### 1. /neighbourhoods Index Page (Primary Hub)

**Current:** Heritage Mountain card only  
**Proposed:** Add preview cards for Heritage Woods, Moody Centre, Glenayre

**Link label strategy:**
```
Heritage Woods
Guide preview • Neighbourhood guide in progress
[Learn more →]
```

**Rationale:**
- Guides live at this index anyway
- Users expecting to find neighbourhood content
- Preview label sets expectations clearly
- No SEO benefit needed (page is already noindex)

**Implementation:**
- Add three new cards to `/src/app/neighbourhoods/page.tsx`
- Use preview badge tone (slate or amber)
- Link text: "Learn more about [Neighbourhood]"
- Subtext: "Guide preview"

---

#### 2. /explore Page

**Current:** General exploration page (no neighbourhood links)  
**Proposed:** Add preview neighbourhood CTAs to relevant sections

**Sections to consider:**
- "Discover Neighbourhoods" or similar section
- Links to each guide for deeper exploration
- Tone: "Explore this neighbourhood in detail"

**Link label strategy:**
```
Explore Moody Centre
Downtown living, walkable lifestyle, waterfront parks
[Discover →]
```

**Rationale:**
- `/explore` is designed for user discovery
- Preview pages have detailed content worth exploring
- Internal navigation keeps traffic in-site
- Users who land here are actively exploring

---

#### 3. /move-to-port-moody Page

**Current:** General relocation guide  
**Proposed:** Link preview guides where relevant to relocation questions

**Sections to consider:**
- "Which neighbourhood is right for you?"
- Comparisons or decision guides
- Links to specific neighbourhood guides

**Link label strategy:**
```
Moody Centre for downsizers and urban lifestyle seekers
Heritage Woods for growing families
Glenayre for quiet residential living
```

**Rationale:**
- Users on this page are deciding where to live
- Preview guides provide decision-making content
- Clear link context (persona matching)

---

#### 4. Related Sections on /buy Page

**Current:** Real estate buying guidance  
**Proposed:** Link to relevant neighbourhood guides in buying context

**Sections to consider:**
- "Find a neighbourhood"
- Buyer guide comparisons
- Market segment matching

**Link label strategy:**
```
Ask about homes in [Neighbourhood]
[View neighbourhood guide]
```

**Rationale:**
- Buyers need neighbourhood context
- Preview guides have buyer notes and considerations
- Links support the buying journey

---

#### 5. Map Popups (Preview Routes Only)

**Current:** Map may show all neighbourhoods  
**Proposed:** Preview route popups link to guides once live

**Conditional:** Only after route status considered "live preview" (after final QA)

**Link label strategy:**
```
Heritage Woods
[Explore guide →]
```

**Rationale:**
- Maps are internal navigation
- Popup context makes guide link clear
- Only enable once confident in route stability

---

### ❌ NOT RECOMMENDED FOR PREVIEW ROUTES

#### Footer Links
- **Why:** Footer links are typically for main, published content
- **Alternative:** Use footer only for Heritage Mountain (published)
- **Future:** Add preview routes once published

#### Blog Post Links
- **Why:** Blog posts are SEO-heavy and may be indexed
- **Alternative:** Consider blog posts only for published routes
- **Future:** Reference preview routes once indexed

#### External Navigation (Breadcrumbs to individual guides)
- **Why:** Breadcrumbs imply top-level, discoverable content
- **Alternative:** Keep breadcrumbs contextual within preview pages only

---

## Link Label Strategy for Preview Pages

### Recommended Labels

| Label | Context | Use Case |
|---|---|---|
| **Guide preview** | Neutral, honest | `/neighbourhoods` cards, explore page |
| **Neighbourhood guide in progress** | Transparent | Where space allows for detail |
| **Ask about this area** | Call-to-action | `/buy` or `/listings` context |
| **Explore [neighbourhood]** | Inviting | Explore page, discovery contexts |
| **Discover more** | General | Where space is limited |

### Avoid These Labels

| Label | Why Not |
|---|---|
| "Full guide" | Implies complete/finished; preview is not finished |
| "Complete guide" | Same as above; may mislead on content readiness |
| "Market stats" | We don't have market-specific stats; avoid false specificity |
| "Live listings" | No listing integration yet; avoid false claim |
| "Buyer's guide" | Too authoritative for preview status |

### Badge Strategy

**Use preview badge on cards:**
```
Status badge: "Preview" (slate tone)
Next to guide name or below
Helps users understand content status
```

---

## CTA Strategy from Preview Pages

Each preview page contains these CTAs:

1. **Listings CTA:**
   - Button: "Ask about homes in [Neighbourhood]"
   - Link: `/listings`
   - Disclosure: MLS Reciprocity message displayed
   - Purpose: Connect interested users to listings module

2. **Contact CTA:**
   - Button: "Get in Touch"
   - Link: `/contact`
   - Tone: "Have more questions about [Neighbourhood]?"
   - Purpose: Direct users to get personalized guidance

3. **Related Guides (Future):**
   - Once linking is implemented, may show related neighbourhood comparisons
   - Example: "Compare with Heritage Mountain" (on Glenayre page)

---

## Pre-Implementation Conditions (QA Gates)

**All of these must be true before any internal linking is added:**

- [ ] **Agent 3 QA passes** — No blocking issues found
- [ ] **No template placeholders remain** — Listings and contact forms are real
- [ ] **No stale school data** — School references verified and cautious
- [ ] **Parks/trails source verification present** — City of Port Moody attribution visible
- [ ] **Listing fallback module works** — MLS Reciprocity disclosure displays correctly
- [ ] **Noindex confirmed on all routes** — `<meta name="robots" content="noindex, follow"/>`
- [ ] **Sitemap exclusion confirmed** — Preview routes absent from sitemap.xml
- [ ] **No value-growth language** — Moody Centre cleaned of appreciation claims
- [ ] **Links render correctly** — Contact and listings CTAs work
- [ ] **No visual regressions** — Preview badges and layout consistent

---

## Pre-Publishing Conditions (Future Milestone)

These conditions apply **only when transitioning from preview to published:**

- [ ] **Hero photos acceptable** — Photo strategy finalized or acceptable placeholder
- [ ] **Listing module/fallback acceptable** — MLS Reciprocity or other strategy approved
- [ ] **School/parks content verified** — Address-specific accuracy confirmed or disclaimers adequate
- [ ] **Noindex intentionally removed** — Decision made to index
- [ ] **Sitemap inclusion intentionally added** — Route added to sitemap
- [ ] **Guide status changed to published** — `status: "published"` in data
- [ ] **Final QA completed** — Published content tested end-to-end
- [ ] **Public announcement ready** — If applicable (e.g., blog post, homepage feature)

---

## Implementation Checklist (For Future Sprint)

**Timeline:** Implement after Agent 3 QA passes and conditions above are met

### Phase 1: /neighbourhoods Index (Primary)
- [ ] Add Heritage Woods card to `/neighbourhoods/page.tsx`
  - [ ] Preview badge (slate tone)
  - [ ] Link to `/neighbourhoods/heritage-woods`
  - [ ] Clear label: "Guide preview"
  - [ ] Subtext: Description of neighbourhood
- [ ] Add Moody Centre card
  - [ ] Same structure as above
- [ ] Add Glenayre card
  - [ ] Same structure as above
- [ ] Test card rendering and links
- [ ] Verify noindex still present on routes
- [ ] Verify sitemap still excludes preview routes

### Phase 2: /explore Page (Secondary)
- [ ] Identify appropriate section for neighbourhood discovery
- [ ] Add preview neighbourhood cards or links
- [ ] Use appropriate link labels
- [ ] Test navigation flow
- [ ] Verify internal links work

### Phase 3: /move-to-port-moody (Conditional)
- [ ] Assess relevance to relocation content
- [ ] Add neighbourhood comparisons if applicable
- [ ] Use persona-focused link labels
- [ ] Test user journey

### Phase 4: /buy Page (Conditional)
- [ ] Assess relevance to buying journey
- [ ] Add neighbourhood discovery section if applicable
- [ ] Test buying-context linking

### Phase 5: Map Popups (Lowest Priority)
- [ ] Conditional on map implementation readiness
- [ ] Only enable after route stability confirmed
- [ ] Use popup-appropriate link labels

### Phase 6: Verification
- [ ] Smoke test all preview routes
- [ ] Confirm noindex on all routes
- [ ] Verify sitemap exclusion persists
- [ ] Check for broken links
- [ ] Test on mobile and desktop

---

## Monitoring After Implementation

### Metrics to Track

1. **Traffic to preview routes:**
   - Source: Analytics (internal linking should show as "direct" or "organic (not provided)")
   - Goal: Measure user interest before publishing

2. **Noindex compliance:**
   - Tool: Google Search Console (if connected)
   - Goal: Confirm preview routes never indexed

3. **Sitemap compliance:**
   - Tool: sitemap.xml download
   - Goal: Verify exclusion persists

4. **Link health:**
   - Tool: Link checker or analytics
   - Goal: Catch broken links to preview routes

5. **User behavior on preview routes:**
   - Goal: Identify common questions or pain points before publishing
   - Tool: Analytics (scroll depth, CTA clicks)

---

## Rollback Plan

**If issues arise with preview route linking:**

1. **Quick rollback:** Remove internal links from implementation pages
   - Remove cards from `/neighbourhoods`
   - Remove explore/buy links
   - Revert map popups

2. **Keep routes live:** Preview routes remain accessible via direct URL if needed
   - Users with direct links can still access
   - Noindex protects from SEO issues

3. **Preserve noindex:** Ensure metadata not affected by rollback
   - Noindex remains in place
   - Routes continue to be excluded from sitemap

---

## Decision Log

**Sprint 19C — Planning only, no implementation**
- ✅ Linked strategy documented
- ✅ QA gates defined
- ✅ Implementation checklist created
- ⏳ Awaiting Agent 3 QA completion
- ⏳ Implementation deferred to future sprint (19D or later)

---

## References

- **Route files:** `src/app/neighbourhoods/[slug]/page.tsx`
- **Navigation:** `src/app/neighbourhoods/page.tsx`
- **Data:** `src/data/neighbourhoodGuides.ts`
- **Sitemap:** `src/app/sitemap.ts`
- **SEO module:** `src/lib/seo.ts`
- **Template:** `src/components/neighbourhoods/NeighbourhoodGuideTemplate.tsx`

---

## Sign-Off

**Document Status:** Ready for planning discussion  
**Implementation Status:** Pending Agent 3 QA completion  
**Approval:** Awaiting QA pass before implementation

No code changes or build required at this stage.
