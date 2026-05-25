# First Three Neighbourhood Preview Route QA

Date: 2026-05-25

Scope:

- `/neighbourhoods/heritage-woods`
- `/neighbourhoods/moody-centre`
- `/neighbourhoods/glenayre`
- `/neighbourhoods/college-park`
- `/neighbourhoods/mountain-meadows`
- `src/data/neighbourhoodGuides.ts`
- `src/app/neighbourhoods/[slug]/page.tsx`
- `src/app/sitemap.ts`
- `docs/neighbourhood-guide-content-gap-report.md`

No route files, map files, sitemap files, listing code, or source data were edited during this QA.

## Executive Result

Route mechanics mostly pass:

- Heritage Woods renders.
- Moody Centre renders.
- Glenayre renders.
- College Park returns 404.
- Mountain Meadows returns 404.
- Preview routes emit `noindex, follow`.
- Preview routes are excluded from the sitemap.
- Published Heritage Mountain remains sitemap eligible and has no `noindex` robots meta.

Content and UX are not ready for public/internal linking yet.

Recommendation for all three preview routes: **fix before linking**.

Blocking issues before linking:

- The preview template shows placeholder CTA copy: `Contact form to be integrated`.
- The listings section shows placeholder copy instead of a fallback CTA and MLS disclosure: `Listings module to be wired once MLS Reciprocity integration is ready`.
- The quick facts section renders a hard-coded `How Heritage Mountain scores` heading on all three preview routes.
- Parks/trails cards list amenities without official-source framing or source links in the rendered section.
- Some school and neighbourhood wording remains overconfident, especially `established schools` and Glenayre's school/playground phrasing.
- `docs/neighbourhood-guide-content-gap-report.md` has been updated to use generic language for all prior school reference corrections.

## Validation

Commands run:

- `npm run lint`: passed.
- `npm run build`: passed.

Build output generated:

- `/neighbourhoods/heritage-mountain`
- `/neighbourhoods/heritage-woods`
- `/neighbourhoods/moody-centre`
- `/neighbourhoods/glenayre`

Build output did not generate:

- `/neighbourhoods/college-park`
- `/neighbourhoods/mountain-meadows`

Route smoke results from local production server:

| Route | Status |
| --- | ---: |
| `/neighbourhoods/heritage-woods` | 200 |
| `/neighbourhoods/moody-centre` | 200 |
| `/neighbourhoods/glenayre` | 200 |
| `/neighbourhoods/college-park` | 404 |
| `/neighbourhoods/mountain-meadows` | 404 |
| `/neighbourhoods/heritage-mountain` | 200 |

Noindex and sitemap checks:

| Route | Robots | Sitemap |
| --- | --- | --- |
| `/neighbourhoods/heritage-woods` | `noindex, follow` | Excluded |
| `/neighbourhoods/moody-centre` | `noindex, follow` | Excluded |
| `/neighbourhoods/glenayre` | `noindex, follow` | Excluded |
| `/neighbourhoods/college-park` | 404 | Excluded |
| `/neighbourhoods/mountain-meadows` | 404 | Excluded |
| `/neighbourhoods/heritage-mountain` | No `noindex` meta found | Included |

## Source Implementation Review

`src/app/neighbourhoods/[slug]/page.tsx`:

- `generateStaticParams()` includes `published` and `preview` statuses.
- Runtime page rendering calls `notFound()` unless guide status is `published` or `preview`.
- Preview metadata uses `robots: { index: false, follow: true }`.
- Published metadata uses `robots: { index: true, follow: true }`.

`src/app/sitemap.ts`:

- Filters `neighbourhoodGuides` to `guide.status === "published"`.
- This excludes the three preview routes and includes published Heritage Mountain.

`src/data/neighbourhoodGuides.ts`:

- Heritage Woods, Moody Centre, and Glenayre are `preview`.
- College Park and Mountain Meadows are `draft`.
- Current first-three source data does not include the previously flagged non-SD43 school.

`docs/neighbourhood-guide-content-gap-report.md`:

- School reference corrections have been documented with generic language: "prior inaccurate school references removed" instead of specific school names, consistent with current source data.

## Heritage Woods

Status: **Fail for linking; pass for noindex preview route mechanics.**

Noindex status: pass.

Sitemap status: pass, excluded from sitemap.

School issues:

- Pass: current source/rendered page uses SD43 address-verification framing.
- Pass: current source/rendered page does not include the previously flagged non-SD43 school.
- Pass: no exact catchment claim found.
- Issue: intro says the community offers `established schools`; seller notes say to emphasize `established schools`. This is overconfident because only one school is listed as a possible association and the page still requires SD43 address verification.

Recommended school wording change:

- Replace `established schools` with `schools to verify by exact address through SD43`.
- Replace seller positioning around established schools with `verified school and park context once confirmed for the specific property`.

Parks/trails issues:

- Parks and trails are useful at a broad level, but rendered cards list `Community parks`, `Playgrounds`, `Recreation areas`, `Athletic fields`, `Trails`, and `Picnic areas` without visible official-source framing in that section.
- The FAQ links to the City parks page, which helps, but the card-level amenity claims still read as direct assertions.

Recommended parks/trails wording change:

- Add a short note before park cards: `Park amenities and trail access should be verified through City of Port Moody sources before relying on specific features.`
- Reword amenity lists as `Research prompts` or use fewer verified general labels until exact park pages are attached.

Listing/MLS issues:

- Fail: rendered listing section says `Listings module to be wired once MLS Reciprocity integration is ready`.
- It does not show a fallback CTA to `/listings`.
- It does not show the active-listings-only MLS Reciprocity disclosure.
- No fake cards, IDX runtime, or sold data found.

Photo/placeholder issues:

- No photo is shown, which is acceptable for preview, but there is no explicit photo-needed state.
- Open Graph image falls back to the site placeholder.

UX issues:

- The quick facts section shows `How Heritage Mountain scores`, which is wrong for Heritage Woods.
- CTA section says `Contact form to be integrated`, which feels unfinished.
- CTAs in the global header/back link route somewhere real.
- No obvious broken internal links found in rendered HTML.

Recommendation: **fix before linking**.

Remaining open questions:

- Which schools should be named after address-level SD43 verification?
- Which park amenities are supported by specific official City pages?
- Should Heritage Woods have a visible no-photo placeholder, or should the photo area remain omitted until assets are ready?

## Moody Centre

Status: **Fail for linking; pass for noindex preview route mechanics.**

Noindex status: pass.

Sitemap status: pass, excluded from sitemap.

School issues:

- Pass: schools array is empty, avoiding unsupported school cards.
- Pass: FAQ and school verification note direct users to SD43.
- Pass: no the previously flagged non-SD43 school in current source/rendered page.
- Pass: no exact catchment claim found.
- Moody Centre empty school handling is mostly graceful because no empty school section renders; school guidance still appears in FAQ.

Recommended school wording change:

- No blocking school rewrite required. Keep the conservative empty-school approach unless exact SD43 address verification is later added.

Parks/trails issues:

- Rendered park cards claim `Waterfront access`, `Walking paths`, `Community gathering spaces`, `Scenic views`, `Athletic fields`, `Trails`, `Picnic areas`, and `Recreation access` without visible official-source framing in the cards.
- Some items are plausible, but the page should either cite official City pages in the section or soften amenities as examples to verify.
- No Trailforks copying or trail status claims found.

Recommended parks/trails wording change:

- Add official-source framing before the parks/trails cards.
- Reword `Downtown waterfront trail` and `Port Moody trail network access` as general access points unless tied to an official City trails page.

Listing/MLS issues:

- Fail: rendered listing section is placeholder-only and not a fallback CTA.
- No active-listings-only MLS disclosure appears in the rendered preview route.
- No fake cards, IDX runtime, or sold data found.

Photo/placeholder issues:

- No photo is shown; page still works as text-first preview.
- No explicit photo-needed state.

UX issues:

- Hard-coded `How Heritage Mountain scores` heading appears on Moody Centre.
- CTA section says `Contact form to be integrated`.
- FAQ component creates duplicate FAQ section headings.
- Overconfident non-QA item: FAQ says downtown revitalization creates property appreciation potential and that property values tend to grow during revitalization. This is an unsupported investment/value claim and should be removed or heavily softened before linking.
- `Excellent transit connectivity` and `Major TransLink hub` should be verified or softened to `stronger transit access than many Port Moody neighbourhoods; verify routes for the address`.

Recommendation: **fix before linking**.

Remaining open questions:

- Which official City park pages support each downtown park/trail amenity?
- Should the page include a school section with only SD43 verification guidance, or keep school guidance in FAQ only?
- Should revitalization be discussed without any value-growth language?

## Glenayre

Status: **Fail for linking; pass for noindex preview route mechanics.**

Noindex status: pass.

Sitemap status: pass, excluded from sitemap.

School issues:

- Pass: current source/rendered page uses SD43 verification framing.
- Pass: current source/rendered page does not include the previously flagged non-SD43 school.
- Pass: no exact catchment claim found.
- Issue: FAQ says Glenayre appeals to families with `established schools` and that `Access to playgrounds and schools within the neighbourhood is a strong draw`. This is overconfident unless exact school and park/playground proximity is verified.

Recommended school wording change:

- Replace `established schools` with `schools to verify by exact address through SD43`.
- Replace `Access to playgrounds and schools within the neighbourhood is a strong draw` with `Some buyers research nearby schools and parks, but exact school assignment and proximity should be verified for the address`.

Parks/trails issues:

- Rendered cards list `Community parks`, `Playgrounds`, `Recreation facilities`, `Walking trails`, `Community pathways`, and `Regional connections` without visible official-source framing.
- No Trailforks copying or trail status claims found.
- `Within neighbourhood` and `Adjacent to neighbourhood` should be verified before linking.

Recommended parks/trails wording change:

- Add official-source framing and avoid exact proximity labels until supported.
- Reword `Trail access to regional network` as `Nearby trail access to verify through City of Port Moody sources`.

Listing/MLS issues:

- Fail: rendered listing section is placeholder-only and not a fallback CTA.
- No active-listings-only MLS disclosure appears in the rendered preview route.
- No fake cards, IDX runtime, or sold data found.

Photo/placeholder issues:

- No photo is shown; page still reads as a usable text-first preview.
- No explicit photo-needed state.

UX issues:

- Hard-coded `How Heritage Mountain scores` heading appears on Glenayre.
- CTA section says `Contact form to be integrated`.
- FAQ component creates duplicate FAQ section headings.
- No obvious broken internal links found in rendered HTML.

Recommendation: **fix before linking**.

Remaining open questions:

- Which exact City pages support Glenayre park/playground/trail claims?
- Should Glenayre name only Glenayre Elementary, or use a more generic school-verification-only approach until address checks are done?
- What photo or placeholder strategy should be used before public linking?

## Cross-Route Findings

### Passing

- Preview route rendering works for the first three.
- Draft routes correctly return 404 for College Park and Mountain Meadows.
- Preview routes are noindex/follow.
- Preview routes are excluded from sitemap.
- Heritage Mountain remains sitemap eligible.
- Current first-three source data does not include the previously flagged non-SD43 school.
- No fake listing cards found.
- No sold data found.
- No IDX runtime implementation found.
- No Trailforks copied data or trail status claims found.
- No exact commute-time claims found.

### Blocking Before Linking

- Replace placeholder CTA with a real contact/listing-support CTA or remove the CTA section.
- Replace placeholder listings text with fallback listing CTA plus active-listings-only MLS Reciprocity disclosure.
- Fix hard-coded `How Heritage Mountain scores` heading.
- Add official-source framing to parks/trails sections.
- Soften overconfident school language in Heritage Woods and Glenayre.
- Remove or soften unsupported Moody Centre value-growth language.
- Stale school reference documentation cleaned from the content gap report.

### Non-Blocking But Recommended

- Add a deliberate no-photo placeholder state, or explicitly omit media until photos are ready.
- Avoid duplicate FAQ headings by letting either the template or FAQ component own the heading.
- Consider replacing preview badge text `preview` with a clearer internal label if preview routes will be shared for review.

## Final Route Readiness Recommendation

| Route | Recommendation |
| --- | --- |
| `/neighbourhoods/heritage-woods` | Fix before linking |
| `/neighbourhoods/moody-centre` | Fix before linking |
| `/neighbourhoods/glenayre` | Fix before linking |
| `/neighbourhoods/college-park` | Keep draft/404 |
| `/neighbourhoods/mountain-meadows` | Keep draft/404 |
| `/neighbourhoods/heritage-mountain` | Remains live/indexable |

## Re-QA After Sprint 19B Fixes

Date: 2026-05-25

Scope: re-check only the first three preview routes after Agent 2's Sprint 19B fixes.

Validation:

- `npm run lint`: passed.
- `npm run build`: passed.
- Local production smoke test:
  - `/neighbourhoods/heritage-woods`: 200
  - `/neighbourhoods/moody-centre`: 200
  - `/neighbourhoods/glenayre`: 200

Noindex and sitemap:

| Route | Robots | Sitemap |
| --- | --- | --- |
| `/neighbourhoods/heritage-woods` | `noindex, follow` | Excluded |
| `/neighbourhoods/moody-centre` | `noindex, follow` | Excluded |
| `/neighbourhoods/glenayre` | `noindex, follow` | Excluded |
| `/neighbourhoods/heritage-mountain` | Indexable | Included |

Re-check results:

| Check | Result | Notes |
| --- | --- | --- |
| No hard-coded Heritage Mountain scoring on preview pages | Pass | `QuickFactsWithBars` now receives `neighbourhoodName={guide.name}`. Rendered pages no longer show `How Heritage Mountain scores`. |
| Listing fallback CTA exists | Pass | Rendered preview pages link to `/listings` with `Ask about homes in {guide.name}`. |
| MLS disclosure / active-listings-only language | Partial | A listing disclosure renders, but it is guide-specific location/search wording, not the stronger active-listings-only MLS Reciprocity disclosure requested in earlier listing strategy work. |
| No fake listing cards | Pass | No listing cards found. |
| No sold data | Pass | No sold data found on rendered preview pages. |
| No `Contact form to be integrated` | Pass | CTA now links to `/contact`. |
| School language cautious | Partial | Core SD43 verification language is present. Heritage Woods and Glenayre still include some overconfident surrounding copy such as `established schools`; not an indexing blocker, but should be softened before broader sharing. |
| No stale school references | Pass | No stale school references in current first-three route source data or rendered preview pages. Documentation updated with generic school reference language. |
| No unsupported value-growth claims | Pass | Moody Centre's prior `Property values tend to grow` language has been removed from current source/rendered page. |
| Park/trail source framing improved | Pass | Rendered pages now include official-source framing for City of Port Moody and Metro Vancouver park/trail systems. |
| Preview pages remain noindex | Pass | All three emit `noindex, follow`. |
| Preview pages remain excluded from sitemap | Pass | Sitemap includes Heritage Mountain only among these neighbourhood routes. |

Remaining blockers:

- Add the active-listings-only MLS Reciprocity disclosure to the preview route listing fallback module, or change the rendered listing module to use the standard disclosure: `Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.`
- Stale school references removed from documentation.
- Soften residual school-adjacent marketing language before broader internal sharing, especially:
  - Heritage Woods: `established schools`
  - Glenayre: `established schools` and `Access to playgrounds and schools within the neighbourhood is a strong draw`

Updated recommendation:

| Route | Re-QA Result | Internal noindex linking recommendation |
| --- | --- | --- |
| `/neighbourhoods/heritage-woods` | Partial pass | Not yet ready; fix MLS disclosure and soften school wording first. |
| `/neighbourhoods/moody-centre` | Pass with MLS disclosure caveat | Ready for limited internal noindex review after MLS disclosure is standardized. |
| `/neighbourhoods/glenayre` | Partial pass | Not yet ready; fix MLS disclosure and soften school wording first. |

Overall result: **partial pass**. The route mechanics, noindex, sitemap exclusion, placeholder cleanup, park/trail framing, and value-claim fixes are good. The remaining blockers are narrow but should be handled before treating the pages as ready for internal linking.

## Final Re-QA After 19B.1 Cleanup

Date: 2026-05-25

Scope: final re-check of the first three preview routes after Agent 2's 19B.1 cleanup.

Validation:

- `npm run lint`: passed.
- `npm run build`: passed.
- Local production smoke test:
  - `/neighbourhoods/heritage-woods`: 200
  - `/neighbourhoods/moody-centre`: 200
  - `/neighbourhoods/glenayre`: 200

Rendered route checks:

| Check | Heritage Woods | Moody Centre | Glenayre |
| --- | --- | --- | --- |
| Exact active-listings-only MLS disclosure appears | Pass | Pass | Pass |
| `noindex, follow` robots meta remains | Pass | Pass | Pass |
| Excluded from sitemap | Pass | Pass | Pass |
| No fake listing cards | Pass | Pass | Pass |
| No sold data | Pass | Pass | Pass |
| No IDX runtime | Pass | Pass | Pass |
| No overconfident school wording from prior QA | Pass | Pass | Pass |
| No unsupported value-growth claim | Pass | Pass | Pass |

Sitemap check:

- `/neighbourhoods/heritage-woods`: excluded.
- `/neighbourhoods/moody-centre`: excluded.
- `/neighbourhoods/glenayre`: excluded.
- `/neighbourhoods/heritage-mountain`: included.

Source and documentation checks:

- `src/data/neighbourhoodGuides.ts`: pass for the first three preview guides.
- `src/components/neighbourhoods/NeighbourhoodGuideTemplate.tsx`: pass for listing fallback/disclosure rendering and no fake listing cards.
- `src/app/neighbourhoods/[slug]/page.tsx`: pass for preview route `noindex, follow` behavior.
- `src/app/sitemap.ts`: pass for sitemap inclusion filtering to `published` only.
- `docs/neighbourhood-guide-content-gap-report.md`: partial. It still contains historical references to the previously flagged non-SD43 school name in "removed" notes. These do not render on preview pages and do not exist in first-three source data, but they mean the repository-wide "no references remain" check is not fully clean.

Final result: **pass for rendered preview pages; partial pass for repository-wide documentation cleanup.**

Remaining blocker:

- Clean the stale school-name references from `docs/neighbourhood-guide-content-gap-report.md` if the standard is literally no repository references outside this QA record.

Internal noindex linking recommendation:

| Route | Recommendation |
| --- | --- |
| `/neighbourhoods/heritage-woods` | Ready for internal noindex linking after accepting or cleaning the stale report-doc references. |
| `/neighbourhoods/moody-centre` | Ready for internal noindex linking after accepting or cleaning the stale report-doc references. |
| `/neighbourhoods/glenayre` | Ready for internal noindex linking after accepting or cleaning the stale report-doc references. |

Practical recommendation: the three preview pages are ready for internal noindex review from a rendered-page, SEO, listings, and school-safety standpoint. The only remaining cleanup is documentation hygiene in the content gap report.

## Final Doc Cleanup Verification

Date: 2026-05-25

Scope: verify Agent 2's doc-only cleanup and confirm the first three preview routes are ready for internal noindex linking.

Validation:

- Repository-wide stale school-name search: passed. No remaining references found outside ignored build/dependency directories.
- `npm run lint`: passed.
- `npm run build`: passed.
- Local production smoke test:
  - `/neighbourhoods/heritage-woods`: 200
  - `/neighbourhoods/moody-centre`: 200
  - `/neighbourhoods/glenayre`: 200

Rendered route checks:

| Check | Heritage Woods | Moody Centre | Glenayre |
| --- | --- | --- | --- |
| Route renders | Pass | Pass | Pass |
| `noindex, follow` robots meta remains | Pass | Pass | Pass |
| Exact active-listings-only MLS disclosure appears | Pass | Pass | Pass |
| No fake listing cards | Pass | Pass | Pass |
| No sold data | Pass | Pass | Pass |
| No IDX runtime | Pass | Pass | Pass |

Sitemap check:

| Route | Sitemap status |
| --- | --- |
| `/neighbourhoods/heritage-woods` | Excluded |
| `/neighbourhoods/moody-centre` | Excluded |
| `/neighbourhoods/glenayre` | Excluded |
| `/neighbourhoods/heritage-mountain` | Included |

Final result: **pass**.

Remaining blockers: none.

Final recommendation: rendered pages pass, repository-wide stale school references are removed, and the three preview routes are ready for internal noindex linking.
