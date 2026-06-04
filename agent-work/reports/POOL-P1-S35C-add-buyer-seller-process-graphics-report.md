# POOL-P1-S35C Report: Add Buyer and Seller Process Graphics

**Task:** Add agent-safe, branded process graphics to buyer and seller pages  
**Status:** ✅ COMPLETE  
**Date:** June 3, 2026

---

## Summary

Added buyer decision framework and seller preparation framework graphics to `/buy` and `/sell` pages respectively. Both use responsive 5-column grid layout with card-based design matching the existing pattern from S35D/S35E.

---

## Changes

### 1. /buy page (`src/app/buy/page.tsx`)

**Added:** Buyer decision framework graphic  
**Location:** New Section inserted after "Start with the decision" section, before "Choose your area" section  
**Type:** 5-column responsive grid with centered cards

**Stages:**
1. **Area fit** — Neighbourhood walkability, schools, transit, trails, quiet, commute, lifestyle match
2. **Property type** — Condo, townhouse, or detached? Space, layout, maintenance, privacy, renovation
3. **Building / Strata** — Fees, reserve fund, insurance, bylaws, condition, parking, storage, work
4. **Listing context** — Exposure, condition, layout, parking, price vs. comparables, trade-offs
5. **Offer decision** — Inspection results, strata review, financing, subject removal, negotiation

**Design:**
- Card layout: `rounded-lg border border-softBorder bg-white p-5 text-center`
- Title: `font-heading text-lg text-deepInlet`
- Detail: `text-xs leading-5 text-slateText`
- Grid: `gap-4 sm:grid-cols-2 lg:grid-cols-5`

---

### 2. /sell page (`src/app/sell/page.tsx`)

**Added:** Seller preparation framework graphic  
**Location:** New Section inserted after "Selling process" section, before "What buyers value" section  
**Type:** 5-column responsive grid with centered cards

**Stages:**
1. **Pricing context** — Recent sales, active competition, strata situation, condition, micro-market comparables
2. **Prep & presentation** — Repairs, cleaning, staging, lighting, photos, strata docs, disclosure
3. **Launch strategy** — MLS copy, photography, video, social, distribution, timeline, follow-up
4. **Showing feedback** — Buyer comments, objections, price perception, positioning, timeline adjust
5. **Offer review** — Terms, subjects, dates, contingencies, deposit, closing, counter strategy

**Design:** Matching /buy page (same card and grid styling)

---

## Validation Results

✅ **Lint:** No ESLint warnings or errors  
✅ **Build:** Compiled successfully (all 86 pages)  
✅ **Crawl:** 105 tests passed (1 warning: rate limiter from prior run, not related to changes)

**Key checks:**
- `/buy` page: ✅ links clean
- `/sell` page: ✅ links clean
- No unsafe patterns detected
- All internal links resolve correctly

---

## Design Alignment

Both graphics follow the established pattern from S35D/S35E:
- ✅ Responsive grid (5 columns on desktop, 2 on tablet, stacked on mobile)
- ✅ Card-based layout with rounded borders and soft borders
- ✅ Centered text with consistent typography (heading size lg, detail size xs)
- ✅ No images or invented facts — pure information architecture
- ✅ Accessible text equivalents (no image-only content)
- ✅ Mobile-friendly stacking

---

## Accessibility

- ✅ No image-only text; all information readable in text
- ✅ Clear headings for each stage
- ✅ Descriptive detail text (readable at xs size due to semantic importance)
- ✅ Responsive grid stacks cleanly on mobile (2 columns → 1 column depending on screen)
- ✅ No color-only information encoding
- ✅ Proper semantic HTML (article, h3, p tags)

---

## Files Changed

- ✅ `src/app/buy/page.tsx` — Added buyer decision framework Section
- ✅ `src/app/sell/page.tsx` — Added seller preparation framework Section

---

## Next Steps

**S35G (Visual recapture — In active):**  
Now unblocked. S35C and S35E are both complete. S35D was previously done.  
Ready to capture screenshots of /buy and /sell at both viewport sizes (1440x1200 desktop, 390x844 mobile).

**For launch:**
- Two new framework graphics provide visual structure for buyer and seller decision-making
- Clear progression from area → property type → building → listing → offer for buyers
- Clear progression from pricing → prep → launch → feedback → offer for sellers

---

**Report created:** June 3, 2026  
**Task transition:** active → done
