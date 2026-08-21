import Image from "next/image";
import type { CaseStudyContent } from "@/shared/types";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";
import { AP_CaseStudyButton } from "@/app/components/AP_CaseStudyModal";
import AP_TiltCard from "@/app/components/AP_TiltCard";

export default function AP_CaseStudy({ content }: { content: CaseStudyContent }) {
  const title = content.title.replace(/\.$/, "");
  return (
    <AP_Component className="case-section" id="case-studies">
      <div className="container">
        <div className="case-intro grid gap-5 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div><span className="eyebrow">{content.eyebrow}</span><h2>{title}<span>.</span></h2></div>
          <p>{content.intro}</p>
        </div>
        <article className="case-feature grid overflow-hidden lg:grid-cols-[1.15fr_.85fr]">
          <AP_TiltCard max={2.4} className="case-browser-wrap">
            <div className="browser-frame"><div className="browser-dots"><i/><i/><i/></div><Image src={content.screenshot} alt={`${content.client} website`} width={1600} height={1000} loading="lazy" /></div>
            <div className="case-circuit circuit-a"/><div className="case-circuit circuit-b"/>
          </AP_TiltCard>
          <div className="case-copy">
            <Image src={content.clientLogo} alt={content.client} width={116} height={50} loading="lazy" />
            <h3>{content.headline}</h3>
            <p>{content.body}</p>
            <div className="case-capabilities" aria-label={`${content.client} capabilities`}>{content.capabilities.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="case-facts">
              {content.facts.map((fact) => <div key={fact.title}><span className="fact-icon"><AP_Icon name={fact.icon}/></span><strong>{fact.title}</strong><p>{fact.body}</p></div>)}
            </div>
            <AP_CaseStudyButton className="case-link">{content.cta} <AP_Icon name="arrow-right"/></AP_CaseStudyButton>
          </div>
        </article>
      </div>
    </AP_Component>
  );
}
