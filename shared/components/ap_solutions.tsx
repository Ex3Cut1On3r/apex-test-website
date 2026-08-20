import type { SolutionsContent } from "@/shared/types/types";
import ApButton from "./ap_button";
import ApComponent from "./ap_component";
import ApIcon from "./ap_icon";

export default function ApSolutions({ content }: { content: SolutionsContent }) {
  return (
    <ApComponent className="section solutions-section" id="solutions">
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
              <div className="solution-icon"><ApIcon name={item.icon}/></div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ApButton className="solution-link" variant="plain" contact>{content.cta}</ApButton>
            </article>
          ))}
        </div>
      </div>
    </ApComponent>
  );
}
