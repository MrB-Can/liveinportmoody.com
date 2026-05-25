import type { MetadataRoute } from "next";
import { phaseOneRoutes, siteConfig } from "@/lib/site";
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

  return [...phaseOneEntries, ...neighbourhoodEntries];
}
