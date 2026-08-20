import Image from "next/image";
import type { MethodContent } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";

export default function AP_Method({ content }: { content: MethodContent }) {
  const title = content.title.replace(/\.$/, "");
  return (
    <AP_Component className="method-section" id="method">
      <div className="container method-grid">
        <div className="method-copy">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2>{title}<span>.</span></h2>
          <p>{content.body}</p>
          <div className="method-principles">
            {content.principles.map((item) => <div key={item.title}><AP_Icon name={item.icon}/><span><strong>{item.title}</strong><small>{item.body}</small></span></div>)}
          </div>
        </div>
        <div className="method-list">
          {content.steps.map((step) => <article key={step.number} className="method-row"><span className="method-no">{step.number}</span><span className="method-icon"><AP_Icon name={step.icon}/></span><h3>{step.title}</h3><p>{step.body}</p><AP_Icon name="arrow-right"/></article>)}
        </div>
      </div>
      <div className="container impact-cta">
        <div className="impact-mark"><Image src="/api/assets/logo/apex-mark.svg" alt="" width={54} height={42}/></div>
        <h3>{content.ctaTitle}<br/><span>{content.ctaHighlight}</span></h3>
        <div><p>{content.ctaBody}</p><AP_Button variant="light" contact>{content.cta}</AP_Button></div>
      </div>
    </AP_Component>
  );
}
