# POOL-P0-S36I Report: Fix Treetops Mobile Overflow and Gallery Polish

AGENT: Codex

TASK: POOL-P0-S36I - Fix Treetops Mobile Overflow and Gallery Polish

STATUS: DONE

## MOBILE OVERFLOW

- cause: S36H identified the sticky mobile tab row as the likely source with `clientWidth 390` and `scrollWidth 403`. Local inspection also found the final document-level overflow came from Treetops inquiry form controls sizing wider than their mobile grid column.
- fix: Contained the sticky anchor scroller with `max-w-full`/`overflow-hidden` on the section and `overflow-x-auto` on the inner wrapper. Applied sizing-only `min-w-0`/`w-full` constraints to the Treetops form grid labels and controls. No form fields, consent behavior, validation, or submit behavior changed.
- before width: `clientWidth 390`, `scrollWidth 403` from the S36H production capture.
- after width: `clientWidth 390`, `scrollWidth 390`, `bodyScrollWidth 390` on both local production build and post-deploy production check.

## GALLERY

- primary image treatment: Kept the same three gallery images. The entrance image is restored in source and treated as the larger primary desktop image, with driveway and pool photos stacked in the secondary desktop column.
- mobile behavior: The gallery remains a single-column mobile stack. Production mobile check found 3 Treetops images and no horizontal overflow.

## PUBLIC COPY

- internal/staging text found: None in the deployed page stale-text grep.
- remaining false positives: Source grep still matches the `placeholder=` attribute on the existing Treetops inquiry form textarea. This is not internal planning language and was left unchanged because changing forms was out of scope.

## VALIDATION

- lint: PASS.
- build: PASS.
- smoke: PASS, 71 passed, 0 warnings, 0 failed.
- crawl: PASS, 106 passed, 0 warnings, 0 failed.

## DEPLOYMENT

- commit: `cbaaee0` - `Fix Treetops mobile overflow and gallery layout`.
- production URL: `https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive`.
- vercel --prod --force used: Yes.
- deployment: `dpl_Ak31ekKv2yL72yMx9F7cGgEsExip`, aliased to `https://liveinportmoody.com`.

## POST-DEPLOY

- status: `curl -I` returned HTTP/2 200.
- stale text grep: Clean; no matches for the internal/staging text pattern.
- image references: Deployed HTML includes `treetops-entrance`, `treetops-driveway`, and `treetops-pool`; production Chrome check reported `images: 3` and `gallery: true`.
- error logs: `vercel logs --level error --since 1h` returned no logs.

## RECOMMENDED NEXT STEP

Run one final Treetops mobile-only recapture if overflow was fixed.
