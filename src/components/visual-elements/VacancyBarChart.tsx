// Static inline-SVG bar chart: Metro Vancouver rental vacancy rate.
// Reported bars (through 2026) vs forecast bars (2027+). No client JS.

const LABELS = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
const VALUES = [0.9, 0.9, 1.6, 2.8, 3.7, 4.0, 2.5, 1.8, 1.7];
const LAST_REPORTED = 4; // index 4 = 2026; 5+ are forecast
const PEAK_INDEX = 5; // 2027 forecast peak

const W = 720;
const H = 320;
const PAD = { top: 20, right: 16, bottom: 40, left: 48 };
const MAX = 4.5;
const GRID = [0, 1.5, 3.0, 4.5];

const plotW = W - PAD.left - PAD.right;
const plotH = H - PAD.top - PAD.bottom;
const baseY = PAD.top + plotH;

const barW = 34;
const slot = plotW / VALUES.length;
const y = (v: number) => baseY - (v / MAX) * plotH;

export function VacancyBarChart() {
  return (
    <figure className="not-prose my-8 rounded-2xl border border-softBorder bg-white p-6">
      <figcaption className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slateText">
        Figure 2 · Metro Vancouver rental vacancy rate
      </figcaption>
      <h4 className="font-heading text-lg text-deepInlet">Peak choice for renters, then a sharp reversal</h4>
      <p className="mb-4 mt-1 text-sm leading-relaxed text-slateText">
        Reported figures through 2026; 2027 onward projected from the supply-cliff forecast. Port
        Moody typically runs a touch tighter than the regional average.
      </p>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Metro Vancouver vacancy rate rising from under 1 percent in 2022 to a forecast peak of 4 percent in 2027, then tightening back below 2 percent by 2029."
      >
        {GRID.map((g) => (
          <g key={g}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(g)} y2={y(g)} stroke="#D9DED8" strokeWidth={1} />
            <text x={PAD.left - 8} y={y(g) + 4} textAnchor="end" fontSize={12} fill="#4E5A57">
              {g.toFixed(1)}%
            </text>
          </g>
        ))}
        {/* peak marker */}
        <line
          x1={PAD.left + slot * (PEAK_INDEX + 0.5)}
          x2={PAD.left + slot * (PEAK_INDEX + 0.5)}
          y1={PAD.top}
          y2={baseY}
          stroke="#B77946"
          strokeWidth={1.5}
          strokeDasharray="5 4"
        />
        {VALUES.map((v, i) => {
          const cx = PAD.left + slot * (i + 0.5);
          const forecast = i > LAST_REPORTED;
          return (
            <g key={i}>
              <rect
                x={cx - barW / 2}
                y={y(v)}
                width={barW}
                height={baseY - y(v)}
                rx={5}
                fill={forecast ? '#7FAEA3' : '#12302F'}
              />
              <text x={cx} y={H - 12} textAnchor="middle" fontSize={12} fill="#4E5A57">
                {LABELS[i]}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-3 flex flex-wrap gap-4 text-[11px] uppercase tracking-wide text-slateText">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-deepInlet" /> Reported
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-seaGlass" /> Forecast
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-[3px] w-4 rounded-sm bg-emphasis" /> 2027 peak
        </span>
      </div>
    </figure>
  );
}
