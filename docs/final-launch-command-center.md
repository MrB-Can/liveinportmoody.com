# Final Launch Command Center — LiveInPortMoody.com

**Date:** 2026-06-01
**Overall status:** READY TO LAUNCH — 1 functional blocker + owner sign-off remaining.

---

## Launch Status at a Glance

| Area | Status | Notes |
|---|---|---|
| Lint | ✅ Clean | 0 errors |
| Build | ✅ Clean | 86 pages, exit 0 |
| Smoke | ✅ 71/71 | All routes 200 |
| Crawl | ✅ 106/106 | 1 known gap: Leilani photo |
| Visual review | ✅ Launch-ready | No P0/P1; P2 items are post-launch |
| SEO/claim safety | ✅ Clean | Minor wording fixes applied |
| Link/copy safety | ✅ Clean | No invented claims, no dead links |
| Sitemap | ✅ 25 URLs | All https://www., correct noindex on previews |
| GHL CRM integration | ⏳ Awaiting live test | Runbook ready; no real lead submitted yet |
| Legal (privacy/terms) | ⏳ Awaiting owner review | Language needs Paul's sign-off |
| Owner approval | ⏳ Awaiting Leilani/Paul | Homepage, nav, funnels |
| Social links | ⚠️ Owner decision needed | Still href="#" — needs real URLs or stays hidden |
| Leilani photo | ⚠️ Owner decision needed | Placeholder on /meet-us |
| Buildings mobile | ⚠️ Known issue | Fragmented render on mobile (see below) |

---

## The One Technical Blocker

**GHL live form test has not been performed.**

A real form submission must land in GoHighLevel before the site goes public. The runbook is complete and waiting:

**→ `docs/ghl-live-form-test-runbook.md`**

Start with Form 1 (`/contact`). A single successful contact appearing in GHL with correct pipeline/stage/owner/tags is enough to confirm the integration is live. Then run Forms 2–5 and clean up test contacts.

---

## Known Issues — Decide Before or After Launch

### Buildings page — mobile rendering fragmented (High severity)
- Reported by Agent 5 (A5-S28A): page content appears broken or partially loaded on 390px mobile.
- Not confirmed by Agent 2's text-based review (which could not view screenshots directly).
- **Recommendation:** Open `/buildings` on a real phone before launch. If broken: fix or add a "best viewed on desktop" notice. If acceptable: ship and fix post-launch.

### Comparison tables cut off on mobile (Medium)
- `/neighbourhoods` and `/complexes` comparison tables overflow without horizontal scroll.
- Fix: wrap tables in `overflow-x-auto` container.
- **Recommendation:** Quick fix — about 5 lines of code. Do it before launch or accept as post-launch P2.

### Social footer placeholder (Low)
- Footer shows "Social links coming soon" placeholder.
- **Recommendation:** Owner decision — replace with real URLs or hide until ready.

---

## Owner Sign-Off Items

These require Paul and/or Leilani to review and confirm before removal. The intake kit and checklist are at:

- **`docs/owner-launch-checklist.md`** — non-technical pre-launch sign-off checklist
- **`docs/owner-content-intake-kit.md`** — missing content inventory and what to collect

Key items:
- [ ] Privacy and terms language reviewed
- [ ] Homepage hero, headline, and CTA approved
- [ ] Nav and funnel pages (/buy, /sell, /home-evaluation, /buyer-guide, /seller-guide) approved
- [ ] Social links: real URLs provided or intentionally staying hidden
- [ ] Leilani photo: real photo provided or placeholder accepted for launch

---

## Exact Next 10 Actions (in order)

1. **Verify Vercel env vars** — In Vercel Dashboard → Production, confirm: `CRM_MODE=ghl`, `GHL_API_TOKEN` valid, `GHL_LOCATION_ID`, `GHL_PIPELINE_ID`, `GHL_STAGE_ID`, `GHL_OWNER_BUYER_USER_ID`, `GHL_OWNER_SELLER_USER_ID`.

2. **Run GHL live test — Form 1** — Open `docs/ghl-live-form-test-runbook.md`. Visit `https://www.liveinportmoody.com/contact` (preview cookie required). Submit with a real email inbox. Confirm contact appears in GHL.

3. **Run GHL live test — Forms 2–5** — If Form 1 passes, run home-evaluation, buyer-guide, seller-guide, request-recent-sales in order.

4. **Delete GHL test contacts** — Search "LIPM Test" in GHL Contacts and delete all. Confirm no automated workflows fired.

5. **Decide: Buildings mobile issue** — View `/buildings` on a real phone. Fix, accept, or add notice.

6. **Fix comparison tables (optional before launch)** — Wrap table in `/neighbourhoods` and `/complexes` pages in `overflow-x-auto`.

7. **Review privacy/terms** — Read the current `/privacy` and `/terms` pages. Approve or flag changes needed.

8. **Owner walkthrough** — Paul and Leilani step through homepage → /buy → /sell → /home-evaluation → /contact using the preview URL. Tick off `docs/owner-launch-checklist.md`.

9. **Flip the switch** — In Vercel Dashboard: set `COMING_SOON_ENABLED=false`. Redeploy via `vercel --prod` or Dashboard → Redeploy. Full runbook: `docs/coming-soon-removal-runbook.md`.

10. **Post-launch smoke** — Open `https://www.liveinportmoody.com/` in incognito. Confirm homepage loads (not coming-soon). Monitor Vercel → Functions → `/api/lead` for errors for the first 30 minutes.

---

## What Is Complete

| Sprint | Agent | Deliverable |
|---|---|---|
| A1-S28B | Agent 1 | Final production launch QA — all routes 200, smoke/crawl clean |
| A1-S28C | Agent 1 | GHL live form test runbook (`docs/ghl-live-form-test-runbook.md`) |
| A1-S28D | Agent 1 | Coming-soon removal and rollback runbook (`docs/coming-soon-removal-runbook.md`) |
| A2-S28B | Agent 2 | 32 phase-one screenshots (desktop + mobile) |
| A2-S28C | Agent 2 | Visual review triage — LAUNCH-READY, no P0/P1 |
| A2-S28D | Agent 2 | Visual P2 quick-wins — no action needed, all post-launch |
| A3-S28B | Agent 3 | Owner launch packet |
| A3-S28C | Agent 3 | Owner content intake kit + launch checklist |
| A3-S28E | Agent 3 | Post-launch content roadmap (`docs/post-launch-content-roadmap.md`) |
| A5-S28A | Agent 5 | Mobile layout review — Buildings issue flagged |
| A6-S28A | Agent 6 | Link and copy safety review — clean |
| A6-S28C | Agent 6 | SEO/LLM claim safety audit — clean, minor fixes applied |

## What Is Blocked

| Sprint | Agent | Reason |
|---|---|---|
| A2-S28E | Agent 2 | Mobile recheck requires visual-capable agent |
| A2-S28F | Agent 2 | Screenshot visual fixes require visual-capable agent |
| A4-S28B | Agent 4 | Active-task conflict during Site Ops recovery |

## What Is In Progress (Post-Launch Candidates)

| Sprint | Agent | Task |
|---|---|---|
| A3-S28F | Agent 3 | Seller funnel visual polish |
| A5-S28B | Agent 5 | Performance and image audit |
| A6-S28E | Agent 6 | Schema and metadata audit |
| A6-S28D | Agent 6 | Internal link and redirect audit (backlog) |
| A5-S28C | Agent 5 | Accessibility smoke (backlog) |
| A1-S28F | Agent 1 | Home/get-started visual polish (backlog) |

---

## Quick Reference — Key Docs

| Document | Purpose |
|---|---|
| `docs/ghl-live-form-test-runbook.md` | Step-by-step GHL live test |
| `docs/coming-soon-removal-runbook.md` | How to flip the switch + rollback |
| `docs/owner-launch-checklist.md` | Non-technical owner sign-off |
| `docs/owner-content-intake-kit.md` | Missing content inventory |
| `docs/post-launch-content-roadmap.md` | 30-day content plan after launch |
| `docs/seo-llm-claim-safety-audit.md` | SEO audit findings |
| `docs/visual-review-final-issues.md` | Visual review P2 items |

---

## Rollback

If anything goes wrong after launch: set `COMING_SOON_ENABLED=true` in Vercel Dashboard, redeploy. Gate is back up in ~3 minutes. Full procedure in `docs/coming-soon-removal-runbook.md`.
