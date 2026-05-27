import { CTAButton } from "@/components/cta-button";
import { Badge } from "@/components/ui/badge";
import type { PortMoodyBuilding } from "@/data/buildings";

export function BuildingPreviewCard({ building }: { building: PortMoodyBuilding }) {
  return (
    <article className="flex min-h-full flex-col rounded-lg border border-softBorder bg-white p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge tone="slate">Preview</Badge>
        <span className="text-xs font-medium text-slateText">{building.type}</span>
      </div>
      <h3 className="font-heading text-2xl text-deepInlet">{building.name}</h3>
      <p className="mt-1 text-sm font-semibold text-forest">{building.neighbourhood}</p>
      <p className="mt-4 text-sm leading-6 text-slateText">{building.summary}</p>
      <div className="mt-5 grid flex-1 gap-4 text-sm leading-6">
        <div>
          <p className="font-semibold text-charcoal">Best for</p>
          <p className="text-slateText">{building.bestFor}</p>
        </div>
        <div>
          <p className="font-semibold text-charcoal">What to verify</p>
          <p className="text-slateText">{building.watchouts}</p>
        </div>
      </div>
      <div className="mt-6">
        <CTAButton href={`/buildings/${building.slug}`} variant="secondary">
          Open preview
        </CTAButton>
      </div>
    </article>
  );
}
