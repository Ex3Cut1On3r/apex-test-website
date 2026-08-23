import type { TrustContent } from "@/shared/types";
import AP_Icon from "@/app/components/AP_Icon";

/* No media queries: one wrapping flex row, children carry basis + min-width. */
const shell = "mx-auto w-full max-w-[1640px] px-[clamp(1rem,3vw,2rem)]";

export default function AP_TrustStrip({ trust }: { trust?: TrustContent }) {
  if (!trust) return null;
  const { eyebrow, clients = [], stats = [] } = trust;

  return (
    <section className="border-y border-hx-line bg-hx-band py-4" aria-label={eyebrow}>
      <div className={`${shell} flex flex-wrap items-center justify-center gap-x-6 gap-y-6`}>
        <span className="min-w-[min(150px,100%)] max-w-[190px] flex-1 text-[10px] font-extrabold uppercase leading-[1.35] tracking-[0.12em] text-hx-cyan">
          {eyebrow}
        </span>

        <div className="flex min-w-[min(320px,100%)] flex-[2] flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {clients.map((client) => (
            <span key={client} className="flex items-center gap-2 text-[13px] font-bold text-hx-ink">
              <AP_Icon name="grid" className="h-4 w-4 shrink-0 text-hx-muted" />{client}
            </span>
          ))}
        </div>

        <div className="flex min-w-[min(300px,100%)] flex-[1.5] flex-wrap justify-center gap-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-[min(140px,46%)] flex-1 basis-1/4 px-2 text-center">
              <strong className="block text-[19px] font-bold leading-tight text-hx-cyan">{stat.value}</strong>
              <small className="mt-0.5 block text-[10px] text-hx-copy">{stat.label}</small>
            </div>
          ))}
          {stats.map((stat) => <span key={`t-ghost-${stat.label}`} aria-hidden="true" className="h-0 min-w-[min(140px,46%)] flex-1 basis-1/4" />)}
        </div>
      </div>
    </section>
  );
}
