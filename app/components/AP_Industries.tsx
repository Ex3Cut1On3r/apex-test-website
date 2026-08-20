import type { IndustriesContent } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";
import AP_IndustryVisual from "@/app/components/AP_IndustryVisual";

export default function AP_Industries({ content }: { content: IndustriesContent }) {
  return (
    <AP_Component className="section industries-section" id="industries">
      <div className="container">
        <div className="industries-intro">
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
          </div>
          <div className="world-visual" aria-hidden="true"><AP_Icon name="globe"/><span className="orbit orbit-a"/><span className="orbit orbit-b"/><i className="world-dot world-dot-a"/><i className="world-dot world-dot-b"/><i className="world-dot world-dot-c"/></div>
        </div>
        <div className="industry-layout">
          {content.items.map((item) => (
            <article className={`industry-card ${item.key}-card`} key={item.key}>
              <div className="industry-content">
                <span className="industry-no">{item.number}</span>
                <div className="industry-icon"><AP_Icon name={item.icon}/></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}><AP_Icon name="check"/>{bullet}</li>)}</ul>
                {item.key !== "environment" && <AP_Button className="industry-link" variant="plain" contact>{content.cta}</AP_Button>}
              </div>
              <div className="industry-art"><AP_IndustryVisual type={item.key}/></div>
            </article>
          ))}
        </div>
        <div className="industry-open-door">
          <div><span className="open-door-icon"><AP_Icon name="message"/></span><div><strong>{content.openDoorTitle}</strong><p>{content.openDoorBody}</p></div></div>
          <AP_Button className="plain-contact" variant="plain" contact>{content.openDoorCta}</AP_Button>
        </div>
      </div>
    </AP_Component>
  );
}
