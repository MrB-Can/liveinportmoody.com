# Local Photo Shot List and Page Placement Plan

**Created:** June 3, 2026  
**Purpose:** Owner photography action plan for visual enhancement Phase 2-3  
**Constraint:** All photos must be real Port Moody locations. No stock, AI-generated, or invented content.

---

## PHASE 1 BASELINE (Complete - Agent-Created Graphics)

✅ Deployed:
- /buy: Buyer decision flow diagram
- /sell: Seller preparation checklist
- /listings: Before writing an offer framework
- /presales: Before relying on presale details framework
- /neighbourhoods: Neighbourhood amenity framework (coming soon)
- /resources: Educational content

---

## PHASE 2 ACTION ITEMS (Week 1-2: Planning and Shooting)

### CRITICAL PRIORITY SHOTS

#### 1. Homepage Hero Section
**Location:** src/app/page.tsx (hero image at top)  
**Current:** Generic Port Moody landscape photo  
**Goal:** Replace with authentic lifestyle photography showing Port Moody appeal

**Shot List:**
- [ ] Downtown/waterfront lifestyle (people/activity context preferred)
  - Aspect ratio: 16:9 (landscape)
  - Orientation: Horizontal
  - Size: 1920x1080 minimum
  - Permission: Public location (no person faces required, lifestyle context preferred)
  - Why: Hero draws first impression; authenticity matters most

- [ ] Residential neighbourhood street scene
  - Aspect ratio: 16:9
  - Orientation: Horizontal
  - Size: 1920x1080 minimum
  - Permission: Public street scene, no resident closeups
  - Why: Communicates "this is real Port Moody"

- [ ] Parks/waterfront/trails context
  - Aspect ratio: 16:9
  - Orientation: Horizontal
  - Size: 1920x1080 minimum
  - Permission: Public access area
  - Why: Lifestyle fit is key value prop

**Best Time:** Golden hour (sunrise/sunset) for warmth and authenticity  
**Priority:** P0 — Deploy first, have immediate impact

---

#### 2. Neighbourhoods Page (Character Photos)
**Location:** src/app/neighbourhoods/page.tsx  
**Goal:** Add one representative photo per live neighbourhood guide

**Neighbourhoods to Shoot:**
1. **Suter Brook**
   - [ ] Mixed-use walkable area photo (shops, people if possible)
   - Aspect: Square 1:1 or Portrait
   - Size: 400x400 minimum
   - Permission: Public commercial area
   - Caption option: "Suter Brook: growing mixed-use hub"

2. **Newport Village**
   - [ ] Walkable village center with buildings/shops visible
   - Aspect: Square 1:1
   - Size: 400x400 minimum
   - Permission: Public area
   - Caption: "Newport Village: modern walkable centre"

3. **Klahanie**
   - [ ] Neighbourhood street with homes/greenery
   - Aspect: Square 1:1
   - Size: 400x400 minimum
   - Permission: Public street
   - Caption: "Klahanie: established community feel"

4. **Heritage Mountain**
   - [ ] Street with detached homes and trees
   - Aspect: Square 1:1
   - Size: 400x400 minimum
   - Permission: Public street
   - Caption: "Heritage Mountain: spacious hillside area"

5. **Other live guides** (as available)
   - Same format: 400x400 min, public location, representative street scene

**Best Time:** Midday (consistent light), clear weather preferred  
**Priority:** P1 — Deploy after hero, improves neighbourhood comparison section

---

#### 3. Local Life Page (Lifestyle/Business Context)
**Location:** src/app/local-life/page.tsx  
**Goal:** Add 4-6 lifestyle/local business context photos

**Shot List (choose 4-6):**
- [ ] Local café or restaurant (exterior or interior with permission)
  - Aspect: Square 1:1
  - Size: 600x600 minimum
  - Permission: Business owner approval required
  - Caption: "Local food and community gathering"

- [ ] Parks/trails (accessible public space)
  - Aspect: Landscape 16:9
  - Size: 1200x675 minimum
  - Permission: Public access area
  - Caption: "Parks and trails for outdoor lifestyle"

- [ ] Schools or community hub (if accessible)
  - Aspect: Square 1:1
  - Size: 600x600 minimum
  - Permission: School/facility approval required
  - Caption: "Community and education focus"

- [ ] Waterfront or scenic viewpoint
  - Aspect: Landscape 16:9
  - Size: 1200x675 minimum
  - Permission: Public access area
  - Caption: "Waterfront and natural spaces"

- [ ] Local market/farmer's market (if available)
  - Aspect: Square 1:1
  - Size: 600x600 minimum
  - Permission: Market operator approval if featured
  - Caption: "Local shopping and community"

- [ ] Recreation/fitness context (sports field, gym exterior, etc.)
  - Aspect: Square 1:1
  - Size: 600x600 minimum
  - Permission: Public facility
  - Caption: "Recreation and wellness options"

**Best Time:** Daytime, busy periods show community activity  
**Priority:** P1 — Completes local context value prop

---

## PHASE 3 ACTION ITEMS (Week 3+: Content-Dependent)

### Raving Fans Page (Client Stories)
**Location:** src/app/raving-fans/page.tsx  
**Requirement:** Client approval required for each story

**Shot List (add as clients approve):**
- [ ] Client headshots (professional or candid, owner approval only)
  - Aspect: Square 1:1 for profile
  - Size: 200x200 minimum (headshot), 600x400 for story hero if available
  - Permission: **Must have explicit client consent in writing**
  - Privacy: No faces required if client prefers (group shot, property context, etc.)

**Process:**
1. Collect client testimonials and stories
2. Request photo permission when getting testimonial approval
3. Accept professional photos, casual portraits, or property context shots
4. Add 1-2 stories first as proof of concept before scaling

---

### Featured Businesses Page
**Location:** src/app/featured-businesses/page.tsx  
**Requirement:** Business owner approval for each feature

**Shot List (add as businesses are featured):**
- [ ] Business exterior or hero image
  - Aspect: Landscape 16:9 or Square
  - Size: 800x600 minimum
  - Permission: **Must have business owner approval in writing**
  - Use: Establishes business identity

- [ ] Business interior (if relevant)
  - Aspect: Landscape or Square
  - Permission: **Business owner approval required**
  - Use: Shows business context/atmosphere

**Process:**
1. Feature 1-2 businesses first with owner permission
2. Use as portfolio examples
3. Scale once process is proven

---

### Events Page
**Location:** src/app/events/page.tsx  
**Requirement:** Event organizer approval

**Shot List:**
- [ ] Event photo or promotional image
  - Permission: **Event organizer approval required**
  - Use: Establishes event credibility

---

## TECHNICAL SPECIFICATIONS SUMMARY

| Use Case | Aspect Ratio | Min Size | Format |
|----------|--------------|----------|--------|
| Hero image | 16:9 | 1920x1080 | JPG/WebP |
| Neighbourhood character | 1:1 | 400x400 | JPG/WebP |
| Local life (landscape) | 16:9 | 1200x675 | JPG/WebP |
| Local life (square) | 1:1 | 600x600 | JPG/WebP |
| Client headshot | 1:1 | 200x200 | JPG/WebP |
| Business exterior | 16:9 or 1:1 | 800x600 | JPG/WebP |

**Format note:** Use JPG for photos, WebP for web optimization. Next.js Image component will handle responsive sizing.

---

## PERMISSION AND PRIVACY CHECKLIST

Before publishing ANY photo:

- [ ] Is it a real Port Moody location? (not stock, not AI, not generic)
- [ ] If it includes people: Do I have explicit written permission?
- [ ] If it's a business/event: Has the owner/organizer approved its use?
- [ ] Can it be published on a public website?
- [ ] Does it represent Port Moody authentically?

**Red flags — DO NOT USE:**
- Stock photography
- Generic/generic location that could be anywhere
- AI-generated content
- Photos with identifiable people (unless permission obtained)
- Content that misrepresents the location
- Outdated photos (if business has changed significantly)

---

## TIMELINE RECOMMENDATION

**Week 1:**
- Friday: Scout locations for hero, neighbourhood, and local-life photos
- Next week: Shoot hero section, 5 neighbourhood characters, 4 local-life photos

**Week 2:**
- Touch base with 2-3 businesses about featuring (build permission relationships)
- Collect 2-3 client stories and request photo permission

**Week 3:**
- Deploy hero and neighbourhood photos (immediate visual lift)
- Begin adding featured businesses and client stories as permissions arrive

**Week 4+:**
- Continue adding events, testimonials, and business features incrementally

---

## IMPLEMENTATION GUIDE (For Developer)

Once owner has provided photos:

1. **Place photos in public directory:**
   ```
   public/images/neighbourhoods/{neighbourhood-slug}.jpg
   public/images/local-life/{category}.jpg
   public/images/clients/{client-name}.jpg
   public/images/businesses/{business-slug}.jpg
   ```

2. **Update page components to use Next.js Image:**
   ```tsx
   <Image
     src="/images/neighbourhoods/suter-brook.jpg"
     alt="Suter Brook: growing mixed-use hub"
     width={400}
     height={400}
   />
   ```

3. **Ensure metadata matches:**
   - File naming: kebab-case
   - Alt text: descriptive, includes location
   - Size: matches spec above
   - Format: JPG or WebP

4. **Test responsiveness:**
   - Desktop: images display at intended size
   - Mobile: images scale appropriately
   - Crawl test: verify images load without warnings

---

## SUCCESS METRICS

- [ ] Hero section replaced with authentic Port Moody lifestyle photo
- [ ] 5 neighbourhoods have character photos
- [ ] Local life section has 4-6 authentic photos
- [ ] First featured business added (pending permission)
- [ ] First client story with photo added (pending permission)
- [ ] All photos pass crawl validation
- [ ] No copyright/permission issues reported

---

## NEXT STEPS FOR OWNER

1. **This week:** Review this shot list and prioritize by capacity
2. **Prepare to shoot:** Scout locations, request business/event approvals
3. **Timeline:** Expect hero + neighbourhood photos by end of Week 2
4. **Share photos:** Use shared folder or email to submit to developer
5. **Follow permissions checklist** before submitting each photo

Contact developer with questions on specs, timing, or technical placement.
