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

Copy `.env.example` to `.env.local` and fill in confirmed values. `CRM_MODE=mock` is the Phase 1 default. Use `CRM_MODE=ghl` only after GHL location, token, pipeline, stage, and custom-field mapping decisions are confirmed.

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
- Real GoHighLevel IDs, fields, pipeline/stage IDs, test workflow, and notification recipients.
- Final bios, approved credibility items, portraits, and hero media.
