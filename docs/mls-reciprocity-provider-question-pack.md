# MLS Reciprocity Provider Question Pack

**Sprint:** 20E  
**Project:** LiveInPortMoody.com  
**Scope:** Documentation-only question list and URL test matrix for confirming filtered MLS Reciprocity capability.

This pack is for provider discovery only. It does not implement IDX, create listing cards, add sold data, edit routes, or change map behavior.

## Purpose

LiveInPortMoody.com needs to confirm whether GVR MLS Reciprocity or the selected provider can support reliable filtered links for neighbourhood, building, and complex listing modules.

Until this is confirmed, listing modules should use:

- `listingSearchMode: "fallback"`
- a link to `/listings`
- an inquiry CTA
- active-listings-only MLS Reciprocity disclosure

## Current Safe Default

Use this disclosure anywhere MLS Reciprocity listing access is mentioned:

> Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.

Use this fallback when a filtered URL is unavailable, unreliable, or not compliance-approved:

- Primary CTA: `Ask about current listings`
- Secondary CTA: `View Port Moody listings`
- Secondary href: `/listings`
- Lead intent: `listing-search-support`
- Search mode: `fallback`

## Questions for GVR / MLS Reciprocity Provider

### Filtered Link Capability

1. Can we create filtered links by city, for example Port Moody?
2. Can we create filtered links by neighbourhood, subarea, or MLS area?
3. Can we create filtered links by exact street address?
4. Can we create filtered links by building name?
5. Can we create filtered links by strata complex name?
6. Can we create filtered links by property type, such as detached, townhouse, condo/apartment, duplex, or land?
7. Can city, neighbourhood/subarea, and property-type filters be combined in one shareable link?
8. Can address, building-name, or strata-complex filters be combined with property type?
9. Do filtered links persist when opened in a new browser session?
10. Do filtered links preserve filters on mobile and desktop?
11. Do filtered links expire or require periodic regeneration?
12. Are provider-hosted saved-search URLs supported?
13. Can manually created search URLs be used on public website pages?
14. Are there query parameters that should not be shared publicly?

### Page Placement

1. Can filtered search links be embedded on neighbourhood pages?
2. Can filtered search links be embedded on building pages?
3. Can filtered search links be embedded on strata-complex pages?
4. Can links be opened directly from custom pages on LiveInPortMoody.com?
5. Must links open in a new tab, same tab, iframe, modal, or provider-hosted page?
6. Are iframe embeds allowed, or should we only use outbound links?
7. Are there page-level requirements for placing MLS Reciprocity links near local editorial content?
8. Are there restrictions on using filtered links from noindex preview pages?
9. Are there restrictions on using filtered links from published indexable pages?

### Display Permissions

1. Are listing counts allowed on our pages?
2. Are listing thumbnails allowed on our pages?
3. Are listing cards allowed on our pages?
4. Are price, address, bedroom/bathroom, MLS number, brokerage, or listing-status snippets allowed on our pages?
5. Are zero-result messages allowed on our pages?
6. Are cached listing previews allowed?
7. Are copied listing photos prohibited outside the approved provider experience?
8. Are copied listing remarks prohibited outside the approved provider experience?
9. Are custom listing detail pages allowed under any MLS Reciprocity setup, or are they prohibited unless separately approved?
10. If listing cards are allowed by the provider, what exact branding, attribution, refresh, and display rules apply?

### Listing Status and Data Scope

1. Are sold listings prohibited?
2. Are expired listings prohibited?
3. Are withdrawn, terminated, cancelled, or historical listings prohibited?
4. Does the provider guarantee active-listings-only results for shared links?
5. How is listing status shown to users?
6. How quickly are active listing changes reflected in the provider search experience?
7. Are listing counts considered listing data under the provider rules?
8. Are neighbourhood-level or building-level counts allowed if they come from the provider search page?

### Branding, Disclaimer, and Ownership

1. What MLS Reciprocity disclosure must appear near links or embedded search experiences?
2. What GVR, MLS, REALTOR, brokerage, or provider branding must appear?
3. Does the disclosure need to appear on every page, every module, or only the destination search page?
4. Can we use the wording “Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.”?
5. Do we need a clarification that listings may include properties listed by participating brokerages?
6. Are there required font size, placement, logo, or proximity rules for the disclaimer?
7. Are there restrictions on wording that could imply we own, control, or represent other brokerages' listings?
8. Is brokerage name, brokerage address, agent name, or license information required near MLS Reciprocity links?

### Tracking and Lead Routing

1. Can we append UTM parameters or source tags to filtered links?
2. Can we track outbound clicks from neighbourhood, building, and complex pages?
3. Can provider URLs include a source page or campaign parameter?
4. Are lead forms allowed beside MLS Reciprocity links?
5. Are there restrictions on asking users to inquire about active listings after they click or view a filtered search?
6. Can we record the tested search mode, area name, building name, complex name, address, and page path in lead metadata?

### Operational Questions

1. Who is responsible for creating and maintaining filtered links?
2. Is there a provider dashboard for saved searches?
3. Can filtered URLs be regenerated if MLS area names change?
4. Is there a support contact for URL behavior and compliance questions?
5. How should we document test date, provider, URL mode, and verification status?
6. What change notice is provided if provider URL behavior changes?
7. What is the compliance review process before filtered links appear on published pages?

## Search Modes to Confirm

These modes align with `src/types/listings.ts` and `docs/mls-reciprocity-filtering-strategy.md`.

| Mode | Provider Question | Safe Use Before Approval |
| --- | --- | --- |
| `none` | No listing module or only general guidance. | Allowed if no CTA is needed. |
| `fallback` | No reliable filtered URL exists. | Recommended default. |
| `gvr_area_search` | Can GVR/provider filter by city, neighbourhood, subarea, and property type? | Do not use until tested. |
| `gvr_address_search` | Can GVR/provider filter by civic address, building, or complex? | Do not use until tested. |
| `saved_search_url` | Can provider-hosted saved searches be linked publicly? | Do not use until tested. |
| `vendor_idx_url` | Can external vendor IDX search URLs be linked without embedding IDX locally? | Do not embed unless separately approved. |
| `manual_link` | Can manually maintained filtered URLs be used and re-tested? | Use only with owner, test date, and expiry tracking. |

## Test Matrix

Each test should record:

- tested area/building/address
- intended page context
- expected `listingSearchMode`
- tested URL
- provider or dashboard source
- date tested
- tester
- expected result
- actual result
- active-listings-only confirmation
- mobile result
- desktop result
- whether filters persist in a fresh browser session
- disclaimer/branding observed
- pass/fail
- notes and screenshots if useful

### Matrix

| Test ID | Target | Context Type | Filter Type | Intended Mode | Expected Result | Pass Criteria | Fallback If Failed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MLS-001 | Heritage Mountain | neighbourhood | Area / subarea | `gvr_area_search` or `saved_search_url` | Active listings filtered to Heritage Mountain or the closest approved MLS subarea. | Link opens reliably, keeps filters, shows active listings only, and does not silently broaden beyond the intended area. | Use `/listings` plus inquiry CTA and disclosure. |
| MLS-002 | Heritage Woods | neighbourhood | Area / subarea | `gvr_area_search` or `saved_search_url` | Active listings filtered to Heritage Woods or the closest approved MLS subarea. | Link opens reliably, keeps filters, shows active listings only, and does not include unrelated nearby areas unless clearly disclosed. | Use `/listings` plus inquiry CTA and disclosure. |
| MLS-003 | Moody Centre | neighbourhood | Area / subarea | `gvr_area_search` or `saved_search_url` | Active listings filtered to Moody Centre / Port Moody Centre if supported. | Link opens reliably, keeps filters, shows active listings only, and handles local naming differences cleanly. | Use `/listings` plus inquiry CTA and disclosure. |
| MLS-004 | Glenayre | neighbourhood | Area / subarea | `gvr_area_search` or `saved_search_url` | Active listings filtered to Glenayre or the closest approved MLS subarea. | Link opens reliably, keeps filters, shows active listings only, and does not include unrelated Burnaby, Coquitlam, or broader Port Moody results. | Use `/listings` plus inquiry CTA and disclosure. |
| MLS-005 | Treetops | complex | Complex name | `gvr_address_search` or `saved_search_url` | Active listings filtered to the Treetops complex if provider supports complex-name search. | Link opens reliably, keeps filters, shows active listings only, and does not include unrelated complexes or nearby properties. | Use `/listings` plus inquiry CTA and disclosure. |
| MLS-006 | 101 Parkside Drive | complex | Exact civic address | `gvr_address_search` or `saved_search_url` | Active listings filtered to 101 Parkside Drive if provider supports address search. | Link opens reliably, keeps filters, handles zero active listings correctly, and does not show fake local inventory. | Use `/listings` plus inquiry CTA and disclosure. |
| MLS-007 | The Grande | building | Building name | `gvr_address_search` or `saved_search_url` | Active listings filtered to The Grande if provider supports building-name search. | Link opens reliably, keeps filters, shows active listings only, and handles name ambiguity without unrelated results. | Use `/listings` plus inquiry CTA and disclosure. |
| MLS-008 | 50 Electronic Ave | building | Exact civic address | `gvr_address_search` or `saved_search_url` | Active listings filtered to 50 Electronic Avenue if provider supports address search. | Link opens reliably, keeps filters, handles zero active listings correctly, and does not broaden to all Moody Centre unless disclosed. | Use `/listings` plus inquiry CTA and disclosure. |

## Per-Test Checklist

Use this checklist for each matrix row:

- [ ] Confirm provider-approved URL source.
- [ ] Open URL in a logged-out desktop browser session.
- [ ] Open URL in a logged-out mobile browser session.
- [ ] Confirm filters remain applied after refresh.
- [ ] Confirm filters remain applied when opened from a copied URL.
- [ ] Confirm active listings only.
- [ ] Confirm no sold listings.
- [ ] Confirm no expired listings.
- [ ] Confirm no withdrawn, cancelled, terminated, or historical listings.
- [ ] Confirm result area/address/building matches the intended target.
- [ ] Confirm zero-result behavior is handled by the provider.
- [ ] Confirm provider branding and MLS Reciprocity disclosure.
- [ ] Confirm whether UTM parameters or click tracking can be appended.
- [ ] Record tested URL, test date, tester, result, and notes.
- [ ] Decide final mode: `fallback`, `gvr_area_search`, `gvr_address_search`, `saved_search_url`, `vendor_idx_url`, or `manual_link`.

## Required Fallback If Filtered URL Is Unavailable

If a filtered provider URL is unavailable, unreliable, too broad, expires, lacks required disclosure, or is not compliance-approved:

- Link to `/listings`.
- Show an inquiry CTA.
- Include active-listings-only disclosure.
- Do not show a local listing grid.
- Do not create placeholder listing cards.
- Do not show fake listing counts.
- Do not imply listings are unavailable; say that filtered MLS search is not yet verified for that area, building, or complex.

Recommended fallback copy:

> Ask about current active listings in this area. We will confirm what is active through approved MLS Reciprocity sources and help you verify the details before you rely on them.

Recommended fallback disclosure:

> Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.

Recommended fallback lead metadata:

- `intent:listing-search-support`
- `lead_type:buyer`
- `area:port-moody`
- `listing_search_mode:fallback`
- `module_source:neighbourhood_listing_module`, `module_source:building_listing_module`, or `module_source:complex_listing_module`
- `page_path:<route>`
- `neighbourhood_name:<name>` where relevant
- `building_name:<name>` where relevant
- `complex_name:<name>` where relevant
- `address:<address>` where relevant

## Compliance Guardrails

These rules apply until written approval says otherwise:

- No sold data.
- No expired data.
- No withdrawn, cancelled, terminated, or historical listing data.
- No fake listing cards.
- No fake listing counts.
- No copied listing photos.
- No copied listing remarks.
- No custom listing detail pages.
- No scraping from REALTOR.ca, REW, brokerage sites, MLS systems, provider pages, or third-party listing sites.
- No local caching, transformation, or republication of MLS listing content outside the approved provider experience.
- No claim that LiveInPortMoody.com owns, controls, or is the listing brokerage for reciprocal listings from other brokerages.
- No filtered link should be used unless the provider URL is tested, documented, and compliance-approved.

## Approval Record Template

Use this template after provider testing:

```text
Target:
Context type:
Search mode:
Provider:
Tested URL:
Date tested:
Tester:
Approved for public use: yes/no
Active-listings-only confirmed: yes/no
Sold/expired excluded: yes/no
Filters persist on desktop: yes/no
Filters persist on mobile: yes/no
Disclaimer/branding compliant: yes/no
Fallback required: yes/no
Notes:
```
