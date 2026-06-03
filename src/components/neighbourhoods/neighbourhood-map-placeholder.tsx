import { MapPin } from "lucide-react";

export function NeighbourhoodMapPlaceholder() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-12">
      <h2 className="font-heading text-2xl text-deepInlet mb-4">Port Moody neighbourhoods map</h2>

      <div className="rounded-lg border border-softBorder bg-gradient-to-br from-mist to-seaGlass/20 p-8 flex flex-col items-center justify-center min-h-96">
        <MapPin className="h-12 w-12 text-forest mb-4" />
        <h3 className="font-semibold text-deepInlet mb-2">Map orientation</h3>
        <p className="text-sm text-slateText text-center max-w-md mb-6">
          Visual map showing all Port Moody neighbourhoods with boundaries, landmarks, and quick links to detailed guides.
        </p>
        <div className="grid gap-2 text-xs text-slateText">
          <p><span className="font-semibold">Planned labels:</span> Suter Brook, Newport Village, Klahanie, Moody Centre, Heritage Mountain, Heritage Woods, College Park, Glenayre, Pleasantside, Ioco/North Shore, Barber Street, and Seaview context.</p>
        </div>
      </div>
    </section>
  );
}
