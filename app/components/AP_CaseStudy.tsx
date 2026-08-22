import Image from "next/image";
import type { CaseStudyContent } from "@/shared/types";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";
import { AP_CaseStudyButton } from "@/app/components/AP_CaseStudyModal";

export default function AP_CaseStudy({ content }: { content: CaseStudyContent }) {
  return (
    <AP_Component className="ap-ref-case" id="case-studies">
      <div className="container ap-ref-case-grid">
        <div className="ap-ref-case-copy">
          <span className="eyebrow">CASE STUDY</span>
          <h2>{content.headline}</h2>
          <p>{content.body}</p>
          <div className="ap-ref-case-outcomes">
            {content.facts.map((fact) => (
              <div key={fact.title}>
                <AP_Icon name={fact.icon}/>
                <span><strong>{fact.title}</strong><small>{fact.body}</small></span>
              </div>
            ))}
          </div>
          <AP_CaseStudyButton className="ap-ref-case-link">{content.cta} <AP_Icon name="arrow-right"/></AP_CaseStudyButton>
        </div>
        <div className="ap-ref-case-product">
          <div className="ap-ref-case-brand"><Image src={content.clientLogo} alt={content.client} width={120} height={52}/><span>Selected APEX collaboration</span></div>
          <div className="ap-ref-device-scene">
            <div className="ap-ref-laptop">
              <div className="ap-ref-laptop-screen"><Image src={content.screenshot} alt={`${content.client} platform`} width={1440} height={900} loading="lazy" /></div>
              <i/>
            </div>
          </div>
          <div className="ap-ref-case-capabilities">{content.capabilities.slice(0,3).map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
    </AP_Component>
  );
}
