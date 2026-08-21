import { getCmsContent } from "@/shared/content";
import AP_Header from "@/app/components/AP_Header";
import AP_Footer from "@/app/components/AP_Footer";
import AP_Button from "@/app/components/AP_Button";
import AP_GradientText from "@/app/components/AP_GradientText";
import AP_SpotlightCard from "@/app/components/AP_SpotlightCard";
import AP_DotGrid from "@/app/components/AP_DotGrid";

export default async function AP_CareersScreen() {
  const { data } = await getCmsContent("en");
  const page = data.careers;
  return (
    <>
      <AP_Header nav={data.nav} activePath="/careers" />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-white py-24 sm:py-28 lg:py-36">
          <AP_DotGrid />
          <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-3xl">
              <span className="eyebrow">{page.eyebrow}</span>
              <h1 className="m-0 text-[clamp(3.2rem,7vw,6.7rem)] font-[790] leading-[.92] tracking-[-.065em] text-apex-ink">{page.title}<br/><AP_GradientText>{page.highlight}</AP_GradientText></h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{page.body}</p>
              <div className="mt-8"><AP_Button contact>{page.primaryCta}</AP_Button></div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              <div className="absolute inset-[9%] rotate-6 rounded-[38px] border border-teal-200/60 bg-gradient-to-br from-white to-teal-50 shadow-apex" />
              <div className="absolute inset-[18%] -rotate-6 rounded-[32px] border border-slate-200 bg-white shadow-xl" />
              <div className="absolute inset-[28%] grid place-items-center rounded-[28px] bg-[#0D2732] shadow-2xl">
                <img className="w-2/3 brightness-0 invert" src="/api/assets/logo/apex-mark.svg" alt="" />
              </div>
              <span className="absolute left-[3%] top-[22%] rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-lg">Engineering</span>
              <span className="absolute bottom-[16%] right-[0%] rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-bold text-teal-700 shadow-lg">Operations</span>
              <span className="absolute right-[8%] top-[7%] rounded-full border border-coral-100 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-lg">Momentum</span>
            </div>
          </div>
        </section>

        <section className="bg-[#F7FAFA] py-24">
          <div className="container">
            <div className="mb-10 max-w-3xl"><span className="eyebrow">{page.valuesEyebrow}</span><h2 className="m-0 text-4xl font-[780] tracking-[-.045em] sm:text-5xl">{page.valuesTitle}</h2></div>
            <div className="grid gap-4 md:grid-cols-3">
              {page.values.map((value, index) => <AP_SpotlightCard key={value.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><span className="text-xs font-extrabold tracking-[.16em] text-teal-700">0{index + 1}</span><h3 className="mt-7 text-xl font-bold tracking-[-.03em]">{value.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{value.body}</p></AP_SpotlightCard>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><span className="eyebrow">{page.rolesEyebrow}</span><h2 className="m-0 text-4xl font-[780] tracking-[-.045em] sm:text-5xl">{page.rolesTitle}</h2></div><p className="m-0 max-w-2xl text-sm leading-7 text-slate-600">{page.rolesBody}</p></div>
            {page.roles.length ? <div className="mt-10 grid gap-3">{page.roles.map((role) => <AP_SpotlightCard key={role.title} className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center"><div><h3 className="m-0 text-xl font-bold">{role.title}</h3><p className="mt-2 text-sm text-slate-600">{role.summary}</p></div><div className="flex gap-2 text-xs font-semibold text-slate-500"><span>{role.type}</span><span>•</span><span>{role.location}</span></div></AP_SpotlightCard>)}</div> : <div className="mt-10 rounded-3xl border border-dashed border-teal-300 bg-teal-50/40 p-10 sm:p-14"><span className="text-xs font-extrabold tracking-[.16em] text-teal-700">CURRENT STATUS</span><h3 className="mt-5 text-3xl font-bold tracking-[-.04em]">{page.emptyTitle}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{page.emptyBody}</p><div className="mt-6"><AP_Button contact>{page.primaryCta}</AP_Button></div></div>}
          </div>
        </section>
      </main>
      <AP_Footer nav={data.nav} content={data.footer} social={data.social} />
    </>
  );
}
