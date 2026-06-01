# Pre-launch launch blockers — LiveInPortMoody.com

Last updated: 2026-05-31
Deployed commit: c4921db (Sprint 25G)
Smoke result: ✅ 71 passed | 0 warnings | 0 failed
Crawl result: ✅ 86 passed | 20 warnings | 0 failures (Sprint 25L)

---

## 1 — Blocking before public launch

True blockers that must be resolved before removing coming-soon:

| Item | Detail | How to fix |
|---|---|---|
| Lead form submission must be working | GoHighLevel API integration sends to CRM. Verify with a real test submission on `/contact`. | Submit a test form. Check GHL inbox. |
| Privacy and terms pages must be final | `/privacy` and `/terms` load correctly. Verify legal copy is complete and approved. | Read both pages with the site owner. |

> **No critical technical blockers identified.** The smoke test passes 71/71. Coming-soon gate works. Preview unlock works. Noindex is correct on all preview pages. Sitemap is clean.

---

## 2 — Important before public launch

These are not launch blockers but reduce trust, coverage, or conversion quality:

| Item | Status | Priority |
|---|---|---|
| Real client testimonials / Google review excerpts | Not published yet. `/testimonials` page is a placeholder frame. | High — trust signal |
| Real accolades / professional recognition | Not published yet. `/accolades` page is a placeholder frame. | Medium |
| Social links (Instagram, YouTube, Facebook) in footer | Still `href="#"` placeholders. | Medium — fix before promoting socially |
| Team photo (Paul and Leilani) | `/about` and homepage show placeholder state. | Medium — trust signal |
| OG social preview image | Currently generic. Should use branded image for sharing. | Medium |
| MLS Reciprocity search URL | `/listings` degrades to CTA if `NEXT_PUBLIC_GVR_RECIPROCITY_SEARCH_URL` is unset. | Medium — listings search won't work until configured |
| Submit sitemap to Google Search Console | Sitemap exists and is clean. Manual submission needed. | Do within 48h of launch |
| Add buyer-guide and seller-guide to sitemap | Both pages are indexable but not in `phaseOneRoutes`. Add to `src/app/sitemap.ts`. | Low — adds SEO coverage for lead pages |
| Fix anchor links on Explore/Buy/Sell pages | `#schools`, `#trails`, `#transit`, `#property-type`, `#buyer-due-diligence`, `#ask-about-a-listing`, `#value-opinion` point to sections without matching anchor IDs. | Low — links don't 404 but don't scroll |
| ListingSupportForm honeypot | `/listings` form has no honeypot field (unlike LeadForm). Not a blocker while gated. | Low — add before heavy traffic |
| Neighbourhood guide photos | 13 neighbourhood guides exist as previews. Photo content is the primary gap. | Ongoing — can launch without; publish as ready |
| Publish remaining neighbourhood guides | Only Heritage Mountain is status "published". Others are "preview" with noindex. | Ongoing — publish one at a time as content is ready |
| Publish remaining complex guides | Only Treetops is "guide-live". Others are preview. | Ongoing |
| Publish building guides | All 13 are "preview". | Ongoing |

---

## 3 — Not blockers while coming-soon is active

These are correct behavior during pre-launch:

- Coming-soon gate is on — public visitors see coming-soon page
- Preview routes have `noindex, follow` — correct, they should not be indexed yet
- Sitemap excludes preview routes — correct
- Social links show `href="#"` — acceptable until URLs are confirmed
- Listing search may degrade to CTA — acceptable without MLS configuration
- Building, complex, and neighbourhood guides are "preview" — correct state

---

## 4 — Last smoke test result

```
Date:     2026-05-31
Commit:   c4921db (Sprint 25G: add prelaunch smoke test)
Deploy:   https://liveinportmoody.com (Vercel prod, dpl_9jNykbzkBzrX6W6M2PAB4vAp8fx4)
Command:  npm run smoke:prelaunch

Result:   ✅ PASS — 71 passed | 0 warnings | 0 failed

Sections:
  1 Public gate (12 routes)         ✅ all gated
  2 Always-allowed (6 routes)       ✅ all accessible
  3 Preview unlock                  ✅ cookie set, redirect correct, wrong key rejected
  4 Core preview routes (15)        ✅ all accessible with cookie
  5 Guide routes (11)               ✅ all accessible with cookie
  6 Sitemap safety                  ✅ 11 URLs, www only, no preview leaks
  7 Noindex checks (8 pages)        ✅ preview=noindex, published/lead=indexable
  8 Safety keywords (10 pages)      ✅ no IDX, no sold data, no fake content
```

## 4b — Last crawl result

```
Date:     2026-05-31
Sprint:   25L (add launch readiness crawl and technical audit)
Command:  npm run crawl:prelaunch

Result:   ✅ PASS — 86 passed | 20 warnings | 0 failures

Sections:
  1 Metadata (31 pages)             ✅ all titles, descriptions, canonicals, noindex correct
  2 Internal link analysis (22)     ✅ no broken hrefs — 15 anchor-to-unpublished-section warnings
  3 Extended safety keywords (12)   ✅ no sold prices, IDX, listing cards, lorem ipsum
  4 API/form safety (5 tests)       ✅ validation rejects, rate limit fires, honeypot drops
  5 Static assets (17 files)        ✅ all present — 2 expected content gaps noted
  6 Sitemap/robots spot check       ✅ 11 URLs, www only, heritage-mountain present

Warnings (not failures):
  - Anchor links to unpublished sections on Explore, Buildings, Buy, Sell
  - No Leilani team photo (expected gap)
  - og-placeholder.jpg not yet replaced (expected gap)
  - buyer-guide and seller-guide not in sitemap (recommended addition)
```

---

## 5 — To remove coming-soon

When ready to go public:
1. Confirm lead form submissions are working (test live)
2. Confirm social URLs are real or placeholder text updated
3. Set `COMING_SOON_ENABLED=false` in Vercel project settings (Production target)
4. Redeploy or trigger a new build
5. Run `npm run smoke:prelaunch` (gate checks will be expected failures — update or skip section 1)
6. Submit sitemap to Google Search Console
7. Announce
