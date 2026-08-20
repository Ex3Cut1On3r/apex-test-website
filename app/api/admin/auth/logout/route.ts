import { NextResponse } from "next/server";
import { clearAdminSession } from "@/shared/admin/lib/auth";

export async function POST() {
  await clearAdminSession();
  return NextResponse.json({ ok: true });
}
