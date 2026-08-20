import { getCmsContent } from "@/shared/content/content";
import ApHeader from "@/shared/components/ap_header";
import ApHero from "@/shared/components/ap_hero";
import ApSolutions from "@/shared/components/ap_solutions";
import ApIndustries from "@/shared/components/ap_industries";
import ApCaseStudy from "@/shared/components/ap_case_study";
import ApMethod from "@/shared/components/ap_method";
import ApFooter from "@/shared/components/ap_footer";
import { getSpStudyModel } from "@/shared/models/apex/sp_study";

export default async function Home() {
  const { data } = await getCmsContent("en");
  const spStudy = getSpStudyModel(data);

  return (
    <>
      <ApHeader nav={data.nav} />
      <main id="top">
        <ApHero hero={data.hero} about={data.about} />
        <ApSolutions content={data.solutions} />
        <ApIndustries content={data.industries} />
        <ApCaseStudy content={spStudy} />
        <ApMethod content={data.method} />
      </main>
      <ApFooter nav={data.nav} content={data.footer} />
    </>
  );
}
