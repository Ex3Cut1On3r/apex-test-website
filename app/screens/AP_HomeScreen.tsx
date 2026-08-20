import { getCmsContent } from "@/shared/content";
import AP_Header from "@/app/components/AP_Header";
import AP_Hero from "@/app/components/AP_Hero";
import AP_Solutions from "@/app/components/AP_Solutions";
import AP_Industries from "@/app/components/AP_Industries";
import AP_CaseStudy from "@/app/components/AP_CaseStudy";
import AP_Method from "@/app/components/AP_Method";
import AP_Footer from "@/app/components/AP_Footer";

export default async function AP_HomeScreen() {
  const { data } = await getCmsContent("en");
  return (
    <>
      <AP_Header nav={data.nav} />
      <main id="top">
        <AP_Hero hero={data.hero} about={data.about} />
        <AP_Solutions content={data.solutions} />
        <AP_Industries content={data.industries} />
        <AP_CaseStudy content={data.caseStudy} />
        <AP_Method content={data.method} />
      </main>
      <AP_Footer nav={data.nav} content={data.footer} />
    </>
  );
}
