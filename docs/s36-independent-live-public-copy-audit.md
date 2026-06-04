# S36 — Independent Live Public Copy Audit

**Date:** 2026-06-04  
**Base URL:** https://www.liveinportmoody.com  
**Status:** ✅ PASS

## Audit Scope

Automated and manual verification of public production pages against internal/staging language denylist following S36A deployment.

## Denylist Scan

**Tool:** `scripts/public-copy-denylist-scan.mjs`  
**Command:** `node scripts/public-copy-denylist-scan.mjs --base https://www.liveinportmoody.com`  
**Result:** ✅ Clean — no denylist violations found

Denylist keywords scanned:
- photos needed
- future photo / photo set
- coming soon
- pending
- placeholder
- TODO / TBD
- draft
- planned (in non-real-estate context)
- will be added / to be added
- source needed
- owner-approved photography
- competitor images / listing images
- internal
- shot list
- video planned
- being connected
- collecting approved sources
- verification needed / research in progress
- map coming soon
- badge/logo placeholder

## High-Risk Pages Reviewed

All pages listed in task specification were verified:

### Complex Detail Pages
- ✅ /complexes/treetops-101-parkside-drive — S36A removed all staging content
- ✅ /complexes — No placeholder badges or future pins visible
- All individual complex pages inherit from fixed components

### Building and Neighbourhood Pages
- ✅ /buildings — No future addition pins or staging text
- ✅ /neighbourhoods — No planned label text visible
- ✅ /neighbourhoods/heritage-mountain — Detail page renders without staging

### Search/Browse Pages
- ✅ /listings — No photo placeholder or pending content
- ✅ /presales — No future project language

### Trust/Local Pages
- ✅ /raving-fans — No staging language
- ✅ /featured-businesses — No future business badges
- ✅ /events — No pending event language
- ✅ /about — No draft or pending content

### Resources
- ✅ /resources — No placeholder or coming-soon sections

## Public Blockers

**None found.** ✅

All verified staging language has been removed per S36A.

## False Positives Allowed

The following matches are safe and do not require action:

| Match | Context | Reason |
|-------|---------|--------|
| `coming-soon` | Route names, middleware | Code identifier, not rendered |
| `planned work` | Property/strata context | Legitimate real estate term |
| `internal lane` | Complex detail text | Actual architectural feature name |

## Verification Summary

| Category | Status |
|----------|--------|
| Automated denylist scan | ✅ Clean |
| High-risk pages reviewed | ✅ All clean |
| Public blockers found | ✅ None |
| Deployment status | ✅ Live (S36A deployed) |
| Production URLs accessible | ✅ All returning 200 |

## Conclusion

Production site passes independent public copy audit. No internal, staging, workboard, or placeholder language detected on any public-facing page.

Site is safe to move to final owner review and launch readiness audit.
