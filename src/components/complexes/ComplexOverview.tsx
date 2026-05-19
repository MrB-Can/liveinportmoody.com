type ComplexOverviewProps = {
  introduction: string;
  typicalLayout: string;
  condition: string;
};

export function ComplexOverview({ introduction, typicalLayout, condition }: ComplexOverviewProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-heading text-2xl text-deepInlet">Overview</h2>
        <p className="mt-4 leading-7 text-slateText">{introduction}</p>
      </section>

      <section>
        <h3 className="font-heading text-xl text-deepInlet">Typical Layout</h3>
        <p className="mt-3 leading-7 text-slateText">{typicalLayout}</p>
      </section>

      <section>
        <h3 className="font-heading text-xl text-deepInlet">Condition & Build Quality</h3>
        <p className="mt-3 leading-7 text-slateText">{condition}</p>
      </section>
    </div>
  );
}
