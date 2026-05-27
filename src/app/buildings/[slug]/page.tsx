import { notFound } from "next/navigation";
import { BuildingGuidePreviewTemplate } from "@/components/buildings/BuildingGuidePreviewTemplate";
import { buildings } from "@/data/buildings";
import { createMetadata } from "@/lib/seo";

interface BuildingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return buildings
    .filter((building) => building.guideStatus === "preview" || building.guideStatus === "guide-live")
    .map((building) => ({
      slug: building.slug,
    }));
}

export async function generateMetadata({ params }: BuildingPageProps) {
  const { slug } = await params;
  const building = buildings.find((item) => item.slug === slug);

  if (!building) {
    return createMetadata({
      title: "Building guide not found",
      description: "This Port Moody building guide is not available.",
      path: `/buildings/${slug}`,
    });
  }

  const isPreview = building.guideStatus !== "guide-live";

  return createMetadata(
    {
      title: `${building.name} Port Moody Building Guide Preview`,
      description: `${building.name} building guide preview for Port Moody buyers and sellers, including location context, buyer notes, seller notes, and verification prompts.`,
      path: `/buildings/${building.slug}`,
    },
    { robots: { index: !isPreview, follow: true } }
  );
}

export default async function BuildingPage({ params }: BuildingPageProps) {
  const { slug } = await params;
  const building = buildings.find((item) => item.slug === slug);

  if (!building || (building.guideStatus !== "preview" && building.guideStatus !== "guide-live")) {
    notFound();
  }

  return <BuildingGuidePreviewTemplate building={building} />;
}
