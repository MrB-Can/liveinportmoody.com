type MarketContextData = {
  overview: string;
  recentActivity: string;
  investmentPerspective: string;
};

type ComplexMarketContextProps = {
  context: MarketContextData;
};

export function ComplexMarketContext({ context }: ComplexMarketContextProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-heading text-2xl text-deepInlet">Market Context</h2>
        <p className="mt-4 leading-7 text-slateText">{context.overview}</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-softBorder bg-white p-6">
          <h3 className="font-semibold text-deepInlet">Recent Activity</h3>
          <p className="mt-3 text-sm leading-6 text-slateText">{context.recentActivity}</p>
        </div>

        <div className="rounded-lg border border-softBorder bg-white p-6">
          <h3 className="font-semibold text-deepInlet">Investment Perspective</h3>
          <p className="mt-3 text-sm leading-6 text-slateText">{context.investmentPerspective}</p>
        </div>
      </div>
    </div>
  );
}
