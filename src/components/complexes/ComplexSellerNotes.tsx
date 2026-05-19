type SellerNotesData = {
  marketPosition: string;
  preparationTips: string[];
  marketContext: string;
};

type ComplexSellerNotesProps = {
  notes: SellerNotesData;
};

export function ComplexSellerNotes({ notes }: ComplexSellerNotesProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-heading text-2xl text-deepInlet">If You Own at Treetops</h2>
        <p className="mt-2 text-sm text-slateText">Context for sellers considering the market and selling strategy.</p>
      </section>

      <section>
        <h3 className="font-heading text-xl text-deepInlet">Market Position</h3>
        <p className="mt-4 leading-7 text-slateText">{notes.marketPosition}</p>
      </section>

      <section>
        <h3 className="font-heading text-xl text-deepInlet">Preparation Tips</h3>
        <ul className="mt-4 space-y-3">
          {notes.preparationTips.map((tip) => (
            <li key={tip} className="flex gap-3 text-slateText">
              <span className="text-deepInlet">→</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="rounded-lg border border-softBorder bg-mist p-6">
        <p className="text-sm text-slateText">{notes.marketContext}</p>
      </div>
    </div>
  );
}
