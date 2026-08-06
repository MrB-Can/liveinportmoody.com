// Static inline-SVG bar chart: sales-to-active-listings ratio by Tri-Cities
// municipality, June 2026, with the 12% downward-pressure threshold marked.
// No client JS.

type Row = { label: string; pct: number; width: number; isPortMoody: boolean };

// width is the chart-authored pixel value for each bar, kept literal
// alongside the displayed percentage rather than re-derived from it.
const ROWS: Row[] = [
  { label: 'Metro Vancouver', pct: 14.6, width: 262.8, isPortMoody: false },
  { label: 'Port Moody', pct: 12.4, width: 223.2, isPortMoody: true },
  { label: 'Coquitlam', pct: 12.1, width: 217.8, isPortMoody: false },
  { label: 'Port Coquitlam', pct: 11.7, width: 210.6, isPortMoody: false },
];

const W = 640;
const H = 214;
const BAR_X = 190;
const ROW_H = 42;
const BAR_H = 26;
const FIRST_Y = 12;
const LABEL_X = 178;
const THRESHOLD_X = 406;
const NEUTRAL = '#AAB2AB';
const HIGHLIGHT = '#1F4A3D'; // forest
const THRESHOLD_COLOR = '#B77946'; // emphasis

export function SalesRatioChart() {
  return (
    <figure className="not-prose my-8 rounded-2xl border border-softBorder bg-white p-6">
      <figcaption className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slateText">
        Figure 4 · Port Moody is running cooler than the region
      </figcaption>
      <h4 className="font-heading text-lg text-deepInlet">Sales-to-active-listings ratio, June 2026</h4>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-4 h-auto w-full"
        style={{ overflow: 'visible' }}
        role="img"
        aria-labelledby="ratio-title ratio-desc"
      >
        <title id="ratio-title">Sales to active listings ratio, June 2026</title>
        <desc id="ratio-desc">
          Metro Vancouver was 14.6 percent while Port Moody was 12.4 percent, Coquitlam 12.1 percent and Port
          Coquitlam 11.7 percent.
        </desc>
        <line x1={THRESHOLD_X} y1={8} x2={THRESHOLD_X} y2={180} stroke={THRESHOLD_COLOR} strokeWidth={2} strokeDasharray="5 4" />
        <text x={THRESHOLD_X + 8} y={198} fontSize={12} fill={THRESHOLD_COLOR}>
          12% = downward price pressure
        </text>
        {ROWS.map((row, i) => {
          const rowY = FIRST_Y + i * ROW_H;
          const textY = rowY + 18;
          return (
            <g key={row.label}>
              <rect x={BAR_X} y={rowY} width={row.width} height={BAR_H} rx={3} fill={row.isPortMoody ? HIGHLIGHT : NEUTRAL} />
              <text x={LABEL_X} y={textY} textAnchor="end" fontSize={14} fill="#1F2423">
                {row.label}
              </text>
              <text x={BAR_X + row.width + 8} y={textY} fontSize={14} fontWeight={500} fill="#1F2423">
                {row.pct.toFixed(1)}%
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
          <span className="inline-block h-3 w-3 rounded-sm" style={{ backgroundColor: NEUTRAL }} /> Other Tri-Cities / region
        </span>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-slateText">
        June 2026. Metro Vancouver figure published by Greater Vancouver REALTORS. Tri-Cities figures calculated from
        MLS records and may differ slightly from board methodology.
      </figcaption>
    </figure>
  );
}
