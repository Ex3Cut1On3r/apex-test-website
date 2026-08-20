"use client";

import { usePathname } from "next/navigation";
import AP_ContactModal from "@/app/components/AP_ContactModal";
import AP_CaseStudyModal from "@/app/components/AP_CaseStudyModal";
import type { CaseStudyContent } from "@/shared/types";

export default function AP_PublicOverlays({ caseStudy }: { caseStudy: CaseStudyContent }) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <AP_CaseStudyModal content={caseStudy} />
      <AP_ContactModal />
    </>
  );
}
