import type { CaseStudyContent, SiteContent } from "@/shared/types/types";

/**
 * CMS-facing adapter for the APEX study screen model.
 * All shape definitions stay centralized in shared/types/types.ts.
 */
export function getSpStudyModel(content: SiteContent): CaseStudyContent {
  return content.caseStudy;
}
