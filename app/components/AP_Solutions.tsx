import type { SolutionsContent } from "@/shared/types";
import Link from "next/link";
import AP_Icon from "@/app/components/AP_Icon";

/*
 * No media queries. The label column and the card grid are two flex children
 * that wrap; the cards are a wrapping row with a one-third basis, closed by
 * zero-height ghosts so a partly filled last row keeps the column width.
 */
const shell = "mx-auto w-[min(1640px,86%)]";

export default function AP_Solutions({ content, standalone = false }: { content: SolutionsContent; standalone?: boolean }) {
  return (
    <section id="solutions" className="border-b border-hx-line bg-white py-[clamp(2rem,4vw,3.5rem)]">
      <div className={`${shell} flex flex-wrap gap-x-10 gap-y-8`}>
        <div className="min-w-[min(300px,100%)] flex-1 basis-[22%]">
          <span className="block text-[10px] font-extrabold uppercase leading-tight tracking-[0.14em] text-hx-cyan">{content.eyebrow}</span>
          <h2 className="mt-3 text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.15] tracking-[-0.02em] text-hx-ink">{content.title}</h2>
          <p className="mt-4 max-w-[420px] text-[13px] leading-[1.7] text-hx-copy">{content.body}</p>
          {!standalone && (
            <Link href="/solutions" className="mt-5 inline-flex items-center gap-2 text-[10.5px] font-extrabold uppercase tracking-[0.08em] text-hx-cyan transition-colors hover:text-[#0c7fae]">
              <span>{content.cta}</span><AP_Icon name="arrow-right" className="h-[13px] w-[13px]" />
            </Link>
          )}
        </div>

        <div className="flex min-w-[min(560px,100%)] flex-[2.4] basis-[70%] flex-wrap gap-5">
          {content.items.map((item) => (
            <article
              key={item.key}
              id={item.key}
              className="flex min-w-[min(240px,100%)] flex-1 basis-[calc(33.333%-14px)] flex-col rounded-xl border border-hx-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#bcdff2] hover:shadow-[0_14px_30px_rgba(11,34,51,.08)]"
            >
              <div className="flex items-center gap-3.5">
                <AP_Icon name={item.icon} className="h-[30px] w-[30px] shrink-0 text-hx-cyan" />
                <h3 className="min-w-0 text-[17px] font-bold leading-tight text-hx-ink">{item.title}</h3>
              </div>
              <p className="mt-3 text-[12.5px] leading-[1.6] text-hx-copy">{item.body}</p>
              <span aria-hidden="true" className="mt-auto flex justify-end pt-5 text-hx-cyan">
                <AP_Icon name="arrow-right" className="h-[18px] w-[18px]" />
              </span>
            </article>
          ))}
          {Array.from({ length: 2 }).map((_, ghost) => (
            <span key={`s-ghost-${ghost}`} aria-hidden="true" className="h-0 min-w-[min(240px,100%)] flex-1 basis-[calc(33.333%-14px)]" />
          ))}
        </div>
      </div>
    </section>
  );
}
