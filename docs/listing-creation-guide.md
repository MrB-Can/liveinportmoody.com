# Creating a new listing (agent guide)

This site has one listing detail template  -  built and refined against the first real
listing (326-55 Klahanie Drive)  -  that every future listing should reuse as-is. **Adding
a listing is a data-only change.** Do not create a new component, a new route, or a
one-off page. If the template genuinely can't represent something a listing needs, stop
and flag it to a human rather than forking the template.

## Quick-start checklist

1. Get the source material from the human: a feature sheet (PDF), photos, and (if
   available) a floor plan image. These are typically dropped in
   `~drop here/<street address>/` with a `Photos/` subfolder  -  see "Where input comes
   from" below.
2. Pick a `slug` (pattern: `<unit>-<street-number>-<street-name-kebab-case>`, e.g.
   `326-55-klahanie-drive`).
3. Copy photos into `public/images/listings/<slug>/` (see "Image conventions").
4. Copy the floor plan (if provided) into the same folder as `floorplan.png`.
5. Add one object to the `ourListings` array in `src/data/ourListings.ts` (see
   "Field-by-field reference"  -  copy the existing Klahanie entry as a starting shape).
6. Run `npm run typecheck && npm run build`. Fix anything that fails before moving on  - 
   the build statically prerenders this page, so a bad image path or malformed field
   fails loudly here.
7. Restart the dev server clean (see "Dev server gotcha") and visually check the page at
   mobile/tablet/desktop widths before calling it done.

Nothing else needs to change. See "What happens automatically" for why.

## What happens automatically

Every surface below reads directly from the `ourListings` array  -  one data entry is
enough to make a listing appear everywhere it should:

| Surface | Behavior |
|---|---|
| `/listings/[slug]` | The detail page itself (`ListingDetailTemplate`). Only renders for `status: "active"` or `"coming-soon"`; anything else 404s. |
| `/listings` | Listing index/grid page. |
| `/` (homepage) | "Currently listed" section  -  only appears if at least one listing is active/coming-soon. |
| `/buy`, `/sell` | Same "Currently listed by Paul and Leilani" card section. |
| Neighbourhood guide page for `neighbourhoodSlug` | "Our listings here" section, via `getOurListingsForNeighbourhood()`. |
| Building guide page for `buildingSlug` | Same pattern, via `getOurListingsForBuilding()`. |
| `sitemap.xml` | Auto-adds `/listings/<slug>` (active/coming-soon only). |
| Header nav → Buy → Search Listings | Gets a "New listing" badge whenever *any* active/coming-soon listing exists (this is a global flag, not per-listing). |

All of the above (except the detail page itself) render listings through
`FeaturedListingCard.tsx`, which pulls `heroImage`, `price`, `address`, `unit`,
`neighbourhoodSlug` (resolved to a name), `beds`/`baths`/`sqft`, and `status` (→ "For
Sale" / "Coming soon" badge). Keep those fields accurate  -  they're doing double duty as
both the detail-page content and every card thumbnail across the site.

## Files involved

**Edit this one file for a normal new listing:**
- `src/data/ourListings.ts`  -  the entire content model. Types are declared at the top of
  the file; the `ourListings` array holds the actual listings.

**Don't edit these for a normal new listing** (shared template, used by every listing):
- `src/components/listings/ListingDetailTemplate.tsx`  -  the page layout itself.
- `src/components/listings/ListingHeroGallery.tsx`, `ListingLightbox.tsx`,
  `ListingPropertyDetailsTabs.tsx`, `ListingStatusBadge.tsx`, `FeaturedListingCard.tsx`
   -  supporting components used by the detail page and/or listing cards site-wide.
- `src/components/listings/ListingSupportForm.tsx`  -  a general lead-capture form shown
  on the `/listings` index page (not the detail template). Unrelated to any single
  listing's data.
- `src/app/listings/[slug]/page.tsx`  -  the route. Reads `ourListings` automatically;
  never needs a per-listing change.

**Ignore this file:** `src/components/listings/ListingPhotoGallery.tsx` is dead code  - 
an earlier, superseded draft of the gallery that nothing imports anymore
(`ListingHeroGallery.tsx` is the real one, used by the template). Don't mistake it for
part of the live template, and don't build on top of it.

**Reference only**  -  a new listing's `neighbourhoodSlug`/`buildingSlug` must match an
*existing* slug in these files. If the right neighbourhood/building genuinely isn't in
there yet, that's a separate, bigger task  -  don't invent a slug that doesn't resolve.
- `src/data/neighbourhoodGuides.ts`
- `src/data/buildings.ts`

## Where input comes from

Listings are typically handed off by dropping a folder in `~drop here/` at the project
root, e.g. `~drop here/326-55 Klahanie/`, containing:
- `<Name> Feature Sheet.pdf`  -  MLS-style feature sheet with all the facts/features data.
- `Floorplan.png` (or similar)  -  the unit's floor plan, if the listing has one.
- `Photos/`  -  the full photo set, usually numbered sequentially by the photographer.

If a human points you at a folder like this, treat it as the source of truth for the
`details` tabs, `rooms`, `summary`, and photos below  -  don't guess or invent facts.

## Field-by-field reference

Copy the shape of the existing entry (326-55-klahanie-drive) as a starting point. Field
notes, in the order they appear in the `OurListing` type:

- **`slug`**  -  URL segment. Kebab-case, matches the `public/images/listings/<slug>/`
  folder name exactly.
- **`mlsNumber`**  -  pass through exactly as given (e.g. `"R3144061"`).
- **`status`**  -  `"active" | "coming-soon" | "pending" | "sold"`. `"active"` and
  `"coming-soon"` render normally on all the usual surfaces. `"sold"` now has real
  behavior: the listing renders on `/recently-sold` (via `getSoldOurListings()`), in the
  homepage "Just sold" section within 30 days of `soldDate` (`getJustSoldListings()`),
  and on its own detail page (included in `generateStaticParams` and the not-found
  guard). Set `soldPrice`/`soldDate` to drive those surfaces  -  with `soldPrice` unset
  it falls back to the list price with a "Listed at" note. `"pending"` is still valid on
  the type but has no built surface  -  setting it today just makes the listing disappear
  everywhere (404 on its own page). Don't assume more behavior exists than this.
- **`address`** / **`unit`**  -  rendered together as `"{unit} - {address}, {neighbourhood
  name}"` in the page's `<h1>`. Keep the combined string reasonably short  -  see
  "Address heading length" below.
- **`neighbourhoodSlug`**  -  must match a slug in `neighbourhoodGuides.ts`. Currently:
  `heritage-mountain`, `heritage-woods`, `mountain-meadows`, `moody-centre`, `glenayre`,
  `college-park`, `suter-brook`, `newport-village`, `klahanie`, `ioco-north-shore`,
  `barber-street`, `seaview`, `north-shore-port-moody`, `anmore`, `belcarra`. Get this
  right  -  it's used for both display and the neighbourhood guide's "our listings here"
  section, and a wrong slug silently just fails to match (no error, the listing simply
  doesn't show up there).
- **`buildingSlug`** *(optional)*  -  must match a slug in `buildings.ts` if set. Omitting
  it is fine and just hides the building-name row and the "read the building guide"
  sentence in Location  -  it doesn't break anything.
- **`price`**, **`beds`**, **`baths`**, **`sqft`**  -  plain numbers, no formatting.
  `sqft` also drives the auto-computed "price per sqft" shown in the sidebar.
- **`lotSqft`**, **`yearBuilt`** *(optional)*  -  shown in the sidebar key-facts block if
  present, omitted cleanly if not.
- **`propertyType`**  -  free text (e.g. `"Apartment/Condo"`), shown next to the MLS
  number under the address.
- **`listingAgent`**  -  `"paul" | "leilani" | "both"`. Drives the displayed agent name
  throughout (sidebar agent card, showing-request copy, etc.) via a name lookup already
  in the template  -  don't hardcode a name anywhere in the data.
- **`heroImage`** / **`galleryImages`**  -  see "Image conventions" below.
- **`floorplanImage`** *(optional)*  -  see "Image conventions." Omitting it triggers the
  template's alternate single-column layout (tested and confirmed clean  -  no dead
  whitespace).
- **`summary`**  -  the descriptive paragraph, shown once, directly under the price block
  (not duplicated anywhere else  -  don't add it again further down the page).
- **`highlights`**  -  array of `{ text, icon }`. `icon` is a **closed enum**:
  `"chef-hat" | "umbrella" | "sparkles" | "train-front" | "martini"` (kitchen/appliance
  feature, outdoor/patio feature, "new/renovated" freshness, transit/location proximity,
  and wet bar/entertaining feature, respectively). If a listing's best highlights don't
  fit these themes, add a new
  icon key to `OurListingHighlightIcon` in `ourListings.ts` **and** wire it into the
  `highlightIcons` map in `ListingDetailTemplate.tsx`  -  don't force-fit the wrong icon
  onto a highlight it doesn't match.
- **`details`**  -  array of tabs (`{ label, rows: [{ label, value }] }}`), rendered as the
  "Full property details" tab strip. **Exact-match gotchas** (see next section) apply
  here  -  using the wrong tab/row label doesn't error, it just silently loses the icon or
  the sidebar auto-fill for that field.
- **`rooms`** *(optional)*  -  array of `{ name, dimensions, floor? }` for the room
  dimensions table. Enter dimensions as `"11'5 x 10'3"` (lowercase or uppercase `x`,
  spaces around it)  -  a shared formatter (`formatRoomDimensions`) converts every `x` to
  a proper `×` automatically. **Don't type `×` yourself.**
- **`latitude`** / **`longitude`**  -  must be the actual unit's geocoded coordinates, not
  a building's rough centroid or a nearby landmark's coordinates. Verify independently
  (e.g. cross-check the street address against a geocoder) rather than eyeballing a map
   -  a wrong pin is a real, easy-to-miss bug (this exact mistake shipped once already on
  the reference listing and had to be corrected after the fact).
- **`virtualTourUrl`** *(optional)*  -  shown as a link in the sidebar if present.
- **`parkingSummary`** *(optional)*  -  a **short**, human-written string for the sidebar
  key-facts block (e.g. `"1 covered (garage)"`). This is separate from and not derived
  from the `Exterior` tab's full `"Parking"` row value (which can be long, e.g. `"1
  total, 1 covered, Garage/Underground, front access"`)  -  that full string belongs in
  `details`, the short one goes in `parkingSummary`. Populate both.

## Exact-match gotchas (icons and sidebar auto-fill)

Several pieces of the template match against **exact label strings** in `details` to
decide whether to show an icon or auto-populate the sidebar. Get these labels exactly
right (they're all defined in `ListingPropertyDetailsTabs.tsx` and
`ListingDetailTemplate.tsx` if you need to double-check or extend them):

**Tab labels → icon** (in `ListingPropertyDetailsTabs.tsx`'s `tabIcons`):
`"Interior"`, `"Exterior"`, `"Building"`, `"Community"`, `"Taxes & Fees"`, `"Other"`.
A tab with any other label still works, it just renders without a leading icon.

**Row labels → icon**, matched across *any* tab (`rowIcons` in the same file):
`"Bedrooms"`, `"Bathrooms"`, `"Kitchens"`, `"Fireplaces"`, `"Floor finish"`, `"Heating"`.

**Sidebar auto-fill**, matched in `ListingDetailTemplate.tsx`  -  these two values are
pulled *out of* `details` and displayed a second time in the sidebar key-facts block,
so getting the labels right is what makes the sidebar populate at all:
- Property tax: tab labeled exactly `"Taxes & Fees"`, row labeled exactly
  `"Gross taxes"`.
- Strata fee: same tab, row labeled exactly `"Maintenance fee"`.

If these don't match, nothing crashes  -  the sidebar field just quietly doesn't appear.

## Image conventions

- Folder: `public/images/listings/<slug>/`. Photos are copied in with their original
  filenames from the photographer (e.g. `01.jpg`…`61.jpg`)  -  no need to rename them.
- **Hero + gallery photos should be 3:2 landscape** (2048×1365 is the reference
  listing's actual size). The hero image renders in a fixed `aspect-[3/2]` box with
  `object-cover`  -  a differently-shaped hero photo gets cropped to fit. If the best
  available hero shot is a very different aspect ratio, that's a template constraint to
  flag to a human, not something to work around by fighting the CSS.
- **Curate, don't dump in raw order.** `heroImage` should be the single strongest "money
  shot" (wasn't necessarily photo 01 on the reference listing  -  it was 07, picked for
  being bright and well-composed). The **first 4 entries of `galleryImages`** are the
  highest-priority picks: they fill the visible thumbnail slots before the "+N
  photos"/"View all" expansion kicks in (`ListingHeroGallery`'s `initialCount` is 5 =
  hero + 4). Hand-pick 4 strong, varied shots for those slots (e.g. a bathroom, a
  living space, a bedroom, a wide shot) rather than just taking whatever came right
  after the hero in the photographer's sequence. The remaining photos can follow in a
  sensible room-by-room order  -  they're mostly reached via "View all photos" or the
  lightbox, so ordering matters less there.
- **Floor plan**: place at `public/images/listings/<slug>/floorplan.png`. The container
  is `aspect-[1086/1449]` (portrait) with `object-contain`, so any floor plan image
  displays in full without cropping regardless of its exact ratio  -  but a portrait image
  fits most naturally. If no floor plan was provided, omit `floorplanImage` entirely;
  don't leave a placeholder image.

## Address heading length

The page `<h1>` combines `{unit} - {address}, {neighbourhood name}` and is sized
`text-xl sm:text-2xl lg:text-3xl`  -  deliberately smaller than earlier drafts of this
template because larger sizes caused wrapping. This has been tested and confirmed to
render on a single line at every breakpoint from 390px to 1920px for a 34-character
combined string (`"326 - 55 Klahanie Drive, Klahanie"`). The heading also has
`text-balance` as a safety net, so if a longer address does wrap, it wraps evenly rather
than lopsided  -  but don't rely on that alone. After adding a listing, load the page and
glance at the heading at a normal desktop width; if it wraps awkwardly, that's a signal
the address is unusually long, not a bug to fix in the template.

## Dev server gotcha

This project's dev server has repeatedly hit a stale webpack-cache corruption bug after
a series of edits (`Cannot find module './vendor-chunks/...'`,
`__webpack_modules__[moduleId] is not a function`, `Cannot find module
'...segment-explorer-node.js'`). It's unrelated to listing content specifically, but if
you hit it while testing a new listing, don't debug around it  -  just do a clean restart:

```
pkill -f "next dev"
lsof -ti:3000,3001 | xargs -r kill -9
rm -rf .next
npm run dev
```

Then verify with two consecutive successful requests before trusting the server:

```
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/listings/<slug>
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/listings/<slug>
```

## Verification checklist before calling a new listing done

1. `npm run typecheck`  -  catches type mismatches in the new entry.
2. `npm run build`  -  this is the real test: the listing route is statically generated
   (`generateStaticParams` in `src/app/listings/[slug]/page.tsx`), so a bad image path,
   malformed field, or anything else broken will fail the build, not just silently
   render wrong.
3. Clean dev-server restart (above), then visually check the live page:
   - Hero photo shows in full, not cropped.
   - Address fits on one line (or wraps evenly) at mobile/tablet/desktop widths.
   - Highlights show the right icons for their content.
   - Tabs in Facts & Features show the right icons and don't wrap to a second row.
   - Sidebar key-facts (Year built, Property tax, Strata fee, Price per sqft, Parking)
     populate  -  if one's missing, check the exact-match labels above.
   - Map pin sits on the actual street/building, not somewhere else nearby.
   - Floor plan (if present) is the same width as the "Request a showing" form below it.
   - If no floor plan: confirm the page still looks intentional (single column, no
     leftover empty space) rather than like something's missing.
