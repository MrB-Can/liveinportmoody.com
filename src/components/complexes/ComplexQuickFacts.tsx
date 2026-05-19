type QuickFactsData = {
  [key: string]: string;
};

type ComplexQuickFactsProps = {
  facts: QuickFactsData;
};

export function ComplexQuickFacts({ facts }: ComplexQuickFactsProps) {
  const factEntries = Object.entries(facts);

  return (
    <div className="rounded-lg border border-softBorder bg-white p-6 shadow-sm">
      <h2 className="font-heading text-2xl text-deepInlet">Quick Facts</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {factEntries.map(([label, value]) => (
          <div key={label}>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-forest">{label}</p>
            <p className="mt-2 text-base text-charcoal">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
