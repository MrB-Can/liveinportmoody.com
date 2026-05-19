type Trail = {
  name: string;
  distance: string;
  description: string;
};

type ComplexParksAndTrailsProps = {
  trails: Trail[];
};

export function ComplexParksAndTrails({ trails }: ComplexParksAndTrailsProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl text-deepInlet">Nearby Parks and Trails</h2>
      <p className="mt-2 text-sm text-slateText">Port Moody has an extensive trail network and waterfront parks.</p>

      <div className="mt-6 h-48 rounded-lg bg-gradient-to-br from-mist to-seaGlass/20" aria-label="Forest/trail image placeholder" />
      <p className="mt-2 text-xs text-slateText">Image placeholder: Forest/trail setting. Replace with professional photo.</p>

      <div className="mt-8 space-y-4">
        {trails.map((trail) => (
          <div key={trail.name} className="rounded-lg border border-softBorder bg-white p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-deepInlet">{trail.name}</h3>
                <p className="mt-1 text-sm font-medium text-forest">{trail.distance}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slateText">{trail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
