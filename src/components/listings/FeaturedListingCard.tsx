import Image from "next/image";
import { Bed, Bath, Ruler } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/cta-button";
import { getNeighbourhoodGuide } from "@/data/neighbourhoodGuides";
import type { OurListing } from "@/data/ourListings";

const priceFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});

type FeaturedListingCardProps = { listing: OurListing };

export function FeaturedListingCard({ listing }: FeaturedListingCardProps) {
  const neighbourhoodName = listing.neighbourhoodSlug
    ? getNeighbourhoodGuide(listing.neighbourhoodSlug)?.name
    : undefined;

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-softBorder bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={listing.heroImage.src}
          alt={listing.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 360px, 100vw"
          className="object-cover"
        />
        <div className="absolute left-3 top-3">
          <Badge tone={listing.status === "active" ? "forest" : "amber"}>
            {listing.status === "active" ? "For Sale" : "Coming soon"}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-heading text-2xl font-semibold text-deepInlet">{priceFormatter.format(listing.price)}</p>
        <p className="mt-1 text-sm text-slateText">
          {listing.address}
          {listing.unit ? `, ${listing.unit}` : ""}
          {neighbourhoodName ? ` · ${neighbourhoodName}` : ""}
        </p>
        <div className="mt-4 flex items-center gap-4 text-sm text-charcoal">
          <span className="flex items-center gap-1.5">
            <Bed className="h-4 w-4 text-forest" />
            {listing.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-forest" />
            {listing.baths}
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-forest" />
            {listing.sqft.toLocaleString()} sqft
          </span>
        </div>
        <div className="mt-5">
          <CTAButton href={`/listings/${listing.slug}`} variant="secondary">
            View details
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
