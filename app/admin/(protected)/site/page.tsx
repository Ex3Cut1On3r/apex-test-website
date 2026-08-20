import ContentEditor from "@/shared/admin/components/ap_content_editor";
import { getContent } from "@/shared/admin/lib/store";

const allowed = new Set(["meta", "hero", "about", "solutions", "industries", "caseStudy", "method", "footer"]);

export default async function SiteEditorPage({ searchParams }: { searchParams: Promise<{ section?: string }> }) {
  const params = await searchParams;
  const initialSection = allowed.has(params.section || "") ? params.section as "meta" | "hero" | "about" | "solutions" | "industries" | "caseStudy" | "method" | "footer" : "hero";
  const [en, ar] = await Promise.all([getContent("en"), getContent("ar")]);
  return <ContentEditor initialEn={en} initialAr={ar} mode="site" initialSection={initialSection} />;
}
