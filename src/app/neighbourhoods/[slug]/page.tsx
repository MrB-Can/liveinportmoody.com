import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { neighbourhoodGuides } from "@/data/neighbourhoodGuides";
import { complexes } from "@/data/complexes";
import { buildings } from "@/data/buildings";
import { NeighbourhoodGuideTemplate } from "@/components/neighbourhoods/NeighbourhoodGuideTemplate";

interface NeighbourhoodPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return neighbourhoodGuides
    .filter((guide) => guide.status === "published" || guide.status === "preview")
    .map((guide) => ({
      slug: guide.slug,
    }));
}

export async function generateMetadata({ params }: NeighbourhoodPageProps) {
  const { slug } = await params;
  const guide = neighbourhoodGuides.find((g) => g.slug === slug);

  if (!guide) {
    return createMetadata({
      title: "Neighbourhood not found",
      description: "This neighbourhood guide is not available.",
      path: `/neighbourhoods/${slug}`,
    });
  }

  const robots =
    guide.status === "preview" ? { index: false, follow: true } : { index: true, follow: true };

  return createMetadata(
    {
      title: guide.seoTitle || `${guide.name} Port Moody Neighbourhood Guide`,
      description:
        guide.seoDescription ||
        `A local guide to ${guide.name} in ${guide.municipality}, including housing types, parks, trails, schools, transit, and buyer/seller notes.`,
      path: `/neighbourhoods/${guide.slug}`,
    },
    { robots }
  );
}

export default async function NeighbourhoodPage({ params }: NeighbourhoodPageProps) {
  const { slug } = await params;
  const guide = neighbourhoodGuides.find((g) => g.slug === slug);

  if (!guide || (guide.status !== "published" && guide.status !== "preview")) {
    notFound();
  }

  // Only link complexes that have a detail page (complexes use explicit routes,
  // not a [slug] route, so a slug-built URL would 404). Buildings use /buildings/[slug].
  const guideComplexes = complexes
    .filter((complex) => complex.neighbourhoodSlug === guide.slug && (complex.detailPageUrl || complex.href))
    .map((complex) => ({ name: complex.name, href: (complex.detailPageUrl || complex.href) as string }));
  const guideBuildings = buildings
    .filter((building) => building.neighbourhoodSlug === guide.slug)
    .map((building) => ({ name: building.name, href: `/buildings/${building.slug}` }));

  return (
    <NeighbourhoodGuideTemplate guide={guide} complexes={guideComplexes} buildings={guideBuildings} />
  );
}
