# Current Blockers — Post-Launch Status as of 2026-06-03

## Site Status

**Site is live.** Coming-soon gate removed 2026-06-01 (commit fa480a2, task POOL-P0-S29R).
Production URL: https://www.liveinportmoody.com

---

## Resolved — No Longer Blocking

| Item | Decision | Status |
|---|---|---|
| Privacy/terms review | GO | ✅ Done |
| GHL live test | GO | ✅ Done (2026-06-01) |
| Remove coming-soon | GO | ✅ Done (S29R) |
| Use text-only trust blocks | GO | ⏳ Pending asset unblock |
| Non-public badge/logo data fields | GO | ⏳ Pending asset unblock |
| No public badge/logo labels | GO | ✅ Currently clean |
| MLS listings fallback | GO | ✅ In place |

---

## Active Blockers (Post-Launch — Must Fix)

### 1. Leilani/Team Photo Missing

**Owner decision:** NO-GO for launch without real photo
**Current state:** Only `public/images/team/paul.jpeg` exists. Leilani photo absent.
**Visible impact:** `team-member-card.tsx` shows "coming soon" text; `team-image-placeholder.tsx` shows "Team photo coming soon" on /meet-us.
**Required asset:** `public/images/team/leilani.jpeg` (800×800px JPEG, <400KB)
**Intake doc:** `docs/social-url-and-photo-intake.md`
**Blocks task:** POOL-P0-S30B

### 2. Real Social URLs Missing

**Owner decision:** NO-GO for launch without real social links
**Current state:** All three platforms disabled in `src/lib/site.ts` — `href: "#"`, `disabled: true`
**Visible impact:** Footer shows "Social links coming soon"; social-feed-placeholder on /explore shows "Instagram and YouTube connection coming soon"
**Required input:** Real Instagram URL (required); YouTube and/or Facebook URL (at least one)
**Intake doc:** `docs/social-url-and-photo-intake.md`
**Blocks task:** POOL-P0-S30B

---

## Additional Post-Launch Work (Not Hard Blockers)

| Item | Decision | Owner Input Needed |
|---|---|---|
| Remove /accolades from nav/footer | GO | No — ready to apply once S30B unblocks |
| Redirect /accolades route | Required (NO-GO to leaving it promoted) | No — code change only |
| Scatter text-only trust blocks on key pages | GO | No — copy already approved |
| Fix visible "coming soon"/"pending" text in footer/team | GO | Depends on social URLs + photo |
| Testimonials | Pending intake | Owner to fill docs/testimonial-intake-01.md |
| Featured businesses | Pending intake | Owner to fill docs/featured-business-intake-01.md |

---

## Owner Action Required

To unblock POOL-P0-S30B and close remaining post-launch gaps:

1. **Leilani photo** — send to dev team as JPEG 800×800px, <400KB
   Delivery path: `public/images/team/leilani.jpeg`

2. **Social URLs** — provide Instagram URL and at least one of YouTube or Facebook
   Format needed: full profile URL (e.g. https://www.instagram.com/...)

Both items documented in: `docs/social-url-and-photo-intake.md`
