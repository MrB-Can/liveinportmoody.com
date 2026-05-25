# Neighbourhood Schools, Parks, Trails, and External Resource Verification

Date: 2026-05-25

## Purpose

Create the verification framework for school, park, trail, and external resource sections before neighbourhood pages are published.

This framework is intentionally cautious. Neighbourhood pages may describe local context, but they must not publish unsupported claims about school catchments, park amenities, trail status, or third-party trail data.

## Verification Standard

Every school, park, trail, and external resource reference should have:

- A source URL from an official or approved source.
- A `lastVerifiedAt` date.
- A clear source type, such as school district, municipality, regional authority, transit agency, or approved third-party outbound link.
- A confidence level.
- Cautious copy where conditions can change.
- No copied third-party prose, trail data, listing-style structured data, or unsupported claims.

Recommended confidence levels:

- `verified`: confirmed against an official source for the exact claim.
- `needs_address_check`: useful context, but exact address-specific verification is still required.
- `general_context`: broad area guidance only.
- `do_not_publish`: insufficient support for public neighbourhood copy.

## Schools

School information must be treated as address-specific. Neighbourhood pages can help users understand which schools are commonly associated with an area, but they must not guarantee catchment placement.

Required standards:

- Use cautious language such as "often associated with," "commonly checked for this area," or "verify the exact address with SD43."
- Verify every exact address through SD43 before making any address-specific school statement.
- Avoid absolute catchment claims such as "this home is in X catchment" unless the exact address has been checked against SD43 and the claim is still presented with a verification note.
- Separate elementary, middle, and secondary schools where known.
- Include a `schoolVerificationUrl` field for SD43 school locator, registration, district map, or the relevant school page.
- Note that catchments, program placement, cross-catchment availability, and capacity can change.
- Do not imply access to programs of choice, French immersion, IB, or special programs without official confirmation.

Recommended copy pattern:

> Schools should be verified by exact address using SD43 before relying on catchment information. Boundaries, programs, and space availability can change.

Primary source standards:

- SD43 registration and school locator references should be the primary verification path.
- Individual SD43 school pages can support names, addresses, grades, and program notes.
- Third-party real estate school pages should not be used as primary sources.

Current primary resource URLs:

- SD43 registration and school locator guidance: `https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx`
- SD43 district map of schools: `https://www.sd43.bc.ca/Schools/DistrictMap/Pages/default.aspx`
- SD43 school websites directory: `https://www.sd43.bc.ca/Schools/SchoolSites/Pages/default.aspx`

## Parks

Park references should use official City, Metro Vancouver, or municipal pages wherever possible.

Required standards:

- Use official municipal or regional park pages as the source of truth.
- Avoid claiming amenities unless verified on an official page or maintained municipal source.
- Separate resource categories:
  - `park`
  - `trail`
  - `playground`
  - `waterfront`
  - `dog_walking`
  - `recreation`
- Avoid over-specific claims about hours, washrooms, parking, off-leash status, sport courts, beaches, picnic areas, boat launches, or accessibility unless the exact source supports them.
- Do not publish seasonal, closure, construction, parking, or safety status unless it comes from the current official source and is dated.
- If a park is near a neighbourhood but not inside it, describe proximity cautiously.

Recommended copy pattern:

> Nearby parks and recreation options should be verified against official City or regional pages before relying on specific amenities, closures, or access details.

Current primary resource URLs:

- City of Port Moody parks: `https://www.portmoody.ca/parks-recreation-and-environment/parks/`
- City of Port Moody trails and paths: `https://www.portmoody.ca/parks-recreation-and-environment/trails-and-paths/`
- Metro Vancouver regional parks: `https://metrovancouver.org/services/regional-parks`
- Village of Anmore parks, trails, and public spaces: `https://anmore.com/community/parks-trails-public-spaces/`
- Village of Belcarra parks/community parks page: `https://belcarra.ca/community/parks/`

## Trails

Trail sections should use original, general descriptions and official outbound resources. They should not reproduce third-party trail databases.

Required standards:

- Use our own general descriptions of outdoor access, terrain character, and neighbourhood fit.
- Link to official municipal, regional, or Trailforks pages where appropriate.
- Trailforks links or widgets may be used only if the official Trailforks embed/link path is allowed for the use case.
- Do not scrape Trailforks.
- Do not copy Trailforks trail names, stats, difficulty ratings, GPS tracks, condition reports, photos, descriptions, comments, or status data into our own database.
- Do not publish trail status as LiveInPortMoody.com status.
- Do not show hidden, restricted, illegal, unsanctioned, or sensitive trail data.
- Do not encourage access to unmarked, restricted, closed, unsafe, or environmentally sensitive trails.
- If status or closure information matters, send users to the official park authority or Trailforks page rather than summarizing it as ours.

Recommended copy pattern:

> Trail access and conditions can change. Use official park pages and approved trail resources before relying on route, access, or status information.

Current Trailforks policy resources:

- Trailforks widgets: `https://www.trailforks.com/widgets/`
- Trailforks data policy: `https://www.trailforks.com/about/data/`
- Trailforks API page: `https://www.trailforks.com/about/api/`

## Trail Strategy

### Now

Use curated parks and trails text written by LiveInPortMoody.com, backed by outbound official links.

Allowed now:

- General neighbourhood-level outdoor context.
- Official City of Port Moody, Metro Vancouver, Anmore, Belcarra, and TransLink links.
- Cautious references to nearby parks, waterfront access, and trail networks.
- Clear verification notes.

Not allowed now:

- Trailforks widgets.
- Trailforks data copies.
- Trail status modules.
- Custom outdoor basemap integrations.

### Soon

Add official Trailforks widgets only on outdoor-heavy pages after confirming the widget is appropriate for the page and does not expose hidden or restricted trail information.

Before adding widgets:

- Confirm the exact widget type and region/page source.
- Confirm embed terms and attribution.
- Confirm no hidden/restricted trails are exposed.
- Confirm mobile behavior and performance.
- Add a visible source/verification note.

### Later

Consider an optional outdoor basemap such as OpenCycleMap or Thunderforest only after a separate mapping sprint confirms licensing, attribution, token management, cost, accessibility, and performance.

This must not be mixed into the current neighbourhood page verification work.

### Never

Never scrape Trailforks or copy Trailforks trail data without approved API access and explicit compliance review.

Never publish hidden/restricted trail data, copied GPS tracks, copied condition/status data, or third-party trail photos as LiveInPortMoody.com content.

## External Resources

External resource sections should send users to primary sources for facts that change or require address-specific verification.

Recommended resource categories:

- `school_district`
- `municipal_parks`
- `regional_parks`
- `transit`
- `trail_platform`
- `municipal_general`
- `recreation`

Recommended resource list:

- SD43 school locator, registration, and district map for catchment verification.
- City of Port Moody parks pages for parks, trails, recreation, and municipal outdoor amenities.
- Metro Vancouver regional parks for regional parks near Port Moody, Anmore, and Belcarra.
- TransLink trip planner and station/route information for transit verification.
- Trailforks outbound links or official widgets where appropriate.
- Village of Anmore official pages for Anmore parks/trails references.
- Village of Belcarra official pages for Belcarra parks/community references.

Current primary resource URLs:

- TransLink trip planner: `https://www.translink.ca/tripplanner`
- TransLink schedules and maps: `https://www.translink.ca/schedules-and-maps`
- City of Port Moody: `https://www.portmoody.ca/`
- Village of Anmore: `https://anmore.com/`
- Village of Belcarra: `https://belcarra.ca/`

## Page-Level Checklist

Before publishing a neighbourhood page, complete this checklist.

Schools:

- School references use cautious, non-absolute language.
- Elementary, middle, and secondary references are separated where known.
- Exact address catchment claims are not published unless verified with SD43.
- Each school item has a `schoolVerificationUrl`.
- Copy includes an address-specific SD43 verification note.

Parks:

- Each park or recreation claim has an official source URL.
- Amenities are only listed if verified.
- Park, trail, playground, waterfront, dog walking, and recreation references are categorized separately.
- Temporary status, closures, and parking claims are excluded unless current and sourced.

Trails:

- Trail descriptions are original and general.
- Trailforks data is not copied.
- Trail status is not presented as LiveInPortMoody.com status.
- Hidden/restricted/unsanctioned trail references are excluded.
- Outbound links go to official or approved resources.

External resources:

- Links point to official or approved sources.
- Link text does not overstate what the source verifies.
- External resource cards do not duplicate third-party data.
- `lastVerifiedAt` is recorded.

Compliance:

- No unsupported factual claims.
- No scraped school, park, trail, transit, or third-party trail data.
- No map integration changes.
- No route-level publishing until verification is complete.

## Data Field Recommendations

Suggested shared fields:

- `id`
- `label`
- `url`
- `sourceName`
- `sourceType`
- `resourceCategory`
- `description`
- `lastVerifiedAt`
- `verificationStatus`
- `notes`

Suggested school fields:

- `schoolName`
- `schoolLevel`
- `municipality`
- `schoolVerificationUrl`
- `catchmentClaimLevel`
- `verificationNote`

Suggested park fields:

- `name`
- `municipality`
- `resourceTypes`
- `officialUrl`
- `amenitiesVerified`
- `amenityNotes`
- `verificationNote`

Suggested trail fields:

- `name`
- `municipality`
- `resourceTypes`
- `officialUrl`
- `trailforksUrl`
- `statusSourceUrl`
- `allowWidget`
- `copyRestrictions`
- `verificationNote`

## Open Questions

- Which exact SD43 school locator URL should be stored for public users if the locator is embedded or generated from a district page?
- Should school sections show named schools at all, or only a verification CTA until address-level checks are available?
- Which Port Moody park amenities are safe to list from official pages without adding maintenance burden?
- Which outdoor-heavy pages should be candidates for Trailforks widgets?
- Do Trailforks widgets expose any hidden or restricted trails for the relevant Port Moody/Anmore/Belcarra regions?
- Should Anmore and Belcarra references be included on Port Moody neighbourhood pages only as nearby regional context, or reserved for separate area pages?
- What review cadence should be used for school and park resource links: quarterly, semiannual, or before each publishing batch?
