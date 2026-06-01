# Technical launch readiness report — LiveInPortMoody.com

Date: 2026-05-31
Sprint: 25L
Deployed commit: c4921db (Sprint 25G)
Smoke result (prelaunch-smoke): ✅ 71 passed | 0 warnings | 0 failed
Crawl result (prelaunch-crawl): ✅ PASS — 86 passed | 20 warnings | 0 failures

---

## Summary

The site is technically ready for launch. All automated checks pass with no failures. All open warnings are documented known gaps — none are blockers.

The remaining blockers are operational, not technical: the lead form CRM integration needs a live test submission, and the legal copy needs a final site-owner review.

---

## Automated check results

### Prelaunch smoke (scripts/prelaunch-smoke.mjs)

| Section | Routes | Result |
|---|---|---|
| 1 — Public gate | 12 routes | ✅ All gated (coming-soon active) |
| 2 — Always-allowed | 6 routes | ✅ All accessible without cookie |
| 3 — Preview unlock | Cookie set/reject | ✅ Correct key sets cookie, wrong key rejected |
| 4 — Core preview routes | 15 routes | ✅ All load with preview cookie |
| 5 — Guide routes | 11 routes | ✅ All load with preview cookie |
| 6 — Sitemap safety | 11 URLs | ✅ www only, no preview leaks |
| 7 — Noindex checks | 8 pages | ✅ Preview=noindex, published/lead=indexable |
| 8 — Safety keywords | 10 pages | ✅ No IDX, sold data, fake content |

### Prelaunch crawl (scripts/prelaunch-crawl.mjs)

| Section | Coverage | Result |
|---|---|---|
| 1 — Metadata | 31 pages | ✅ All pages have title, description, canonical, correct noindex |
| 2 — Internal link analysis | 22 core pages | ✅ No broken/empty/localhost hrefs — 15 anchor-to-unpublished-section warnings (see below) |
| 3 — Extended safety keywords | 12 pages | ✅ No sold prices, IDX scripts, listing cards, lorem ipsum, placeholder tokens |
| 4 — API/form safety | 5 tests | ✅ Validation rejects invalid inputs, rate limiter fires, honeypot silently drops |
| 5 — Static asset check | 17 assets | ✅ All expected assets present — 2 expected gaps noted |
| 6 — Sitemap/robots | Spot check | ✅ 11 URLs, www canonical, heritage-mountain present |

---

## Warnings (non-blocking)

### Link analysis warnings — anchor links to unpublished sections

These are `href="#section-id"` links that point to sections on the same page. The sections either don't exist yet or use different IDs. These are anchor navigation links, not broken routes — the page loads successfully.

| Page | Anchors flagged | Action needed |
|---|---|---|
| Explore | `/resources#schools`, `/move-to-port-moody#trails`, `/move-to-port-moody#transit` | Add anchor IDs to target sections, or update links to point to existing sections |
| Buildings index | `/buildings/suter-brook-buildings` and 7 other slugs | Building guides not yet published — links will resolve when published |
| Buy | `/buy#property-type`, `/buy#buyer-due-diligence`, `/buy#ask-about-a-listing` | Add anchor IDs to the Buy page sections |
| Sell | `/sell#value-opinion` | Add anchor ID to the value-opinion section |

**Priority before launch:** Explore and Buy/Sell page anchors (visitor-facing). Building slugs will resolve as guides are published.

### Content gaps

| Gap | Status | Priority |
|---|---|---|
| `public/images/team/leilani.*` not found | Expected — Leilani's photo not yet provided | High before launch |
| `og-placeholder.jpg` is a placeholder | Expected — branded OG image not yet designed | Medium before launch promotion |

### Sitemap gaps

| Gap | Details |
|---|---|
| `/buyer-guide` not in sitemap | Page is indexable but not in `phaseOneRoutes` — adds to SEO surface |
| `/seller-guide` not in sitemap | Same — add both or neither, but be consistent |

**Recommendation:** Add both to `phaseOneRoutes` in `src/app/sitemap.ts` before launch. These are real lead-capture pages that should be indexed.

---

## Security posture

### Lead API (`/api/lead`)

- ✅ Zod validation rejects malformed input before any CRM call
- ✅ Honeypot field silently drops bot submissions (no CRM call, no error signal)
- ✅ Rate limiter: 3 requests per IP per 15 minutes — returns 429
- ✅ No stack traces or internal details in error responses
- ✅ GHL API token is server-only (`GHL_API_TOKEN`) — never in a `NEXT_PUBLIC_` var

### Known security gap: ListingSupportForm has no honeypot

`src/components/listings/ListingSupportForm.tsx` does not have a honeypot field. Unlike `LeadForm`, it has no bot-submission protection beyond HTML `required` attributes. Not a launch blocker (the page is still gated), but should be added before high-traffic launch or if the listings page is heavily promoted.

### NEXT_PUBLIC_ variables

All NEXT_PUBLIC_* variables are confirmed non-sensitive (see `docs/deployment-notes.md`). No tokens or secrets are browser-exposed.

---

## Content safety

No unsafe patterns found across all checked pages:
- No IDX script tags
- No `data-listing-card` elements
- No sold price data (`sold for $X`)
- No lorem ipsum placeholder text
- No `[PLACEHOLDER]`, `[TODO]`, `[FIXME]` tokens
- No "guaranteed", "best school", "desirable catchment" claims

All preview pages are correctly marked `noindex,follow`. Heritage Mountain (the only published neighbourhood guide) is indexable.

---

## Legal pages

| Page | Body word count | Status |
|---|---|---|
| `/privacy` | ~514 words | ✅ Content present, no placeholders |
| `/terms` | ~438 words | ✅ Content present, no placeholders |

**Required before launch:** Site owner reads both pages and confirms legal copy is complete and approved.

---

## Sitemap

- 11 URLs in sitemap (as of Sprint 25G)
- All use `https://www.` canonical
- Heritage Mountain is the only published neighbourhood guide (1 URL)
- No preview routes leak into sitemap
- Sitemap submitted to Google Search Console: **not yet** (do within 48h of launch)

---

## Pre-launch checklist status

| Item | Status |
|---|---|
| Smoke test passing (71/71) | ✅ Done |
| Crawl test passing (86/0) | ✅ Done |
| Lint passes | ✅ Done |
| Build passes (76 pages) | ✅ Done |
| Metadata clean on all 31 checked pages | ✅ Done |
| Safety keywords clean | ✅ Done |
| CRM API reachable and token valid | ✅ Verified via live deploy (Sprint 25J) |
| Lead form live test with GHL inbox check | ⏳ Pending — do before coming-soon removal |
| Privacy/terms legal review with site owner | ⏳ Pending |
| Leilani team photo | ⏳ Pending |
| Social URLs (Instagram, YouTube, Facebook) | ⏳ Pending — `href="#"` placeholders in footer |
| OG image (branded, not placeholder) | ⏳ Pending |
| MLS Reciprocity search URL | ⏳ Pending — listings page degrades to CTA without it |
| buyer-guide / seller-guide in sitemap | ⏳ Recommended — add before launch |
| Explore/Buy/Sell anchor links | ⏳ Recommended fix before launch |
| Google Search Console sitemap submission | ⏳ Do within 48h of going live |

---

## Scripts reference

```bash
# Gate / noindex / sitemap check (run after every deploy)
npm run smoke:prelaunch

# Metadata / links / safety / API smoke (run before launch and after content changes)
npm run crawl:prelaunch

# Both against production default (https://www.liveinportmoody.com)
# Override with: LIPM_BASE_URL=https://preview-url.vercel.app npm run smoke:prelaunch
```

---

## Technical risk: none blocking

No unresolved technical risks identified. The site is architecturally sound:

- Static generation (76 pages) means no cold-start latency on page load
- Coming-soon gate is middleware-level — cannot be bypassed by URL manipulation
- Preview key is not guessable (not a common word)
- CRM integration uses server-side token only
- No IDX, no sold data, no fake listings at any code path
