type TransitData = {
  walkScore: string;
  busAccess: string;
  skyTrain: string;
  drivingTime: string;
  notes: string;
};

type ComplexTransitProps = {
  transit: TransitData;
};

export function ComplexTransit({ transit }: ComplexTransitProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-heading text-2xl text-deepInlet">Transit and Walkability</h2>
        <p className="mt-2 text-sm text-slateText">Understanding commute options and neighborhood connectivity.</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-softBorder bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-forest">Walk Score</p>
          <p className="mt-3 text-slateText">{transit.walkScore}</p>
        </div>

        <div className="rounded-lg border border-softBorder bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-forest">Local Transit</p>
          <p className="mt-3 text-slateText">{transit.busAccess}</p>
        </div>

        <div className="rounded-lg border border-softBorder bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-forest">SkyTrain Access</p>
          <p className="mt-3 text-slateText">{transit.skyTrain}</p>
        </div>

        <div className="rounded-lg border border-softBorder bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-forest">Driving Times</p>
          <p className="mt-3 text-sm text-slateText">{transit.drivingTime}</p>
        </div>
      </div>

      <div className="rounded-lg border border-softBorder bg-mist p-6">
        <p className="text-slateText">{transit.notes}</p>
      </div>
    </div>
  );
}
