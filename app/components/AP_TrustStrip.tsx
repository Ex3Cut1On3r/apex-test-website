import Image from "next/image";
import type { CaseStudyContent, HeroContent } from "@/shared/types";
import AP_Icon from "@/app/components/AP_Icon";

export default function AP_TrustStrip({ caseStudy, hero }: { caseStudy: CaseStudyContent; hero: HeroContent }) {
  return (
    <section className="ap-trust-strip" aria-label="APEX trust and delivery principles">
      <div className="container ap-trust-strip-inner">
        <div className="ap-trust-client">
          <span>SELECTED COLLABORATION</span>
          <Image src={caseStudy.clientLogo} alt={caseStudy.client} width={116} height={44} loading="lazy" />
        </div>
        {hero.principles.map((item) => (
          <div className="ap-trust-principle" key={item.title}>
            <AP_Icon name={item.icon} />
            <span><strong>{item.title}</strong><small>{item.body}</small></span>
          </div>
        ))}
      </div>
    </section>
  );
}
