export type MapPointKind = "neighbourhood" | "complex" | "building";

export type MapPoint = {
  id: string;
  label: string;
  kind: MapPointKind;
  latitude: number;
  longitude: number;
  isApproximate: boolean;
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
};

export type MapConfig = PortMoodyMapProps & { styleUrl: string };
