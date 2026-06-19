type FitCardsProps = {
  mayFit: string[];
  mayNotFit: string[];
  neighbourhoodName?: string;
};

export function FitCards({ mayFit, mayNotFit, neighbourhoodName = "this neighbourhood" }: FitCardsProps) {
  return (
    <section>
      <h2 className="font-heading text-2xl text-deepInlet mb-6">Is {neighbourhoodName} right for you?</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border-l-4 border-forest bg-white p-6">
          <h3 className="font-semibold text-forest mb-4">May fit</h3>
          <ul className="space-y-3">
            {mayFit.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slateText">
                <span className="flex-shrink-0 text-forest font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border-l-4 border-emphasis bg-white p-6">
          <h3 className="font-semibold text-emphasis mb-4">May not fit</h3>
          <ul className="space-y-3">
            {mayNotFit.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slateText">
                <span className="flex-shrink-0 text-emphasis font-bold">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
