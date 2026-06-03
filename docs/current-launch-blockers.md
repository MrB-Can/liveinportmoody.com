# Current Blockers — Post-Launch Status as of 2026-06-03

## Site Status

**Site is live.** Coming-soon gate removed 2026-06-01 (commit fa480a2, task POOL-P0-S29R).
Production URL: https://www.liveinportmoody.com

Latest launch cleanup source of truth: `agent-work/reports/POOL-P0-S30G-reconcile-logo-truststrip-and-deploy-report.md`.

---

## Resolved — No Longer Blocking

| Item | Decision | Status |
|---|---|---|
| Privacy/terms review | GO | ✅ Done |
| GHL live test | GO | ✅ Done (2026-06-01) |
| Remove coming-soon | GO | ✅ Done (S29R) |
| Real social URLs | GO | ✅ Applied (Facebook, Instagram) |
| Team photo | GO | ✅ Applied from owner-supplied `Teamshot.jpeg` |
| Remove "coming soon" labels | GO | ✅ Cleaned up across src/ |
| Use text-only trust blocks | GO | ✅ Implemented on homepage |
| Non-public badge/logo data fields | GO | ✅ Added to src/lib/site.ts |
| MLS listings fallback | GO | ✅ In place |

---

## Active Launch Blockers

None as of 2026-06-03 after POOL-P0-S30G.

The previous Leilani/team photo blocker is resolved with `public/images/team/leilani-paul-team.jpeg`, generated from the owner-supplied `~/Downloads/Teamshot.jpeg`.

The stale blocked queue items cleared by POOL-P1-S30H are:

- A6-S28D-internal-link-and-redirect-audit-post-launch.md: completed post-launch audit.
- POOL-P0-S30B-apply-owner-approval-decisions-superseded.md: superseded by S30F/S30G.
- POOL-P0-S30B-apply-owner-launch-decisions.md: superseded by S30F/S30G.
- POOL-P1-S30I-post-launch-verification-and-indexing.md: moved back to backlog, ready to run after S30G.

---

## Additional Post-Launch Work (Not Hard Blockers)

| Item | Decision | Owner Input Needed |
|---|---|---|
| Post-launch verification and indexing | Ready | Run `agent-work/backlog/POOL-P1-S30I-post-launch-verification-and-indexing.md` |
| Remove /accolades from nav/footer | GO | ✅ Done |
| Redirect /accolades route | Required | ✅ Done (redirects to /meet-us) |
| Scatter text-only trust blocks on key pages | GO | ✅ Done without fake awards/counts |
| Testimonials | Pending intake | Owner to fill docs/testimonial-intake-01.md |
| Featured businesses | Pending intake | Owner to fill docs/featured-business-intake-01.md |

---

## Owner Action Required

Remaining owner content intake is optional polish, not a live-site blocker:

1. Approved testimonials/client stories: `docs/testimonial-intake-01.md`
2. Featured businesses: `docs/featured-business-intake-01.md`
3. YouTube URL: omitted until a real owner-approved URL is provided.
