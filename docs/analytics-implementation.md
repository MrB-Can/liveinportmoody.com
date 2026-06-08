# Analytics Implementation - GA4 & Microsoft Clarity

**Site:** liveinportmoody.com
**Stack:** Next.js 15 (App Router) on Vercel
**Last updated:** 2026-06-08

This document describes how Google Analytics 4 (GA4) and Microsoft Clarity are wired
into the site: where the tags load, what events and tags are emitted, and the
configuration that makes data collection work in production.

---

## 1. Overview

| Tool | ID | Purpose | Loads on |
|---|---|---|---|
| Google Analytics 4 | `G-2D5FTS1HRT` | Traffic, events, conversions | Every page |
| Microsoft Clarity | `wmgcfh2z2w` | Session recordings, heatmaps, behavioural analytics | Every page |

Both tags are injected once in the root layout, so they run on every route. Both are
gated on an environment variable, so either can be disabled by clearing its ID without a
code change. The two tools share a single set of event helpers, so any interaction we
track for GA4 is automatically mirrored to Clarity.

---

## 2. Tag loading (`src/app/layout.tsx`)

Both tags load via the Next.js `<Script>` component with
`strategy="afterInteractive"` - they load after hydration so they never block render.

**GA4** loads the gtag library plus an inline config. Automatic page-view tracking is
**disabled** (`send_page_view:false`) because we send page views manually on route change
(see §4) - this is required for an App Router SPA, where the browser does not do full page
reloads between routes.

```tsx
const gaId = process.env.NEXT_PUBLIC_GA4_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
// GA4: <script src=".../gtag/js?id={gaId}"> + gtag('config', gaId, {send_page_view:false})
// Clarity: standard async IIFE loader → https://www.clarity.ms/tag/{clarityId}
```

Both blocks render `null` when their env var is absent, so non-production environments
without IDs stay clean.

---

## 3. Event layer (`src/lib/analytics.ts` + `src/lib/clarity.ts`)

All interaction tracking funnels through a single set of helpers in `analytics.ts`. Each
helper sends the GA4 event **and** mirrors it to Clarity (custom event + segmentation tag),
so there is one place to maintain and the two tools never drift apart.

`src/lib/clarity.ts` is a thin, SSR-safe wrapper over the global `window.clarity` queue
(calls made before the tag finishes loading are queued and flushed automatically):

- `clarityEvent(name)` - custom event (backs dashboard Goals/funnels)
- `claritySet(key, value)` - segmentation tag (filter recordings/heatmaps)
- `clarityIdentify(id, friendly?)` - associate a session with a non-PII identifier
- `clarityUpgrade(reason)` - force-prioritize recording so the session is never sampled out

### Events emitted

| Helper | GA4 event(s) | GA4 params | Clarity event / tags |
|---|---|---|---|
| `trackPageView(path)` | `page_view` | `page_path` | - (Clarity tags `page_path`, `page_type`, `utm_*` set in provider) |
| `trackCTA(label, location)` | `cta_click` | `cta_label`, `cta_location`, `page_path`, `page_type` | `cta_click`, tag `cta_label` |
| `trackFormStart(formType)` | `form_start` | `form_type`, `page_path`, `page_type` | `form_start`, tag `form_type` |
| `trackFormSubmit(formType)` | `form_submit` **+ a specific Key Event** (see below) | `form_type`, `page_path`, `page_type`, first/last UTM source/medium/campaign, landing pages, referrers | `form_submit`, tag `lead=true`, `identify(lead-…)`, `upgrade("lead_submit")` |
| `trackDownload(resource)` | `resource_download` | `download_resource`, `page_path`, `page_type` | `resource_download`, tag `download` |
| `trackCall(location)` | `click_call` | `cta_location`, `page_path`, `page_type` | `click_call` |
| `trackEmail(location)` | `click_email` | `cta_location`, `page_path`, `page_type` | `click_email` |

On a lead submission the session is tagged `lead=true`, identified, and **upgraded** so
high-value sessions are always recorded in full - useful for reviewing exactly what a
lead did before converting.

**Specific Key Events** fire alongside the generic `form_submit`, mapped by form type, so
reporting can be done per business action:
`home_valuation_submit`, `buyer_inquiry_submit`, `relocation_inquiry_submit`,
`contact_form_submit`, `market_update_submit`, `newsletter_signup`,
`resource_download_submit`, `community_submit`. Register the meaningful ones (plus
`click_call`/`click_email`) as **Key Events** in GA4 Admin.

GA4 events intentionally carry only **low/medium-cardinality** params (UTMs, landing
pages, referrers). High-cardinality identifiers (`visitor_id`, `session_id`, click IDs)
are sent to the GHL contact record, **not** GA4 - to avoid dimension bloat.

### Where the helpers fire today

- `src/components/lead-form.tsx` - `trackFormStart` / `trackFormSubmit` (general lead form)
- `src/components/home-evaluation-form.tsx` - `trackFormStart` / `trackFormSubmit` (home valuation)
- `src/components/cta-button.tsx` - the shared `CTAButton` fires `trackCTA` on every CTA
  site-wide (incl. the header "Get Started")
- `src/components/contact-link.tsx` - tracked `tel:`/`mailto:` links fire
  `trackCall` / `trackEmail` (wired in the footer)

---

## 4. Page-view & attribution tracking (`src/app/analytics-provider.tsx`)

`AnalyticsProvider` is a client component mounted in the root layout. On every pathname or
query-string change it:

1. Calls `updateAttribution()` to persist first/last touch data (see §5).
2. Calls `trackPageView(path)` → GA4 `page_view` with the full path + query.
3. Sets Clarity segmentation tags so recordings and heatmaps are filterable:
   - `page_path` - full path
   - `page_type` - first URL segment (e.g. `buy`, `sell`, `market`, `neighbourhoods`, or `home`)
   - `utm_source`, `utm_medium`, `utm_campaign` - pulled from stored attribution

It is wrapped in `<Suspense>` because it reads `useSearchParams()`.

---

## 5. Attribution (`src/lib/attribution.ts`)

A lightweight first-party attribution layer (no third-party dependency) persists campaign
and session context in `localStorage`/`sessionStorage`:

- First/last landing page and referrer
- **First-touch and last-touch UTMs** captured atomically (`firstUtm*` / `lastUtm*`).
  First-touch = how they originally discovered the site; last-touch = what brought them
  back to convert. The whole UTM set is captured per touch so the two never mix.
- **Ad click IDs**: `gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`, `ttclid`, `li_fat_id`
  (most-recent value kept, matching the conversion window).
- A generated `visitorId` and `sessionId`, first/last visit timestamps, and page count

`getAttribution()` exposes this to the analytics layer (Clarity UTM tags + GA4 event
params) and both forms post the full object to `/api/lead`.

`flattenAttribution()` (in `src/lib/crm/types.ts`) converts the object into discrete
`snake_case` fields, reused by **both** the GHL adapter (contact custom fields) and GA4
event params so the two never drift. Lead flow: forms → `/api/lead` → `GHLAdapter`, which
writes each field plus a full-JSON `attribution` fallback to the GHL contact.

> **GHL prerequisite:** the discrete fields only land if matching contact custom fields
> exist in GHL (keys: `first_utm_source`, …, `last_utm_term`, `gclid`, `fbclid`, …,
> `visitor_id`, `session_id`, `page_count`). Unmatched keys are ignored by GHL and the
> JSON `attribution` field always writes, so lead capture never breaks.

---

## 6. Production configuration

### Environment variables (`vercel.json` + `.env.local`)
```
NEXT_PUBLIC_GA4_ID=G-2D5FTS1HRT
NEXT_PUBLIC_CLARITY_ID=wmgcfh2z2w
```
`NEXT_PUBLIC_*` values are inlined at **build time**, so a change to either ID requires a
rebuild/redeploy to take effect.

### Content Security Policy (`next.config.ts`)
The CSP must allowlist every host each tag talks to, or the script loads but its data
uploads are silently blocked. The relevant directives:

```
script-src  … https://www.googletagmanager.com https://*.clarity.ms
connect-src … https://www.google-analytics.com https://region1.google-analytics.com
              https://www.google.com https://*.clarity.ms https://c.bing.com …
img-src     'self' data: blob: https:   (covers the Clarity/Bing pixel)
```

> **Important history:** Clarity originally showed no data because `connect-src` only
> allowed `www.clarity.ms` and `c.clarity.ms`. Clarity uploads session data to sharded
> `*.clarity.ms` hosts (a/b/c…clarity.ms) plus a `c.bing.com` pixel, so the recordings
> were captured in-browser but the uploads were refused by CSP. Broadening to
> `https://*.clarity.ms` + `https://c.bing.com` fixed it. Keep the wildcard - do not
> narrow these back to specific subdomains.

---

## 7. Privacy & consent

- The privacy policy (`src/app/privacy/page.tsx`) discloses GA4 and Microsoft Clarity.
- There is **no cookie-consent banner**; both tools fire on load. This is generally
  acceptable in Canada (PIPEDA / implied consent with disclosure). Clarity masks text
  content by default.
- Clarity's `identify` uses a **non-PII** id (`lead-{formType}-{timestamp}`), not the
  visitor's email, so no personal data is sent to Clarity for identification.
- If a consent manager is added later, gate the tags and wire Clarity's `consent` API.

---

## 8. Dashboard-side configuration (managed in each tool's UI, not in code)

- **Clarity Goals** - defined on the custom events above (`form_submit`, `cta_click`,
  `resource_download`) and on key URLs (`/contact`, `/sell`).
- **Clarity ↔ GA4 integration** - links project `wmgcfh2z2w` to GA4 `G-2D5FTS1HRT` to
  correlate recordings with GA4 sessions.
- **Clarity masking** - review under Settings → Masking; relax for marketing content while
  keeping form fields masked.
- **GA4 conversions** - mark `form_submit` (and any other key events) as Key Events/
  conversions in the GA4 Admin.

---

## 9. Key files

| File | Role |
|---|---|
| `src/app/layout.tsx` | Loads both tags globally (env-gated) |
| `src/lib/analytics.ts` | GA4 event helpers; mirrors each event to Clarity |
| `src/lib/clarity.ts` | SSR-safe Clarity API wrapper |
| `src/app/analytics-provider.tsx` | Per-route page views + Clarity page/UTM tags |
| `src/lib/attribution.ts` | First-party UTM / visitor / session attribution |
| `next.config.ts` | CSP allowlist for both tags |
| `vercel.json` | Production env vars (`NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_CLARITY_ID`) |
| `src/app/privacy/page.tsx` | Privacy disclosure |
