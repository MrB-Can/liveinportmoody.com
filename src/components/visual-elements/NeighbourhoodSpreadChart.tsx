// Static inline-SVG diverging bar chart: six-month median price change by
// Port Moody neighbourhood and home type. No client JS.

type Row = { label: string; sub: string; pct: number; width: number };

// pct is the labeled figure; width is the chart-authored pixel value for that
// bar (kept literal rather than re-derived from pct, so the rendered bar can
// never drift from the source data by a rounding step).
const ROWS: Row[] = [
  { label: 'Heritage Woods townhouse', sub: '10 sales then, 17 now', pct: 9.2, width: 116.5 },
  { label: 'Heritage Woods detached', sub: '10 sales then, 12 now', pct: 5.2, width: 65.9 },
  { label: 'North Shore condo', sub: '26 sales then, 27 now', pct: 0.3, width: 3.8 },
  { label: 'Port Moody Centre townhouse', sub: '25 sales then, 15 now', pct: -5.0, width: 63.3 },
  { label: 'Port Moody Centre condo', sub: '101 sales then, 113 now', pct: -9.7, width: 122.9 },
  { label: 'College Park townhouse', sub: '19 sales then, 17 now', pct: -10.5, width: 133.0 },
];

const W = 720;
const H = 274;
const CENTER = 440;
const ROW_H = 38;
const BAR_H = 26;
const FIRST_Y = 22;
const LABEL_X = 236;
const POSITIVE = '#1F4A3D'; // forest
const NEGATIVE = '#B77946'; // emphasis

export function NeighbourhoodSpreadChart() {
  return (
    <figure className="not-prose my-8 rounded-2xl border border-softBorder bg-white p-6">
      <figcaption className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slateText">
        Figure 1 · Six-month price change by neighbourhood and home type
      </figcaption>
      <h4 className="font-heading text-lg text-deepInlet">One city, six different markets</h4>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-4 h-auto w-full"
        style={{ overflow: 'visible' }}
        role="img"
        aria-labelledby="nsc-title nsc-desc"
      >
        <title id="nsc-title">Change in median sold price by Port Moody segment, first half 2025 to first half 2026</title>
        <desc id="nsc-desc">
          Heritage Woods townhouses rose 9.2 percent and Heritage Woods detached rose 5.2 percent, while College Park
          townhouses fell 10.5 percent and Port Moody Centre condos fell 9.7 percent.
        </desc>
        <line x1={CENTER} y1={16} x2={CENTER} y2={244} stroke="#D9DED8" strokeWidth={1} />
        {ROWS.map((row, i) => {
          const barY = FIRST_Y + i * ROW_H;
          const positive = row.pct >= 0;
          const barX = positive ? CENTER : CENTER - row.width;
          const valueX = positive ? CENTER + row.width + 10 : CENTER - row.width - 10;
          const textY = barY + 18;
          return (
            <g key={row.label}>
              <rect x={barX} y={barY} width={row.width} height={BAR_H} rx={3} fill={positive ? POSITIVE : NEGATIVE} />
              <text x={LABEL_X} y={textY} textAnchor="end" fontSize={14} fill="#1F2423">
                {row.label}
              </text>
              <text x={valueX} y={textY} textAnchor={positive ? 'start' : 'end'} fontSize={14} fontWeight={500} fill="#1F2423">
                {positive ? '+' : ''}
                {row.pct.toFixed(1)}%
              </text>
              <text x={LABEL_X} y={textY + 15} textAnchor="end" fontSize={11} fill="#4E5A57">
                {row.sub}
              </text>
            </g>
          );
        })}
        <text x={CENTER} y={264} textAnchor="middle" fontSize={12} fill="#4E5A57">
          no change
        </text>
      </svg>
      <div className="mt-3 flex flex-wrap gap-4 text-[11px] uppercase tracking-wide text-slateText">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-forest" /> Price up
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-emphasis" /> Price down
        </span>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-slateText">
        Median sold price within Port Moody, first half 2025 compared with first half 2026. Segments shown had at
        least ten sales in each period. Smaller segments move more on a single unusual sale, so treat Heritage Woods
        as directional rather than precise. Source: Tri-Cities MLS records.
      </figcaption>
    </figure>
  );
}
