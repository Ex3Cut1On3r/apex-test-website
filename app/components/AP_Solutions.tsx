import type { SolutionsContent } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";

export default function AP_Solutions({ content }: { content: SolutionsContent }) {
  return (
    <AP_Component className="section solutions-section" id="solutions">
      <div className="container">
        <div className="section-intro center">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </div>
        <div className="solutions-layout">
          {content.items.map((item) => (
            <article className={`solution-card solution-${item.key}`} key={item.key}>
              <div className="solution-number">{item.number}</div>
              <div className="solution-icon"><AP_Icon name={item.icon}/></div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <AP_Button className="solution-link" variant="plain" contact>{content.cta}</AP_Button>
            </article>
          ))}
        </div>
      </div>
    </AP_Component>
  );
}
