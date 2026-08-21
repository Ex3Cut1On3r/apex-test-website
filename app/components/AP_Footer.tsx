import Image from "next/image";
import Link from "next/link";
import type { FooterContent, NavItem, SocialContent } from "@/shared/types";
import AP_SocialLinks from "@/app/components/AP_SocialLinks";

export default function AP_Footer({ nav, content, social }: { nav: NavItem[]; content: FooterContent; social: SocialContent }) {
  return (
    <footer className="site-footer">
      <div className="container footer-row grid min-h-24 items-center gap-5 py-5 md:grid-cols-[180px_1fr_auto]">
        <Link prefetch={false} href="/" className="footer-brand"><Image src="/api/assets/logo/apex-logo.svg" alt="APEX" width={146} height={45}/></Link>
        <nav className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 md:justify-center" aria-label="Footer navigation">{nav.map((item) => <Link prefetch={false} key={`${item.label}-${item.href}`} href={item.href}>{item.label}</Link>)}</nav>
        <div className="flex items-center gap-4 md:justify-end"><AP_SocialLinks social={social}/><span>© {new Date().getFullYear()} {content.legal}</span></div>
      </div>
    </footer>
  );
}
