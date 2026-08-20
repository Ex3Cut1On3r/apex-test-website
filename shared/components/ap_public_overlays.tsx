"use client";

import { usePathname } from "next/navigation";
import ApContactModal from "@/shared/components/ap_contact_modal";
import ApCaseStudyModal from "@/shared/components/ap_case_study_modal";
import type { CaseStudyContent } from "@/shared/types/types";

export default function ApPublicOverlays({ caseStudy }: { caseStudy: CaseStudyContent }) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <ApCaseStudyModal content={caseStudy} />
      <ApContactModal />
    </>
  );
}
