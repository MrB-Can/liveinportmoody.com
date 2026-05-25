export type MapPointKind = "neighbourhood" | "complex" | "building";
export type MapCategory = "residential" | "village" | "waterfront" | "nearby";

export type MapPoint = {
  id: string;
  label: string;
  kind: MapPointKind;
  latitude: number;
  longitude: number;
  isApproximate: boolean;
  priority?: 1 | 2 | 3;
  category?: MapCategory;
  labelOffset?: [number, number];
  hasGuide?: boolean;
  fitSummary?: string;
  housingType?: string;
  tradeOff?: string;
  description?: string;
  href?: string;
  ctaLabel?: string;
};

export type PortMoodyMapProps = {
  points: MapPoint[];
  title?: string;
  description?: string;
  initialCenter?: [number, number]; // [lng, lat]
  initialZoom?: number;
  className?: string;
  showLegend?: boolean;
  showCategoryLegend?: boolean;
};

export type MapConfig = PortMoodyMapProps & { styleUrl: string };
