import { NextResponse } from "next/server";
import { getAdminSession } from "@/shared/admin/lib/auth";
import { uploadMedia } from "@/shared/admin/lib/store";

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  try {
    const data = await request.formData();
    const file = data.get("file");
    if (!(file instanceof File)) return NextResponse.json({ ok: false, error: "No file was provided." }, { status: 400 });
    const result = await uploadMedia(file);
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Upload failed" }, { status: 500 });
  }
}
