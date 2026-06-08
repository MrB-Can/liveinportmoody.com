"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { trackPageView } from "@/lib/analytics";
import { getAttribution, updateAttribution } from "@/lib/attribution";
import { claritySet } from "@/lib/clarity";

function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const query = searchParams?.toString() || "";
    const path = query ? `${pathname}?${query}` : pathname;
    updateAttribution();
    trackPageView(path);

    // Clarity segmentation tags so recordings/heatmaps are filterable.
    claritySet("page_path", path);
    claritySet("page_type", pathname.split("/").filter(Boolean)[0] || "home");
    const attribution = getAttribution();
    claritySet("utm_source", attribution.lastUtmSource || attribution.firstUtmSource || "");
    claritySet("utm_medium", attribution.lastUtmMedium || attribution.firstUtmMedium || "");
    claritySet("utm_campaign", attribution.lastUtmCampaign || attribution.firstUtmCampaign || "");
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsProvider() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
}
