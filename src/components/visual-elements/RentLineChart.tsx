// Static inline-SVG line chart: Port Moody estimated average asking rent.
// No client JS / no chart dependency.

const LABELS = ['2024', '2025', '2026', '2027', '2028', '2029', '2030'];
const VALUES = [2680, 2450, 2300, 2240, 2360, 2460, 2545];
const LOW_INDEX = 3; // 2027 projected low

const W = 720;
const H = 320;
const PAD = { top: 20, right: 16, bottom: 40, left: 56 };
const DOMAIN = { min: 2200, max: 2720 };
const GRID = [2700, 2500, 2300];

const plotW = W - PAD.left - PAD.right;
const plotH = H - PAD.top - PAD.bottom;

const x = (i: number) => PAD.left + (i * plotW) / (VALUES.length - 1);
const y = (v: number) =>
  PAD.top + ((DOMAIN.max - v) / (DOMAIN.max - DOMAIN.min)) * plotH;

export function RentLineChart() {
  const points = VALUES.map((v, i) => [x(i), y(v)] as const);
  const line = points.map(([px, py]) => `${px},${py}`).join(' ');
  const area = `${PAD.left},${PAD.top + plotH} ${line} ${x(VALUES.length - 1)},${PAD.top + plotH}`;

  return (
    <figure className="not-prose my-8 rounded-2xl border border-softBorder bg-white p-6">
      <figcaption className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slateText">
        Figure 1 · Estimated Port Moody average asking rent
      </figcaption>
      <h4 className="font-heading text-lg text-deepInlet">The dip, and the recovery on the other side</h4>
      <p className="mb-4 mt-1 text-sm leading-relaxed text-slateText">
        Overall asking rent, all unit types. 2024–2026 reflect reported cooling; 2027–2030 are a
        projection built from CMHC and industry forecasts. Directional, not a guarantee.
      </p>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Port Moody average asking rent estimate: about 2,680 dollars in 2024 falling to roughly 2,240 in 2027, then recovering to about 2,545 by 2030."
      >
        {/* gridlines + y labels */}
        {GRID.map((g) => (
          <g key={g}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(g)} y2={y(g)} stroke="#D9DED8" strokeWidth={1} />
            <text x={PAD.left - 10} y={y(g) + 4} textAnchor="end" fontSize={12} fill="#4E5A57">
              ${g.toLocaleString()}
            </text>
          </g>
        ))}
        {/* projected-low marker */}
        <line
          x1={x(LOW_INDEX)}
          x2={x(LOW_INDEX)}
          y1={PAD.top}
          y2={PAD.top + plotH}
          stroke="#B77946"
          strokeWidth={1.5}
          strokeDasharray="5 4"
        />
        {/* area + line */}
        <polygon points={area} fill="#12302F" fillOpacity={0.06} />
        <polyline points={line} fill="none" stroke="#1F4A3D" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
        {/* points */}
        {points.map(([px, py], i) => (
          <circle key={i} cx={px} cy={py} r={4} fill="#1F4A3D" stroke="#fff" strokeWidth={1.5} />
        ))}
        {/* x labels */}
        {LABELS.map((l, i) => (
          <text key={l} x={x(i)} y={H - 12} textAnchor="middle" fontSize={12} fill="#4E5A57">
            {l}
          </text>
        ))}
      </svg>
      <div className="mt-3 flex flex-wrap gap-4 text-[11px] uppercase tracking-wide text-slateText">
        <span className="flex items-center gap-2">
          <span className="inline-block h-[3px] w-4 rounded-sm bg-forest" /> Avg asking rent (est.)
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-[3px] w-4 rounded-sm bg-emphasis" /> 2027 projected low
        </span>
      </div>
    </figure>
  );
}
