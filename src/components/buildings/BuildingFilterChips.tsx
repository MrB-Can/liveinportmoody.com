const filters = [
  "Suter Brook",
  "Newport Village",
  "Klahanie",
  "Moody Centre",
  "Near SkyTrain",
  "Concrete",
  "Wood frame",
  "High-rise",
  "Low-rise",
  "Amenities",
  "Walkable",
  "Newer",
  "Established",
  "Preview",
];

export function BuildingFilterChips() {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className="rounded-full border border-softBorder bg-white px-4 py-2 text-sm font-medium text-deepInlet transition hover:border-seaGlass hover:bg-mist"
        >
          {filter}
        </button>
      ))}
      <p className="w-full text-xs leading-5 text-slateText">
        Filters are ready for the full building database. Current cards are preview-level research prompts.
      </p>
    </div>
  );
}
