import type { MethodContent } from "@/shared/types";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";

export default function AP_Method({ content, standalone = false }: { content: MethodContent; standalone?: boolean }) {
  return (
    <AP_Component className={`ap-ref-method ${standalone ? "ap-ref-method-page" : ""}`} id="method">
      <div className="container">
        <div className="ap-ref-method-head">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2>A proven process. <span>Predictable outcomes.</span></h2>
          <p>{content.body}</p>
        </div>
        <div className="ap-ref-method-timeline">
          {content.steps.map((step, index) => (
            <article className="ap-ref-method-step" key={step.number}>
              <div className="ap-ref-method-marker"><span>{index + 1}</span><div><AP_Icon name={step.icon}/></div></div>
              <h3>{step.title}</h3><p>{step.body}</p><span className="ap-ref-learn">Learn more →</span>
            </article>
          ))}
        </div>
      </div>
    </AP_Component>
  );
}
