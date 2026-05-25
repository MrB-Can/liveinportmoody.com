"use client";

import type { MapPoint } from "@/components/maps/mapTypes";

const legendItems = [
  { kind: "neighbourhood" as const, label: "Neighbourhoods", color: "#12302F" },
  { kind: "complex" as const, label: "Complexes", color: "#1F4A3D" },
  { kind: "building" as const, label: "Buildings", color: "#7FAEA3" },
];

type MapLegendProps = {
  points: MapPoint[];
};

export function MapLegend({ points }: MapLegendProps) {
  const kinds = new Set(points.map((p) => p.kind));

  // Only show legend if multiple kinds are present
  if (kinds.size <= 1) return null;

  return (
    <div className="pointer-events-auto absolute bottom-4 left-4 z-10 rounded-lg bg-white p-4 shadow-lg">
      <p className="mb-3 text-xs font-semibold text-deepInlet">Map Legend</p>
      <div className="space-y-2">
        {legendItems
          .filter((item) => kinds.has(item.kind))
          .map((item) => (
            <div key={item.kind} className="flex items-center gap-2">
              {item.kind === "neighbourhood" ? (
                <div
                  style={{
                    background: "rgba(18,48,47,0.10)",
                    border: "1px solid rgba(18,48,47,0.35)",
                    borderRadius: "4px",
                    padding: "1px 7px",
                    fontSize: "9px",
                    fontWeight: 600,
                    color: "#12302F",
                    whiteSpace: "nowrap",
                    lineHeight: "1.6",
                  }}
                >
                  Area
                </div>
              ) : (
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              )}
              <span className="text-xs text-slateText">{item.label}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
