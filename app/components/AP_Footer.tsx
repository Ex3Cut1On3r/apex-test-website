import Image from "next/image";
import Link from "next/link";
import type { FooterContent, NavItem, SocialContent } from "@/shared/types";
import AP_SocialLinks from "@/app/components/AP_SocialLinks";
import AP_SubscribeForm from "@/app/components/AP_SubscribeForm";

/* No media queries: one wrapping flex row of columns. */
const shell = "mx-auto w-[min(1640px,86%)]";

export default function AP_Footer({ nav, content, social }: { nav: NavItem[]; content: FooterContent; social: SocialContent }) {
  // Fall back to the primary nav if a stored payload predates the column model.
  const columns = content.columns?.length
    ? content.columns
    : [{ title: "Company", links: nav.map((item) => ({ label: item.label, href: item.href })) }];

  return (
    <footer id="about" className="border-t border-hx-line bg-white pt-[clamp(2rem,4vw,3rem)]">
      <div className={`${shell} flex flex-wrap gap-x-[clamp(1.25rem,2.5vw,2.5rem)] gap-y-8`}>
        <div className="min-w-[min(240px,100%)] flex-[1.4] basis-[24%]">
          <Link prefetch={false} href="/" aria-label="APEX home">
            <Image src="/api/assets/logo/apex-logo.svg" alt="APEX" width={146} height={45} />
          </Link>
          {content.tagline && <p className="mt-3 text-[11.5px] font-bold text-hx-cyan">{content.tagline}</p>}
          {content.body && <p className="mt-2 max-w-[300px] text-[11px] leading-[1.6] text-hx-copy">{content.body}</p>}
          <div className="mt-4"><AP_SocialLinks social={social} /></div>
        </div>

        {columns.map((column) => (
          <nav key={column.title} className="min-w-[min(140px,100%)] flex-1 basis-[14%]" aria-label={column.title}>
            <strong className="block text-[11.5px] font-bold text-hx-ink">{column.title}</strong>
            <ul className="mt-3 flex list-none flex-col gap-2 p-0">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link prefetch={false} href={link.href} className="text-[11px] leading-[1.5] text-hx-copy transition-colors hover:text-hx-cyan">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="min-w-[min(230px,100%)] flex-[1.3] basis-[20%]">
          <strong className="block text-[11.5px] font-bold text-hx-ink">{content.newsletterTitle ?? ""}</strong>
          <p className="mt-2 max-w-[300px] text-[11px] leading-[1.55] text-hx-copy">{content.newsletterBody ?? ""}</p>
          <div className="mt-4"><AP_SubscribeForm /></div>
        </div>
      </div>

      <div className={`${shell} mt-[clamp(1.5rem,3vw,2.5rem)] flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-hx-line py-5`}>
        <span className="text-[10.5px] text-hx-muted">© {new Date().getFullYear()} {content.legal}</span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {(content.legalLinks ?? []).map((link) => (
            <Link key={link.label} prefetch={false} href={link.href} className="text-[10.5px] text-hx-muted transition-colors hover:text-hx-cyan">{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
