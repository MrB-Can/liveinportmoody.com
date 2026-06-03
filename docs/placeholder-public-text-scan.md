# Placeholder and Incomplete Text Scan Report - 2026-06-03

Purpose: scan public-facing code for incomplete launch language after the owner supplied the team photo and social links.

## Search Terms

- placeholder
- coming soon
- soon
- pending
- TODO
- TBD
- draft
- sample
- example
- lorem
- dummy
- under construction
- not yet
- will be added
- badge coming
- logo coming
- social links coming soon
- no photo
- image placeholder
- `href="#"`
- disabled social links

## Fixes Made

| Area | Issue | Fix |
| --- | --- | --- |
| Team photo | Public team-photo fallback text remained in shared component. | Replaced shared team image component with owner-supplied photo at `/images/team/leilani-paul-team.jpeg`. |
| Homepage | Text-only team block used where team photo should appear. | Added the real team photo to the local advice section. |
| Meet Us | Page did not show the supplied team photo. | Added the real team photo section with approved alt text. |
| Social links | Facebook/Instagram needed real URLs and YouTube needed to stay hidden. | `siteConfig.socialLinks` contains Facebook and Instagram only; no YouTube link is rendered. |
| Footer/social blocks | Public social placeholder language needed removal. | Footer renders only enabled real links; explore social block links to Instagram and Facebook. |
| Accolades | `/accolades` was not allowed as a visible proof page. | `/accolades` redirects to `/meet-us`; nav/footer/resources/phase-one route promotion removed. |
| Public badge/logo placeholders | Fake badge/logo placeholders were not allowed. | Optional data fields exist only in code/data; no fake badge/logo UI is rendered. |
| Map/photo language | Map and photo fallback labels read as unfinished. | Replaced with neutral orientation/approved-media language. |
| Public copy | "will be added", "future home", and similar launch-incomplete phrases appeared in public pages. | Reworded to verified-only publication language. |
| Broken links | `href: "#"` remained in neighbourhood comparison data. | Replaced with `/neighbourhoods` fallback links. |

## Remaining Scan Hits Deemed Acceptable

- `src/app/accolades/page.tsx`: route name remains because it redirects to `/meet-us`.
- `src/app/coming-soon/page.tsx` and `/coming-soon` references: legacy route remains but is not re-enabled as the site gate.
- HTML form `placeholder` attributes: normal input helper text, not public incomplete messaging.
- Data model statuses such as `draft`, `coming-soon`, `pending_approval`, and `in-progress`: non-public code/data statuses used to control publishing.
- Real estate terms such as "pending levies" and "pending work": accurate subject-matter language, not launch-incomplete wording.
- "Planning to list soon" and "We'll be in touch soon": normal user-facing timing language.

## Result

No public social placeholder text, team-photo placeholder text, fake badge/logo placeholder UI, `href="#"` social links, disabled real social links, or visible `/accolades` proof-page promotion remains in the scanned source.
