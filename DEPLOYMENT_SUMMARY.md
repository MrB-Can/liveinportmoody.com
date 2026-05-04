# Live in Port Moody Deployment Summary

Updated: May 4, 2026

## Current Publish State

The app is intentionally behind a coming-soon gate for public launch.

- `COMING_SOON_ENABLED=true` rewrites public pages to `/coming-soon`.
- `/api/lead` remains available for the coming-soon form.
- Static assets, `/robots.txt`, and `/sitemap.xml` remain available.
- Set `COMING_SOON_ENABLED=false` only when the full Phase 1 site should be visible.

## Repository

- GitHub repo: `https://github.com/MrB-Can/liveinportmoody.com`
- Branch: `main`
- Framework: Next.js App Router, TypeScript, Tailwind CSS
- Node target: use Node 22 LTS or newer

## Production Environment Variables

Set these in the deployment host. Do not commit real secrets.

```bash
NEXT_PUBLIC_SITE_URL=https://liveinportmoody.com
NEXT_PUBLIC_PUBLIC_EMAIL=team@liveinportmoody.com
NEXT_PUBLIC_PUBLIC_PHONE=604-757-1553
NEXT_PUBLIC_BROKERAGE_NAME=eXp Realty
NEXT_PUBLIC_BROKERAGE_ADDRESS=#1500 - 701 West Georgia Street, Vancouver BC V7Y 1G5
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_CLARITY_ID=

COMING_SOON_ENABLED=true
CRM_MODE=ghl

GHL_LOCATION_ID=fHjjIdFt8tYWey5Tprtk
GHL_PIPELINE_ID=OyeKdcp3l7t8CVFxzaJm
GHL_STAGE_ID=532c95f4-7a55-474d-aca4-6043e3cc65da
GHL_PIPELINE_NAME=Warm Lead Nurture
GHL_STAGE_NAME=New Lead
GHL_OWNER_BUYER_USER_ID=e7dvKFEKd0LifrYXiazI
GHL_OWNER_SELLER_USER_ID=xoT8gluxK7akggiHgDNv

GHL_API_TOKEN_SECRET_ID=liveinportmoody/ghl-api-token
GHL_API_TOKEN_SECRET_KEY=api_key
AWS_REGION=us-west-2
```

## Secrets

The GHL LeadConnector token is stored in AWS Secrets Manager:

```text
Secret name: liveinportmoody/ghl-api-token
Region: us-west-2
JSON key: api_key
```

The deployment runtime needs permission to read that secret. Local fallback variables `GHL_API_TOKEN` and `GHL_API_KEY` exist for development only and should not be used in production if AWS secret access is available.

## GHL Routing

Real GHL mode is enabled with `CRM_MODE=ghl`.

- Pipeline: `Warm Lead Nurture`
- Stage: `New Lead`
- Buyer opportunities assign to Paul Bennett.
- Seller opportunities assign to Leilani Fong.
- Lead tags include `source:liveinportmoody`, intent tags, engagement tag, and form tag.

Verified live tests:

- Buyer test opportunity: `HcpQ8vD0O5RqHUZhbyQ2`
- Seller test opportunity: `F4DiYSFrIUZGWxPtRkX8`

These test records can be deleted from GHL.

## Build Commands

```bash
npm install
npm run typecheck
npm run build
```

Start local dev:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3000
```

## Verified

- `npm run typecheck` passes.
- `npm run build` passes.
- `/` rewrites to `/coming-soon` when `COMING_SOON_ENABLED=true`.
- `/api/lead` creates contacts and opportunities in GHL using the AWS-stored token.
- Buyer assignment and seller assignment have been verified in GHL.
- No raw GHL token appears in tracked files.

## Phase 1 Routes

The full Phase 1 routes exist but are gated while coming soon is enabled:

- `/`
- `/buy`
- `/sell`
- `/move-to-port-moody`
- `/market`
- `/resources`
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/coming-soon`
- `/sitemap.xml`
- `/robots.txt`

Not included: IDX, listings, neighbourhood pages, building pages, Suter Brook guide, development tracker, map tools, blog system, fake stats, or fake market data.

## Before Removing Coming Soon

- Final legal/privacy/terms/SMS/cookie language.
- Final brokerage compliance language.
- Final bios and approved credibility claims.
- Real photography/video to replace generated placeholders.
- GA4 and Clarity IDs if desired.
- Delete GHL test records listed above.
