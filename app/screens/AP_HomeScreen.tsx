import dynamic from "next/dynamic";
import { getCmsContent } from "@/shared/content";
import AP_Header from "@/app/components/AP_Header";
import AP_Hero from "@/app/components/AP_Hero";
import AP_Footer from "@/app/components/AP_Footer";
import AP_TrustStrip from "@/app/components/AP_TrustStrip";
import AP_CtaBand from "@/app/components/AP_CtaBand";

const AP_Solutions = dynamic(() => import("@/app/components/AP_Solutions"));
const AP_Industries = dynamic(() => import("@/app/components/AP_Industries"));
const AP_CaseStudy = dynamic(() => import("@/app/components/AP_CaseStudy"));
const AP_Method = dynamic(() => import("@/app/components/AP_Method"));
const AP_Insights = dynamic(() => import("@/app/components/AP_Insights"));

export default async function AP_HomeScreen() {
  const { data } = await getCmsContent("en");
  return (
    <>
      <AP_Header nav={data.nav} />
      <main id="top">
        <AP_Hero hero={data.hero} />
        <AP_TrustStrip trust={data.trust} />
        <AP_Solutions content={data.solutions} />
        <AP_Industries content={data.industries} />
        <AP_CaseStudy content={data.caseStudy} />
        <section className="ap-ref-capability-band"><div className="container">{data.solutions.items.map((item)=><div key={item.key}><span>{item.number}</span><strong>{item.title}</strong></div>)}</div></section>
        <AP_Method content={data.method} />
        <AP_Insights blogs={data.blogs} solutions={data.solutions} />
        <AP_CtaBand content={data.method} />
      </main>
      <AP_Footer nav={data.nav} content={data.footer} social={data.social} />
    </>
  );
}
