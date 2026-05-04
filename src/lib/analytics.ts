"use client";

type EventPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function track(eventName: string, payload: EventPayload = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, payload);
}

export function trackPageView(path: string) {
  track("page_view", { page_path: path });
}

export function trackCTA(label: string, location: string) {
  track("cta_click", { label, location });
}

export function trackFormStart(formType: string) {
  track("form_start", { form_type: formType });
}

export function trackFormSubmit(formType: string) {
  track("form_submit", { form_type: formType });
}

export function trackDownload(resource: string) {
  track("resource_download", { resource });
}
