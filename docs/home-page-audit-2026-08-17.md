# Home page audit and measurement baseline, 2026-08-17

This is the anchor date for measuring whether the home page changes worked. Anything
compared against "before" means before the commit that carries this file.

## Why this page was changed

The home page scored badly on three of ten audit dimensions:

- **Primary action.** About 42 CTAs at roughly equal weight, and `/home-evaluation`,
  the highest intent form on the site, was linked zero times from the home page.
- **Information gain.** 19 sections, none containing a single number. Nothing on the
  page that a portal does not already say.
- **Trust proof.** Two review blocks both rendered their empty placeholder state, so
  the page told every visitor twice that no verified review existed.

Full scorecard and reasoning: see the audit conversation summary in
`agent-work/` tasks filed on the same date.

## Baseline: measured state before the change

Captured from two isolated production builds running side by side.

| Metric | Before | After |
| --- | --- | --- |
| Deep links to individual neighbourhood guides | 0 | 9 |
| Unique internal link destinations on the page | 40 | 50 |
| H2 elements in the page body | 37 | 16 |
| Empty "no proof yet" placeholder blocks | 2 | 0 |
| Links to `/home-evaluation` | 0 | 4 |
| Sections | 19 | 18 |
| Desktop full page height at 1440px | 24,412px | 24,692px |
| Mobile full page height at 390px | 48,164px | 47,062px |

Metadata before: title `Port Moody Real Estate Decision Engine`, no brand suffix,
no Twitter card anywhere on the site, `Organization` and `WebSite` schema only.

## What to compare, and when

**Blocked until measurement exists.** Two of the three data sources are not collecting
yet. See `agent-work/backlog/HUMAN-P0-enable-vercel-web-analytics.md` and
`agent-work/backlog/HUMAN-P0-gsc-verification-and-report.md`. Until those are done there
is no traffic or query data to compare against, and this baseline is structural only.

Once collecting, review at 30, 60 and 90 days from the deploy date:

**Google Search Console**, filtered to the home page URL:
- Impressions and average position for `port moody real estate` and related head terms.
  The title changed from a coined phrase to the head term, so movement here is the
  cleanest read on that change.
- Whether the 14 neighbourhood guide URLs gain impressions. They now receive home page
  deep links for the first time, so this tests the internal linking change specifically.
- Rich result status for `RealEstateAgent` in the Enhancements report.

**GA4**, landing page = `/`:
- Engagement rate and average engagement time. The market data band is the only change
  intended to hold attention, so this is its test.
- `click_call` and `click_email` events. These were structurally impossible from the home
  page before, since the phone and email were plain text, so any value above zero is new.
- `generate_lead` and `home_valuation_submit` where the landing page was `/`. The seller
  path did not exist before.
- Outbound clicks from `/` to `/blog/port-moody-neighbourhood-market-analysis-2026`.
  That article had no home page link before this change.

**Caveat on attribution.** Several changes shipped in one deploy, so a movement in any
single metric cannot be attributed to one change with confidence. The per change tests
noted above are the closest available isolation. Do not read a single 30 day swing as
proof; seasonality in Tri-Cities real estate search is large.

## Known open items

- Pleasantside has no guide, so its home page card still falls back to the hub.
  `agent-work/backlog/HUMAN-P2-pleasantside-guide-gap.md`
- Three forms fire no conversion events, so any GA4 lead report before that fix
  undercounts. `agent-work/backlog/AGENT-P0-track-untracked-forms.md`
- The two overlapping six card grids were not merged. Needs a decision on which
  destinations matter.
- Both hero CTAs remain low intent and neither speaks to a seller.
