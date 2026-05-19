type BuyerNotesData = {
  strengths: string[];
  tradeOffs: string[];
  whatToVerifyBeforeBuying: string[];
};

type ComplexBuyerNotesProps = {
  notes: BuyerNotesData;
};

export function ComplexBuyerNotes({ notes }: ComplexBuyerNotesProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-heading text-2xl text-deepInlet">What to Know Before Buying</h2>
        <p className="mt-2 text-sm text-slateText">An honest assessment of what makes Treetops appealing and what trade-offs to consider.</p>
      </section>

      <div>
        <h3 className="font-heading text-xl text-deepInlet">Strengths</h3>
        <ul className="mt-4 space-y-2">
          {notes.strengths.map((strength) => (
            <li key={strength} className="flex gap-3 text-slateText">
              <span className="text-green-600">✓</span>
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-heading text-xl text-deepInlet">Trade-Offs</h3>
        <ul className="mt-4 space-y-2">
          {notes.tradeOffs.map((tradeOff) => (
            <li key={tradeOff} className="flex gap-3 text-slateText">
              <span className="text-amber-600">⚠</span>
              <span>{tradeOff}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-heading text-xl text-deepInlet">What to Verify Before Buying</h3>
        <ul className="mt-4 space-y-3">
          {notes.whatToVerifyBeforeBuying.map((item) => (
            <li key={item} className="flex gap-3 text-slateText">
              <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border border-forest" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
