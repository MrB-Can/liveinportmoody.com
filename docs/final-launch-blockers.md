# Final Launch Blockers and QA Tracker

Date: 2026-05-21

## P0 - Must fix before production

Issues that break build, navigation, forms, compliance, or core user flows.

No confirmed P0 blockers are open.

| Route | Issue | Why it matters | Recommended fix | Owner suggestion | Status |
| --- | --- | --- | --- | --- | --- |
| All launch routes | Production route smoke test | A page returning 404/500 would block launch. | Tested all requested launch routes against the built app; all returned 200. | Agent 4 | fixed |
| All routes | Build and lint | A failed build or lint failure would block deployment. | `npm run lint` and `npm run build` pass. | Agent 4 | fixed |
| `/listings` | MLS Reciprocity compliance | Listings page must not imply fake IDX data, sold data, or ownership of other brokerages' listings. | Page uses MLS Reciprocity language and no fake listing cards were found. | Agent 4 | fixed |

## P1 - Should fix before production

Issues that harm trust, clarity, mobile experience, or conversion but do not block build.

| Route | Issue | Why it matters | Recommended fix | Owner suggestion | Status |
| --- | --- | --- | --- | --- | --- |
| `/` | Team section uses a visible "Team photo coming soon" placeholder. | It is honest and styled, but it can feel unfinished on a launch homepage. | Replace with approved Paul/Leilani team photo or a more polished branded placeholder before broad promotion. | Content / Design | open |
| `/explore`, `/neighbourhoods`, `/complexes`, `/buildings` | Map and filter modules are static placeholders. | They are intentionally scoped, but users may expect interactivity from map/filter language. | Keep copy clear that these are orientation/filter-ready modules; add real map/filter behavior after launch. | Future UX sprint | deferred |
| `/neighbourhoods`, `/complexes`, `/buildings`, `/listings` | Lead metadata is mostly CRM-ready, but generic forms still encode some context in `message` and `tags` rather than first-class API fields. | CRM routing can still work, but structured reporting will be cleaner with explicit backend fields. | Extend `/api/lead` schema later with optional fields for `intent`, `listing_url`, `listing_address`, `building_name`, `complex_name`, and `neighbourhood_slug`. | CRM / Backend | deferred |
| `/complexes/treetops-101-parkside-drive` | Treetops guide uses placeholders for future photo set. | It is compliant, but a real local photo set would improve trust. | Replace placeholder blocks with approved owned photography. | Content / Media | open |
| `/about` and `/` | Team imagery is not final. | Real people are a trust signal for a real estate site. | Add approved portraits/team photo when available. | Content / Media | open |
| Local QA only | Dev server returned transient 500s after parallel route smoke tests because `.next` manifest files were missing. | Production build/start route checks passed, so this is not a deployment blocker, but it can slow local QA. | If it recurs, stop dev server, clear `.next`, rebuild, and restart dev server. | Engineering | deferred |

## P2 - Can defer

Visual polish, photo replacement, real maps, filter functionality, additional guides, richer market data.

| Route | Issue | Why it matters | Recommended fix | Owner suggestion | Status |
| --- | --- | --- | --- | --- | --- |
| `/buildings` | Condo building cards are preview-level only. | This is acceptable for launch, but deeper building pages would improve research value. | Add individual building guides only when facts, photos, and compliance language are verified. | Building content sprint | deferred |
| `/complexes` | Only Treetops has a full guide. | This is acceptable for launch, but users researching other complexes will need direct inquiry support. | Add more complex guides in priority order after launch. | Complex content sprint | deferred |
| `/neighbourhoods` | Only Heritage Mountain has a detail guide. | The hub is useful, but more neighbourhood guides would strengthen the decision engine. | Add Suter Brook, Newport Village, Klahanie, Moody Centre, College Park, Glenayre, Pleasantside, Ioco/North Shore, and Barber Street guides over time. | Neighbourhood content sprint | deferred |
| `/listings` | MLS Reciprocity search URL may not be configured in `NEXT_PUBLIC_GVR_RECIPROCITY_SEARCH_URL`. | The page degrades cleanly to an inquiry CTA, but search will not be live until the approved feed/search URL is connected. | Configure the approved MLS Reciprocity search URL or IDX wrapper once available. | IDX / Deployment | deferred |
| `/market` | Market pages intentionally avoid fake numbers. | This is compliant, but richer data would improve usefulness once approved sources are available. | Add sourced market commentary and approved stats only after data-source approval. | Market content sprint | deferred |
| Sitewide | Final photography and visual polish. | Better local photos will improve credibility and conversion. | Replace placeholders with approved owned or licensed photography. | Content / Design | deferred |

## Deployment Readiness Checklist

### Routes

Smoke-tested against the built app served by `next start` on port 3011:

| Route | Result |
| --- | --- |
| `/` | 200 |
| `/explore` | 200 |
| `/neighbourhoods` | 200 |
| `/neighbourhoods/heritage-mountain` | 200 |
| `/complexes` | 200 |
| `/complexes/treetops-101-parkside-drive` | 200 |
| `/buildings` | 200 |
| `/listings` | 200 |
| `/buy` | 200 |
| `/sell` | 200 |
| `/market` | 200 |
| `/move-to-port-moody` | 200 |
| `/resources` | 200 |
| `/contact` | 200 |

### Checks

| Check | Result | Notes |
| --- | --- | --- |
| 1. All routes return 200. | Pass | Tested against production server. |
| 2. `npm run lint` passes. | Pass | No ESLint warnings or errors. |
| 3. `npm run build` passes. | Pass | Build completed and generated all static routes. |
| 4. Top nav is correct. | Pass with limited audit | Route links exist; no broken primary route discovered. |
| 5. Mobile nav works. | Pass with limited audit | Mobile nav route links exist; no compile/runtime blocker found. Manual device QA still recommended. |
| 6. No fake listings. | Pass | No fake listing cards found. |
| 7. No sold data. | Pass | Sold/expired listings are not published on `/listings`. |
| 8. No fake market stats. | Pass | Market/stat language stays qualitative where data is not approved. |
| 9. MLS Reciprocity copy exists. | Pass | `/listings` includes required active-listings-only copy. |
| 10. Forms are usable. | Pass with limited audit | Form components render and build; live CRM delivery depends on environment configuration. |
| 11. Primary CTAs route correctly. | Pass with limited audit | Core CTA routes resolve to 200. |
| 12. No internal staging language. | Pass with notes | Honest placeholders remain, but no internal/staging-only instructions were found as launch blockers. |
| 13. No broken placeholders. | Pass with notes | Placeholders are labelled and intentional. Team/photo placeholders are P1/P2 polish. |
| 14. Treetops is clean. | Pass | Uses cautious verification language and no unauthorized listing photos. |
| 15. Team section is acceptable. | P1 | Acceptable for soft launch, but real team photo should be added before broader promotion. |
| 16. Footer links work. | Pass with limited audit | Footer route links build; no 404 launch route found. |
| 17. SEO metadata exists for major pages. | Pass with note | Major routes define metadata. Shared helper appends the site name. |

## Final Recommendation

Deployment is ready for a soft production launch from a build/navigation/compliance standpoint.

Recommended launch posture:

- Proceed if the goal is to publish the decision-engine foundation and collect leads.
- Treat final team photography, richer maps/filters, more guide pages, and MLS Reciprocity search connection as post-launch improvements unless the business requires those for public announcement.
- Do not add listing cards, sold data, market statistics, or building/complex facts until the relevant data source and compliance requirements are verified.
