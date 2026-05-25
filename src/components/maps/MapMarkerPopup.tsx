import type { MapPoint } from "@/components/maps/mapTypes";

export function buildPopupHTML(point: MapPoint): string {
  const kindLabel = {
    neighbourhood: "Neighbourhood",
    complex: "Complex",
    building: "Building",
  }[point.kind];

  let html = `<div class="maplibregl-popup-content">
    <strong>${kindLabel}</strong>
    <h4 class="font-semibold">${point.label}</h4>`;

  if (point.description) {
    html += `<p class="text-sm text-gray-600">${point.description}</p>`;
  }

  if (point.isApproximate) {
    html += `<p class="text-xs text-gray-500 mt-1">📍 Approximate location</p>`;
  }

  if (point.href && point.ctaLabel) {
    html += `<a href="${point.href}" class="inline-block mt-2 text-sm font-semibold text-deepInlet hover:underline">${point.ctaLabel} →</a>`;
  }

  html += `</div>`;

  return html;
}
