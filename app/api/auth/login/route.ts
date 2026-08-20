import { NextResponse } from "next/server";
import { checkCredentials, setAdminSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    if (!body.email || !body.password || !checkCredentials(body.email, body.password)) {
      return NextResponse.json({ ok: false, error: "Invalid email or password." }, { status: 401 });
    }
    await setAdminSession(body.email.trim().toLowerCase());
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid sign-in request." }, { status: 400 });
  }
}
