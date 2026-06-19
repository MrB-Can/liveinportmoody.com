import Link from "next/link";
import { neighbourhoodGuides, type NeighbourhoodGuide } from "@/data/neighbourhoodGuides";

// Short value from a guide's quickFacts (which hold concise, table-ready strings),
// falling back to a trimmed verbose field when the fact isn't present.
function fact(guide: NeighbourhoodGuide, label: string, fallback: string): string {
  return guide.quickFacts?.find((f) => f.label === label)?.value ?? fallback;
}

const rows = neighbourhoodGuides
  .filter((g) => g.areaType === "port_moody_neighbourhood" && g.status === "published")
  .map((g) => ({
    name: g.name,
    href: `/neighbourhoods/${g.slug}`,
    bestFor: g.bestFor.slice(0, 2).join(", "),
    housing: fact(g, "Main housing", g.housingTypes.slice(0, 2).join(", ")),
    walkability: fact(g, "Walkability", g.walkabilityNotes),
    transit: fact(g, "Transit", g.transitAndAccess),
    feel: fact(g, "Lifestyle", ""),
    tradeoff: fact(g, "Watch-out", g.tradeOffs[0] ?? ""),
  }));

export function NeighbourhoodComparisonTable() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <h2 className="font-heading text-2xl text-deepInlet mb-2">Compare Port Moody neighbourhoods</h2>
      <p className="text-slateText mb-8">Quick overview of housing, lifestyle, and trade-offs by area.</p>

      <p className="mb-3 text-xs text-slateText md:hidden">Swipe sideways to compare all columns.</p>
      <div className="overflow-x-auto rounded-lg border border-softBorder bg-white shadow-sm">
        <table className="min-w-[880px] text-sm">
          <thead className="bg-mist">
            <tr className="border-b border-softBorder">
              <th className="text-left py-3 px-3 font-semibold text-deepInlet">Area</th>
              <th className="text-left py-3 px-3 font-semibold text-deepInlet">Best for</th>
              <th className="text-left py-3 px-3 font-semibold text-deepInlet">Housing</th>
              <th className="text-left py-3 px-3 font-semibold text-deepInlet">Walkability</th>
              <th className="text-left py-3 px-3 font-semibold text-deepInlet">Transit</th>
              <th className="text-left py-3 px-3 font-semibold text-deepInlet">Feel</th>
              <th className="text-left py-3 px-3 font-semibold text-deepInlet">Trade-off</th>
              <th className="text-left py-3 px-3 font-semibold text-deepInlet"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((area) => (
              <tr key={area.name} className="border-b border-softBorder hover:bg-mist">
                <td className="py-3 px-3 font-semibold">
                  <Link href={area.href} className="text-forest hover:text-deepInlet hover:underline">
                    {area.name}
                  </Link>
                </td>
                <td className="py-3 px-3 text-slateText text-xs">{area.bestFor}</td>
                <td className="py-3 px-3 text-slateText text-xs">{area.housing}</td>
                <td className="py-3 px-3 text-slateText text-xs">{area.walkability}</td>
                <td className="py-3 px-3 text-slateText text-xs">{area.transit}</td>
                <td className="py-3 px-3 text-slateText text-xs">{area.feel}</td>
                <td className="py-3 px-3 text-slateText text-xs">{area.tradeoff}</td>
                <td className="py-3 px-3">
                  <Link href={area.href} className="text-xs font-semibold text-forest hover:text-deepInlet whitespace-nowrap">
                    Explore →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
