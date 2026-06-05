import { Check } from "lucide-react";
import { trustItems } from "@/lib/site";

export function TrustStrip() {
  return (
    <section className="border-b border-softBorder bg-white px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-seaGlass/15">
                <Check className="h-4 w-4 text-forest" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-deepInlet">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slateText">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
