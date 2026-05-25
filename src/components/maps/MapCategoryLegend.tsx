"use client";

import type { MapPoint } from "@/components/maps/mapTypes";

const CATEGORY_META = [
  {
    key: "residential",
    label: "Residential / hillside",
    bg: "rgba(18,48,47,0.10)",
    border: "rgba(18,48,47,0.35)",
    text: "#12302F",
  },
  {
    key: "village",
    label: "Village / walkable centre",
    bg: "rgba(30,84,145,0.10)",
    border: "rgba(30,84,145,0.38)",
    text: "#1E5491",
  },
  {
    key: "waterfront",
    label: "Waterfront / north shore",
    bg: "rgba(14,94,106,0.10)",
    border: "rgba(14,94,106,0.38)",
    text: "#0E5E6A",
  },
  {
    key: "nearby",
    label: "Nearby community",
    bg: "rgba(100,70,0,0.08)",
    border: "rgba(100,70,0,0.30)",
    text: "#644600",
  },
] as const;

type Props = { points: MapPoint[] };

export function MapCategoryLegend({ points }: Props) {
  const presentCategories = new Set(points.map((p) => p.category).filter(Boolean));
  const hasGuide = points.some((p) => p.hasGuide);
  const visibleCategories = CATEGORY_META.filter((c) => presentCategories.has(c.key));

  if (visibleCategories.length === 0) return null;

  return (
    <div className="pointer-events-auto absolute bottom-8 left-3 z-10 rounded-lg bg-white/92 px-3 py-2.5 shadow-md backdrop-blur-sm">
      <p
        style={{
          fontSize: "9px",
          textTransform: "uppercase",
          letterSpacing: "0.07em",
          color: "#6b7280",
          fontWeight: 600,
          marginBottom: "7px",
        }}
      >
        Area types
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {visibleCategories.map((cat) => (
          <div key={cat.key} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <div
              style={{
                background: cat.bg,
                border: `1px solid ${cat.border}`,
                borderRadius: "3px",
                padding: "1px 7px",
                fontSize: "9px",
                fontWeight: 600,
                color: cat.text,
                whiteSpace: "nowrap",
                minWidth: "30px",
                textAlign: "center",
              }}
            >
              Area
            </div>
            <span style={{ fontSize: "11px", color: "#4e5a57", whiteSpace: "nowrap" }}>
              {cat.label}
            </span>
          </div>
        ))}
        {hasGuide && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "5px",
              marginTop: "1px",
            }}
          >
            <div
              style={{
                background: "rgba(18,48,47,0.20)",
                border: "1.5px solid rgba(18,48,47,0.60)",
                borderRadius: "3px",
                padding: "1px 7px",
                fontSize: "9px",
                fontWeight: 700,
                color: "#12302F",
                whiteSpace: "nowrap",
                minWidth: "30px",
                textAlign: "center",
              }}
            >
              Area
            </div>
            <span style={{ fontSize: "11px", color: "#4e5a57", whiteSpace: "nowrap" }}>
              Guide live
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
