type LocationData = {
  neighborhood: string;
  nearby: {
    shopping: string;
    dining: string;
    parks: string;
    trails: string;
  };
};

type ComplexLocationProps = {
  location: LocationData;
};

export function ComplexLocation({ location }: ComplexLocationProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-heading text-2xl text-deepInlet">Location & Neighborhood</h2>
        <p className="mt-4 leading-7 text-slateText">{location.neighborhood}</p>
      </section>

      <div className="h-64 rounded-lg bg-gradient-to-br from-mist to-seaGlass/20" aria-label="Location context image placeholder" />
      <p className="text-xs text-slateText">Image placeholder: Parkside Drive street context. Replace with professional photo.</p>

      <section className="space-y-4">
        <h3 className="font-heading text-xl text-deepInlet">Nearby</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-softBorder bg-white p-4">
            <p className="text-sm font-semibold text-forest">Shopping</p>
            <p className="mt-2 text-sm text-slateText">{location.nearby.shopping}</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-4">
            <p className="text-sm font-semibold text-forest">Dining</p>
            <p className="mt-2 text-sm text-slateText">{location.nearby.dining}</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-4">
            <p className="text-sm font-semibold text-forest">Parks</p>
            <p className="mt-2 text-sm text-slateText">{location.nearby.parks}</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-4">
            <p className="text-sm font-semibold text-forest">Trails</p>
            <p className="mt-2 text-sm text-slateText">{location.nearby.trails}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
