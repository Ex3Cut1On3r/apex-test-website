import type { IndustriesContent } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";
import AP_IndustryVisual from "@/app/components/AP_IndustryVisual";
import AP_SpotlightCard from "@/app/components/AP_SpotlightCard";

export default function AP_Industries({ content }: { content: IndustriesContent }) {
  return (
    <AP_Component className="section industries-section" id="industries">
      <div className="container">
        <div className="industries-intro grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
          </div>
          <div className="world-visual ap-orbit-shell" aria-hidden="true"><AP_Icon name="globe"/><span className="orbit orbit-a"/><span className="orbit orbit-b"/><i className="world-dot world-dot-a"/><i className="world-dot world-dot-b"/><i className="world-dot world-dot-c"/></div>
        </div>
        <div className="industry-layout grid gap-4 lg:grid-cols-2">
          {content.items.map((item) => (
            <AP_SpotlightCard className={`industry-card ${item.key}-card`} key={item.key}>
              <div className="industry-content">
                <span className="industry-no">{item.number}</span>
                <div className="industry-icon"><AP_Icon name={item.icon}/></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}><AP_Icon name="check"/>{bullet}</li>)}</ul>
                {item.key !== "environment" && <AP_Button className="industry-link" variant="plain" contact>{content.cta}</AP_Button>}
              </div>
              <div className="industry-art"><AP_IndustryVisual type={item.key}/></div>
            </AP_SpotlightCard>
          ))}
        </div>
        <div className="industry-open-door mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><span className="open-door-icon"><AP_Icon name="message"/></span><div><strong>{content.openDoorTitle}</strong><p>{content.openDoorBody}</p></div></div>
          <AP_Button className="plain-contact" variant="plain" contact>{content.openDoorCta}</AP_Button>
        </div>
      </div>
    </AP_Component>
  );
}
