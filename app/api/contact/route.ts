import { NextResponse } from "next/server";

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(data.name, 80);
  const email = clean(data.email, 160);
  const company = clean(data.company, 120);
  const message = clean(data.message, 2000);

  if (name.length < 2 || message.length < 10 || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please complete the required fields with valid information." }, { status: 422 });
  }

  const lead = { name, email, company, message, submittedAt: new Date().toISOString() };
  const webhook = process.env.APEX_CONTACT_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
    } catch {
      return NextResponse.json({ error: "The contact service is temporarily unavailable. Please try again." }, { status: 502 });
    }
  } else {
    console.log("APEX contact lead (preview mode):", lead);
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
