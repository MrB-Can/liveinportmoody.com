import Link from "next/link";
import { Map, Building2, House, LayoutList } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { exploreItems } from "@/lib/site";

export const metadata = createMetadata({
  title: "Explore Port Moody Real Estate and Neighbourhoods",
  description:
    "Explore Port Moody neighbourhoods, townhouse complexes, condo buildings, listings, schools, trails, transit, market notes, and buyer or seller resources.",
  path: "/explore",
});

type PrimaryPath = {
  title: string;
  href: string;
  body: string;
  icon: LucideIcon;
};

const primaryPaths: PrimaryPath[] = [
  {
    title: "Neighbourhoods",
    href: "/neighbourhoods",
    body: "Compare Port Moody areas by lifestyle, housing type, walkability, schools, trails, transit, and buyer fit.",
    icon: Map,
  },
  {
    title: "Townhouse complexes",
    href: "/complexes",
    body: "Look up Port Moody townhouse complexes by setting, strata context, layouts, amenities, and practical buyer notes.",
    icon: House,
  },
  {
    title: "Condo buildings",
    href: "/buildings",
    body: "Compare building location, age, amenities, transit access, construction context, and daily convenience.",
    icon: Building2,
  },
  {
    title: "Listings",
    href: "/listings",
    body: "Start with active listings, then use local context to understand what the address, building, or area really means.",
    icon: LayoutList,
  },
];

const guideSections = [
  {
    title: "Moving here",
    href: "/move-to-port-moody",
    body: "Trails, SkyTrain, schools, breweries, hillsides, density, and waterfront access all shape the move.",
  },
  {
    title: "Schools",
    href: "/resources#schools",
    body: "Use school context carefully as one part of the broader neighbourhood and commute decision.",
  },
  {
    title: "Trails",
    href: "/move-to-port-moody#trails",
    body: "Port Moody's trail network is part of the lifestyle value, especially around the inlet and hillside areas.",
  },
  {
    title: "Transit",
    href: "/move-to-port-moody#transit",
    body: "SkyTrain access changes the buyer pool, commute patterns, parking needs, and rental appeal.",
  },
  {
    title: "Market",
    href: "/market",
    body: "Read current market notes and property-type context without fake numbers or generic spin.",
  },
  {
    title: "Buyer and seller resources",
    href: "/resources",
    body: "Find practical prompts for buyers, sellers, relocation planning, local questions, and market updates.",
  },
];

export default function ExplorePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Explore Port Moody</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Start with the place, then decide on the property.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            Port Moody decisions are local. Use this hub to move between neighbourhoods, townhouse complexes,
            condo buildings, listings, lifestyle context, market notes, and buyer or seller resources.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {primaryPaths.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-softBorder bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-seaGlass/15">
                    <item.icon className="h-5 w-5 text-forest" />
                  </div>
                  <h2 className="font-heading text-2xl text-deepInlet">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slateText">{item.body}</p>
                </div>
                <span className="mt-1 text-forest">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-warmSand px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.4fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Local context</p>
              <h2 className="mt-3 font-heading text-3xl text-deepInlet">The next layer after the listing.</h2>
              <p className="mt-4 text-sm leading-6 text-slateText">
                A property only makes sense once you understand the commute, school context, trail access,
                strata or building pattern, and market conditions around it.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {guideSections.map((item) => (
                <Link
                  key={item.href + item.title}
                  href={item.href}
                  className="rounded-lg border border-softBorder bg-white/80 p-5 transition hover:bg-white"
                >
                  <h3 className="font-heading text-xl text-deepInlet">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slateText">{item.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="rounded-lg border border-softBorder bg-deepInlet p-6 text-white md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-seaGlass">All explore paths</p>
              <h2 className="mt-3 font-heading text-3xl">Choose the question you are trying to answer.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {exploreItems
                .filter((item) => item.group !== "Overview")
                .map((item) => (
                  <Link
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    className="rounded-md border border-white/15 p-4 text-sm transition hover:border-white/40 hover:bg-white/5"
                  >
                    <span className="font-semibold text-white">{item.label}</span>
                    <span className="mt-1 block leading-6 text-mist">{item.description}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
