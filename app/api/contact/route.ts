import { NextResponse } from "next/server";

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const lead = {
    name: clean(body.name, 80),
    email: clean(body.email, 160),
    company: clean(body.company, 120),
    message: clean(body.message, 2000),
    submittedAt: new Date().toISOString(),
  };

  if (lead.name.length < 2 || !/^\S+@\S+\.\S+$/.test(lead.email) || lead.message.length < 10) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 422 });
  }

  const webhookUrl = process.env.APEX_CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
    } catch (error) {
      console.error("APEX contact webhook failed:", error);
      return NextResponse.json({ error: "Could not send the request right now." }, { status: 502 });
    }
  } else {
    console.log("APEX contact request (preview mode):", lead);
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
