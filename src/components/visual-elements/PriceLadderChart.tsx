// Static inline-SVG grouped bar chart: median sold price by home type in
// Port Moody, first half 2025 versus first half 2026. No client JS.

type Bar = { x: number; y: number; height: number; value: string };
type Group = { label: string; labelX: number; before: Bar; after: Bar };

// x/y/height are the chart-authored pixel values, kept literal alongside the
// displayed dollar value rather than re-derived from it.
const GROUPS: Group[] = [
  {
    label: 'Condo',
    labelX: 117,
    before: { x: 60, y: 172.9, height: 77.1, value: '$765,000' },
    after: { x: 122, y: 179.2, height: 70.8, value: '$702,500' },
  },
  {
    label: 'Townhouse',
    labelX: 317,
    before: { x: 260, y: 143.9, height: 106.1, value: '$1,052,500' },
    after: { x: 322, y: 153.3, height: 96.7, value: '$959,500' },
  },
  {
    label: 'Detached',
    labelX: 517,
    before: { x: 460, y: 62.5, height: 187.5, value: '$1,860,000' },
    after: { x: 522, y: 62.7, height: 187.3, value: '$1,858,000' },
  },
];

const W = 700;
const H = 320;
const BAR_W = 52;
const BASE_Y = 250;
const BEFORE_COLOR = '#AAB2AB';
const AFTER_COLOR = '#1F4A3D'; // forest

export function PriceLadderChart() {
  return (
    <figure className="not-prose my-8 rounded-2xl border border-softBorder bg-white p-6">
      <figcaption className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slateText">
        Figure 3 · The ladder got easier at the bottom, harder at the top
      </figcaption>
      <h4 className="font-heading text-lg text-deepInlet">Median sold price by home type, first half 2025 vs. first half 2026</h4>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-4 h-auto w-full"
        style={{ overflow: 'visible' }}
        role="img"
        aria-labelledby="ladder-title ladder-desc"
      >
        <title id="ladder-title">Median sold price in Port Moody by home type, first half 2025 versus first half 2026</title>
        <desc id="ladder-desc">
          Condos fell from 765,000 to 702,500. Townhouses fell from 1,052,500 to 959,500. Detached was flat at about
          1.86 million.
        </desc>
        {GROUPS.map((group) => {
          // Value labels diverge outward from the seam between the paired bars
          // rather than centering over each narrow 52px bar, so a long dollar
          // figure (e.g. the Detached group) never collides with its pair.
          const seamX = group.before.x + BAR_W + (group.after.x - (group.before.x + BAR_W)) / 2;
          return (
            <g key={group.label}>
              <rect x={group.before.x} y={group.before.y} width={BAR_W} height={group.before.height} rx={3} fill={BEFORE_COLOR} />
              <text x={seamX - 2} y={group.before.y - 8} textAnchor="end" fontSize={13} fontWeight={500} fill="#1F2423">
                {group.before.value}
              </text>
              <rect x={group.after.x} y={group.after.y} width={BAR_W} height={group.after.height} rx={3} fill={AFTER_COLOR} />
              <text x={seamX + 2} y={group.after.y - 8} textAnchor="start" fontSize={13} fontWeight={500} fill="#1F2423">
                {group.after.value}
              </text>
              <text x={group.labelX} y={274} textAnchor="middle" fontSize={14} fill="#1F2423">
                {group.label}
              </text>
            </g>
          );
        })}
        <line x1={40} y1={BASE_Y} x2={680} y2={BASE_Y} stroke="#D9DED8" strokeWidth={1} />
        <rect x={60} y={290} width={12} height={12} rx={2} fill={BEFORE_COLOR} />
        <text x={78} y={301} fontSize={13} fill="#4E5A57">
          first half 2025
        </text>
        <rect x={200} y={290} width={12} height={12} rx={2} fill={AFTER_COLOR} />
        <text x={218} y={301} fontSize={13} fill="#4E5A57">
          first half 2026
        </text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-slateText">
        Median sold price by home type in Port Moody. Based on 130 and 148 condo sales, 74 and 64 townhouse sales, and
        62 and 56 detached sales across the two periods. Comparison figures for Coquitlam and Port Coquitlam combined
        are drawn from 1,252 condo, 642 townhouse and 783 detached sales. Source: Tri-Cities MLS records.
      </figcaption>
    </figure>
  );
}
