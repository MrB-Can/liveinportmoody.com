TASK:
HUMAN-P0 - Enable Vercel Web Analytics

TASK_TYPE:
human

OWNER:
Paul

GOAL:
Turn on Web Analytics for the liveinportmoody.com Vercel project so route-level
traffic data exists.

CONTEXT:
`<Analytics />` and `<SpeedInsights />` are already mounted in src/app/layout.tsx,
but the project-level toggle is off - the Vercel Web Analytics API returns
404 "Web Analytics not found" for this project. The code ships and collects
nothing.

STEPS:
- Vercel dashboard > liveinportmoody.com > Analytics > Enable
- Confirm data appears after a deploy and some traffic

WHY IT MATTERS:
Page-by-page SEO/lead audits are currently structural only. Without pageview
data per route there is no way to tell which pages earn attention and which
are dead weight.
