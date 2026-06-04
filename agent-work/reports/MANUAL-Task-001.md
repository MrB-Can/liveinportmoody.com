# MANUAL-Task-001: Live Site Visual & Placeholder Scan

**Date:** 2026-06-03
**Method:** Playwright automated scan — 31 live pages on https://www.liveinportmoody.com
**Scope:** Check for placeholder text, unfinished-sounding language, broken images, and anything that looks wrong to a visitor
**Action:** Report only. No code changes.

---

## Summary

| Category | Pages affected | Verdict |
|---|---|---|
| P1 — Visitor-facing unfinished language | 3 pages | Needs owner decision |
| P2 — Broken team photo (large screens only) | 1 page (homepage) | Investigate |
| ✅ Clean pages | 28 pages | No issues |
| ✅ Redirects | 3 legacy routes | All working |
| Note — Dark sections flagged and cleared | 6 pages | All intentional design |

---

## P1 — Visitor-Facing Unfinished Language

These three pages contain text that a visitor will read and interpret as "this site is not finished." No fake content is present — these are honest — but the phrasing reads as under construction.

---

### /neighbourhoods — "Research in progress" on 13 of 14 neighbourhood cards

**What a visitor sees:**

The page lists 14 neighbourhoods + 1 additional area. Only one — Heritage Mountain — has a green "Guide live" badge and its own full guide page. The remaining 13 show a blue "Research in progress" badge:

| Neighbourhood | Status shown | Type |
|---|---|---|
| Heritage Mountain | Guide live ✅ | Residential / hillside |
| Heritage Woods | Research in progress | Residential / hillside |
| Mountain Meadows | Research in progress | Residential / hillside |
| Suter Brook | Research in progress | Village / walkable centre |
| Newport Village | Research in progress | Village / walkable centre |
| Klahanie | Research in progress | Village / walkable centre |
| Moody Centre | Research in progress | Village / walkable centre |
| College Park | Research in progress | Residential / hillside |
| Glenayre | Research in progress | Residential / hillside |
| Ioco / North Shore | Research in progress | Waterfront / north shore |
| Barber Street | Research in progress | Waterfront / north shore |
| Seaview | Research in progress | Waterfront / north shore |
| Anmore | Research in progress | Nearby community |
| Belcarra | Research in progress | Nearby community |

These 13 cards are grouped under an H2 heading that reads: **"Neighbourhood research in progress"** — visible to every visitor on the page.

**"Additional neighbourhoods" section:**
Below the main list is an "Additional neighbourhoods" H2 with one entry: Pleasantside. It shows a "Verification needed" badge and is rendered at reduced opacity (75%). The neighbourhood description is present ("Quiet hillside residential area between the mountains and the north shore of the Inlet") but the card is clearly marked as unverified.

**Impact:** A visitor comparing neighbourhoods before choosing to reach out sees 1 live guide and 13 "Research in progress" entries. The ratio reads as an unfinished site to most visitors, even though each card has real summary content (housing type, best-for, short description).

**Note:** The card content itself is real — neighbourhood descriptions, housing types, and "best for" filters are populated. The issue is the status label and H2 grouping, not missing content.

---

### /listings — H2 "MLS Reciprocity search is being connected"

**What a visitor sees:**

The page has a section headed "Search active Port Moody listings" with the following H2 as the main content of that section:

> **MLS Reciprocity search is being connected**

Below it: *"Ask us about current Port Moody listings and we can help immediately."*

Then: *"Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."*

**Impact:** A buyer who lands on /listings looking for current homes for sale reads that the search function isn't live yet. The page is honest, but it explicitly signals that a key feature is incomplete. A buyer comparison-shopping between agents will likely leave.

The rest of the /listings page is fine — there's a well-designed dark-styled "Get local context before you write" CTA card (dark sidebar, 474x318px, intentional) and thorough strata due-diligence guidance. The problem is limited to the single H2 in the search section.

---

### /presales — "We are collecting approved sources..."

**What a visitor sees:**

Under the section headed "CURRENT AND NEW DEVELOPMENTS / Request verified project updates," the following paragraph appears as the primary content:

> **We are collecting approved sources for Port Moody presales and new developments. Project availability, pricing, incentives, and dates will only be published after they are checked against current approved sources.**

Followed by: "Ask about a project"

**Impact:** A buyer researching presale options lands on this page and the first piece of content tells them the site hasn't collected the information yet. The page has real context about presale considerations (contract timing, neighbourhood fit, resale comparisons) and a working lead form, but the opening paragraph positions the page as a work in progress.

The lead form section "Get local context before you sign" (dark full-width section at bottom) is intentional and working.

---

## P2 — Broken Team Photo on Homepage (Large Screens)

**Page:** / (homepage)
**Image:** `leilani-paul-team.jpeg`
**Alt text:** "Leilani Fong and Paul Bennett, Live in Port Moody"

**What happens:**

Next.js serves this image via its image optimization route. The image is requested at multiple srcset widths. At the largest width (`w=3840`), the image fails to load — `naturalWidth` returns 0, meaning the browser receives no valid image data at that breakpoint.

- Rendered element size on screen: 488×293px
- Source URL that fails: `/_next/image?url=%2Fimages%2Fteam%2Fleilani-paul-team.jpeg&w=3840&q=75`
- Smaller srcset sizes appear to load correctly

**Why this happens:**

Next.js generates the 3840px srcset variant regardless of the source image's actual dimensions. If the source JPEG is smaller than 3840px wide, Next.js cannot upscale it and returns a broken response. This only triggers on screens large enough to request the 3840px variant — primarily 4K monitors or high-DPI displays at wide viewports.

**Impact:** Most visitors will not see this. It only affects large desktop screens. The image shows correctly at typical laptop and desktop widths. However, if someone is demoing the site on a 4K display or a large connected monitor, the team photo appears broken in the hero section.

**Fix direction:** Check source image dimensions. If the source is under 3840px wide, add explicit width/height props or cap the `sizes` attribute in the `<Image>` component so Next.js does not generate a 3840w variant it cannot fulfill.

---

## Note: Dark Sections — Investigated and Cleared

The initial scan flagged several large dark-background sections across multiple pages. After inspecting the actual content of each, all are intentional design elements — styled CTA cards, navigation sections, and lead form areas. None are placeholder image blocks.

| Page | Dark element | Content inside | Verdict |
|---|---|---|---|
| / | Hero section (1440×738px) | "Make clearer Port Moody real estate decisions." — main hero | ✅ Intentional |
| / | Dark card (462×410px) | "Compare areas before you compare homes." — area comparison CTA | ✅ Intentional |
| /buildings | Dark card (502×254px) | "Research before you write" — strata due diligence CTA | ✅ Intentional |
| /complexes | Dark banner (1152×202px) | "Looking at a Port Moody townhouse?" — contact CTA | ✅ Intentional |
| /explore | Dark nav section (984×1096px) | "Choose the question you are trying to answer" — all explore paths | ✅ Intentional |
| /listings | Dark sidebar (474×318px) | "Get local context before you write" — listing help CTA | ✅ Intentional |
| /presales | Dark form section (1440×902px) | "Get local context before you sign" — presale lead form | ✅ Intentional |

The /explore dark section is notably tall (1096px) because it contains the full grid of all explore paths with descriptions. It does not look broken — it has headings, navigation links, and descriptive text throughout.

---

## ✅ Redirects Working

| Legacy route | Redirects to | HTTP status |
|---|---|---|
| /testimonials | /raving-fans | ✅ 307 |
| /local-businesses | /featured-businesses | ✅ 307 |
| /accolades | /meet-us | ✅ 307 |

---

## ✅ Clean Pages — No Issues Found

The following pages passed the full scan with no placeholder text, no broken images, and no unfinished-sounding language:

| Page | Notes |
|---|---|
| / | Hero, CTAs, market section all correct. Team photo issue only at 3840w. |
| /buy | Clean. Full buyer path intact. |
| /sell | Clean. Full seller path intact. |
| /contact | Clean. Minimal, focused. |
| /meet-us | Clean. Team photo renders correctly at standard sizes. |
| /raving-fans | Clean. H1 reads "Verified reviews and client stories." ✅ Correct placeholder framing (no fake reviews). |
| /featured-businesses | Clean. Honest "no features yet" framing. |
| /events | Clean. Intake framing is appropriate. |
| /about | Clean. No VideoBlock visible. Trust content status section reads as policy, not broken. |
| /local-life | Clean. |
| /local-insights | Clean. |
| /buyer-guide | Clean. |
| /seller-guide | Clean. |
| /buildings | Clean page content. "Planned work" in strata guidance is correct real estate terminology, not placeholder language. |
| /complexes | Clean. |
| /neighbourhoods/heritage-mountain | Clean. Full guide live. |
| /explore | Clean. All navigation links present. |
| /market | Clean. |
| /resources | Clean. |
| /move-to-port-moody | Clean. |
| /faq | Clean. |
| /privacy | Clean. |
| /terms | Clean. |
| /coming-soon | System page, not indexed — correct. |

---

## Owner Decisions Required

**1. /neighbourhoods status labels**
The "Research in progress" label on 13 of 14 neighbourhood cards is honest, but the ratio (1 live, 13 in-progress) may affect how visitors perceive the site. Decision: Is the current approach (show all neighbourhoods with status badges) correct for launch, or should in-progress neighbourhoods be hidden until guides are ready?

If the approach is correct as-is: the label language is fine. No change needed.

If more neighbourhood guides should be live before public indexing: owner to prioritise which guides to complete first.

**2. /listings — H2 language**
"MLS Reciprocity search is being connected" is factually accurate but visitor-unfriendly. Decision: Is there alternative phrasing that keeps the page honest without sounding like a feature is missing? Example: "Search active Port Moody listings through our team" or "Contact us for current Port Moody listings."

**3. /presales — opening paragraph**
"We are collecting approved sources..." signals the page is not ready. Decision: Can this paragraph be rewritten to be present-tense and service-focused rather than describing the collection process? Example: "Project details are published only after they are checked against confirmed sources — ask about any project you are researching."

**4. Team photo at 3840w**
Verify source image dimensions. If under 3840px, update the Image component `sizes` prop to cap at the source width. Low urgency — only visible on 4K displays.
