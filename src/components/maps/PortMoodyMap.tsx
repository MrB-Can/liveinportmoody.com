import { MapFallback } from "./MapFallback";
import { MapClient } from "./MapClient";
import type { PortMoodyMapProps } from "@/components/maps/mapTypes";

function resolveStyleUrl(): string | null {
  if (process.env.NEXT_PUBLIC_INTERACTIVE_MAPS_ENABLED !== "true") {
    return null;
  }

  const provider = process.env.NEXT_PUBLIC_MAP_PROVIDER ?? "mapbox";

  if (provider === "mapbox") {
    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!token) return null;
    return `https://api.mapbox.com/styles/v1/mapbox/streets-v12?access_token=${token}`;
  }

  if (provider === "maplibre") {
    const styleUrl = process.env.NEXT_PUBLIC_MAP_STYLE_URL;
    return styleUrl || null;
  }

  return null;
}

export function PortMoodyMap(props: PortMoodyMapProps) {
  const styleUrl = resolveStyleUrl();

  if (!styleUrl) {
    return <MapFallback />;
  }

  return <MapClient {...props} styleUrl={styleUrl} />;
}
