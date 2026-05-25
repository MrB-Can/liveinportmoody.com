export type ListingSearchMode =
  | "none"
  | "fallback"
  | "gvr_area_search"
  | "gvr_address_search"
  | "saved_search_url"
  | "vendor_idx_url"
  | "manual_link";

export type ListingModuleContext = "neighbourhood" | "building" | "complex";

export type ListingModuleCta = {
  label: string;
  href: string;
};

export type ListingModuleLeadMetadata = {
  intent: string;
  pagePath: string;
  areaName?: string;
  neighbourhoodName?: string;
  buildingName?: string;
  complexName?: string;
  address?: string;
  tags: string[];
};

export type ListingModuleConfig = {
  id: string;
  contextType: ListingModuleContext;
  displayName: string;
  listingSearchMode: ListingSearchMode;
  listingUrl?: string;
  addressSearchUrl?: string;
  fallbackCta: ListingModuleCta;
  disclosure: string;
  leadMetadata: ListingModuleLeadMetadata;
  provider?: "gvr" | "vendor" | "manual";
  lastVerifiedAt?: string;
  verifiedBy?: string;
  notes?: string;
};
