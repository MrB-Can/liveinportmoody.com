import type { MetadataRoute } from "next";
import { phaseOneRoutes, siteConfig } from "@/lib/site";
import { buildings } from "@/data/buildings";
import { complexes } from "@/data/complexes";
import { neighbourhoodGuides } from "@/data/neighbourhoodGuides";

export default function sitemap(): MetadataRoute.Sitemap {
  const phaseOneEntries: MetadataRoute.Sitemap = phaseOneRoutes.map((route) => {
    const changeFrequency: "weekly" | "monthly" = route === "/" ? "weekly" : "monthly";
    return {
      url: new URL(route, siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency,
      priority: route === "/" ? 1 : 0.7,
    };
  });

  const neighbourhoodEntries: MetadataRoute.Sitemap = neighbourhoodGuides
    .filter((guide) => guide.status === "published")
    .map((guide) => ({
      url: new URL(`/neighbourhoods/${guide.slug}`, siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const buildingEntries: MetadataRoute.Sitemap = buildings
    .filter((building) => building.guideStatus === "guide-live")
    .map((building) => ({
      url: new URL(`/buildings/${building.slug}`, siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const complexEntries: MetadataRoute.Sitemap = complexes
    .filter((complex) => complex.guideStatusLabel === "Guide live" && complex.detailPageUrl)
    .map((complex) => ({
      url: new URL(complex.detailPageUrl as string, siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...phaseOneEntries, ...neighbourhoodEntries, ...buildingEntries, ...complexEntries];
}
