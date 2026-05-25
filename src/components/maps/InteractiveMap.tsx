"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapLegend } from "./MapLegend";
import { buildPopupHTML } from "./MapMarkerPopup";
import type { MapConfig } from "@/components/maps/mapTypes";

export function InteractiveMap(config: MapConfig) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const { points, initialCenter, initialZoom, showLegend, styleUrl, className } = config;

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: styleUrl,
      center: initialCenter || [-122.82, 49.32],
      zoom: initialZoom ?? 12,
    });

    mapRef.current = map;

    map.on("load", () => {
      // Create markers for each point
      const markerElements = new Map<
        string,
        { element: HTMLElement; popup: maplibregl.Popup }
      >();

      points.forEach((point) => {
        const markerEl = document.createElement("div");
        markerEl.className =
          "w-3 h-3 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-150 transition-transform";

        const color = {
          neighbourhood: "#12302F",
          complex: "#1F4A3D",
          building: "#7FAEA3",
        }[point.kind];

        markerEl.style.backgroundColor = color;
        markerEl.setAttribute("role", "button");
        markerEl.setAttribute("aria-label", `${point.label} marker`);

        const popup = new maplibregl.Popup({ offset: 25 }).setHTML(
          buildPopupHTML(point)
        );

        new maplibregl.Marker({ element: markerEl })
          .setLngLat([point.longitude, point.latitude])
          .setPopup(popup)
          .addTo(map);

        markerElements.set(point.id, { element: markerEl, popup });

        markerEl.addEventListener("click", () => {
          popup.addTo(map);
        });
      });

      // Auto-fit bounds if no initial center provided
      if (!initialCenter && points.length > 0) {
        const bounds = new maplibregl.LngLatBounds();
        points.forEach((point) => {
          bounds.extend([point.longitude, point.latitude]);
        });
        map.fitBounds(bounds, { padding: 50 });
      }

      // Add custom attribution
      map.addControl(new maplibregl.AttributionControl());
      const attribution = document.querySelector(".maplibregl-attribution-list");
      if (attribution) {
        const customAttr = document.createElement("li");
        customAttr.innerHTML =
          "Map locations are approximate and intended for orientation.";
        attribution.appendChild(customAttr);
      }
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [points, initialCenter, initialZoom, styleUrl]);

  return (
    <div className={`relative w-full overflow-hidden rounded-lg bg-mist ${className || 'min-h-80'}`}>
      <div ref={containerRef} className="w-full min-h-80" />
      {showLegend && <MapLegend points={points} />}
    </div>
  );
}
