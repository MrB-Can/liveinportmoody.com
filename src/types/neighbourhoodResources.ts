export type ResourceVerificationStatus =
  | "verified"
  | "needs_address_check"
  | "general_context"
  | "do_not_publish";

export type ExternalResourceCategory =
  | "school_district"
  | "municipal_parks"
  | "regional_parks"
  | "transit"
  | "trail_platform"
  | "municipal_general"
  | "recreation";

export type ExternalResourceLink = {
  id: string;
  label: string;
  url: string;
  sourceName: string;
  category: ExternalResourceCategory;
  description?: string;
  lastVerifiedAt?: string;
  verificationStatus: ResourceVerificationStatus;
  notes?: string;
};

export type SchoolLevel = "elementary" | "middle" | "secondary" | "program" | "district";

export type SchoolVerification = {
  id: string;
  schoolName: string;
  schoolLevel: SchoolLevel;
  municipality: string;
  schoolVerificationUrl: string;
  catchmentClaimLevel: "none" | "general_area" | "address_verified";
  lastVerifiedAt?: string;
  verificationStatus: ResourceVerificationStatus;
  verificationNote: string;
};

export type ParkResourceType =
  | "park"
  | "trail"
  | "playground"
  | "waterfront"
  | "dog_walking"
  | "recreation";

export type ParkResource = {
  id: string;
  name: string;
  municipality: string;
  resourceTypes: ParkResourceType[];
  officialUrl: string;
  amenitiesVerified: boolean;
  amenityNotes?: string;
  lastVerifiedAt?: string;
  verificationStatus: ResourceVerificationStatus;
  verificationNote: string;
};

export type TrailResource = {
  id: string;
  name: string;
  municipality: string;
  resourceTypes: ParkResourceType[];
  officialUrl?: string;
  trailforksUrl?: string;
  statusSourceUrl?: string;
  allowWidget: boolean;
  copyRestrictions: string[];
  lastVerifiedAt?: string;
  verificationStatus: ResourceVerificationStatus;
  verificationNote: string;
};
