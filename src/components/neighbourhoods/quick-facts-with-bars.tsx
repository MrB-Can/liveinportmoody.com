type QuickFact = {
  label: string;
  value: string;
};

type ScoringBar = {
  label: string;
  score: number; // 0-100
};

type QuickFactsWithBarsProps = {
  facts: QuickFact[];
  scoringBars: ScoringBar[];
  neighbourhoodName?: string;
};

export function QuickFactsWithBars({ facts, scoringBars, neighbourhoodName = "this neighbourhood" }: QuickFactsWithBarsProps) {
  return (
    <section className="space-y-8">
      {/* Basic facts */}
      <div>
        <h2 className="font-heading text-2xl text-deepInlet mb-6">Quick facts</h2>
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-slateText font-semibold">{fact.label}</p>
              <p className="mt-2 text-sm font-semibold text-deepInlet">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scoring bars */}
      <div>
        <h3 className="font-heading text-xl text-deepInlet mb-6">How {neighbourhoodName} scores</h3>
        <div className="space-y-4">
          {scoringBars.map((bar) => (
            <div key={bar.label}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-deepInlet">{bar.label}</span>
                <span className="text-xs text-slateText">{bar.score}%</span>
              </div>
              <div className="h-2 bg-mist rounded-full overflow-hidden">
                <div
                  className="h-full bg-forest rounded-full transition-all"
                  style={{ width: `${bar.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
