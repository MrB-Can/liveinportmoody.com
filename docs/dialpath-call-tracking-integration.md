# Dialpath Call-Tracking Integration

**Status:** Data + code changes complete, live-call verification and physical-signage follow-up outstanding
**Last updated:** 2026-08-17

---

## 1. What this is

Before this change, LIPM only measured phone-call *intent*: `ContactLink`
(`src/components/contact-link.tsx`) fires a GA4 `click_call` / `generate_lead` event when
someone taps a `tel:` link, but there was no record of whether a call actually happened,
how long it lasted, or who called. LGIS already runs a real call-tracking platform for
that, internally called **Dialpath** (`lgis-call-tracking` backend, DynamoDB
`call-tracking-numbers` / `-calls` / `-companies` / `-callers`, live on Amazon Connect,
dashboard at `app.lgis.ca/call-tracking`). Its first tenant is Root Down Tree Company,
whose feature already appears on LIPM's `/featured-businesses` page.

This integration puts two of LIPM's phone surfaces on Dialpath-tracked numbers instead of
plain, untracked numbers:

1. **LIPM's own sitewide number** (`siteConfig.publicPhone`, used in the header, footer,
   `/contact`, `/privacy`, `/terms`, and listing detail pages) is now a Dialpath number.
   Live in Port Moody is a new Dialpath tenant.
2. **Root Down's number on `/featured-businesses`** is now a Dialpath number scoped to a
   new "LIPM referral" placement, distinct from Root Down's other channels (GBP, business
   card, its own website). Root Down can now see, in the Dialpath dashboard, exactly how
   many calls its LIPM feature generates.

## 2. Why repurposed numbers, not new ones

Dialpath is mid-migration from Amazon Connect to Twilio (see
`lgis-call-tracking` issue #1, P1) and no Twilio numbers have been claimed yet. Rather
than wait on that or claim new Connect numbers, we **repurposed two of Root Down's five
existing, already-verified Connect numbers** whose physical placements were being
retired:

| Number | Was (Root Down) | Now |
|---|---|---|
| `+16046589450` (604-658-9450) | `truck`, Vehicle signage | **LIPM sitewide number**: tenant `liveinportmoody`, placement `website` |
| `+16046589437` (604-658-9437) | `yardsign`, Job-site yard sign | **Root Down / LIPM referral**: stays tenant `rootdown`, placement `lipm-referral` |

Both numbers keep `provider: connect` and `status: active`; only tenant/placement/label
(and, for the first number, `forwarding_destination`) changed.

## 3. Data model changes (`call-tracking-companies` / `call-tracking-numbers`)

Made directly against DynamoDB (`AWS_PROFILE=lgis`, region `us-west-2`), no backend
code change was needed, since the router Lambda and dashboard are both data-driven from
these tables. These are the same actions available in the `app.lgis.ca/call-tracking`
admin UI (Numbers / Companies).

**New tenant**, `call-tracking-companies`:

```json
{ "tenant_id": "liveinportmoody", "tenant_name": "Live in Port Moody" }
```

**`+16046589450`**, `call-tracking-numbers`, before vs. after:

| Field | Before | After |
|---|---|---|
| `tenant_id` | `rootdown` | `liveinportmoody` |
| `tenant_name` | Root Down Tree Company | Live in Port Moody |
| `placement` | `truck` | `website` |
| `placement_label` | Vehicle signage | Website |
| `forwarding_destination` | `+17789999511` | `+16047571553` (LIPM's real line, formerly the site's plain public number) |

**`+16046589437`**, `call-tracking-numbers`, before vs. after:

| Field | Before | After |
|---|---|---|
| `tenant_id` | `rootdown` | `rootdown` (unchanged) |
| `placement` | `yardsign` | `lipm-referral` |
| `placement_label` | Job-site yard sign | Live in Port Moody, Featured Business Referral |
| `forwarding_destination` | `+17789999511` | `+17789999511` (unchanged, still rings through to Root Down) |

## 4. Code changes (this repo)

- `src/lib/site.ts`: `publicPhone` default `604-757-1553` → `604-658-9450`.
- `.env.local`: `NEXT_PUBLIC_PUBLIC_PHONE` → `604-658-9450`.
- `vercel.json`: production `NEXT_PUBLIC_PUBLIC_PHONE` → `604-658-9450`. **This is the
  value that actually ships to production**; merging/deploying this file is what makes
  the new number go live sitewide, so it should only happen after the DynamoDB
  forwarding is verified (see §6).
- `src/app/featured-businesses/page.tsx`: Root Down's `ContactLink` now points at
  `+16046589437` / displays `604-658-9437` instead of the raw `+17789999511`.

`siteConfig.publicPhone` is the single source for the sitewide number (consumed by
`page.tsx`, `contact/page.tsx`, `privacy/page.tsx`, `terms/page.tsx`, `footer.tsx`,
`listings/ListingDetailTemplate.tsx`), so the `site.ts`/env changes propagate everywhere
automatically. No other phone numbers are hardcoded in `src/`.

The click-to-call GA4 event path (`ContactLink` → `trackCall` in `src/lib/analytics.ts`)
is unchanged; it still fires `click_call` / `generate_lead` on click, now alongside a
real Dialpath call record once the number is dialed.

## 5. Operational dependency: physical signage (not resolved here)

Root Down's actual truck wrap and yard sign presumably still have `604-658-9450` /
`604-658-9437` printed or painted on them (that's the point of a placement number:
whoever sees the truck or sign dials the number printed on it). Repurposing these
numbers means any real call from the physical truck or yard sign would now be
**misattributed** as an LIPM website or referral call. **Before (or in tight
coordination with) shipping the code changes in §4**, confirm with Root Down whether
those physical items are still in the field with the old numbers, and if so, update or
retire them.

## 6. Verification checklist

- [ ] Call `+16046589450` (604-658-9450): confirm it forwards to `+16047571553` and a
      new row appears in `call-tracking-calls` with `tenant_id: liveinportmoody`,
      `placement: website`.
- [ ] Call `+16046589437` (604-658-9437): confirm it forwards to `+17789999511` and a
      new row appears in `call-tracking-calls` with `tenant_id: rootdown`,
      `placement: lipm-referral`.
- [ ] Confirm the physical-signage question in §5 before deploying `vercel.json`.
- [ ] `npm run typecheck && npm run build` (done, passing as of this doc).
- [ ] Visually confirm the new numbers render correctly in the footer, `/contact`, and
      `/featured-businesses`, and that clicking them still fires `click_call` in GA4/Clarity.

## 7. Rollback

Everything here is a data/config change, not a schema or infra change. To roll back:

- DynamoDB: restore `+16046589450` and `+16046589437`'s prior `tenant_id` / `placement` /
  `placement_label` / `forwarding_destination` values (listed in §3) via the
  `app.lgis.ca/call-tracking` admin UI, or a symmetric `update-item` call. The
  `liveinportmoody` tenant row can be left in place (harmless with zero numbers) or
  deleted from `call-tracking-companies`.
- Code: revert the four files in §4 (or just the `NEXT_PUBLIC_PUBLIC_PHONE` value and the
  `featured-businesses/page.tsx` `ContactLink` back to `604-757-1553` /
  `+17789999511`).

## 8. Related

- Backend: [`MrB-Can/lgis-call-tracking`](https://github.com/MrB-Can/lgis-call-tracking),
  `ARCHITECTURE.md` has the full data model and request flow.
- Cross-project tracker: `lgis-infrastructure/projects/call-tracking.md`.
