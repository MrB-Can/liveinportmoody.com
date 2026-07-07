interface Stat {
  num: string;
  label: string;
  sub?: string;
  trend?: 'up' | 'down';
}

interface StatStripProps {
  stats: Stat[];
}

export function StatStrip({ stats }: StatStripProps) {
  return (
    <div className="not-prose my-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-softBorder bg-softBorder sm:grid-cols-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-5">
          <div className="font-heading text-2xl leading-none text-deepInlet">{stat.num}</div>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-slateText">
            {stat.label}
          </div>
          {stat.sub && (
            <div
              className={`mt-1.5 text-sm leading-tight ${
                stat.trend === 'down' ? 'text-emphasis' : 'text-forest'
              }`}
            >
              {stat.sub}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
