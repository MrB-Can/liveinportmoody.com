# S42 Listings Mobile Overflow Fix

## Summary

The S41 final recapture found `/listings` had 20px of horizontal overflow at a 390px mobile viewport.

Before:
- `clientWidth: 390`
- `scrollWidth: 410`
- overflow: `20`

After:
- `clientWidth: 390`
- `scrollWidth: 390`
- overflow: `0`

## Root Cause

The listing support section used a grid with default minimum sizing and two direct children:
- the dark listing-context panel
- `ListingSupportForm`

At 390px, those children rendered at 390px wide inside the section's 20px side padding, producing a right edge at 410px.

## Fix

Changed sizing only:
- Added `min-w-0` to the listing-support grid.
- Changed the desktop grid tracks to `minmax(0,...)`.
- Added `w-full min-w-0 max-w-full` to the listing support panel and form.
- Added `w-full min-w-0` to form controls and `min-w-0` to labels/grid wrappers.
- Added `min-w-0` to the offer framework grid/cards as a related guard.

No content, form fields, CRM behavior, or consent defaults changed.

## Verification

Local 390px check:
- `clientWidth: 390`
- `scrollWidth: 390`
- `bodyScrollWidth: 390`
- overflow: `0`

Production 390px check after deploy:
- `clientWidth: 390`
- `scrollWidth: 390`
- `bodyScrollWidth: 390`
- overflow: `0`

Validation passed:
- `npm run lint`
- `npm run build`
- `npm run smoke:prelaunch`
- `npm run crawl:prelaunch`
