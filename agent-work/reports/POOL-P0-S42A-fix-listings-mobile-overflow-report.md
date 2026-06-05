# POOL-P0-S42A Report: Fix Listings Mobile Overflow

AGENT: Codex

TASK: POOL-P0-S42A - Fix Listings Mobile Overflow

STATUS: DONE

## ROOT CAUSE

- element/component: `/listings` listing support section, specifically the dark context panel and `ListingSupportForm`.
- cause: At a 390px viewport, the listing-support grid children sized to 390px wide inside the section's 20px side padding, producing a right edge of 410px and 20px document overflow.

## FIX

- files changed:
  - `src/app/listings/page.tsx`
  - `src/components/listings/ListingSupportForm.tsx`
  - `docs/s42-listings-mobile-overflow-fix.md`
- classes/layout changes:
  - Added `min-w-0` to the listing support grid and offer framework grid/cards.
  - Changed listing support desktop grid tracks to `minmax(0,...)`.
  - Added `w-full min-w-0 max-w-full` to the support panel and form.
  - Added `w-full min-w-0` to form controls and `min-w-0` to labels/grid wrappers.
  - No form fields, CRM behavior, consent defaults, sitemap, or content were changed.

## MOBILE WIDTH

- before: production `/listings` at 390px reported `clientWidth 390`, `scrollWidth 410`, `bodyScrollWidth 410`, overflow `20`.
- after: local and production `/listings` at 390px report `clientWidth 390`, `scrollWidth 390`, `bodyScrollWidth 390`, overflow `0`.

## VALIDATION

- lint: PASS, no ESLint warnings or errors.
- build: PASS, production build completed successfully.
- smoke: PASS, 71 passed, 0 warnings, 0 failed.
- crawl: PASS, 106 passed, 0 warnings, 0 failed.

## DEPLOYMENT

- commit: `b24c75b` - `Fix listings mobile overflow`.
- production URL: `https://www.liveinportmoody.com/listings`.
- vercel --prod --force used: Yes.
- deployment: `dpl_SBKX7MwsnJswPi2Yi7E4HxzLTQe7`, aliased to `https://liveinportmoody.com`.

## POST-DEPLOY

- /listings status: HTTP/2 200.
- error logs: `vercel logs --level error --since 1h` returned no logs.
- production width check: `clientWidth 390`, `scrollWidth 390`, `bodyScrollWidth 390`, overflow `0`.

COMMIT: `b24c75b`

PUSH: pushed to `origin/main`.
