type ComplexAmenitiesProps = {
  amenities: string[];
};

export function ComplexAmenities({ amenities }: ComplexAmenitiesProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl text-deepInlet">Amenities & Features</h2>
      <ul className="mt-6 space-y-3">
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
