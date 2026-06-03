AGENT:
Codex

TASK:
POOL-P1-S32I — Independent Technical and Accessibility Review

STATUS:
Completed

TECHNICAL VERDICT:
The site is technically launchable after the committed S32 cleanup is deployed. Lint/build/crawl have been passing in recent validation, and the S32 focused recapture returned HTTP 200 for the tested pages and redirects. The main technical risks are performance polish around large source hero PNGs, stale validation-script assumptions, and very long mobile page heights.

ACCESSIBILITY VERDICT:
Core accessibility is acceptable for launch. Main forms use visible labels or label-wrapped controls, keyboard-sized tap targets are generally 44px or larger, and mobile navigation has an accessible top-level open button. The biggest accessibility/UX follow-ups are consent checkbox default states, submenu ARIA state on mobile, and keyboard behavior for desktop dropdown menus.

P0 ISSUES:
- none

P1 ISSUES:
- `src/components/lead-form.tsx`, `src/components/home-evaluation-form.tsx`, `src/components/listings/ListingSupportForm.tsx`, `src/components/buildings/BuildingInquiryForm.tsx`, `src/components/complexes/TreetopsInquiryForm.tsx` / contact consent is pre-selected through `defaultValues: { consentToContact: true }` or `defaultChecked` / Review the intended consent UX and consider making contact consent an explicit user action while keeping SMS consent separate.
- `public/hero-*.png` / several source hero images are 1.6MB-2.6MB PNGs at 1717x916 / Convert heavily used hero PNGs to WebP or AVIF sources, or replace route references with existing optimized assets where appropriate.
- `scripts/prelaunch-smoke.mjs` / still expects a public coming-soon gate for many routes / Retire or update smoke expectations now that the site is live, otherwise future operators can misread valid public behavior as test failure.
- `scripts/prelaunch-crawl.mjs` / still warns that `public/images/team/leilani.*` is missing even though the approved team asset is `public/images/team/leilani-paul-team.jpeg` / Update static asset check to match current owner-approved team-photo path.

P2 ISSUES:
- `src/components/mobile-nav.tsx` / submenu toggle buttons do not expose `aria-expanded` or `aria-haspopup` even though the top-level mobile nav button does / Add ARIA state to submenu buttons for screen-reader clarity.
- `src/components/header.tsx` / desktop dropdowns open by click but do not show explicit escape-key or outside-click close behavior in code / Add keyboard close behavior when polishing nav interactions.
- `/`, `/buy`, `/sell`, `/home-evaluation` / mobile page heights are very large because forms and dense research sections stack vertically / Consider mobile anchor navigation or shorter mobile form placement after launch.
- `public/port-moody-hero-placeholder.png` and `public/og-placeholder.jpg` / large or placeholder-named legacy assets remain in `public/` / Confirm whether still needed; remove or archive if unused.

VALIDATION SCRIPT ISSUES:
- Default Homebrew Node is broken locally because `/opt/homebrew/Cellar/node/21.5.0/bin/node` cannot load `libicui18n.73.dylib`; use NVM Node 20.20.0 until the local Node install is repaired.
- `npm run smoke:prelaunch` is stale for live-site behavior because it expects the old gate/noindex state.
- `npm run crawl:prelaunch` still includes a stale Leilani-photo filename check and may hit `/api/lead` rate limits during repeated runs.

IMAGE/PERFORMANCE ISSUES:
- Largest assets found:
  - `public/hero-buy.png` 2.6MB
  - `public/hero-sell.png` 2.4MB
  - `public/hero-move.png` 2.4MB
  - `public/hero-market.png` 2.1MB
  - `public/hero-about.png` 2.0MB
  - `public/hero-contact.png` 1.8MB
  - `public/hero-resources.png` 1.7MB
  - `public/hero-legal.png` 1.6MB
- Logo assets are appropriately small WebP/PNG variants; no logo performance issue found.
- Team image `public/images/team/leilani-paul-team.jpeg` is small enough at 66KB.

ACCESSIBILITY NOTES:
- `LeadForm` uses explicit `htmlFor`/`id` labels for name, email, phone, and message.
- `HomeEvaluationForm` uses label-wrapped inputs; this is accessible.
- Listing/building/complex support forms also use label-wrapped inputs.
- Image components generally provide useful alt text; decorative or background-like image helpers use empty/default alt only where the component API allows.
- Mobile nav top-level button has `aria-label="Open navigation"` and `aria-expanded`.
- Footer social links include `aria-label` values and real Facebook/Instagram URLs.

COMMIT:
Scoped commit created: Complete S32I technical accessibility review
