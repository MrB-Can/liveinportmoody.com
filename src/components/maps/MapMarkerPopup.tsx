import type { MapPoint } from "@/components/maps/mapTypes";

export function buildPopupHTML(point: MapPoint): string {
  const kindLabel = {
    neighbourhood: "Neighbourhood",
    complex: "Complex",
    building: "Building",
  }[point.kind];

  let html = `<div style="min-width:180px;max-width:240px;font-family:system-ui,-apple-system,sans-serif;font-size:13px;line-height:1.45;color:#1a1a1a;">`;

  html += `<div style="display:inline-block;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#4e5a57;background:#f3f5f4;border:1px solid #d4dbd9;border-radius:3px;padding:2px 6px;margin-bottom:7px;">${kindLabel}</div>`;

  html += `<div style="font-size:14px;font-weight:700;color:#12302F;margin-bottom:7px;line-height:1.2;">${point.label}</div>`;

  if (point.fitSummary) {
    html += `<p style="margin:0 0 5px;color:#374151;font-size:12px;">${point.fitSummary}</p>`;
  } else if (point.description) {
    html += `<p style="margin:0 0 5px;color:#374151;font-size:12px;">${point.description}</p>`;
  }

  if (point.housingType) {
    html += `<p style="margin:0 0 3px;color:#6b7280;font-size:11px;"><strong style="color:#4e5a57;">Housing:</strong> ${point.housingType}</p>`;
  }

  if (point.tradeOff) {
    html += `<p style="margin:0 0 7px;color:#6b7280;font-size:11px;"><strong style="color:#4e5a57;">Trade-off:</strong> ${point.tradeOff}</p>`;
  }

  if (point.kind === "neighbourhood" && point.isApproximate) {
    html += `<p style="margin:0 0 8px;font-size:10px;color:#9ca3af;font-style:italic;">Approximate neighbourhood areas for orientation only.</p>`;
  } else if (point.isApproximate) {
    html += `<p style="margin:0 0 8px;font-size:10px;color:#9ca3af;">📍 Approximate location</p>`;
  }

  if (point.href && point.ctaLabel) {
    html += `<a href="${point.href}" style="display:inline-block;padding:5px 10px;background:#12302F;color:white;border-radius:4px;font-size:11px;font-weight:600;text-decoration:none;">${point.ctaLabel} →</a>`;
  }

  html += `</div>`;

  return html;
}
