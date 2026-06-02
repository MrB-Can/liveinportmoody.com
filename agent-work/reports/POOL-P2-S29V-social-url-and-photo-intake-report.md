AGENT:
Next available agent

TASK:
POOL-P2-S29V — Social URL and Photo Intake Task

STATUS:
Completed

FILES CHANGED:
- docs/social-url-and-photo-intake.md (created)

FINDINGS:
- Three social slots exist in src/lib/site.ts → socialLinks[]: Instagram, YouTube, Facebook — all disabled: true with href: "#"
- Footer (src/components/footer.tsx) renders these slots only when not disabled
- Leilani team photo missing at public/images/team/leilani.jpeg — every smoke/crawl flags this as an expected gap
- LinkedIn is not currently wired as a slot; noted as optional in the intake doc
- headerAssetTodo in site.ts flags a Facebook-aligned logo asset as pending — noted separately in doc

INTAKE DOC COVERS:
- Exact URL format for Instagram, Facebook, YouTube (required) and LinkedIn (optional)
- Photo requirements: 600×600px minimum, 800×800px recommended, JPEG, under 400KB
- Target filename and path (public/images/team/leilani.jpeg)
- Delivery instructions
- Owner approval checklist (6 items)
- Developer action steps once assets received

COMMIT:
(see below)

RECOMMENDED NEXT STEP:
Owner reviews docs/social-url-and-photo-intake.md and provides real URLs and Leilani photo. Development team then updates src/lib/site.ts and places the photo, runs validation, and deploys in next available window.
