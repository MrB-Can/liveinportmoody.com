"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapLegend } from "./MapLegend";
import { MapCategoryLegend } from "./MapCategoryLegend";
import { buildPopupHTML } from "./MapMarkerPopup";
import type { MapConfig, MapPoint } from "@/components/maps/mapTypes";

// Root element is owned by MapLibre for transform-based positioning.
// Never set transform on the root — use an inner child for all hover/visual effects.

const CATEGORY_STYLES = {
  residential: {
    bg: "rgba(18,48,47,0.10)",
    border: "rgba(18,48,47,0.35)",
    text: "#12302F",
    bgGuide: "rgba(18,48,47,0.20)",
    borderGuide: "rgba(18,48,47,0.60)",
  },
  village: {
    bg: "rgba(30,84,145,0.10)",
    border: "rgba(30,84,145,0.38)",
    text: "#1E5491",
    bgGuide: "rgba(30,84,145,0.20)",
    borderGuide: "rgba(30,84,145,0.65)",
  },
  waterfront: {
    bg: "rgba(14,94,106,0.10)",
    border: "rgba(14,94,106,0.38)",
    text: "#0E5E6A",
    bgGuide: "rgba(14,94,106,0.20)",
    borderGuide: "rgba(14,94,106,0.65)",
  },
  nearby: {
    bg: "rgba(100,70,0,0.08)",
    border: "rgba(100,70,0,0.30)",
    text: "#644600",
    bgGuide: "rgba(100,70,0,0.16)",
    borderGuide: "rgba(100,70,0,0.55)",
  },
} as const;

const DEFAULT_STYLES = {
  bg: "rgba(18,48,47,0.10)",
  border: "rgba(18,48,47,0.35)",
  text: "#12302F",
  bgGuide: "rgba(18,48,47,0.20)",
  borderGuide: "rgba(18,48,47,0.60)",
};

function createNeighbourhoodMarker(point: MapPoint): HTMLDivElement {
  const styles = point.category ? CATEGORY_STYLES[point.category] : DEFAULT_STYLES;
  const bg = point.hasGuide ? styles.bgGuide : styles.bg;
  const border = point.hasGuide ? styles.borderGuide : styles.border;
  const borderWidth = point.hasGuide ? "1.5px" : "1px";

  const root = document.createElement("div");
  root.style.cssText = "cursor:pointer";

  const inner = document.createElement("div");
  inner.style.cssText = [
    "display:inline-flex",
    "align-items:center",
    "padding:4px 10px",
    `background:${bg}`,
    `border:${borderWidth} solid ${border}`,
    "border-radius:4px",
    "font-size:11px",
    "font-weight:700",
    "font-family:system-ui,-apple-system,sans-serif",
    `color:${styles.text}`,
    "white-space:nowrap",
    "user-select:none",
    "transition:opacity 0.15s,box-shadow 0.15s",
    "box-shadow:0 1px 3px rgba(0,0,0,0.10)",
    "line-height:1.4",
  ].join(";");
  inner.textContent = point.label;

  root.addEventListener("mouseenter", () => {
    inner.style.opacity = "0.75";
    inner.style.boxShadow = `0 2px 6px ${styles.text}40`;
  });
  root.addEventListener("mouseleave", () => {
    inner.style.opacity = "1";
    inner.style.boxShadow = "0 1px 3px rgba(0,0,0,0.10)";
  });

  root.appendChild(inner);
  return root;
}

function createComplexMarker(label: string): HTMLDivElement {
  const root = document.createElement("div");
  root.style.cssText = "display:flex;flex-direction:column;align-items:center;cursor:pointer;gap:3px";

  const dot = document.createElement("div");
  dot.style.cssText = [
    "width:10px",
    "height:10px",
    "border-radius:50%",
    "background:#1F4A3D",
    "border:2px solid white",
    "box-shadow:0 1px 4px rgba(0,0,0,0.3)",
    "flex-shrink:0",
    "transition:box-shadow 0.15s",
  ].join(";");

  const nameEl = document.createElement("div");
  nameEl.style.cssText = [
    "font-size:10px",
    "font-weight:600",
    "font-family:system-ui,-apple-system,sans-serif",
    "color:#1F4A3D",
    "background:rgba(255,255,255,0.88)",
    "padding:1px 5px",
    "border-radius:3px",
    "white-space:nowrap",
    "box-shadow:0 1px 3px rgba(0,0,0,0.15)",
    "line-height:1.5",
    "transition:opacity 0.15s",
  ].join(";");
  nameEl.textContent = label;

  root.addEventListener("mouseenter", () => {
    dot.style.boxShadow = "0 2px 7px rgba(31,74,61,0.45)";
    nameEl.style.opacity = "0.8";
  });
  root.addEventListener("mouseleave", () => {
    dot.style.boxShadow = "0 1px 4px rgba(0,0,0,0.3)";
    nameEl.style.opacity = "1";
  });

  root.appendChild(dot);
  root.appendChild(nameEl);
  return root;
}

function createBuildingMarker(): HTMLDivElement {
  const root = document.createElement("div");
  root.style.cssText = "width:8px;height:8px;cursor:pointer";

  const dot = document.createElement("div");
  dot.style.cssText = [
    "width:8px",
    "height:8px",
    "border-radius:50%",
    "background:#7FAEA3",
    "border:1.5px solid white",
    "box-shadow:0 1px 3px rgba(0,0,0,0.25)",
    "transition:transform 0.15s,opacity 0.15s",
  ].join(";");

  root.addEventListener("mouseenter", () => {
    dot.style.transform = "scale(1.8)";
    dot.style.opacity = "0.85";
  });
  root.addEventListener("mouseleave", () => {
    dot.style.transform = "scale(1)";
    dot.style.opacity = "1";
  });

  root.appendChild(dot);
  return root;
}

export function InteractiveMap(config: MapConfig) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const { points, initialCenter, initialZoom, showLegend, showCategoryLegend, styleUrl, className } = config;

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: styleUrl,
      center: initialCenter || [-122.855, 49.283],
      zoom: initialZoom ?? 11.5,
      attributionControl: false,
    });

    mapRef.current = map;

    const priority2Roots: HTMLDivElement[] = [];

    map.on("load", () => {
      points.forEach((point) => {
        let markerEl: HTMLDivElement;

        if (point.kind === "neighbourhood") {
          markerEl = createNeighbourhoodMarker(point);
          markerEl.setAttribute("role", "button");
          markerEl.setAttribute("aria-label", `${point.label} neighbourhood area`);
          if (point.priority === 2) {
            markerEl.style.display = map.getZoom() >= 12 ? "" : "none";
            priority2Roots.push(markerEl);
          }
        } else if (point.kind === "complex") {
          markerEl = createComplexMarker(point.label);
          markerEl.setAttribute("role", "button");
          markerEl.setAttribute("aria-label", `${point.label} complex marker`);
        } else {
          markerEl = createBuildingMarker();
          markerEl.setAttribute("role", "button");
          markerEl.setAttribute("aria-label", `${point.label} building marker`);
        }

        const popup = new maplibregl.Popup({ offset: 12, maxWidth: "260px" }).setHTML(
          buildPopupHTML(point)
        );

        const anchor = point.kind === "neighbourhood" ? "bottom" : "center";

        new maplibregl.Marker({
          element: markerEl,
          anchor,
          ...(point.labelOffset ? { offset: point.labelOffset } : {}),
        })
          .setLngLat([point.longitude, point.latitude])
          .setPopup(popup)
          .addTo(map);
      });

      if (!initialCenter && points.length > 0) {
        const bounds = new maplibregl.LngLatBounds();
        points.forEach((point) => {
          bounds.extend([point.longitude, point.latitude]);
        });
        map.fitBounds(bounds, { padding: 60 });
      }

      map.addControl(new maplibregl.AttributionControl());
    });

    map.on("zoom", () => {
      const show = map.getZoom() >= 12;
      priority2Roots.forEach((el) => {
        el.style.display = show ? "" : "none";
      });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [points, initialCenter, initialZoom, styleUrl]);

  return (
    <div className={`relative w-full overflow-hidden rounded-lg bg-mist ${className || "min-h-80"}`}>
      <div ref={containerRef} className="w-full h-full min-h-80" />
      {showLegend && <MapLegend points={points} />}
      {showCategoryLegend && <MapCategoryLegend points={points} />}
    </div>
  );
}
