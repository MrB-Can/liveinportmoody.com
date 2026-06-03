import { MapPin } from "lucide-react";

type MapPlaceholderHeight = "sm" | "md";

type MapPlaceholderProps = {
  label?: string;
  height?: MapPlaceholderHeight;
};

const heights: Record<MapPlaceholderHeight, string> = {
  sm: "h-40",
  md: "h-64",
};

export function MapPlaceholder({ label = "Map orientation", height = "md" }: MapPlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border border-softBorder bg-gradient-to-br from-mist to-seaGlass/10 ${heights[height]}`}
      aria-label="Map orientation"
      role="img"
    >
      <MapPin className="h-8 w-8 text-seaGlass" />
      <p className="text-sm font-medium text-slateText">{label}</p>
    </div>
  );
}
