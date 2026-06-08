"use client";

import { clarityEvent, claritySet, clarityIdentify, clarityUpgrade } from "@/lib/clarity";
import { getAttribution } from "@/lib/attribution";
import { flattenAttribution, type LeadAttribution } from "@/lib/crm/types";

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

function currentPath() {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

function pageType(path: string) {
  return path.split("/").filter(Boolean)[0] || "home";
}

// GA4-appropriate attribution subset: low/medium-cardinality fields only.
// High-cardinality ids (visitor/session/click ids) are intentionally excluded
// from GA4 events - they belong on the GHL contact record, not GA4 dimensions.
const ga4AttributionKeys = [
  "first_utm_source",
  "first_utm_medium",
  "first_utm_campaign",
  "last_utm_source",
  "last_utm_medium",
  "last_utm_campaign",
  "first_landing_page",
  "last_landing_page",
  "first_referrer",
  "last_referrer",
];

function ga4Attribution(): EventPayload {
  const flat = flattenAttribution(getAttribution() as LeadAttribution);
  const out: EventPayload = {};
  for (const key of ga4AttributionKeys) {
    if (flat[key]) out[key] = flat[key];
  }
  return out;
}

function pageContext(): EventPayload {
  const path = currentPath();
  return { page_path: path, page_type: pageType(path) };
}

// Specific Key Events emitted alongside the generic `form_submit`, so reporting
// can be done per business action. Register the right ones as Key Events in GA4.
const keyEventByForm: Record<string, string> = {
  "home-evaluation": "home_valuation_submit",
  "home-value": "home_valuation_submit",
  "complex-value-opinion": "home_valuation_submit",
  "buyer-shortlist": "buyer_inquiry_submit",
  "relocation-guide": "relocation_inquiry_submit",
  "ask-question": "contact_form_submit",
  "complex-inquiry": "contact_form_submit",
  "market-notes": "market_update_submit",
  "newsletter-signup": "newsletter_signup",
  "resource-download": "resource_download_submit",
  "nominate-a-business": "community_submit",
  "suggest-event": "community_submit",
  "suggest-local-life": "community_submit",
};

export function trackPageView(path: string) {
  track("page_view", { page_path: path });
}

export function trackCTA(label: string, location: string) {
  track("cta_click", { cta_label: label, cta_location: location, ...pageContext() });
  clarityEvent("cta_click");
  claritySet("cta_label", label);
}

export function trackFormStart(formType: string) {
  track("form_start", { form_type: formType, ...pageContext() });
  clarityEvent("form_start");
  claritySet("form_type", formType);
}

export function trackFormSubmit(formType: string) {
  const params: EventPayload = { form_type: formType, ...pageContext(), ...ga4Attribution() };
  track("form_submit", params);
  const keyEvent = keyEventByForm[formType];
  if (keyEvent) track(keyEvent, params);

  clarityEvent("form_submit");
  claritySet("lead", "true");
  clarityIdentify(`lead-${formType}-${Date.now()}`, `Lead: ${formType}`);
  clarityUpgrade("lead_submit");
}

export function trackDownload(resource: string) {
  track("resource_download", { download_resource: resource, ...pageContext() });
  clarityEvent("resource_download");
  claritySet("download", resource);
}

export function trackCall(location: string) {
  track("click_call", { cta_location: location, ...pageContext() });
  clarityEvent("click_call");
}

export function trackEmail(location: string) {
  track("click_email", { cta_location: location, ...pageContext() });
  clarityEvent("click_email");
}
