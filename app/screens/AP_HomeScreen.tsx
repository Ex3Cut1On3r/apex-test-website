import dynamic from "next/dynamic";
import { getCmsContent } from "@/shared/content";
import AP_Header from "@/app/components/AP_Header";
import AP_Hero from "@/app/components/AP_Hero";
import AP_Footer from "@/app/components/AP_Footer";
import AP_Loader from "@/app/components/AP_Loader";

const AP_Solutions = dynamic(() => import("@/app/components/AP_Solutions"));
const AP_Industries = dynamic(() => import("@/app/components/AP_Industries"));
const AP_CaseStudy = dynamic(() => import("@/app/components/AP_CaseStudy"));
const AP_Method = dynamic(() => import("@/app/components/AP_Method"));

export default async function AP_HomeScreen() {
  const { data } = await getCmsContent("en");
  return (
    <>
      <AP_Loader mode="entry" />
      <AP_Header nav={data.nav} />
      <main id="top">
        <AP_Hero hero={data.hero} about={data.about} />
        <AP_Solutions content={data.solutions} />
        <AP_Industries content={data.industries} />
        <AP_CaseStudy content={data.caseStudy} />
        <AP_Method content={data.method} />
      </main>
      <AP_Footer nav={data.nav} content={data.footer} social={data.social} />
    </>
  );
}
