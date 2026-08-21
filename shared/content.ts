import type { Locale, SiteContent, CmsEnvelope } from "@/shared/types";
import en from "./en.json";
import ar from "./ar.json";

const fallbackContent: Record<Locale, SiteContent> = {
  en: en as unknown as SiteContent,
  ar: ar as unknown as SiteContent,
};

export function normalizeLocale(value?: string | null): Locale {
  return value?.toLowerCase() === "ar" ? "ar" : "en";
}

export function getContent(locale: Locale = "en"): SiteContent {
  return fallbackContent[locale] ?? fallbackContent.en;
}

export async function getCmsContent(locale: Locale = "en"): Promise<CmsEnvelope<SiteContent>> {
  // CMS integration point:
  // 1. Read your CMS URL/token from environment variables.
  // 2. Fetch typed content here.
  // 3. Validate/normalize it.
  // 4. Return CMS data when available.
  // Until then, production-safe fallback JSON keeps the website deterministic.
  return {
    data: getContent(locale),
    locale,
    source: "fallback-json",
  };
}
