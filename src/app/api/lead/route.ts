import { NextResponse } from "next/server";
import { getCRMAdapter } from "@/lib/crm";
import { leadInputSchema } from "@/lib/crm/types";

const intentTagMap = {
  buyer: "intent:buyer",
  seller: "intent:seller",
  relocation: "intent:relocation",
  "market-update": "intent:market-update",
  "local-question": "intent:local-question",
  resource: "intent:local-question",
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = leadInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const input = parsed.data;

  if (input.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const tags = Array.from(
    new Set([
      "source:liveinportmoody",
      intentTagMap[input.leadType],
      "engagement:form-submit",
      `form:${input.formType}`,
      ...(input.tags || []),
    ]),
  );

  try {
    const crm = getCRMAdapter();
    const { contactId } = await crm.upsertContact({ ...input, tags });
    const { opportunityId } = await crm.createOrUpdateOpportunity({ ...input, tags, contactId });
    await crm.applyTags(contactId, tags);

    return NextResponse.json({ ok: true, contactId, opportunityId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, message: "Lead submission failed." }, { status: 500 });
  }
}
