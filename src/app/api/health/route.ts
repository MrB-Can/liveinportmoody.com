import { NextResponse } from "next/server";
import { getCRMAdapter } from "@/lib/crm";

// GET-able liveness check for the lead pipeline's config, for monitors that
// can't send the POST /api/lead requires. Constructing the adapter validates
// required env vars (e.g. GHL_LOCATION_ID) without making any network calls
// or creating a real lead/contact.
export async function GET() {
  try {
    getCRMAdapter();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, message: "CRM adapter misconfigured." }, { status: 503 });
  }
}
