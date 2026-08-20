import Image from "next/image";
import type { MethodContent } from "@/shared/types/types";
import ApButton from "./ap_button";
import ApComponent from "./ap_component";
import ApIcon from "./ap_icon";

export default function ApMethod({ content }: { content: MethodContent }) {
  const title = content.title.replace(/\.$/, "");
  return (
    <ApComponent className="method-section" id="method">
      <div className="container method-grid">
        <div className="method-copy">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2>{title}<span>.</span></h2>
          <p>{content.body}</p>
          <div className="method-principles">
            {content.principles.map((item) => <div key={item.title}><ApIcon name={item.icon}/><span><strong>{item.title}</strong><small>{item.body}</small></span></div>)}
          </div>
        </div>
        <div className="method-list">
          {content.steps.map((step) => <article key={step.number} className="method-row"><span className="method-no">{step.number}</span><span className="method-icon"><ApIcon name={step.icon}/></span><h3>{step.title}</h3><p>{step.body}</p><ApIcon name="arrow-right"/></article>)}
        </div>
      </div>
      <div className="container impact-cta">
        <div className="impact-mark"><Image src="/shared/assets/logo/apex-mark.svg" alt="" width={54} height={42}/></div>
        <h3>{content.ctaTitle}<br/><span>{content.ctaHighlight}</span></h3>
        <div><p>{content.ctaBody}</p><ApButton variant="light" contact>{content.cta}</ApButton></div>
      </div>
    </ApComponent>
  );
}
