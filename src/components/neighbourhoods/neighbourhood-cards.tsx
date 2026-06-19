import Link from "next/link";
import Image from "next/image";
import { neighbourhoods, type Neighbourhood } from "@/data/neighbourhoods";
import { getNeighbourhoodGuide } from "@/data/neighbourhoodGuides";

// Placeholder imagery: existing generic Port Moody photos, spread across areas so
// adjacent cards differ. A real per-neighbourhood photo can be dropped in later via
// the guide's `heroImage` field, which takes precedence (see imageFor).
const CARD_IMAGE: Record<string, string> = {
  "heritage-mountain": "/images/phase1/port-moody-hillside-homes.jpg",
  "heritage-woods": "/images/phase1/port-moody-residential-greenery.jpg",
  "mountain-meadows": "/images/phase1/port-moody-residential-detail.jpg",
  "suter-brook": "/images/phase1/port-moody-community-building.jpg",
  "newport-village": "/images/hero/port-moody-hero-summer.jpg",
  "klahanie": "/images/hero/port-moody-hero-spring.jpg",
  "moody-centre": "/images/phase1/port-moody-community-building.jpg",
  "college-park": "/images/phase1/port-moody-residential-detail.jpg",
  "glenayre": "/images/phase1/port-moody-residential-greenery.jpg",
  "ioco-north-shore": "/images/phase1/port-moody-regional-view.jpg",
  "barber-street": "/images/phase1/port-moody-regional-view.jpg",
  "seaview": "/images/phase1/port-moody-forest-path.jpg",
  "anmore": "/images/phase1/port-moody-forest-path.jpg",
  "belcarra": "/images/hero/port-moody-hero-original.jpg",
  "pleasantside": "/images/phase1/port-moody-hillside-homes.jpg",
};

const CATEGORY_IMAGE: Record<string, string> = {
  residential: "/images/phase1/port-moody-hillside-homes.jpg",
  village: "/images/phase1/port-moody-community-building.jpg",
  waterfront: "/images/phase1/port-moody-regional-view.jpg",
  nearby: "/images/phase1/port-moody-forest-path.jpg",
};

function imageFor(n: Neighbourhood): string {
  return (
    getNeighbourhoodGuide(n.slug)?.heroImage ||
    CARD_IMAGE[n.slug] ||
    CATEGORY_IMAGE[n.category] ||
    "/images/hero/port-moody-hero-summer.jpg"
  );
}

const SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

export function NeighbourhoodCards() {
  const live = neighbourhoods.filter((n) => n.guideStatus === "live");
  const comingSoon = neighbourhoods.filter((n) => n.guideStatus === "coming-soon");

  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <h2 className="font-heading text-2xl text-deepInlet mb-2">Explore Port Moody neighbourhoods</h2>
      <p className="text-slateText mb-8">Browse by area, tap any neighbourhood for the full local guide.</p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {live.map((n) => (
          <Link
            key={n.slug}
            href={`/neighbourhoods/${n.slug}`}
            className="group relative block overflow-hidden rounded-xl border border-softBorder shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={imageFor(n)}
                alt={`Port Moody, ${n.name} neighbourhood`}
                fill
                sizes={SIZES}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-heading text-xl text-white">{n.name}</h3>
                <p className="mt-1 text-sm leading-snug text-white/90 line-clamp-3">{n.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}

        {comingSoon.map((n) => (
          <div
            key={n.slug}
            className="relative block overflow-hidden rounded-xl border border-softBorder shadow-sm"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={imageFor(n)}
                alt={`Port Moody, ${n.name}`}
                fill
                sizes={SIZES}
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-deepInlet">
                Coming soon
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-heading text-xl text-white">{n.name}</h3>
                <p className="mt-1 text-sm leading-snug text-white/90 line-clamp-3">{n.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
