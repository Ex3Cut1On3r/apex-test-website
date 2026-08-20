import type { IndustriesContent } from "@/shared/types/types";
import ApButton from "./ap_button";
import ApComponent from "./ap_component";
import ApIcon from "./ap_icon";
import ApIndustryVisual from "./ap_industry_visual";

export default function ApIndustries({ content }: { content: IndustriesContent }) {
  return (
    <ApComponent className="section industries-section" id="industries">
      <div className="container">
        <div className="industries-intro">
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
          </div>
          <div className="world-visual" aria-hidden="true"><ApIcon name="globe"/><span className="orbit orbit-a"/><span className="orbit orbit-b"/><i className="world-dot world-dot-a"/><i className="world-dot world-dot-b"/><i className="world-dot world-dot-c"/></div>
        </div>
        <div className="industry-layout">
          {content.items.map((item) => (
            <article className={`industry-card ${item.key}-card`} key={item.key}>
              <div className="industry-content">
                <span className="industry-no">{item.number}</span>
                <div className="industry-icon"><ApIcon name={item.icon}/></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}><ApIcon name="check"/>{bullet}</li>)}</ul>
                {item.key !== "environment" && <ApButton className="industry-link" variant="plain" contact>{content.cta}</ApButton>}
              </div>
              <div className="industry-art"><ApIndustryVisual type={item.key}/></div>
            </article>
          ))}
        </div>
        <div className="industry-open-door">
          <div><span className="open-door-icon"><ApIcon name="message"/></span><div><strong>{content.openDoorTitle}</strong><p>{content.openDoorBody}</p></div></div>
          <ApButton className="plain-contact" variant="plain" contact>{content.openDoorCta}</ApButton>
        </div>
      </div>
    </ApComponent>
  );
}
