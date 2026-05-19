type HomeDetails = {
  exteriors: string;
  interiors: string;
  groundFloor: string;
  commonAreas: string;
};

type ComplexDetailsProps = {
  details: HomeDetails;
};

export function ComplexDetails({ details }: ComplexDetailsProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-heading text-2xl text-deepInlet">What the Homes Are Like</h2>
      </section>

      <div>
        <h3 className="font-heading text-xl text-deepInlet">Exteriors</h3>
        <p className="mt-3 leading-7 text-slateText">{details.exteriors}</p>
      </div>

      <div>
        <h3 className="font-heading text-xl text-deepInlet">Interiors</h3>
        <p className="mt-3 leading-7 text-slateText">{details.interiors}</p>
      </div>

      <div className="h-48 rounded-lg bg-gradient-to-br from-mist to-seaGlass/20" aria-label="Townhome interior/exterior image placeholder" />
      <p className="text-xs text-slateText">Image placeholder: Representative internal lane, exterior architectural detail. Replace with professional photo.</p>

      <div>
        <h3 className="font-heading text-xl text-deepInlet">Ground Floor & Layouts</h3>
        <p className="mt-3 leading-7 text-slateText">{details.groundFloor}</p>
      </div>

      <div>
        <h3 className="font-heading text-xl text-deepInlet">Common Areas</h3>
        <p className="mt-3 leading-7 text-slateText">{details.commonAreas}</p>
      </div>
    </div>
  );
}
