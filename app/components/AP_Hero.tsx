import Link from "next/link";
import type { HeroContent } from "@/shared/types";
import AP_Icon from "@/app/components/AP_Icon";
import AP_ArchitectureVisual from "@/app/components/AP_ArchitectureVisual";

/* No media queries: copy and visual are flex children that wrap. */
const shell = "mx-auto w-full max-w-[1640px] px-[clamp(1rem,3vw,2rem)]";
const button = "inline-flex h-[36px] items-center justify-center gap-2 rounded px-[18px] text-[10.5px] font-extrabold uppercase tracking-[0.08em] transition-colors [&_svg]:h-[13px] [&_svg]:w-[13px]";

export default function AP_Hero({ hero }: { hero: HeroContent }) {
  return (
    <section className="border-b border-hx-line bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfe_100%)]">
      <div className={`${shell} flex flex-wrap items-center gap-x-10 gap-y-8 py-[clamp(2rem,3.5vw,3.25rem)]`}>
        <div className="min-w-[min(460px,100%)] flex-1 basis-[44%]">
          <span className="block text-[10px] font-extrabold uppercase leading-tight tracking-[0.14em] text-hx-cyan">{hero.eyebrow}</span>
          <h1 className="mt-3.5 text-[clamp(34px,3.4vw,54px)] font-bold leading-[1.06] tracking-[-0.03em] text-hx-ink">
            {hero.lines[0]} {hero.lines[1]}<br />
            {hero.lines[2]} <span className="text-hx-cyan">{hero.highlight ?? ""}</span>
          </h1>
          <p className="mt-4 max-w-[520px] text-[13.5px] leading-[1.75] text-hx-copy">{hero.body}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/solutions" className={`${button} bg-hx-cyan text-white hover:bg-[#0c7fae]`}>
              <span>{hero.primaryCta}</span><AP_Icon name="arrow-right" />
            </Link>
            <Link href="/#case-studies" className={`${button} border border-hx-line bg-white text-hx-ink hover:border-hx-cyan hover:text-hx-cyan`}>
              <span>{hero.secondaryCta}</span><AP_Icon name="arrow-right" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-y-4">
            {hero.principles.map((item) => (
              <div key={item.title} className="flex min-w-[min(200px,100%)] flex-1 basis-1/3 items-start gap-3 border-l border-hx-line px-5 first:border-l-0 first:pl-0">
                <AP_Icon name={item.icon} className="mt-0.5 h-[22px] w-[22px] shrink-0 text-hx-cyan" />
                <div className="min-w-0">
                  <strong className="block text-xs font-bold text-hx-ink">{item.title}</strong>
                  <p className="mt-1 text-[11px] leading-[1.45] text-hx-copy">{item.body}</p>
                </div>
              </div>
            ))}
            {hero.principles.map((item) => <span key={`p-ghost-${item.title}`} aria-hidden="true" className="h-0 min-w-[min(200px,100%)] flex-1 basis-1/3" />)}
          </div>
        </div>

        <div className="min-w-[min(420px,100%)] flex-1 basis-[52%]" aria-label="APEX platform architecture">
          <AP_ArchitectureVisual layers={hero.architecture} />
        </div>
      </div>
    </section>
  );
}
