import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getContent, saveContent } from "@/lib/store";
import type { Locale, SiteContent } from "@/shared/types/types";

function parseLocale(value: string | null): Locale {
  return value === "ar" ? "ar" : "en";
}

function looksLikeSiteContent(value: unknown): value is SiteContent {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<SiteContent>;
  return Boolean(item.meta && item.hero && item.solutions && item.industries && item.caseStudy && item.method && item.products && item.blogs);
}

export async function GET(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  const url = new URL(request.url);
  const locale = parseLocale(url.searchParams.get("locale"));
  try {
    const content = await getContent(locale);
    return NextResponse.json({ ok: true, locale, content });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Could not load content" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  try {
    const body = (await request.json()) as { locale?: Locale; content?: unknown };
    const locale = parseLocale(body.locale || "en");
    if (!looksLikeSiteContent(body.content)) {
      return NextResponse.json({ ok: false, error: "Content payload is incomplete." }, { status: 422 });
    }
    const result = await saveContent(locale, body.content);
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Could not publish content" }, { status: 500 });
  }
}
