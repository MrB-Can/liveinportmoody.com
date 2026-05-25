# LiveInPortMoody.com Map Implementation

Date: 2026-05-25

## Provider Used

The map component uses `maplibre-gl` in the browser through `PortMoodyMap`.

`PortMoodyMap` resolves a style URL and either:

- renders the interactive MapLibre map when maps are enabled and configured, or
- renders `MapFallback` when maps are disabled, unconfigured, or unavailable.

## Environment Variables

- `NEXT_PUBLIC_INTERACTIVE_MAPS_ENABLED`
  - Must be set to `true` to enable interactive maps.
- `NEXT_PUBLIC_MAP_PROVIDER`
  - Supported values in the current implementation:
    - `mapbox`
    - `maplibre`
  - Defaults to `mapbox` if omitted.
- `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`
  - Required when `NEXT_PUBLIC_MAP_PROVIDER=mapbox`.
  - Used only to load the Mapbox streets style URL.
- `NEXT_PUBLIC_MAP_STYLE_URL`
  - Required when `NEXT_PUBLIC_MAP_PROVIDER=maplibre`.
  - Should point to an approved MapLibre-compatible style JSON URL.

## Fallback Rules

If maps are not enabled or the required style/token is missing, the site shows a styled fallback card:

- "Map unavailable"
- "Interactive maps are not enabled or could not load."
- "Map locations are approximate and intended for orientation."

This avoids broken empty map containers and keeps the pages useful without a paid or configured map provider.

## Map Routes

Current page usage:

- `/neighbourhoods`
  - Shows neighbourhood orientation points.
- `/neighbourhoods/heritage-mountain`
  - Shows Heritage Mountain plus relevant townhouse complex orientation points.
- `/complexes`
  - Shows townhouse complex orientation points.
- `/complexes/treetops-101-parkside-drive`
  - Shows Treetops and Heritage Mountain context points.
- `/buildings`
  - Shows condo building/group orientation points plus neighbourhood context.

## Point Categories

Currently active point categories:

- `neighbourhood`
- `complex`
- `building`

Approved taxonomy for future map points:

- `neighbourhood`
- `complex`
- `building`
- `transit`
- `park`
- `trail`
- `village`
- `school`
- `landmark`

Do not add unsafe categories such as:

- `listing`
- `sold`
- `owner`
- `parcel`
- `value`
- `assessment`

## Approximate-Location Rule

Map data is for orientation, not property boundary or navigation precision.

Rules:

- Neighbourhood points must be marked `isApproximate: true`.
- Building groups must be marked `isApproximate: true`.
- Preview buildings and preview complexes must be marked `isApproximate: true`.
- Known complexes may still be marked approximate unless sourced geocoding is documented.
- Group/centroid points must not be described as exact addresses.
- Popups should show "Approximate location" when `isApproximate` is true.
- Page copy should continue to state that map locations are approximate and intended for orientation.

## URLs

Map point URLs should only link to existing routes.

Allowed live links at this stage:

- `/neighbourhoods`
- `/neighbourhoods/heritage-mountain`
- `/complexes`
- `/complexes/treetops-101-parkside-drive`
- `/buildings`
- `/listings`

Preview buildings and preview complexes should link to parent pages or inquiry CTAs, not fake detail pages.

## Intentionally Excluded

The map intentionally excludes:

- IDX overlays
- listing markers
- sold listing markers
- parcel or lot boundary data
- owner information
- assessment or value points
- price ranges
- exact school catchment boundaries
- exact commute-time claims
- unverified building amenity claims

## Future Enhancements

- Real map provider enablement once a provider/token/style decision is final.
- Functional filters by point category, area, property type, and guide status.
- Map/list sync so selecting a marker highlights the matching card.
- Real approved photos in popups.
- Approved listing overlays only if IDX/MLS rules permit.
- Never add sold data without compliant approval.
