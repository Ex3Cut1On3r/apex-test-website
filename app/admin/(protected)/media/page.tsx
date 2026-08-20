import MediaManager from "@/shared/admin/components/ap_media_manager";
import { getContent } from "@/shared/admin/lib/store";

export default async function MediaPage() {
  const [en, ar] = await Promise.all([getContent("en"), getContent("ar")]);
  const paths = Array.from(new Set([
    en.caseStudy.clientLogo,
    en.caseStudy.screenshot,
    ar.caseStudy.clientLogo,
    ar.caseStudy.screenshot,
    "/shared/assets/logo/apex-logo.svg",
    "/shared/assets/logo/apex-mark.svg",
  ].filter(Boolean)));

  return <MediaManager referencedPaths={paths} />;
}
