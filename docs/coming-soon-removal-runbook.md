# Coming-Soon Removal Runbook — LiveInPortMoody.com

**Purpose:** Step-by-step operational guide for safely removing the coming-soon gate and rolling back if needed.
**Applies to:** The first public launch of https://www.liveinportmoody.com.

---

## How Coming-Soon Works Today

The gate lives entirely in `src/middleware.ts`. It checks a single environment variable:

```
COMING_SOON_ENABLED=true   → gate is ON  (default — any value other than "false")
COMING_SOON_ENABLED=false  → gate is OFF (site is fully public)
```

**What the gate does when ON:**

- Every incoming request is inspected by the Next.js middleware before it reaches any page.
- If the request is not on the always-allowed list and does not carry the preview cookie, the middleware **rewrites** the request to `/coming-soon`.
- The rewrite is transparent — the browser URL does not change, so there is no redirect bounce.

**Always-allowed paths (bypass the gate regardless of setting):**

| Path | Why |
|---|---|
| `/coming-soon` | The gate target itself |
| `/contact` | Coming-soon page CTA links here |
| `/privacy` | Legal requirement |
| `/terms` | Legal requirement |
| `/robots.txt` | SEO |
| `/sitemap.xml` | SEO |
| `/api/*` | Form submissions from coming-soon page |
| Any path with a file extension | Static assets |

---

## Preview Key Flow (Current Access Method)

Authorized users bypass the gate using a time-limited preview cookie:

1. Visit `https://www.liveinportmoody.com/preview?key=<PREVIEW_KEY>`
2. Middleware compares the key to the `PREVIEW_KEY` env var using a timing-safe comparison.
3. On match: sets an `httpOnly`, `secure`, `SameSite=lax` cookie named `__lipm_preview` (1-year TTL), then redirects to `/`.
4. On subsequent requests: the cookie is present, middleware lets the request through.
5. On mismatch or missing key: request proceeds normally (hits the gate).

The preview cookie is **not** removed when coming-soon is disabled — existing preview users continue to work without interruption.

---

## Pre-Removal Checklist

All of the following must be true before the gate is removed. Get explicit confirmation from each owner.

### Technical (Agent 1 confirms)

- [ ] **Live GHL test passed** — at least one buyer lead and one seller lead submitted via production forms landed in GHL with correct pipeline, stage, owner, and tags. Runbook: `docs/ghl-live-form-test-runbook.md`.
- [ ] **Lint clean** — `npm run lint` exits 0 with no warnings.
- [ ] **Build clean** — `npm run build` exits 0, 86 pages generated.
- [ ] **Smoke clean** — `npm run smoke:prelaunch` 71/71.
- [ ] **Crawl clean** — `npm run crawl:prelaunch` 106/106 (Leilani photo gap is known and accepted).
- [ ] **Sitemap verified** — 25 URLs, all `https://www.`, no preview/noindex routes included.
- [ ] **No P0/P1 visual issues outstanding** — confirmed by Agent 2 visual review and Paul/Leilani sign-off.

### Content (Paul/Leilani confirm)

- [ ] **Privacy and terms reviewed** — legal language approved by Paul or an authorized reviewer.
- [ ] **Owner approves homepage** — hero, headline, CTA, and brand positioning reviewed.
- [ ] **Owner approves nav and funnels** — `/buy`, `/sell`, `/home-evaluation`, `/buyer-guide`, `/seller-guide`, `/contact` all reviewed.
- [ ] **Social links decision made** — Instagram, YouTube, Facebook are either real URLs or intentionally kept hidden (currently `href="#"` disabled).
- [ ] **Leilani photo decision made** — either real photo added to `public/images/team/leilani.*` or placeholder treatment on `/meet-us` accepted.

---

## Removal Procedure

**Time required:** ~5 minutes to change + ~3 minutes for Vercel to deploy.

### Step 1 — Verify production env vars

In Vercel Dashboard → Project → Settings → Environment Variables (Production):

Confirm all of these are set:

| Variable | Expected value |
|---|---|
| `CRM_MODE` | `ghl` |
| `COMING_SOON_ENABLED` | `true` (current — about to change) |
| `GHL_API_TOKEN` or `GHL_API_TOKEN_SECRET_ID` | set and not expired |
| `GHL_LOCATION_ID` | set |
| `GHL_PIPELINE_ID` | `OyeKdcp3l7t8CVFxzaJm` |
| `GHL_STAGE_ID` | `532c95f4-7a55-474d-aca4-6043e3cc65da` |
| `GHL_OWNER_BUYER_USER_ID` | set |
| `GHL_OWNER_SELLER_USER_ID` | set |

### Step 2 — Change the env var

In Vercel Dashboard → Project → Settings → Environment Variables:

1. Find `COMING_SOON_ENABLED` under the **Production** environment.
2. Click Edit.
3. Change the value from `true` to `false`.
4. Save.

Do **not** delete the variable — an absent variable also disables the gate, but keeping it explicit makes the state auditable and easy to roll back.

### Step 3 — Trigger a redeploy

Changing an environment variable does not redeploy automatically. You must force a redeploy:

**Option A — Vercel CLI (recommended):**
```bash
vercel --prod
```

**Option B — Vercel Dashboard:**
Deployments → find the most recent production deployment → "..." menu → **Redeploy** → confirm "Redeploy without changing source code".

Wait for the deployment to reach **READY** status (~2–3 minutes).

### Step 4 — Smoke-check the live site

Run against the live production URL **without** the preview cookie (use an incognito window or a fresh browser profile):

```bash
curl -s -o /dev/null -w "%{http_code}" https://www.liveinportmoody.com/
```

Expected: `200` with homepage content (not coming-soon).

Spot-check these routes manually in an incognito window:

- `https://www.liveinportmoody.com/` — homepage
- `https://www.liveinportmoody.com/buy` — buyer page
- `https://www.liveinportmoody.com/sell` — seller page
- `https://www.liveinportmoody.com/home-evaluation` — form present
- `https://www.liveinportmoody.com/contact` — form present
- `https://www.liveinportmoody.com/coming-soon` — still accessible (this is correct — the page stays live, just not the gate)

Run the automated smoke and crawl checks if available:
```bash
npm run smoke:prelaunch
npm run crawl:prelaunch
```

### Step 5 — Confirm in Vercel logs

Vercel Dashboard → Project → Functions → `/api/lead` → confirm no unexpected errors in the last 5 minutes.

---

## Rollback Procedure

If something is wrong after removal (visual, functional, or CRM), roll back immediately without waiting to diagnose.

**Time required:** ~3 minutes.

### Rollback steps

1. Vercel Dashboard → Project → Settings → Environment Variables → Production.
2. Find `COMING_SOON_ENABLED`.
3. Change value from `false` back to `true`.
4. Save.
5. Redeploy:
   - CLI: `vercel --prod`
   - Dashboard: Deployments → latest → Redeploy.
6. Wait for READY.
7. Verify: visit `https://www.liveinportmoody.com/` in incognito — should show coming-soon page.

**Estimated rollback window:** The gate is back up within ~3 minutes of step 5. Any lead form submissions during the window are captured (GHL is live). No data is lost — rollback only restores the gate, not the CRM state.

---

## Who Must Approve Before Removal

| Approval | Owner | What they confirm |
|---|---|---|
| Technical sign-off | Agent 1 (Claude Code) | All technical checklist items above |
| GHL live test | Paul Bennett | Form submissions landed in GHL with correct fields |
| Content / brand | Paul Bennett and Leilani | Homepage, nav, funnels, social links, Leilani photo |
| Legal | Paul Bennett (or designated reviewer) | Privacy and terms language |

**Removal must not proceed without explicit confirmation from Paul Bennett on all content and technical items.**

---

## Post-Launch Monitoring (First 24 Hours)

- Monitor Vercel → Functions → `/api/lead` for errors every 30 minutes.
- Monitor GHL → Contacts sorted by Date Created for any real lead submissions.
- Check that no automated GHL workflows fire unexpectedly on real leads.
- Confirm Google Search Console picks up the sitemap (may take 24–48 hours).
- Consider adding `Disallow: /api/` to `robots.txt` post-launch to reduce scraper noise (not a blocker — rate limiter handles abuse today).

---

## Quick Reference

| Action | Env var | Value |
|---|---|---|
| Gate ON (current) | `COMING_SOON_ENABLED` | `true` |
| Gate OFF (launch) | `COMING_SOON_ENABLED` | `false` |
| Rollback | `COMING_SOON_ENABLED` | `true` |

The **only code change needed for launch is a Vercel env var change + redeploy**. No source code edits, no new deployments from git.
