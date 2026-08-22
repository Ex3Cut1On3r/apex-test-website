import Image from "next/image";
import Link from "next/link";
import type { FooterContent, NavItem, SocialContent } from "@/shared/types";
import AP_SocialLinks from "@/app/components/AP_SocialLinks";
import AP_SubscribeForm from "@/app/components/AP_SubscribeForm";

export default function AP_Footer({ nav, content, social }: { nav: NavItem[]; content: FooterContent; social: SocialContent }) {
  const byLabel = (labels: string[]) => nav.filter((item) => labels.includes(item.label));
  return (
    <footer className="site-footer ap-ref-footer" id="about">
      <div className="container ap-ref-footer-grid">
        <div className="ap-ref-footer-brand">
          <Link prefetch={false} href="/"><Image src="/api/assets/logo/apex-logo.svg" alt="APEX" width={146} height={45}/></Link>
          <p>AI systems. Engineered for impact. We design and build intelligent systems that simplify operations, connect data, and create measurable momentum.</p>
          <AP_SocialLinks social={social}/>
        </div>
        <div className="ap-ref-footer-column"><strong>Solutions</strong>{byLabel(["Solutions","Products","Method"]).map((item)=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div className="ap-ref-footer-column"><strong>Industries</strong>{byLabel(["Industries","Case Studies"]).map((item)=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div className="ap-ref-footer-column"><strong>Company</strong>{byLabel(["About","Careers","Blogs"]).map((item)=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div className="ap-ref-footer-news"><strong>Stay in the loop</strong><p>Insights, updates, and ideas delivered straight to your inbox.</p><AP_SubscribeForm /></div>
      </div>
      <div className="container ap-ref-footer-bottom"><span>© {new Date().getFullYear()} {content.legal}</span><div><span>Privacy</span><span>Terms</span><span>Security</span><Link href="/sitemap.xml">Sitemap</Link></div></div>
    </footer>
  );
}
