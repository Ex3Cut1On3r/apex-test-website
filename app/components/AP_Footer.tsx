import Image from "next/image";
import Link from "next/link";
import type { FooterContent, NavItem } from "@/shared/types";

export default function AP_Footer({ nav, content }: { nav: NavItem[]; content: FooterContent }) {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <Link href="/" className="footer-brand"><Image src="/api/assets/logo/apex-logo.svg" alt="APEX" width={146} height={45}/></Link>
        <nav aria-label="Footer navigation">{nav.map((item) => <Link key={`${item.label}-${item.href}`} href={item.href}>{item.label}</Link>)}</nav>
        <span>© {new Date().getFullYear()} {content.legal}</span>
      </div>
    </footer>
  );
}
