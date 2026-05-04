"use client";

export type AttributionData = {
  firstLandingPage?: string;
  lastLandingPage?: string;
  firstReferrer?: string;
  lastReferrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  visitorId?: string;
  sessionId?: string;
  firstVisitTimestamp?: string;
  lastVisitTimestamp?: string;
  pageCount?: number;
};

const storageKey = "lipm_attribution";

function createId(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2)}_${Date.now().toString(36)}`;
}

function readAttribution(): AttributionData {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey) || "{}") as AttributionData;
  } catch {
    return {};
  }
}

export function updateAttribution() {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  const existing = readAttribution();
  const now = new Date().toISOString();
  const currentPath = `${url.pathname}${url.search}`;
  const updated: AttributionData = {
    ...existing,
    firstLandingPage: existing.firstLandingPage || currentPath,
    lastLandingPage: currentPath,
    firstReferrer: existing.firstReferrer || document.referrer || "",
    lastReferrer: document.referrer || "",
    utmSource: url.searchParams.get("utm_source") || existing.utmSource || "",
    utmMedium: url.searchParams.get("utm_medium") || existing.utmMedium || "",
    utmCampaign: url.searchParams.get("utm_campaign") || existing.utmCampaign || "",
    utmContent: url.searchParams.get("utm_content") || existing.utmContent || "",
    utmTerm: url.searchParams.get("utm_term") || existing.utmTerm || "",
    visitorId: existing.visitorId || createId("visitor"),
    sessionId: window.sessionStorage.getItem("lipm_session_id") || createId("session"),
    firstVisitTimestamp: existing.firstVisitTimestamp || now,
    lastVisitTimestamp: now,
    pageCount: (existing.pageCount || 0) + 1,
  };

  window.sessionStorage.setItem("lipm_session_id", updated.sessionId || "");
  window.localStorage.setItem(storageKey, JSON.stringify(updated));
}

export function getAttribution(): AttributionData {
  if (typeof window === "undefined") return {};
  return readAttribution();
}
