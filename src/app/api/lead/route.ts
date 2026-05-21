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

// Sliding-window rate limiter — persists within a warm Vercel instance.
// Limit: 3 submissions per IP per 15 minutes.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const ipLog = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const recent = (ipLog.get(ip) ?? []).filter(t => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return true; // limited
  recent.push(now);
  ipLog.set(ip, recent);
  // Prevent unbounded memory growth on sustained traffic
  if (ipLog.size > 20_000) {
    for (const [key, times] of ipLog) {
      if (times.every(t => now - t >= WINDOW_MS)) ipLog.delete(key);
    }
  }
  return false;
}

function getClientIP(request: Request): string {
  return (
    (request.headers as Headers).get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

export async function POST(request: Request) {
  const ip = getClientIP(request);
  if (ip !== "unknown" && checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = leadInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
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
    await crm.createOrUpdateOpportunity({ ...input, tags, contactId });
    await crm.applyTags(contactId, tags);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, message: "Lead submission failed." }, { status: 500 });
  }
}
