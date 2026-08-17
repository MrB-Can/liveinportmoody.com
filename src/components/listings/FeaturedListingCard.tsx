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
  const isSold = listing.status === "sold";
  // Only claim a "Sold - $X" figure when the actual closed price is known -
  // falling back to the list price would misrepresent it as the sold price.
  const knownSoldPrice = isSold && listing.soldPrice ? listing.soldPrice : null;
  const displayPrice = knownSoldPrice ?? listing.price;

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
          <Badge tone={isSold ? "slate" : listing.status === "active" ? "forest" : "amber"}>
            {isSold ? "Sold" : listing.status === "active" ? "For Sale" : "Coming soon"}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-heading text-2xl font-semibold text-deepInlet">
          {isSold ? "Sold" : ""}
          {isSold && knownSoldPrice ? " - " : ""}
          {isSold && !knownSoldPrice ? "" : priceFormatter.format(displayPrice)}
        </p>
        {isSold && !knownSoldPrice ? (
          <p className="text-xs text-slateText">Listed at {priceFormatter.format(listing.price)}</p>
        ) : null}
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
