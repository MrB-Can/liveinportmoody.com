AGENT:
Next available agent (Claude Sonnet 4.6)

TASK:
POOL-P0-S30B — Apply Owner Launch Decisions

STATUS:
BLOCKED

OWNER CONTENT CHECK:
- real Leilani/team photo present: NO — only paul.jpeg exists in public/images/team/
- real social links present: NO — all three platforms disabled with href: "#" in src/lib/site.ts:214-216
- MLS fallback approved: YES (owner GO)

BLOCK REASON 1:
Owner gave NO-GO for launch without Leilani/team photo.
Required asset path: public/images/team/leilani.jpeg (or similar)
Current state: only paul.jpeg exists

BLOCK REASON 2:
Owner gave NO-GO for launch without real social links.
Current state: Instagram, YouTube, Facebook all set href: "#", disabled: true in src/lib/site.ts
Owner must supply real URLs before this task can proceed.

NOTE: The site is already live (coming-soon gate removed by POOL-P0-S29R). These are now
post-launch incomplete content issues, not pre-launch blockers. The code changes in this
task (nav/footer accolades removal, trust blocks, placeholder text fixes) cannot be
completed until the owner-supplied assets are in place per their own NO-GO decisions.

ACCOLADES:
- removed from nav/footer: NO — still present in site.ts at lines 117 (nav) and 272 (footer)
- /accolades route behavior: unchanged — still listed in phaseOneRoutes (line 302)
- scattered trust blocks: not applied (task blocked before code changes)

BADGE/LOGO STRUCTURE:
- optional data fields added: not applied (task blocked)
- public placeholders shown: see placeholder text scan below

PLACEHOLDER TEXT SCAN:
Issues found (public-facing visible text):
1. src/components/footer.tsx:37 — "Social links coming soon" — live in footer
2. src/components/team-member-card.tsx:26 — "coming soon" — shown when team member has no social URL
3. src/components/team-image-placeholder.tsx:7 — "Team photo coming soon" — shown when Leilani photo is absent
4. src/components/social-feed-placeholder.tsx:10 — "Instagram and YouTube connection coming soon"
5. src/components/social-feed-placeholder.tsx:21 — "Instagram link pending"
6. src/components/social-feed-placeholder.tsx:27 — "YouTube link pending"
7. src/components/ui/map-placeholder.tsx:15 — "Interactive map coming soon" — used on neighbourhood pages
8. src/components/neighbourhoods/neighbourhood-map-placeholder.tsx:10 — "Interactive map coming soon"
9. src/app/complexes/treetops-101-parkside-drive/page.tsx:237 — "Photos coming soon..."

Fixes made: none — task blocked before code changes per protocol

Acceptable honest compliance language left:
- "No listing or competitor images are used." (treetops page) — this is accurate and compliance-safe, not a placeholder

VALIDATION:
- lint: not run (blocked before validation step)
- build: not run (blocked before validation step)
- smoke: not run (blocked before validation step)
- crawl: not run (blocked before validation step)

COMMIT:
Task files only (move to blocked + this report)

RECOMMENDED NEXT STEP:
Owner must supply two assets before this task can unblock:
1. Leilani/team photo — deliver as public/images/team/leilani.jpeg (800×800px JPEG, <400KB)
   See intake doc: docs/social-url-and-photo-intake.md
2. Real social media URLs — at minimum Instagram and one other (YouTube or Facebook)
   See intake doc: docs/social-url-and-photo-intake.md

Once both assets are supplied, the next agent should:
- Place photo at public/images/team/leilani.jpeg
- Update src/lib/site.ts socialLinks with real URLs (remove disabled: true)
- Re-claim this task (or a new S30B variant) to apply remaining changes:
  * Remove /accolades from nav/footer (site.ts lines 117, 272)
  * Handle /accolades route (redirect to /meet-us)
  * Remove visible "coming soon" and "pending" public text
  * Run lint/build/smoke/crawl
  * Deploy (separate authorized task)
