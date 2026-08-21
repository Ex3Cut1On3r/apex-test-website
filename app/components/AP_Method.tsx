import Image from "next/image";
import type { MethodContent } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";
import AP_SpotlightCard from "@/app/components/AP_SpotlightCard";

export default function AP_Method({ content }: { content: MethodContent }) {
  const title = content.title.replace(/\.$/, "");
  return (
    <AP_Component className="method-section" id="method">
      <div className="container method-grid grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div className="method-copy">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2>{title}<span>.</span></h2>
          <p>{content.body}</p>
          <div className="method-principles">
            {content.principles.map((item) => <div key={item.title}><AP_Icon name={item.icon}/><span><strong>{item.title}</strong><small>{item.body}</small></span></div>)}
          </div>
        </div>
        <div className="method-list grid gap-2.5">
          {content.steps.map((step) => <AP_SpotlightCard key={step.number} className="method-row"><span className="method-no">{step.number}</span><span className="method-icon"><AP_Icon name={step.icon}/></span><h3>{step.title}</h3><p>{step.body}</p><AP_Icon name="arrow-right"/></AP_SpotlightCard>)}
        </div>
      </div>
      <div className="container impact-cta grid gap-5 md:grid-cols-[68px_1fr_.82fr] md:items-center">
        <div className="impact-mark"><Image src="/api/assets/logo/apex-mark.svg" alt="" width={54} height={42}/></div>
        <h3>{content.ctaTitle}<br/><span>{content.ctaHighlight}</span></h3>
        <div><p>{content.ctaBody}</p><AP_Button variant="light" contact>{content.cta}</AP_Button></div>
      </div>
    </AP_Component>
  );
}
