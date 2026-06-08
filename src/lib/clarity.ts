"use client";

// Thin wrapper around the Microsoft Clarity tag (loaded in src/app/layout.tsx).
// window.clarity queues calls until the tag finishes loading, so calls made
// early in the page lifecycle are safe and are flushed once Clarity is ready.

type ClarityFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    clarity?: ClarityFn;
  }
}

function clarity(...args: unknown[]) {
  if (typeof window === "undefined" || typeof window.clarity !== "function") return;
  window.clarity(...args);
}

// Custom event - surfaces under Filters → Events and can back dashboard Goals.
export function clarityEvent(name: string) {
  clarity("event", name);
}

// Segmentation tag - surfaces under Filters → Custom tags for slicing recordings/heatmaps.
export function claritySet(key: string, value: string | string[]) {
  if (value === "" || value == null) return;
  clarity("set", key, value);
}

// Associate the session with a (non-PII) identifier so leads can be found later.
export function clarityIdentify(customId: string, friendlyName?: string) {
  if (!customId) return;
  clarity("identify", customId, undefined, undefined, friendlyName);
}

// Prioritize recording of a high-value session so it is never sampled out.
export function clarityUpgrade(reason: string) {
  clarity("upgrade", reason);
}
