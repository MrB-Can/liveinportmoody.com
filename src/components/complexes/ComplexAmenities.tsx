type ComplexAmenitiesProps = {
  amenities: string[];
};

export function ComplexAmenities({ amenities }: ComplexAmenitiesProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl text-deepInlet">Amenities & Features</h2>
      <div className="mt-4 h-48 rounded-lg bg-gradient-to-br from-mist to-seaGlass/20" aria-label="Amenity facility image placeholder" />
      <p className="mt-2 text-xs text-slateText">Image placeholder: Amenity/recreation facility. Replace with professional photo.</p>

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
