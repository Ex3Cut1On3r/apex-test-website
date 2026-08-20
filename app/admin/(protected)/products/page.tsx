import ContentEditor from "@/shared/admin/components/ap_content_editor";
import { getContent } from "@/shared/admin/lib/store";

export default async function ProductsEditorPage() {
  const [en, ar] = await Promise.all([getContent("en"), getContent("ar")]);
  return <ContentEditor initialEn={en} initialAr={ar} mode="products" />;
}
