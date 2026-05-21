"use client";

import { useState } from "react";

const filterOptions = [
  "Walkable",
  "SkyTrain",
  "Family-friendly",
  "Townhomes",
  "Condos",
  "Detached homes",
  "Trails",
  "Quiet streets",
  "Waterfront access",
  "Better value",
  "Newer homes",
  "Investment potential",
];

export function FilterChips() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  return (
    <section className="mx-auto max-w-4xl px-5 py-8">
      <p className="text-sm font-semibold text-slateText mb-4">Filter by what matters to you:</p>
      <div className="flex flex-wrap gap-3">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedFilters.includes(filter)
                ? "bg-forest text-white"
                : "bg-mist text-deepInlet hover:bg-forest/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
