"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapLegend } from "./MapLegend";
import { buildPopupHTML } from "./MapMarkerPopup";
import type { MapConfig } from "@/components/maps/mapTypes";

function createNeighbourhoodMarker(label: string): HTMLDivElement {
  const el = document.createElement("div");
  el.style.cssText = [
    "display:inline-flex",
    "align-items:center",
    "padding:4px 10px",
    "background:rgba(18,48,47,0.10)",
    "border:1px solid rgba(18,48,47,0.35)",
    "border-radius:4px",
    "font-size:11px",
    "font-weight:700",
    "font-family:system-ui,-apple-system,sans-serif",
    "color:#12302F",
    "white-space:nowrap",
    "cursor:pointer",
    "user-select:none",
    "transition:opacity 0.15s,transform 0.15s",
    "box-shadow:0 1px 3px rgba(0,0,0,0.10)",
    "line-height:1.4",
  ].join(";");
  el.textContent = label;
  return el;
}

function createComplexMarker(label: string): HTMLDivElement {
  const el = document.createElement("div");
  el.style.cssText =
    "display:flex;flex-direction:column;align-items:center;cursor:pointer;gap:3px;transition:opacity 0.15s,transform 0.15s";

  const dot = document.createElement("div");
  dot.style.cssText =
    "width:10px;height:10px;border-radius:50%;background:#1F4A3D;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3);flex-shrink:0";

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
  ].join(";");
  nameEl.textContent = label;

  el.appendChild(dot);
  el.appendChild(nameEl);
  return el;
}

function createBuildingMarker(): HTMLDivElement {
  const el = document.createElement("div");
  el.style.cssText =
    "width:8px;height:8px;border-radius:50%;background:#7FAEA3;border:1.5px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.25);cursor:pointer;transition:opacity 0.15s,transform 0.15s";
  return el;
}

export function InteractiveMap(config: MapConfig) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const { points, initialCenter, initialZoom, showLegend, styleUrl, className } = config;

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

    map.on("load", () => {
      points.forEach((point) => {
        let markerEl: HTMLDivElement;

        if (point.kind === "neighbourhood") {
          markerEl = createNeighbourhoodMarker(point.label);
          markerEl.setAttribute("role", "button");
          markerEl.setAttribute("aria-label", `${point.label} neighbourhood area`);
        } else if (point.kind === "complex") {
          markerEl = createComplexMarker(point.label);
          markerEl.setAttribute("role", "button");
          markerEl.setAttribute("aria-label", `${point.label} complex marker`);
        } else {
          markerEl = createBuildingMarker();
          markerEl.setAttribute("role", "button");
          markerEl.setAttribute("aria-label", `${point.label} building marker`);
        }

        markerEl.addEventListener("mouseenter", () => {
          markerEl.style.opacity = "0.8";
          markerEl.style.transform = "scale(1.08)";
        });
        markerEl.addEventListener("mouseleave", () => {
          markerEl.style.opacity = "1";
          markerEl.style.transform = "scale(1)";
        });

        const popup = new maplibregl.Popup({ offset: 12, maxWidth: "260px" }).setHTML(
          buildPopupHTML(point)
        );

        const anchor = point.kind === "neighbourhood" ? "bottom" : "center";

        new maplibregl.Marker({ element: markerEl, anchor })
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

      map.addControl(
        new maplibregl.AttributionControl({
          customAttribution: "Map locations are approximate and intended for orientation.",
        })
      );
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
      <div ref={containerRef} className="w-full min-h-80" />
      {showLegend && <MapLegend points={points} />}
    </div>
  );
}
