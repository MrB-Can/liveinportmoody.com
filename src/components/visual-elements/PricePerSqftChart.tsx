// Static inline-SVG grouped bar chart: median price per square foot by Port
// Moody neighbourhood and home type, each group benchmarked against a
// dashed "rest of Tri-Cities" reference line for that same home type. No
// client JS.

type Row = { label: string; value: number; sales: string; width: number };
type Section = { heading: string; headingY: number; firstRowY: number; rows: Row[]; benchmarkValue: number; benchmarkX: number; benchmarkLabelY: number; lineY1: number; lineY2: number };

// width and benchmarkX are the chart-authored pixel values, kept literal
// alongside the displayed dollar values rather than re-derived from them.
const SECTIONS: Section[] = [
  {
    heading: 'CONDOS',
    headingY: 20,
    firstRowY: 30,
    rows: [
      { label: 'Port Moody Centre', value: 821, sales: '235 sales', width: 300.0 },
      { label: 'North Shore', value: 725, sales: '45 sales', width: 264.9 },
      { label: 'College Park', value: 551, sales: '15 sales', width: 201.3 },
    ],
    benchmarkValue: 766,
    benchmarkX: 489.9,
    benchmarkLabelY: 140,
    lineY1: 24,
    lineY2: 124,
  },
  {
    heading: 'TOWNHOUSES',
    headingY: 175,
    firstRowY: 185,
    rows: [
      { label: 'Port Moody Centre', value: 796, sales: '36 sales', width: 290.9 },
      { label: 'Heritage Woods', value: 671, sales: '26 sales', width: 245.2 },
      { label: 'North Shore', value: 667, sales: '28 sales', width: 243.7 },
      { label: 'Heritage Mountain', value: 508, sales: '16 sales', width: 185.6 },
      { label: 'College Park', value: 489, sales: '31 sales', width: 178.7 },
    ],
    benchmarkValue: 615,
    benchmarkX: 434.7,
    benchmarkLabelY: 361,
    lineY1: 179,
    lineY2: 345,
  },
  {
    heading: 'DETACHED HOUSES',
    headingY: 396,
    firstRowY: 406,
    rows: [
      { label: 'Barber Street', value: 676, sales: '13 sales', width: 247.0 },
      { label: 'North Shore', value: 671, sales: '13 sales', width: 245.2 },
      { label: 'Harbour Place', value: 652, sales: '11 sales', width: 238.2 },
      { label: 'College Park', value: 645, sales: '21 sales', width: 235.7 },
      { label: 'Port Moody Centre', value: 580, sales: '11 sales', width: 211.9 },
      { label: 'Heritage Woods', value: 560, sales: '24 sales', width: 204.6 },
      { label: 'Heritage Mountain', value: 496, sales: '21 sales', width: 181.2 },
    ],
    benchmarkValue: 559,
    benchmarkX: 414.3,
    benchmarkLabelY: 648,
    lineY1: 400,
    lineY2: 632,
  },
];

const W = 680;
const H = 647;
const BAR_X = 210;
const ROW_H = 33;
const BAR_H = 24;
const LABEL_X = 198;
const SALES_X = 674;
const BENCHMARK_COLOR = '#B77946'; // emphasis
const BAR_COLOR = '#1F4A3D'; // forest

export function PricePerSqftChart() {
  return (
    <figure className="not-prose my-8 rounded-2xl border border-softBorder bg-white p-6">
      <figcaption className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slateText">
        Figure 2 · What your money actually buys
      </figcaption>
      <h4 className="font-heading text-lg text-deepInlet">
        Median price per square foot by home type, Port Moody vs. the rest of the Tri-Cities
      </h4>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-4 h-auto w-full"
        style={{ overflow: 'visible' }}
        role="img"
        aria-labelledby="ppsf-title ppsf-desc"
      >
        <title id="ppsf-title">
          Median price per square foot by Port Moody neighbourhood and home type, compared with the rest of the
          Tri-Cities, July 2025 to June 2026
        </title>
        <desc id="ppsf-desc">
          Port Moody Centre condos lead at 821 dollars per square foot against a Coquitlam and Port Coquitlam
          benchmark of 766. Port Moody townhouses mostly sit above the 615 dollar benchmark and Port Moody detached
          houses mostly sit above the 559 dollar benchmark.
        </desc>
        {SECTIONS.map((section) => (
          <g key={section.heading}>
            <text x={0} y={section.headingY} fontSize={12} fill="#4E5A57" letterSpacing="0.06em">
              {section.heading}
            </text>
            {/* Benchmark line renders first so it sits behind the bars and value
                labels, never cutting through text when a value lands near it. */}
            <line
              x1={section.benchmarkX}
              y1={section.lineY1}
              x2={section.benchmarkX}
              y2={section.lineY2}
              stroke={BENCHMARK_COLOR}
              strokeWidth={2}
              strokeDasharray="5 4"
            />
            {section.rows.map((row, i) => {
              const rowY = section.firstRowY + i * ROW_H;
              const textY = rowY + 17;
              return (
                <g key={row.label}>
                  <rect x={BAR_X} y={rowY} width={row.width} height={BAR_H} rx={3} fill={BAR_COLOR} />
                  <text x={LABEL_X} y={textY} textAnchor="end" fontSize={14} fill="#1F2423">
                    {row.label}
                  </text>
                  <text x={BAR_X + row.width + 8} y={textY} fontSize={14} fontWeight={500} fill="#1F2423">
                    ${row.value}
                  </text>
                  <text x={SALES_X} y={textY} textAnchor="end" fontSize={12} fill="#4E5A57">
                    {row.sales}
                  </text>
                </g>
              );
            })}
            <text x={section.benchmarkX} y={section.benchmarkLabelY} textAnchor="middle" fontSize={12} fill={BENCHMARK_COLOR}>
              rest of Tri-Cities ${section.benchmarkValue}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-3 flex flex-wrap gap-4 text-[11px] uppercase tracking-wide text-slateText">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-forest" /> Port Moody neighbourhood
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-0.5 w-4 border-t-2 border-dashed border-emphasis" /> Rest of Tri-Cities median (same home type)
        </span>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-slateText">
        Median sold price per square foot, July 2025 through June 2026, Port Moody neighbourhoods with at least ten
        sales in that home type. The dashed line in each group is the median for that same home type across
        Coquitlam and Port Coquitlam combined, based on 1,208 condo, 583 townhouse and 802 detached sales. Source:
        Tri-Cities MLS records.
      </figcaption>
    </figure>
  );
}
