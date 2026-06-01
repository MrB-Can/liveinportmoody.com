import { CTAButton } from "@/components/cta-button";
import type { PortMoodyBuilding } from "@/data/buildings";

export function BuildingComparisonTable({ buildings }: { buildings: PortMoodyBuilding[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-softBorder bg-white shadow-sm">
      <table className="min-w-[1040px] text-left text-sm">
        <thead className="bg-mist text-xs uppercase tracking-[0.08em] text-deepInlet">
          <tr>
            <th className="px-4 py-3">Building / group</th>
            <th className="px-4 py-3">Area</th>
            <th className="px-4 py-3">General feel</th>
            <th className="px-4 py-3">Best for</th>
            <th className="px-4 py-3">Due diligence focus</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">CTA</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-softBorder">
          {buildings.map((building) => (
            <tr key={building.slug} className="align-top">
              <td className="px-4 py-4 font-semibold text-deepInlet">{building.name}</td>
              <td className="px-4 py-4 text-slateText">{building.neighbourhood}</td>
              <td className="px-4 py-4 text-slateText">{building.summary}</td>
              <td className="px-4 py-4 text-slateText">{building.bestFor}</td>
              <td className="px-4 py-4 text-slateText">{building.watchouts}</td>
              <td className="px-4 py-4">
                <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">Guide preview</span>
              </td>
              <td className="px-4 py-4">
                <CTAButton href={`/buildings/${building.slug}`} variant="ghost">
                  See guide preview
                </CTAButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
