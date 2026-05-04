# Live in Port Moody

Phase 1 release for LiveInPortMoody.com, built with Next.js App Router, TypeScript, Tailwind CSS, custom React components, a lead API, attribution capture, and a mock-or-real GoHighLevel adapter.

## Run Locally

Use Node 22 LTS or newer.

```bash
npm install
npm run dev
```

The local site runs at `http://127.0.0.1:3000` when started with:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3000
```

## Checks

```bash
npm run typecheck
npm run build
```

## Environment

Copy `.env.example` to `.env.local` and fill in confirmed values. `CRM_MODE=mock` is the Phase 1 default. Use `CRM_MODE=ghl` only after the new website LeadConnector token, location ID, pipeline/stage, owner IDs, and custom-field mapping decisions are confirmed.

The adapter follows the existing `inbound-lead-connector` pattern: LeadConnector API version `2021-07-28`, contacts and opportunities permissions, `Warm Lead Nurture` pipeline, `New Lead` stage, and buyer/seller owner assignment.

For production, store the GHL token in AWS Secrets Manager and set `GHL_API_TOKEN_SECRET_ID`. If the secret is JSON, set `GHL_API_TOKEN_SECRET_KEY`; otherwise the adapter accepts a raw secret string or JSON keys named `api_key`, `token`, or `value`. Local `.env.local` can use `GHL_API_TOKEN`, but it must stay git-ignored.

`COMING_SOON_ENABLED=true` gates public pages behind `/coming-soon`. Set it to `false` only when the full site should be publicly visible.

## Phase 1 Scope

Routes included:

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
- `/sitemap.xml`
- `/robots.txt`

Not included in Phase 1: IDX, listings, neighbourhood pages, building pages, Suter Brook guide, development tracker, map tools, lead scoring, Payload CMS, blog system, fake stats, or fake market data.

## TODO Before Public Launch

- Final brokerage name, address, phone, email, and compliance language.
- Final privacy, terms, real estate disclaimer, cookie, email consent, and SMS consent copy.
- Final GoHighLevel custom-field mapping, workflows, notification recipients, and test contact cleanup.
- Final bios, approved credibility items, portraits, and hero media.
