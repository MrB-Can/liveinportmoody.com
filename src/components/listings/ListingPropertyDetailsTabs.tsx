"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { Bed, Bath, Building, Building2, Info, Receipt, Sofa, Users, Utensils, Flame, Layers, Thermometer } from "@/lib/icons";
import type { OurListingDetailTab } from "@/data/ourListings";

type ListingPropertyDetailsTabsProps = {
  tabs: OurListingDetailTab[];
};

type IconComponent = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const tabIcons: Record<string, IconComponent> = {
  Interior: Sofa,
  Exterior: Building,
  Building: Building2,
  Community: Users,
  "Taxes & Fees": Receipt,
  Other: Info,
};

const rowIcons: Record<string, IconComponent> = {
  Bedrooms: Bed,
  Bathrooms: Bath,
  Kitchens: Utensils,
  Fireplaces: Flame,
  "Floor finish": Layers,
  Heating: Thermometer,
};

export function ListingPropertyDetailsTabs({ tabs }: ListingPropertyDetailsTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (tabs.length === 0) return null;

  const active = tabs[activeIndex];

  return (
    <div>
      <div className="flex gap-1 overflow-x-auto scrollbar-hide">
        {tabs.map((tab, index) => {
          const TabIcon = tabIcons[tab.label];
          return (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-t-lg border border-b-0 px-4 py-2.5 text-sm font-semibold transition-colors ${
                index === activeIndex
                  ? "border-softBorder bg-white text-forest"
                  : "border-transparent bg-mist text-slateText hover:bg-white/60 hover:text-charcoal"
              }`}
            >
              {TabIcon ? <TabIcon className="h-3.5 w-3.5" aria-hidden={true} /> : null}
              {tab.label}
            </button>
          );
        })}
      </div>
      <dl className="-mt-px divide-y divide-softBorder rounded-b-lg rounded-tr-lg border border-softBorder bg-white p-5">
        {active.rows.map((row) => {
          const RowIcon = rowIcons[row.label];
          return (
            <div key={row.label} className="grid gap-1 py-3 first:pt-0 sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)] sm:gap-4">
              <dt className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-slateText">
                {RowIcon ? <RowIcon className="h-4 w-4 text-forest" aria-hidden={true} /> : null}
                {row.label}
              </dt>
              <dd className="text-sm font-medium text-charcoal">{row.value}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
