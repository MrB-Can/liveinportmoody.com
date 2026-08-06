import { notFound } from "next/navigation";
import { ListingDetailTemplate } from "@/components/listings/ListingDetailTemplate";
import { ourListings } from "@/data/ourListings";
import { createMetadata } from "@/lib/seo";

interface OurListingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ourListings
    .filter((listing) => listing.status === "active" || listing.status === "coming-soon")
    .map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({ params }: OurListingPageProps) {
  const { slug } = await params;
  const listing = ourListings.find((item) => item.slug === slug);

  if (!listing) {
    return createMetadata({
      title: "Listing not found",
      description: "This listing is not available.",
      path: `/listings/${slug}`,
    });
  }

  return createMetadata({
    title: `${listing.address} | Port Moody Listing`,
    description: listing.summary,
    path: `/listings/${listing.slug}`,
  });
}

export default async function OurListingPage({ params }: OurListingPageProps) {
  const { slug } = await params;
  const listing = ourListings.find((item) => item.slug === slug);

  if (!listing || (listing.status !== "active" && listing.status !== "coming-soon")) {
    notFound();
  }

  return <ListingDetailTemplate listing={listing} />;
}
