interface CasePoint {
  lead: string;
  body: string;
}

interface BuySellSplitProps {
  buy: CasePoint[];
  sell: CasePoint[];
}

function CaseColumn({
  tag,
  heading,
  points,
  variant,
}: {
  tag: string;
  heading: string;
  points: CasePoint[];
  variant: 'buy' | 'sell';
}) {
  const isBuy = variant === 'buy';
  return (
    <div className="p-7 sm:p-8">
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
          isBuy ? 'bg-forest/10 text-forest' : 'bg-emphasis/10 text-emphasis'
        }`}
      >
        {tag}
      </span>
      <h3 className={`mt-4 font-heading text-xl ${isBuy ? 'text-forest' : 'text-emphasis'}`}>
        {heading}
      </h3>
      <ul className="mt-4 space-y-0">
        {points.map((p, idx) => (
          <li
            key={idx}
            className="relative border-t border-softBorder py-3.5 pl-6 first:border-t-0 text-sm leading-relaxed text-slateText"
          >
            <span
              className={`absolute left-0 top-5 h-2 w-2 rounded-full ${
                isBuy ? 'bg-forest' : 'bg-emphasis'
              }`}
            />
            <span className="block font-heading text-sm text-deepInlet">{p.lead}</span>
            {p.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BuySellSplit({ buy, sell }: BuySellSplitProps) {
  return (
    <div className="not-prose my-8 grid overflow-hidden rounded-2xl border border-softBorder bg-white md:grid-cols-2 md:divide-x md:divide-softBorder">
      <CaseColumn tag="◣ The case to buy" heading="Buy into the quiet before the flood" points={buy} variant="buy" />
      <CaseColumn tag="◢ The case to sell" heading="Sell into strength before the wave" points={sell} variant="sell" />
    </div>
  );
}
