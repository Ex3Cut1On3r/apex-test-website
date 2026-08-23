import type { IndustriesContent } from "@/shared/types";
import Link from "next/link";
import AP_Button from "@/app/components/AP_Button";
import AP_ContactLink from "@/app/components/AP_ContactLink";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";
import AP_IndustryVisual from "@/app/components/AP_IndustryVisual";

export default function AP_Industries({ content, standalone = false }: { content: IndustriesContent; standalone?: boolean }) {
  const shell = "mx-auto w-[min(1640px,86%)]";
  const eyebrow = "block text-[10px] font-extrabold uppercase leading-tight tracking-[0.14em] text-hx-cyan";
  const ctaLink = "mt-2 inline-flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.08em] text-hx-cyan transition-colors hover:text-[#0c7fae] [&_svg]:h-[13px] [&_svg]:w-[13px]";

  if (standalone) {
    const stats = content.stats ?? [];
    const qualities = content.qualities ?? [];
    return (
      <>
        <section id="industries" className="bg-white py-[clamp(2rem,4vw,3.5rem)]">
          <div className={`${shell} flex flex-wrap gap-x-[clamp(2rem,6vw,7rem)] gap-y-8`}>
            {/* label column */}
            <div className="min-w-[min(260px,100%)] flex-1 basis-[21%]">
              <span className={eyebrow}>{content.eyebrow}</span>
              <h1 className="mt-3 text-[clamp(30px,3vw,42px)] font-bold leading-[1.12] tracking-[-0.03em] text-hx-ink">
                {content.pageTitle}<br /><span className="text-hx-cyan">{content.pageHighlight}</span>
              </h1>
              <p className="mt-4 max-w-[420px] text-[13px] leading-[1.7] text-hx-copy">{content.pageBody}</p>

              {/* Always one line: no wrap, and the three cells shrink together. */}
              <div className="mt-7 flex flex-nowrap">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-0 flex-1 basis-1/3 border-l border-hx-line px-2 first:border-l-0 first:pl-0">
                    <AP_Icon name={stat.icon ?? "users"} className="h-[20px] w-[20px] text-hx-cyan" />
                    <strong className="mt-2 block text-[clamp(16px,1.35vw,22px)] font-bold leading-tight text-hx-cyan">{stat.value}</strong>
                    <small className="mt-0.5 block whitespace-nowrap text-[10px] leading-[1.35] text-hx-copy">{stat.label}</small>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex max-w-[420px] items-start gap-3 rounded-xl border border-hx-line bg-white p-4">
                <AP_Icon name="compass" className="mt-0.5 h-[22px] w-[22px] shrink-0 text-hx-cyan" />
                <div className="min-w-0">
                  <strong className="block text-[13px] font-bold text-hx-ink">{content.startTitle}</strong>
                  <p className="mt-1.5 text-[11.5px] leading-[1.55] text-hx-copy">{content.startBody}</p>
                  <AP_ContactLink className={ctaLink}>{content.startCta}</AP_ContactLink>
                </div>
              </div>
            </div>

            {/* wide rows */}
            <div className="flex min-w-[min(520px,100%)] flex-[3] basis-[66%] flex-col gap-4">
              {content.items.map((item) => (
                <article key={item.key} className="flex min-h-[136px] flex-wrap overflow-hidden rounded-xl border border-hx-line bg-white transition hover:border-[#bcdff2] hover:shadow-[0_14px_30px_rgba(11,34,51,.08)]">
                  <div className="flex min-w-[min(230px,100%)] flex-1 basis-[32%] flex-col justify-center p-[14px]">
                    <AP_Icon name={item.icon} className="h-[22px] w-[22px] shrink-0 text-hx-cyan" />
                    <h3 className="mt-1.5 text-[17px] font-bold leading-[1.2] text-hx-ink">{item.title}</h3>
                    <p className="mt-1 text-[10.5px] leading-[1.4] text-hx-copy">{item.body}</p>
                    <Link href="#industries" className="mt-2 inline-flex items-center gap-1.5 text-[10.5px] font-bold text-hx-cyan hover:text-[#0c7fae]">
                      <span>{item.learnMore ?? content.learnMoreLabel ?? "Learn more"}</span><AP_Icon name="arrow-right" className="h-3 w-3" />
                    </Link>
                  </div>
                  <div className="relative min-h-[136px] min-w-[min(240px,100%)] flex-1 basis-[64%] self-stretch overflow-hidden bg-hx-tint">
                    <div className="absolute inset-0 [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>svg]:h-full [&>svg]:w-full">
                      {item.image ? <img src={item.image} alt={item.title} /> : <AP_IndustryVisual type={item.key} />}
                    </div>
                    <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
                    <span aria-hidden="true" className="absolute bottom-3.5 right-3.5 grid h-8 w-8 place-items-center rounded-full bg-white text-hx-cyan shadow-[0_4px_12px_rgba(11,34,51,.16)]">
                      <AP_Icon name="arrow-right" className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              ))}

              <article className="flex min-h-[136px] flex-wrap overflow-hidden rounded-xl border border-hx-line bg-white">
                <div className="flex min-w-[min(230px,100%)] flex-1 basis-[32%] flex-col justify-center p-[14px]">
                  <AP_Icon name="message" className="h-[22px] w-[22px] shrink-0 text-hx-cyan" />
                  <h3 className="mt-1.5 text-[17px] font-bold leading-[1.2] text-hx-ink">{content.openDoorTitle}</h3>
                  <p className="mt-1 text-[10.5px] leading-[1.4] text-hx-copy">{content.openDoorBody}</p>
                  <AP_ContactLink className={ctaLink}>{content.openDoorCta}</AP_ContactLink>
                </div>
                <div className="relative min-h-[136px] min-w-[min(240px,100%)] flex-1 basis-[64%] self-stretch overflow-hidden bg-[linear-gradient(120deg,#eef7fc,#dbeefb)]">
                  <svg viewBox="0 0 400 160" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <path key={i} d={`M0 ${28 + i * 14} C 110 ${4 + i * 14}, 250 ${88 + i * 10}, 400 ${34 + i * 12}`} fill="none" stroke="#7fc3e8" strokeOpacity={0.5 - i * 0.04} strokeWidth="1.1" />
                    ))}
                  </svg>
                  <span aria-hidden="true" className="absolute bottom-4 right-4 grid h-8 w-8 place-items-center rounded-full bg-white text-hx-cyan shadow-[0_4px_12px_rgba(11,34,51,.16)]">
                    <AP_Icon name="arrow-right" className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* quality band */}
        <section className="border-y border-hx-line bg-hx-band py-6">
          <div className={`${shell} flex flex-wrap gap-y-5`}>
            {qualities.map((item) => (
              <div key={item.title} className="flex min-w-[min(260px,100%)] flex-1 basis-1/3 items-start gap-3 border-l border-hx-line px-6 first:border-l-0 first:pl-0">
                <AP_Icon name={item.icon} className="mt-0.5 h-[26px] w-[26px] shrink-0 text-hx-cyan" />
                <div className="min-w-0">
                  <strong className="block text-[13px] font-bold text-hx-ink">{item.title}</strong>
                  <p className="mt-1 text-[11.5px] leading-[1.5] text-hx-copy">{item.body}</p>
                </div>
              </div>
            ))}
            {qualities.map((item) => <span key={`ql-ghost-${item.title}`} aria-hidden="true" className="h-0 min-w-[min(260px,100%)] flex-1 basis-1/3" />)}
          </div>
        </section>
      </>
    );
  }

  /* Home layout — no media queries; label column + wrapping card row. */
  return (
    <section id="industries" className="border-b border-hx-line bg-hx-band py-[clamp(2rem,4vw,3.5rem)]">
      <div className={`${shell} flex flex-wrap gap-x-10 gap-y-8`}>
        <div className="min-w-[min(280px,100%)] flex-1 basis-[20%]">
          <span className={eyebrow}>{content.eyebrow}</span>
          <h2 className="mt-3 text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.15] tracking-[-0.02em] text-hx-ink">{content.title}</h2>
          <p className="mt-4 max-w-[380px] text-[13px] leading-[1.7] text-hx-copy">{content.body}</p>
          <Link href="/industries" className="mt-5 inline-flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.08em] text-hx-cyan transition-colors hover:text-[#0c7fae]">
            <span>{content.cta}</span><AP_Icon name="arrow-right" className="h-[13px] w-[13px]" />
          </Link>
        </div>

        <div className="flex min-w-[min(560px,100%)] flex-[2.6] basis-[72%] flex-wrap gap-4">
          {content.items.map((item) => (
            <article key={item.key} className="flex min-w-[min(200px,100%)] flex-1 basis-[calc(25%-16px)] flex-col overflow-hidden rounded-xl border border-hx-line bg-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(11,34,51,.08)]">
              <div className="h-[132px] w-full shrink-0 overflow-hidden bg-hx-tint [&>svg]:h-full [&>svg]:w-full">
                {item.image ? <img src={item.image} alt={item.title} className="h-full w-full object-cover" /> : <AP_IndustryVisual type={item.key} />}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <AP_Icon name={item.icon} className="h-[22px] w-[22px] shrink-0 text-hx-cyan" />
                <h3 className="mt-2.5 text-[15px] font-bold leading-tight text-hx-ink">{item.title}</h3>
                <p className="mt-2 text-[11.5px] leading-[1.55] text-hx-copy">{item.body}</p>
                <Link href="/industries" className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[10.5px] font-bold text-hx-cyan hover:text-[#0c7fae]">
                  <span>{item.learnMore ?? content.learnMoreLabel ?? "Learn more"}</span><AP_Icon name="arrow-right" className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}

          <article className="flex min-w-[min(175px,100%)] grow basis-[calc(18%-16px)] flex-col rounded-xl border border-hx-line bg-white p-4">
            <AP_Icon name="message" className="h-[22px] w-[22px] shrink-0 text-hx-cyan" />
            <h3 className="mt-2.5 text-[14px] font-bold leading-tight text-hx-ink">{content.openDoorTitle}</h3>
            <p className="mt-2 text-[11.5px] leading-[1.55] text-hx-copy">{content.openDoorBody}</p>
            <div className="mt-auto pt-4"><AP_Button variant="plain" contact>{content.openDoorCta}</AP_Button></div>
          </article>
        </div>
      </div>
    </section>
  );
}
