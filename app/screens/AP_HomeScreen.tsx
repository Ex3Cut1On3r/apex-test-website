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
        <section className="border-b border-hx-line bg-hx-band py-5">
          <div className="mx-auto flex w-[min(1640px,86%)] flex-wrap justify-center gap-y-4">
            {data.solutions.items.map((item) => (
              <div key={item.key} className="flex min-w-[min(180px,46%)] flex-1 basis-1/6 items-center gap-2.5 px-3">
                <span className="text-[11px] font-extrabold text-hx-cyan">{item.number}</span>
                <strong className="min-w-0 text-[11.5px] font-bold leading-[1.35] text-hx-ink">{item.title}</strong>
              </div>
            ))}
            {data.solutions.items.map((item) => <span key={`c-ghost-${item.key}`} aria-hidden="true" className="h-0 min-w-[min(180px,46%)] flex-1 basis-1/6" />)}
          </div>
        </section>
        <AP_Method content={data.method} />
        <AP_Insights blogs={data.blogs} solutions={data.solutions} />
        <AP_CtaBand content={data.method} />
      </main>
      <AP_Footer nav={data.nav} content={data.footer} social={data.social} />
    </>
  );
}
