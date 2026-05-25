# First Three Neighbourhood Photo Plan

**Date:** 2026-05-25
**Sprint:** 20A
**Status:** Planning — no photos added, no code changed
**Scope:** Heritage Woods, Moody Centre, Glenayre preview pages only

---

## Purpose

Define what photography is needed for each of the three neighbourhood preview routes before they transition from noindex preview to publicly indexed pages. This document covers hero shots, supporting shots, crop requirements, what to avoid, placeholder strategy, file naming, and a photo registry outline.

No photos have been added or committed. No route files, image paths, or sitemap entries have been modified as part of this plan.

---

## Global Standards (All Three Neighbourhoods)

- All photos must be taken within the neighbourhood boundary, not nearby approximations
- No identifiable faces without written consent
- No identifiable children under any circumstances
- No private property interiors without written permission
- No photos that imply a specific school catchment or school proximity
- No generated, AI-created, or stock photography used as local neighbourhood photos
- No license plates in foreground (best effort; incidental background plates acceptable)
- Photos should represent conditions a buyer or resident would actually experience
- Seasonal context should be noted (summer vs winter light affects character significantly)

---

## Heritage Woods

### Neighbourhood Character

Newer planned development. Mixed housing: townhouses, single-family detached, some stacked townhomes. Modern streetscape, newer sidewalks, open sightlines. Forested edge to the northeast. Feels suburban-new, not historic.

---

### 1. Hero Shot

**What to photograph:**
A clean, forward-facing view of a characteristic Heritage Woods street. Ideally shows a mix of townhouse or detached home rooflines with mature street trees in the foreground and natural backdrop visible (treeline or sky). A morning light shot with shadows across the street surface reads well on screen.

**Why it matters:**
The hero sets buyer expectations. Heritage Woods buyers are typically families or first-time buyers drawn by newer construction. The photo should signal: organized, clean, suburban, newer build quality. Not industrial, not downtown.

**Ideal time of day:**
Morning (8–10 am). Light comes from the east and south. Avoids midday harshness. Golden-hour evening works if shooting west-facing streets.

**Suggested locations:**
- Any east-facing street running through the residential core where townhouses and detached homes are visible together
- A residential corner where landscaping and newer sidewalks are visible
- Avoid: cul-de-sacs that look private; streets with heavy parked-car clutter

**Crop requirements:**
- 16:9 hero: 1920×1080 minimum; subject centered, sky in upper third
- 1200×630 OG image: crop from hero or shoot specifically for this aspect ratio
- Avoid portrait-only compositions; all hero crops are landscape

---

### 2. Supporting Shots (4–6 ideas)

**Shot A — Street character**
A residential street showing the consistent streetscape: newer sidewalks, similar-era homes, tidy front yards. No individual properties, no private driveways featured prominently.

**Shot B — Park or green space**
A community park or green area within Heritage Woods. Capture open lawn area, park benches, or playground equipment if present (no children in frame). A wide-angle that shows the open space and surrounding homes works well.

**Shot C — Trail access**
Multi-use path or walking trail at the edge of the neighbourhood or connecting through it. Show the path itself, surrounding trees or greenery, and natural light. Avoid shots that look identical to generic trail photos—aim for context that places it within Heritage Woods.

**Shot D — Housing style**
A tight-to-medium composition showing the architectural style of Heritage Woods homes: newer build, mixed-material facades, covered entries. Shoot from the public sidewalk. Do not photograph private yards or windows. No specific address should be legible.

**Shot E — Natural edge or backdrop**
Heritage Woods sits near forested terrain. A photo showing how the neighbourhood meets the natural edge (treeline, hillside, forested backdrop) communicates the nature-adjacent character buyers value. Shoot looking outward from the residential area, not inward at specific homes.

**Shot F — Access/context (optional)**
A photo showing one of the main entry roads or connection points to the larger Port Moody grid. This helps buyers understand how the neighbourhood connects to everyday driving or transit. Not a highway shot—a local arterial or connection road is appropriate.

---

### 3. Crop and Aspect Ratios

| Use | Dimensions | Notes |
|---|---|---|
| Hero | 1920×1080 (16:9) | Minimum quality; 2560×1440 preferred |
| Section/card | 800×600 (4:3) | Used in supporting content cards |
| Thumbnail | 400×400 (1:1) | Index page card thumbnail if needed |
| OG/social | 1200×630 | Crop from hero or shoot dedicated |

---

### 4. What Not to Photograph

- Identifiable children in parks or playgrounds
- Private backyards, rear decks, interior windows
- Any school building (avoids implying catchment)
- Photos taken outside Heritage Woods boundaries (no Newport Village or Port Moody downtown photos used as substitutes)
- Vehicles with legible plates in foreground
- Construction debris or unfinished development that misrepresents current state
- Electrical infrastructure, service entrances, or industrial-looking areas

---

### 5. Placeholder Strategy

Until real photography is available:

- Hero area: intentional blank or muted gradient placeholder (already implemented as no-photo state; do not replace with generated image)
- Admin status: mark as `photos: not_started` in data (already the current state)
- Do not add a generated or stock photo and label it Heritage Woods
- A short text note for internal review ("Hero photo needed: Heritage Woods street character shot") is appropriate in internal planning docs only, not in rendered page content

---

### 6. File Naming Convention

```
neighbourhood-heritage-woods-hero.webp
neighbourhood-heritage-woods-street.webp
neighbourhood-heritage-woods-park.webp
neighbourhood-heritage-woods-trail.webp
neighbourhood-heritage-woods-housing.webp
neighbourhood-heritage-woods-edge.webp
neighbourhood-heritage-woods-og.webp
```

All files: WebP format, sRGB colour space, compressed for web (target under 200 KB for hero, under 100 KB for supporting shots). Retain source originals in uncompressed format before web export.

---

## Moody Centre

### Neighbourhood Character

Port Moody's downtown core. Dense urban, walkable. Mix of condos, mixed-use buildings, ground-floor retail. Waterfront access is the defining feature: Rocky Point Park, the inlet, the boardwalk. Skytrain access, Brewery Row. Caters to downsizers, young professionals, urban lifestyle buyers. Under active revitalization.

---

### 1. Hero Shot

**What to photograph:**
The Moody Centre hero should lead with the waterfront or the urban-waterfront intersection. A view looking toward the inlet from a public park path, or a wide shot from the boardwalk showing downtown Port Moody's building silhouette against water and mountains. This immediately signals the urban-with-nature lifestyle that is the neighbourhood's strongest draw.

**Why it matters:**
Moody Centre buyers are choosing urban lifestyle. The hero needs to communicate walkable, waterfront, modern. A suburban street photo here misrepresents the product entirely. The inlet and mountains in the background is a uniquely Port Moody advantage.

**Ideal time of day:**
Golden hour (late afternoon, 5–7 pm in summer). The inlet reflects light well at this time. Mountain backdrop benefits from afternoon light coming from the west. Avoid midday when water looks flat and grey.

**Suggested locations:**
- Rocky Point Park boardwalk looking west toward the inlet and mountains
- St. Johns Street looking toward the water (if sightline permits)
- Port Moody Station or Brewery Row if capturing the transit/lifestyle intersection
- Avoid: any shot from a private balcony or condo building without permission; avoid industrial areas east of the core

**Crop requirements:**
- 16:9 hero: 1920×1080 minimum; water and mountains should be visible in frame
- 1200×630 OG image: crop that emphasizes waterfront context
- Card/section 4:3: tight crop of boardwalk or park setting

---

### 2. Supporting Shots (4–6 ideas)

**Shot A — Waterfront/park (primary)**
Rocky Point Park or the boardwalk. Open water visible. Suggest shooting in late afternoon with the inlet and mountains in background. This is the strongest supporting visual for the Moody Centre guide.

**Shot B — Urban street character**
St. Johns Street or a mixed-use block showing ground-floor commercial, mid-rise residential above. Captures the walkable urban feel. Shoot during daytime with people visible in the distance (no closeups of individuals).

**Shot C — Brewery Row or Distillery Row character**
Exterior of one of the craft breweries or the Brewers Row streetscape. Captures the lifestyle amenity without endorsing a specific business. Exterior storefront-level shot from the sidewalk.

**Shot D — Transit/station context**
Moody Centre SkyTrain station exterior or the station entrance area. Shows transit connection that buyers care about. Shoot from public sidewalk or plaza. Avoid interior platform shots (may require TransLink permissions).

**Shot E — Park lifestyle context**
Rocky Point Park: open lawn, trees, water in the background. A wider shot that shows the park's scale and openness. No children in frame.

**Shot F — Revitalization context (optional)**
A photo of newer construction or an under-construction building from a public vantage point, with a note in the guide that revitalization is ongoing. This is honest about the neighbourhood's transitional character and sets accurate buyer expectations.

---

### 3. Crop and Aspect Ratios

| Use | Dimensions | Notes |
|---|---|---|
| Hero | 1920×1080 (16:9) | Water and mountains visible; landscape only |
| Section/card | 800×600 (4:3) | Park or streetscape crops |
| Thumbnail | 400×400 (1:1) | Index card thumbnail if needed |
| OG/social | 1200×630 | Waterfront-first crop; punchy at small sizes |

---

### 4. What Not to Photograph

- Identifiable children at Rocky Point Park (it is a frequent family destination; be vigilant)
- Private condo balconies, terraces, or unit windows
- Photos taken in Burnaby, Coquitlam, or New Westminster waterfront areas and used as Moody Centre substitutes
- Any photo that implies a school catchment or school proximity
- Port Moody's industrial waterfront east of the core, which misrepresents the walkable downtown area
- Closeups of individuals at Brewery Row without consent

---

### 5. Placeholder Strategy

Until real photography is available:

- Hero area: intentional no-photo state (current implementation); do not substitute with a generic waterfront or mountain stock photo
- A Moody Centre guide without a photo is more honest than one with an unverified or misleading image
- Admin status: `photos: not_started` (current state)
- Internal note: "Hero needed: waterfront or Rocky Point Park — golden hour preferred"

---

### 6. File Naming Convention

```
neighbourhood-moody-centre-hero.webp
neighbourhood-moody-centre-waterfront.webp
neighbourhood-moody-centre-street.webp
neighbourhood-moody-centre-brewery-row.webp
neighbourhood-moody-centre-transit.webp
neighbourhood-moody-centre-park.webp
neighbourhood-moody-centre-og.webp
```

All files: WebP format, sRGB, compressed for web. Target under 200 KB for hero, under 100 KB for supporting. Retain source originals.

---

## Glenayre

### Neighbourhood Character

Quiet, established residential. Predominantly single-family detached homes. Mature trees, wider lots, established streetscapes. Family-oriented. Lower walkability than Moody Centre. Peaceful character, private feel. Borders forested areas. Older housing stock than Heritage Woods but established community feel.

---

### 1. Hero Shot

**What to photograph:**
A quiet Glenayre residential street lined with mature trees. The defining visual of Glenayre is the tree canopy overhead, the width of the lots, and the calm character. A street-level shot looking down a treelined road, ideally in soft light with dappled shadows on the pavement, communicates the neighbourhood's character immediately.

**Why it matters:**
Glenayre buyers are looking for peace, privacy, and established neighbourhood character. A busy intersection or commercial shot would misrepresent Glenayre entirely. The hero needs to signal: quiet, residential, green, private, mature community.

**Ideal time of day:**
Morning or mid-morning (8–11 am). Tree canopy diffuses light well. Avoid midday when shadows are harsh. Late afternoon golden hour also works if the street faces west and trees create a warm tunnel effect.

**Suggested locations:**
- Any long, tree-lined residential street in the Glenayre core
- A corner or gentle curve in the road that shows the street receding into greenery
- Avoid: shots near collector roads, the commercial edge, or any areas that look like other Port Moody neighbourhoods

**Crop requirements:**
- 16:9 hero: 1920×1080 minimum; canopy and street should frame the image with depth
- 1200×630 OG image: crop that preserves the treelined depth effect
- 4:3 section card: tight crop of tree canopy or residential streetscape

---

### 2. Supporting Shots (4–6 ideas)

**Shot A — Tree canopy / street character**
The signature Glenayre shot: looking down a residential street with mature deciduous or mixed trees creating a canopy overhead. This is the most important supporting shot and may double as hero.

**Shot B — Housing style**
A representative Glenayre home from the public sidewalk. Shows the detached, single-family character with established landscaping. No specific address legible. No private yard or rear property visible. Medium crop showing roofline, front yard, and landscaping.

**Shot C — Park or green space**
Glenayre Elementary or local park adjacent to the neighbourhood (not the school building — the park/field area if publicly accessible). Show open grass, trees, benches or play equipment (no children). Alternatively: a neighbourhood walking path or trail access point.

**Shot D — Quiet street / neighbourhood calm**
A wider shot showing the absence of traffic and commercial activity — the quiet characteristic. An empty or near-empty residential street with mature landscaping. This is a deliberate contrast to the busy Moody Centre guide and reinforces Glenayre's positioning.

**Shot E — Forested edge or backdrop (optional)**
Glenayre borders forested terrain. A photo showing how residential properties sit at the edge of natural areas reinforces the privacy and nature-adjacent appeal. Shoot from a public vantage point.

**Shot F — Autumn or seasonal character (optional)**
If shooting in fall, deciduous trees in autumn colour are a strong visual for Glenayre. This is a seasonal opportunity that should be noted for planning: the ideal Glenayre hero may be an autumn shoot. A second spring shoot shows the green canopy. Note which season the photo was taken.

---

### 3. Crop and Aspect Ratios

| Use | Dimensions | Notes |
|---|---|---|
| Hero | 1920×1080 (16:9) | Tree-lined street with depth; landscape only |
| Section/card | 800×600 (4:3) | Housing or park crop |
| Thumbnail | 400×400 (1:1) | Index card thumbnail if needed |
| OG/social | 1200×630 | Tree canopy or streetscape; crop for punchy preview |

---

### 4. What Not to Photograph

- Identifiable children in parks or on streets
- Private backyards, fences, rear yards, or interiors
- Any photo of Glenayre Elementary that could imply an exact school catchment (the guide uses SD43 address-verification language; a photo of the school building contradicts that caution)
- Photos taken in nearby Heritage Mountain or other neighbourhoods used as Glenayre substitutes
- Overgrown or rundown properties that misrepresent the neighbourhood character
- Any photo that emphasizes a specific driveway, mailbox, or home number

---

### 5. Placeholder Strategy

Until real photography is available:

- Hero area: intentional no-photo state (current implementation); do not substitute with a generic residential or forest stock photo
- Admin status: `photos: not_started` (current state)
- Internal note: "Hero needed: Glenayre treelined street — morning or autumn preferred"
- Consider scheduling a dedicated Glenayre shoot in October for autumn canopy photography

---

### 6. File Naming Convention

```
neighbourhood-glenayre-hero.webp
neighbourhood-glenayre-street.webp
neighbourhood-glenayre-housing.webp
neighbourhood-glenayre-park.webp
neighbourhood-glenayre-canopy.webp
neighbourhood-glenayre-edge.webp
neighbourhood-glenayre-og.webp
```

All files: WebP format, sRGB, compressed for web. Target under 200 KB for hero, under 100 KB for supporting. Retain uncompressed source originals.

---

## Photo Registry Update Plan

When photos are ready for each neighbourhood, the Site Ops Photo Registry should track each asset with the following fields:

| Field | Description |
|---|---|
| **Title** | Descriptive name (e.g., "Heritage Woods — hero street shot") |
| **Neighbourhood** | Heritage Woods / Moody Centre / Glenayre |
| **Page** | Route where photo appears (e.g., `/neighbourhoods/heritage-woods`) |
| **Role** | hero / section / og / thumbnail / supporting |
| **Status** | needed / shot / edited / approved / live |
| **Desired shot** | Brief description of what the photo should show |
| **Crop notes** | Required aspect ratios and any known crop constraints |
| **Priority** | high (hero/OG) / medium (section) / low (supporting/optional) |
| **Seasonal note** | Whether a specific season is preferred or required |
| **Permissions** | Public / Permission required / Permission obtained |

### Priority Order for First Shoots

1. **Moody Centre hero** — waterfront, Rocky Point Park, golden hour. Highest visual impact for the most commercially ready guide.
2. **Glenayre hero** — treelined street, morning or autumn. Defines the neighbourhood's character clearly; easy to execute.
3. **Heritage Woods hero** — residential street, townhouse mix. Slightly more generic but needed before any public launch.
4. **OG/social crops** — batch from hero shoots; no dedicated reshoots required if hero is shot correctly.
5. **Supporting shots** — secondary priority; guides can publish with hero only and add supporting shots over time.

---

## Placeholder vs Real Photo Decision Point

The three preview routes currently show no hero photo. This is intentional and honest.

The decision to add a photo should only be made when:

- A real, locally-shot photo of the correct neighbourhood is available
- The photo meets the standards in this document
- The photo has been reviewed and approved before being committed to the repo
- The file has been named, exported to WebP, and compressed appropriately
- The data file (`neighbourhoodGuides.ts`) or route page has been updated to reference the photo path

Do not add a photo as a placeholder unless it meets all of the above. A text-only guide is preferable to a photo that misrepresents the neighbourhood.

---

## References

- **Route data:** `src/data/neighbourhoodGuides.ts`
- **Guide template:** `src/components/neighbourhoods/NeighbourhoodGuideTemplate.tsx`
- **Route pages:** `src/app/neighbourhoods/[slug]/page.tsx`
- **Neighbourhood index:** `src/app/neighbourhoods/page.tsx`
- **QA document:** `docs/first-three-neighbourhood-preview-route-qa.md`
- **Content gap report:** `docs/neighbourhood-guide-content-gap-report.md`
- **Linking plan:** `docs/neighbourhood-preview-internal-linking-plan.md`
