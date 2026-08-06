// Static inline-SVG ranked bar chart: median condo price per square foot by
// Tri-Cities neighbourhood. No client JS.

type Row = { label: string; value: number; sqftNote: string; width: number; isPortMoody: boolean };

// width is the chart-authored pixel value for each bar, kept literal
// alongside the displayed dollar value rather than re-derived from it.
const ROWS: Row[] = [
  { label: 'Coquitlam West', value: 870, sqftNote: '805 sq ft for $700k', width: 330.0, isPortMoody: false },
  { label: 'Port Moody Centre', value: 821, sqftNote: '855 sq ft for $700k', width: 311.4, isPortMoody: true },
  { label: 'New Horizons', value: 774, sqftNote: '905 sq ft for $700k', width: 293.6, isPortMoody: false },
  { label: 'North Coquitlam', value: 736, sqftNote: '950 sq ft for $700k', width: 279.2, isPortMoody: false },
  { label: 'North Shore Pt Moody', value: 725, sqftNote: '965 sq ft for $700k', width: 275.0, isPortMoody: true },
  { label: 'Westwood Plateau', value: 700, sqftNote: '1,000 sq ft for $700k', width: 265.5, isPortMoody: false },
  { label: 'Central Coquitlam', value: 660, sqftNote: '1,060 sq ft for $700k', width: 250.3, isPortMoody: false },
  { label: 'Central Pt Coquitlam', value: 651, sqftNote: '1,075 sq ft for $700k', width: 246.9, isPortMoody: false },
  { label: 'Canyon Springs', value: 601, sqftNote: '1,165 sq ft for $700k', width: 228.0, isPortMoody: false },
  { label: 'Glenwood', value: 569, sqftNote: '1,230 sq ft for $700k', width: 215.8, isPortMoody: false },
  { label: 'College Park', value: 551, sqftNote: '1,270 sq ft for $700k', width: 209.0, isPortMoody: true },
];

const W = 780;
const BAR_X = 210;
const ROW_H = 34;
const BAR_H = 24;
const FIRST_Y = 12;
const LABEL_X = 198;
const NOTE_X = 772;
const H = FIRST_Y + ROWS.length * ROW_H + 12;
const NEUTRAL = '#AAB2AB';
const HIGHLIGHT = '#1F4A3D'; // forest

export function PricePerSqftChart() {
  return (
    <figure className="not-prose my-8 rounded-2xl border border-softBorder bg-white p-6">
      <figcaption className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slateText">
        Figure 2 · What your money actually buys
      </figcaption>
      <h4 className="font-heading text-lg text-deepInlet">Median condo price per square foot, July 2025 to June 2026</h4>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-4 h-auto w-full"
        style={{ overflow: 'visible' }}
        role="img"
        aria-labelledby="ppsf-title ppsf-desc"
      >
        <title id="ppsf-title">Median condo price per square foot by neighbourhood, July 2025 to June 2026</title>
        <desc id="ppsf-desc">
          Coquitlam West is highest at 870 dollars per square foot. Port Moody Centre is 821, North Shore Port Moody
          725 and College Park 551.
        </desc>
        {ROWS.map((row, i) => {
          const rowY = FIRST_Y + i * ROW_H;
          const textY = rowY + 17;
          return (
            <g key={row.label}>
              <rect x={BAR_X} y={rowY} width={row.width} height={BAR_H} rx={3} fill={row.isPortMoody ? HIGHLIGHT : NEUTRAL} />
              <text x={LABEL_X} y={textY} textAnchor="end" fontSize={14} fontWeight={row.isPortMoody ? 500 : 400} fill="#1F2423">
                {row.label}
              </text>
              <text x={BAR_X + row.width + 8} y={textY} fontSize={14} fontWeight={500} fill="#1F2423">
                ${row.value}
              </text>
              <text x={NOTE_X} y={textY} textAnchor="end" fontSize={13} fill="#4E5A57">
                {row.sqftNote}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-3 flex flex-wrap gap-4 text-[11px] uppercase tracking-wide text-slateText">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-forest" /> Port Moody
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm" style={{ backgroundColor: NEUTRAL }} /> Other Tri-Cities
        </span>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-slateText">
        Median sold price per square foot for apartments, July 2025 through June 2026, neighbourhoods with at least
        fifteen sales. Source: Tri-Cities MLS records.
      </figcaption>
    </figure>
  );
}
