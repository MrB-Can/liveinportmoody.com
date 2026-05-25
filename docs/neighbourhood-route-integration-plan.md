# Neighbourhood Route Integration Plan

Date: 2026-05-25

Purpose: define the implementation plan for dynamic neighbourhood guide routes without creating routes, editing maps, changing the `/neighbourhoods` index, adding IDX, adding fake listings, or publishing new pages.

## Route Structure

Future route:

- `/neighbourhoods/[slug]`

Recommended implementation shape:

- Source data: `src/data/neighbourhoodGuides.ts`
- Route file, later only: `src/app/neighbourhoods/[slug]/page.tsx`
- Template component: `src/components/neighbourhoods/NeighbourhoodGuideTemplate.tsx`
- Route lookup: find guide by `slug`
- Static params: generate only from guides that should have public or preview routes
- Metadata: derive from guide-level SEO fields where available, with a safe fallback from guide name and summary

Do not create the route until the first route batch is verified and the rendering rules below are accepted.

## Status Handling

Supported guide statuses:

- `published`
- `preview`
- `draft`
- `hidden`

Recommended meaning:

- `published`: approved public guide.
- `preview`: renderable for intentional internal/share review, but not indexable.
- `draft`: content exists in data, but should not generate a public route.
- `hidden`: content should not render and should behave like it does not exist.

## Recommended Rendering Rules

| Status | Route behavior | Robots | Sitemap | Navigation/linking |
| --- | --- | --- | --- | --- |
| `published` | Render page | `index, follow` | Include | May link from index, maps, cards, CTAs |
| `preview` | Render page only if generated intentionally | `noindex, follow` or `noindex, nofollow` | Exclude | Link only from intentional preview/review surfaces |
| `draft` | Return 404 or do not generate | None because no route | Exclude | Do not link |
| `hidden` | Return 404 | None because no route | Exclude | Do not link |

Preferred static generation:

- `generateStaticParams()` returns `published` and optionally `preview` guides only.
- `draft` and `hidden` guides are excluded from static params.
- Direct access to a missing, draft, or hidden guide should call `notFound()`.
- If `dynamicParams` is disabled, only generated slugs resolve.

Preview handling choice to decide before implementation:

- Conservative option: generate only `published`; use local/dev tooling for preview review.
- Flexible option: generate `published` and `preview`, but force `noindex` metadata and exclude previews from sitemap.

Recommended initial approach: generate `published` and selected `preview` guides only after explicit review. Keep all other statuses out of route generation.

## First Route Batch

First candidates for route integration after verification:

1. Heritage Woods
2. Moody Centre
3. Glenayre

These should be promoted one by one only after:

- School verification language is updated.
- Park/trail claims are checked against official sources.
- MLS/listing fallback module copy is present.
- CTA metadata is reviewed.
- SEO title/description/canonical are approved.
- The guide does not conflict with the existing static Heritage Mountain route.

## Not Ready Yet

Do not include these in the first route batch:

- College Park
- Mountain Meadows

Reasons:

- Both need exact SD43 catchment checks.
- Both need final City parks/trails/field verification.
- Both need clearer micro-area and boundary handling.
- Transit/access claims should be reviewed by exact address or route context.
- Neither should be linked from maps, cards, or the neighbourhood index as a live route yet.

## SEO Rules

Published pages:

- Generate canonical URL: `/neighbourhoods/[slug]`.
- Use `index, follow`.
- Include in sitemap.
- Use unique metadata title and description.
- Use stable Open Graph metadata if available.
- Avoid keyword-stuffed titles or unsupported claims.

Preview pages:

- Use `noindex`.
- Exclude from sitemap.
- Avoid linking from public navigation unless intentionally showing previews.
- Add a clear internal status indicator if the template supports it.

Draft and hidden pages:

- Do not generate route params.
- Return 404 on direct access.
- Exclude from sitemap.
- Exclude from public navigation, map links, and internal cards.

Sitemap rule:

- Sitemap should filter to `status === "published"` only.

Robots metadata rule:

- `published`: indexable.
- `preview`: `robots: { index: false, follow: true }` or stricter if preferred.
- `draft` and `hidden`: no page should render.

## MLS And Listings Module

Initial listing behavior for all neighbourhood guide routes:

- Use fallback listing CTA first.
- Link to the general `/listings` route or the approved listing-support form path.
- Do not show fake listing cards.
- Do not show fake listing counts.
- Do not add sold data.
- Do not copy listing photos, remarks, MLS numbers, brokerage data, or listing metadata.
- Do not add custom listing detail pages.
- Only use filtered MLS Reciprocity links once the exact URL mode is verified and documented.

Recommended module language:

> Active listings are provided through MLS Reciprocity where available. Only active listings are shown. Sold and expired listings are not included.

If no verified filtered MLS URL exists:

- Show a fallback CTA such as `Ask about current listings in this neighbourhood`.
- Offer a secondary link to `/listings`.
- Capture lead metadata with guide name, slug, listing search mode, and page path.

## Map Future

Once dynamic neighbourhood routes exist:

- Map labels for live `published` guides can link to `/neighbourhoods/[slug]`.
- Preview guide labels should not be linked from public maps unless preview linking is intentional and noindex-safe.
- Draft and hidden guide labels must not link to fake routes.
- Map point data should include a route only after the route is generated and smoke-tested.

Until routes exist:

- Non-live labels must stay non-clickable or link only to existing approved pages.
- Do not create fake route links for College Park, Mountain Meadows, or any draft guide.
- Do not edit map files as part of route planning.

## Launch Checklist

Run this checklist for each guide before publishing.

Build and route checks:

- `npm run lint` passes.
- `npm run build` passes.
- Route smoke test returns `200` for published routes.
- Draft and hidden route smoke tests return `404`.
- Preview route smoke test returns `200` only if previews are intentionally generated.

Metadata and SEO:

- Published metadata title and description are unique and accurate.
- Published canonical URL points to `/neighbourhoods/[slug]`.
- Published page is indexable.
- Preview page has `noindex`.
- Preview page is excluded from sitemap.
- Draft and hidden pages are excluded from sitemap.

Content verification:

- School verification disclaimer is present.
- No absolute school catchment claim appears without exact SD43 verification.
- Park/trail claims are supported by official sources.
- Trail copy is original and does not copy Trailforks or third-party trail data.
- No unsupported factual claims were introduced.

Lead and CTA checks:

- CTA metadata includes guide name and slug.
- Buyer/seller CTA labels match the guide context.
- Listing CTA uses fallback mode unless a filtered MLS Reciprocity URL is verified.
- MLS disclosure/fallback copy is present.

Listings compliance:

- No IDX implementation was added.
- No fake listing cards were added.
- No sold data was added.
- No copied listing content was added.

Map/link checks:

- Map labels link only to live generated guide routes.
- Draft, hidden, and not-ready guides have no fake map links.
- Existing `/neighbourhoods` and Heritage Mountain routes are not accidentally changed.

## Implementation Sequence

1. Review and normalize `src/data/neighbourhoodGuides.ts` statuses.
2. Promote first batch candidates from `draft` to `preview` after content verification.
3. Create dynamic route in a later sprint.
4. Add metadata and robots rules.
5. Add sitemap filtering for `published` only.
6. Smoke test route behavior by status.
7. Promote one guide at a time from `preview` to `published`.
8. Only after routes are live, update public navigation or map links for published guides.

## Decisions Needed Before Route Creation

- Should `preview` routes be generated in production with `noindex`, or only in development/staging?
- Should `published` be the only sitemap-eligible status?
- Should Heritage Mountain remain a static route until it can be migrated safely?
- What exact CTA metadata fields should the template emit for buyer, seller, and listing support forms?
- Should map labels read from `neighbourhoodGuides.ts`, existing map point data, or a separate route availability map?

## Recommendation

Use a conservative publish/noindex approach:

- Generate `published` routes publicly and include only those in the sitemap.
- Generate `preview` routes only when intentionally selected, always with `noindex`, and never in the sitemap.
- Do not generate `draft` or `hidden` routes.
- Keep College Park and Mountain Meadows out of route integration until their research-pack open questions are resolved.
