# Pre-launch smoke test — LiveInPortMoody.com

Lightweight Node.js script that verifies the site is healthy after every deploy or major change. No external dependencies. Runs in under two minutes.

## How to run

```bash
# Against production (default)
npm run smoke:prelaunch

# Explicit production target
npm run smoke:prelaunch:prod

# Override base URL (e.g. preview deploy)
LIPM_BASE_URL=https://your-preview-url.vercel.app npm run smoke:prelaunch

# Override preview key
LIPM_PREVIEW_KEY=yourkey node scripts/prelaunch-smoke.mjs
```

Requires Node 20+.

## What it checks

### 1 — Public gate (no cookie)
Routes that must show the coming-soon page when not unlocked:
`/`, `/explore`, `/neighbourhoods`, `/buildings`, `/complexes`, `/buy`, `/sell`, `/presales`, `/local-businesses`, `/events`, `/testimonials`, `/accolades`

### 2 — Always-allowed routes (no cookie)
Routes that must stay accessible regardless of gate state:
`/coming-soon`, `/contact`, `/privacy`, `/terms`, `/robots.txt`, `/sitemap.xml`

### 3 — Preview unlock
- Wrong key must not set cookie.
- Correct key (`/preview?key=lgis2026` or `LIPM_PREVIEW_KEY`) must set `__lipm_preview` cookie and redirect to `/`.

### 4 — Preview route health
15 core routes (lead pages, listing page, index pages) must load real content with the preview cookie. Fails if still gated.

### 5 — Guide routes
11 neighbourhood, complex, and building guide pages must return 200 and real content with the preview cookie.

### 6 — Sitemap safety
- `/sitemap.xml` must include `/neighbourhoods/heritage-mountain`.
- Must not include any `/buildings/` URLs (all preview).
- Must not include preview neighbourhood slugs.
- Must not include preview complex slugs.
- All URLs must use `https://www.`.

### 7 — Noindex spot checks
Four preview pages must have `noindex,follow`. Four published/lead pages must be indexable.

### 8 — Safety keyword checks
Ten pages are scanned for patterns that must never appear:
- IDX script tags
- Listing card elements (`data-listing-card`)
- Sold price data (`sold for $X`)
- "full/complete guide" copy on preview pages (warn)
- "download now" text (warn)

## What failures mean

| Signal | Likely cause |
|---|---|
| Gate not blocking | `COMING_SOON_ENABLED` is false or middleware changed |
| Always-allowed route blocked | Route removed from `isAlwaysAllowed` in middleware |
| Preview cookie not set | Middleware preview logic or `PREVIEW_KEY` env var changed |
| Guide route still gated with cookie | Cookie name or value mismatch |
| Sitemap includes preview URLs | `src/app/sitemap.ts` filter changed |
| Published page has noindex | `robots` override added to `createMetadata` call |
| Preview page is indexable | `robots` override removed from guide metadata |
| IDX/sold/listing card found | Unsafe content added — remove immediately |

## Manual checks still needed

These require a browser and cannot be automated without Playwright:

- **Maps render** — confirm MapLibre canvas renders on `/neighbourhoods`, `/complexes`, `/buildings` after preview unlock
- **Lead forms submit** — test the GoHighLevel form integration on `/contact`, `/buyer-guide`, `/seller-guide`
- **Mobile layout** — check hero, nav, and map at mobile breakpoints
- **OG image preview** — paste a URL into a social link preview tool to verify `og:image` renders

## When to run

- After every production deploy
- After any middleware change
- After any sitemap change
- After adding or removing a route
- After changing noindex settings on any page
- Before removing coming-soon mode
