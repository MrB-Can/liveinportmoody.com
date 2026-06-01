import Link from "next/link";

const neighbourhoods = [
  {
    name: "Heritage Mountain",
    bestFor: "Families, townhomes, trails",
    housing: "Detached, townhomes",
    walkability: "Low",
    transit: "Bus access",
    feel: "Quiet, residential",
    tradeoff: "Less walkable than central areas",
    href: "/neighbourhoods/heritage-mountain",
    status: "live",
  },
  {
    name: "Suter Brook",
    bestFor: "First-time buyers, walkability",
    housing: "Condos, townhomes",
    walkability: "High",
    transit: "Good",
    feel: "Growing, mixed-use",
    tradeoff: "Active development",
    href: "#",
    status: "preview",
  },
  {
    name: "Newport Village",
    bestFor: "Condo lifestyle, waterfront",
    housing: "Condos, townhomes",
    walkability: "High",
    transit: "Excellent",
    feel: "Modern, walkable",
    tradeoff: "Higher price point",
    href: "#",
    status: "preview",
  },
  {
    name: "Klahanie",
    bestFor: "Families, central location",
    housing: "Detached, townhomes, condos",
    walkability: "Moderate",
    transit: "Good",
    feel: "Established, family-oriented",
    tradeoff: "Mixed housing types",
    href: "#",
    status: "preview",
  },
  {
    name: "Moody Centre",
    bestFor: "Urban living, walkability",
    housing: "Condos, townhomes",
    walkability: "Very high",
    transit: "Excellent",
    feel: "Downtown, mixed-use",
    tradeoff: "Less residential quiet",
    href: "#",
    status: "preview",
  },
  {
    name: "College Park",
    bestFor: "Families, value",
    housing: "Detached, townhomes",
    walkability: "Moderate",
    transit: "Good",
    feel: "Established, quiet",
    tradeoff: "Less trail access",
    href: "#",
    status: "preview",
  },
];

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
            {neighbourhoods.map((area) => (
              <tr key={area.name} className="border-b border-softBorder hover:bg-mist">
                <td className="py-3 px-3 font-semibold text-deepInlet">{area.name}</td>
                <td className="py-3 px-3 text-slateText text-xs">{area.bestFor}</td>
                <td className="py-3 px-3 text-slateText text-xs">{area.housing}</td>
                <td className="py-3 px-3 text-slateText text-xs">{area.walkability}</td>
                <td className="py-3 px-3 text-slateText text-xs">{area.transit}</td>
                <td className="py-3 px-3 text-slateText text-xs">{area.feel}</td>
                <td className="py-3 px-3 text-slateText text-xs">{area.tradeoff}</td>
                <td className="py-3 px-3">
                  {area.status === "live" ? (
                    <Link href={area.href} className="text-xs font-semibold text-forest hover:text-deepInlet">
                      Explore →
                    </Link>
                  ) : (
                    <span className="text-xs text-slateText">Coming soon</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
