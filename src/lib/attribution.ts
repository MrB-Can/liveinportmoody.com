"use client";

export type AttributionData = {
  firstLandingPage?: string;
  lastLandingPage?: string;
  firstReferrer?: string;
  lastReferrer?: string;
  // First-touch UTMs - how the visitor originally discovered the site.
  firstUtmSource?: string;
  firstUtmMedium?: string;
  firstUtmCampaign?: string;
  firstUtmContent?: string;
  firstUtmTerm?: string;
  // Last-touch UTMs - what brought them back to convert.
  lastUtmSource?: string;
  lastUtmMedium?: string;
  lastUtmCampaign?: string;
  lastUtmContent?: string;
  lastUtmTerm?: string;
  // Ad click identifiers (Google, Meta, Microsoft, TikTok, LinkedIn).
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  msclkid?: string;
  ttclid?: string;
  liFatId?: string;
  visitorId?: string;
  sessionId?: string;
  firstVisitTimestamp?: string;
  lastVisitTimestamp?: string;
  pageCount?: number;
};

const storageKey = "lipm_attribution";

const clickIdParams = {
  gclid: "gclid",
  gbraid: "gbraid",
  wbraid: "wbraid",
  fbclid: "fbclid",
  msclkid: "msclkid",
  ttclid: "ttclid",
  liFatId: "li_fat_id",
} as const;

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
  const param = (name: string) => url.searchParams.get(name) || "";

  // Treat the UTM set atomically so first/last touches stay internally consistent
  // (a new tagged visit overwrites the whole last-touch set, never field-by-field).
  const currentUtm = {
    Source: param("utm_source"),
    Medium: param("utm_medium"),
    Campaign: param("utm_campaign"),
    Content: param("utm_content"),
    Term: param("utm_term"),
  };
  const hasCurrentUtm = Object.values(currentUtm).some(Boolean);
  const hasFirstUtm = Boolean(
    existing.firstUtmSource ||
      existing.firstUtmMedium ||
      existing.firstUtmCampaign ||
      existing.firstUtmContent ||
      existing.firstUtmTerm,
  );

  const firstUtm =
    !hasFirstUtm && hasCurrentUtm
      ? {
          firstUtmSource: currentUtm.Source,
          firstUtmMedium: currentUtm.Medium,
          firstUtmCampaign: currentUtm.Campaign,
          firstUtmContent: currentUtm.Content,
          firstUtmTerm: currentUtm.Term,
        }
      : {
          firstUtmSource: existing.firstUtmSource || "",
          firstUtmMedium: existing.firstUtmMedium || "",
          firstUtmCampaign: existing.firstUtmCampaign || "",
          firstUtmContent: existing.firstUtmContent || "",
          firstUtmTerm: existing.firstUtmTerm || "",
        };

  const lastUtm = hasCurrentUtm
    ? {
        lastUtmSource: currentUtm.Source,
        lastUtmMedium: currentUtm.Medium,
        lastUtmCampaign: currentUtm.Campaign,
        lastUtmContent: currentUtm.Content,
        lastUtmTerm: currentUtm.Term,
      }
    : {
        lastUtmSource: existing.lastUtmSource || "",
        lastUtmMedium: existing.lastUtmMedium || "",
        lastUtmCampaign: existing.lastUtmCampaign || "",
        lastUtmContent: existing.lastUtmContent || "",
        lastUtmTerm: existing.lastUtmTerm || "",
      };

  // Click IDs: keep the most recent non-empty value (matches the conversion window).
  const clickIds: Partial<AttributionData> = {};
  for (const [field, paramName] of Object.entries(clickIdParams)) {
    const key = field as keyof typeof clickIdParams;
    clickIds[key] = param(paramName) || existing[key] || "";
  }

  const updated: AttributionData = {
    ...existing,
    firstLandingPage: existing.firstLandingPage || currentPath,
    lastLandingPage: currentPath,
    firstReferrer: existing.firstReferrer || document.referrer || "",
    lastReferrer: document.referrer || "",
    ...firstUtm,
    ...lastUtm,
    ...clickIds,
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
