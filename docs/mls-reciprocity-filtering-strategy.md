# MLS Reciprocity Filtering Strategy

Date: 2026-05-25

## Purpose

Define how neighbourhood, building, and complex listing modules should work with GVR MLS Reciprocity without implementing IDX, scraping listings, creating fake listing cards, adding sold data, or creating building-specific listing pages.

This strategy is intentionally conservative. Until GVR or the selected MLS Reciprocity provider confirms reliable filtered search URLs, content routes should link to approved search experiences or show a listing-support fallback form.

## Current State

The current `/listings` implementation is a compliant fallback-first page:

- `src/app/listings/page.tsx` reads `process.env.NEXT_PUBLIC_GVR_RECIPROCITY_SEARCH_URL` into `reciprocitySearchUrl`.
- If `reciprocitySearchUrl` is set, the page shows one external "Search active listings" CTA linking to that URL in a new tab.
- If `reciprocitySearchUrl` is missing, the page shows "MLS Reciprocity search is being connected" plus an "Ask about current listings" CTA pointing to the on-page support form.
- The page does not render IDX, embedded listing cards, listing photos, copied listing remarks, sold data, expired listings, or listing detail pages.
- Disclosure copy appears in both live-link and fallback states: active listings are provided through MLS Reciprocity; only active listings are shown; sold and expired listings are not included.
- Related routes already point users toward `/listings` rather than pretending to have filtered listing inventory.

## Current Environment Audit

`NEXT_PUBLIC_GVR_RECIPROCITY_SEARCH_URL` is used by `/listings`, but it is not listed in `.env.example` and was not present in the local `.env.local` key list during this audit.

Relevant current public/runtime keys:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_PUBLIC_EMAIL`
- `NEXT_PUBLIC_PUBLIC_PHONE`
- `NEXT_PUBLIC_BROKERAGE_NAME`
- `NEXT_PUBLIC_BROKERAGE_ADDRESS`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_CLARITY_ID`
- `NEXT_PUBLIC_INTERACTIVE_MAPS_ENABLED`
- `NEXT_PUBLIC_MAP_PROVIDER`
- `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`
- `NEXT_PUBLIC_MAP_STYLE_URL`
- `COMING_SOON_ENABLED`
- `PREVIEW_KEY` in local env
- CRM/GHL server-side keys for lead routing

Recommended low-risk env cleanup for a later sprint: add `NEXT_PUBLIC_GVR_RECIPROCITY_SEARCH_URL=` to `.env.example` with a comment that it must be an approved MLS Reciprocity or provider URL.

## Current Listing Support Form Behavior

`src/components/listings/ListingSupportForm.tsx` posts to `/api/lead` with:

- `formType: "ask-question"`
- `leadType: "buyer"`
- name, email, optional phone
- `pagePath: "/listings"`
- `ctaLabel: "Ask about a listing"`
- `resourceName`: listing address, listing URL, or "Port Moody listing support"
- `consentToContact`
- tags:
  - `source:liveinportmoody`
  - `intent:buyer`
  - `intent:listing-search-support`
  - `lead_type:buyer`
  - `area:port-moody`

The form captures listing metadata inside the freeform `message` string:

- `intent:listing-search-support`
- selected help type
- `listing_url`
- `listing_address`
- question/notes

`/api/lead` validates this payload through `leadInputSchema`, adds standard engagement/form tags, upserts the contact, creates or updates the CRM opportunity, and applies deduplicated tags.

Current limitation: listing URL, listing address, module source, neighbourhood name, building name, complex name, and search mode are not first-class lead fields. They can be represented through tags, `resourceName`, and message metadata until the CRM schema is expanded.

## Desired State

Neighbourhood, building, and complex pages should have a safe listing module that chooses between an approved filtered MLS link and a fallback lead path.

The module should not display listing inventory itself unless an approved IDX/MLS Reciprocity display product is separately implemented and compliance-reviewed.

Desired user experience:

- When an approved, tested filtered URL exists, show a concise CTA to the external MLS Reciprocity/provider search.
- When no reliable filtered URL exists, show a fallback CTA to `/listings` and a listing-support form or anchor.
- Always include clear MLS Reciprocity disclosure.
- Never create empty listing grids, fake counts, "coming soon listings" cards, copied listing photos, or route-specific listing detail pages.

## Listing Module Design

### Neighbourhood Listing Module

Use for neighbourhood pages and neighbourhood guide sections.

Required fields:

- `contextType`: `neighbourhood`
- `areaName`: display name, for example `Heritage Mountain`
- `listingSearchMode`: one of the URL modes below
- `listingUrl`: optional approved filtered URL
- `fallbackCta`: label and href
- `disclosure`: active-listings-only MLS Reciprocity copy
- `leadMetadata`: fields/tags to include when routing a support form or CTA

Recommended lead metadata:

- `intent:listing-search-support`
- `intent:neighbourhood-listing-support`
- `lead_type:buyer`
- `area:port-moody`
- `neighbourhood_name:<name>`
- `listing_search_mode:<mode>`
- `module_source:neighbourhood_listing_module`
- `page_path:<route>`

Fallback behavior:

- Primary fallback CTA: `Ask about current listings`
- Secondary fallback CTA: `View Port Moody listings` linking to `/listings`
- Suggested support prompt: "Ask us what is active in this area and what to verify before writing."

### Building Or Complex Listing Module

Use for building and townhouse complex pages or sections.

Required fields:

- `contextType`: `building` or `complex`
- `name`: building or complex display name
- `address`: civic address or address label
- `listingSearchMode`: one of the URL modes below
- `addressSearchUrl`: optional approved filtered address/building/complex URL
- `fallbackCta`: label and href
- `disclosure`: active-listings-only MLS Reciprocity copy
- `leadMetadata`: fields/tags to include when routing a support form or CTA

Recommended lead metadata:

- `intent:listing-search-support`
- `intent:building-listing-support` or `intent:complex-listing-support`
- `lead_type:buyer`
- `area:port-moody`
- `building_name:<name>` or `complex_name:<name>`
- `building_address:<address>` or `complex_address:<address>`
- `listing_search_mode:<mode>`
- `module_source:building_listing_module` or `module_source:complex_listing_module`
- `page_path:<route>`

Fallback behavior:

- Primary fallback CTA: `Ask about listings in this building` or `Ask about listings in this complex`
- Secondary fallback CTA: `View Port Moody listings` linking to `/listings`
- Suggested support prompt: "Ask us whether anything is active here and what strata or building questions to verify."

## URL Modes

Use these modes to describe what the module is allowed to do:

- `none`: no listing CTA should be shown beyond general guidance.
- `fallback`: no reliable filtered URL exists; show support form and `/listings` link.
- `gvr_area_search`: approved GVR MLS Reciprocity URL filtered by city, neighbourhood, subarea, and/or property type.
- `gvr_address_search`: approved GVR MLS Reciprocity URL filtered by civic address, building, or complex if supported.
- `saved_search_url`: provider-hosted saved search URL created in an approved MLS Reciprocity/IDX vendor system.
- `vendor_idx_url`: external vendor IDX search URL, not embedded in LiveInPortMoody.com unless separately approved.
- `manual_link`: manually maintained approved URL, used only when ownership, expiry, and test date are tracked.

Recommended default before provider testing: `fallback`.

## Data Fields

### Shared Fields

- `id`: stable module identifier
- `contextType`: `neighbourhood`, `building`, or `complex`
- `displayName`: module display name
- `listingSearchMode`
- `listingUrl`: optional approved URL
- `fallbackCta`
- `disclosure`
- `leadMetadata`
- `lastVerifiedAt`: date the URL was tested
- `verifiedBy`: person or source that confirmed the URL
- `provider`: `gvr`, vendor name, or `manual`
- `notes`: internal notes for provider behavior and constraints

### Neighbourhood Fields

- `areaName`
- `city`
- `subarea`
- `propertyTypes`
- `neighbourhoodSlug`

### Building/Complex Fields

- `name`
- `address`
- `city`
- `propertyType`
- `buildingSlug` or `complexSlug`
- `addressSearchUrl`
- `knownProviderSearchTerms`: optional terms tested, such as civic address, building name, strata name, or complex name

## Compliance Constraints

Required rules:

- Only active listings may be shown through MLS Reciprocity.
- No sold, expired, withdrawn, terminated, or historical listings.
- No fake listing cards, fake listing counts, mock MLS data, placeholder MLS numbers, copied listing photos, or copied listing remarks.
- No custom listing detail pages unless explicitly approved through brokerage, board, and provider compliance review.
- Do not imply LiveInPortMoody.com owns, controls, or is the listing brokerage for other brokerages' listings.
- Do not scrape listings from REALTOR.ca, REW, brokerage sites, MLS systems, provider pages, or any third-party listing site.
- Do not cache, transform, or republish MLS listing content outside the approved provider experience.
- If a filtered MLS link is unavailable or unreliable, show a fallback form and a general `/listings` link.
- Every module that mentions MLS Reciprocity must include active-listings-only disclosure.

Suggested disclosure:

> Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.

Suggested ownership clarification when linking externally:

> Listings may include properties listed by participating brokerages through MLS Reciprocity.

## URL Testing Plan

Test every URL mode with provider-approved URLs only. Record the tested URL, date, tester, provider, expected result, actual result, screenshots if useful, and any query parameters that appear unstable.

### City Search

- Confirm Port Moody city filter is available.
- Confirm the URL persists when opened in a fresh browser/session.
- Confirm results show active listings only.
- Confirm no sold/expired records appear.
- Confirm the URL does not degrade to a broader Metro Vancouver search.
- Confirm mobile and desktop redirects preserve the filter.

### Neighbourhood/Subarea Search

- Test official GVR subarea labels against local neighbourhood names.
- Confirm provider recognizes the desired neighbourhood or subarea.
- Confirm nearby but incorrect areas are not silently included.
- Confirm URL survives sharing, new sessions, and UTM parameters.
- Record any mismatch between local guide names and MLS subarea names.

### Property Type Search

- Test detached, townhouse, condo/apartment, duplex, and land if supported.
- Confirm provider property type labels match GVR taxonomy.
- Confirm combined filters work with city and neighbourhood.
- Confirm a no-results state is handled by the provider, not by fake local cards.

### Address Search

- Test exact civic address.
- Test address without unit number.
- Test address with common abbreviations and punctuation differences.
- Confirm results do not include unrelated buildings with similar street names.
- Confirm address links still work if there are zero active listings.

### Building Name Search

- Test public building name and legal/strata name if known.
- Confirm provider can search by building name without broad text matches.
- Confirm results map back to the intended address.
- If provider cannot reliably search building name, use `fallback` or address search only.

### Complex Name Search

- Test complex name, civic address, and strata name variants.
- Confirm multi-building complexes do not lose valid addresses.
- Confirm detached/townhouse property type filtering works if relevant.
- If provider cannot reliably search complex name, use `fallback` or address search only.

### Saved Search / Vendor URL

- Confirm saved search is account-owned by the brokerage/team and approved for public linking.
- Confirm the URL does not expire or require login.
- Confirm changes to saved-search filters are intentional and logged.
- Confirm disclosure and brokerage/provider branding are acceptable.

## Fallback Behavior

When `listingSearchMode` is `fallback`, `none`, or any URL fails testing:

- Do not render listing cards or a "no listings found" inventory module on LiveInPortMoody.com.
- Show a concise explanation that the filtered MLS search is not available on this page.
- Link to `/listings` for the general active listing search/fallback page.
- Offer the listing-support form or a route anchor to ask about current active listings.
- Include module-specific metadata in the lead message and tags.

Fallback copy pattern:

> Filtered MLS search for this area is not available here yet. Ask us what is active and what to verify before writing.

## Open Questions For GVR Or Provider

- Does the approved MLS Reciprocity product support public URLs filtered by city?
- Does it support public URLs filtered by GVR neighbourhood/subarea?
- Does it support combining city, subarea, and property type filters?
- Does it support address-specific search URLs that persist across sessions?
- Does it support building name or complex name filtering, or only address/text search?
- Can saved searches be created and shared publicly without login?
- Do saved-search URLs expire, change, or depend on cookies/session state?
- What disclosure, logo, brokerage, and attribution copy is required on pages that link to provider searches?
- Are external links sufficient, or must listing search appear in a framed/hosted provider page?
- Are query parameters stable enough to store in source-controlled config?
- Are there restrictions on using local neighbourhood names that differ from GVR subarea labels?
- What audit evidence should be retained when testing URL filters?

## Implementation Guidance

Until the provider answers the open questions:

- Keep all route pages in fallback mode.
- Do not add listing cards or embedded inventory modules.
- Do not create building-specific listing pages.
- Do not touch maps for listing overlays.
- Use the `/listings` page as the general search/support endpoint.
- Store future module config as data only after each URL is approved and tested.
