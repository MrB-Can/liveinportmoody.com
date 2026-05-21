type LocationData = {
  neighborhood: string;
  nearby: {
    shopping: string;
    dining: string;
    parks: string;
    trails: string;
  };
};

import { PlaceholderImageBlock } from "@/components/ui/placeholder-image-block";

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

      <PlaceholderImageBlock
        height="lg"
        label="Street or neighbourhood context"
        caption="Replace with a professional photo of the street or neighbourhood context."
      />

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
