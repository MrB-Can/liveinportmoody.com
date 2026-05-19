type FitType = {
  type: string;
  reason: string;
};

type ComplexFitCardsProps = {
  fitTypes: FitType[];
};

export function ComplexFitCards({ fitTypes }: ComplexFitCardsProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl text-deepInlet">Who Treetops Tends to Fit</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {fitTypes.map((fit) => (
          <article key={fit.type} className="rounded-lg border border-softBorder bg-mist p-5">
            <h3 className="font-semibold text-deepInlet">{fit.type}</h3>
            <p className="mt-3 text-sm leading-6 text-slateText">{fit.reason}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
