import { PlaceholderImageBlock } from "@/components/ui/placeholder-image-block";

type ComplexAmenitiesProps = {
  amenities: string[];
};

export function ComplexAmenities({ amenities }: ComplexAmenitiesProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl text-deepInlet">Amenities & Features</h2>
      <div className="mt-4">
        <PlaceholderImageBlock
          label="Amenity or recreation facility"
          caption="Replace with a professional photo of the amenity or recreation facility."
        />
      </div>

      <ul className="mt-8 space-y-3">
        {amenities.map((amenity) => (
          <li key={amenity} className="flex gap-3 text-slateText">
            <span className="text-forest">✓</span>
            <span>{amenity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
