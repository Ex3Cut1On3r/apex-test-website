import type { SolutionsContent } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";
import AP_SpotlightCard from "@/app/components/AP_SpotlightCard";

export default function AP_Solutions({ content }: { content: SolutionsContent }) {
  return (
    <AP_Component className="section solutions-section relative overflow-hidden bg-white" id="solutions">
      <div className="container">
        <div className="section-intro center mx-auto max-w-3xl text-center">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </div>
        <div className="solutions-layout grid gap-4">
          {content.items.map((item) => (
            <AP_SpotlightCard className={`solution-card solution-${item.key} transition-transform duration-300 hover:-translate-y-1`} key={item.key}>
              <div className="solution-number">{item.number}</div>
              <div className="solution-icon"><AP_Icon name={item.icon}/></div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <AP_Button className="solution-link" variant="plain" contact>{content.cta}</AP_Button>
            </AP_SpotlightCard>
          ))}
        </div>
      </div>
    </AP_Component>
  );
}
