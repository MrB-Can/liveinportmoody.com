AGENT:
Next available agent

TASK:
POOL-P1-S29E - Fix Mobile Buildings Page Layout

STATUS:
Completed

CAUSE FOUND:
The mobile /buildings page had two layout risks that made the full-page mobile capture much taller than comparable research hubs: a dense buildings comparison/table section and the interactive MapLibre map in the buildings hub. The final fix uses more compact building-by-area and comparison sections, keeps the interactive map for desktop/tablet, and uses a compact non-WebGL orientation panel on mobile.

FILES CHANGED:
- src/app/buildings/page.tsx
- src/components/buildings/CondoDecisionGuide.tsx
- agent-work/reports/POOL-P1-S29E-fix-mobile-buildings-layout-report.md

VALIDATION:
- lint: pass
- build: pass
- smoke: pass

SCREENSHOT CHECK:
- /buildings mobile: checked at 390px against local dev server; final DOM height measured 11,789px, down from the broken 21,702px reproduction and below the /complexes and /neighbourhoods mobile reference pages.
- /buildings desktop: checked at 1440px against local dev server; final DOM height measured 7,546px and desktop layout remains usable.
- /complexes mobile if checked: checked at 390px; unchanged reference height measured 13,111px.
- /neighbourhoods mobile if checked: checked at 390px; unchanged reference height measured 12,483px.

COMMIT:
6c4a964

RECOMMENDED NEXT STEP:
Run the targeted buildings recapture task to confirm the production-style visual screenshot no longer repeats map tiles on mobile.
