import type { IndustriesContent } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";
import AP_IndustryVisual from "@/app/components/AP_IndustryVisual";

export default function AP_Industries({ content, standalone = false }: { content: IndustriesContent; standalone?: boolean }) {
  if (standalone) {
    return (
      <AP_Component className="ap-ref-section ap-ref-industries-page" id="industries">
        <div className="container ap-ref-industries-page-grid">
          <div className="ap-ref-industries-intro">
            <span className="eyebrow">WHO WE SERVE</span>
            <h1>Solutions for mission-driven <span>industries.</span></h1>
            <p>{content.body}</p>
            <div className="ap-ref-industry-signals">
              <div><AP_Icon name="nodes"/><strong>Connected</strong><small>Systems that move information cleanly.</small></div>
              <div><AP_Icon name="spark"/><strong>Human-centered</strong><small>Workflows designed around real users.</small></div>
              <div><AP_Icon name="chart"/><strong>Outcome-led</strong><small>Built around measurable operational value.</small></div>
            </div>
            <div className="ap-ref-start-card">
              <AP_Icon name="compass"/>
              <div><strong>Not sure where to start?</strong><p>Let&apos;s explore your goals and find the right solution path.</p><AP_Button variant="plain" contact>Start a conversation</AP_Button></div>
            </div>
          </div>
          <div className="ap-ref-industry-stack">
            {content.items.map((item) => (
              <article className="ap-ref-industry-row" key={item.key}>
                <div className="ap-ref-industry-row-copy">
                  <AP_Icon name={item.icon}/><div><h3>{item.title}</h3><p>{item.body}</p><span>Learn more →</span></div>
                </div>
                <div className="ap-ref-industry-row-art"><AP_IndustryVisual type={item.key}/></div>
              </article>
            ))}
            <article className="ap-ref-industry-row ap-ref-industry-row-open">
              <div className="ap-ref-industry-row-copy"><AP_Icon name="message"/><div><h3>{content.openDoorTitle}</h3><p>{content.openDoorBody}</p><AP_Button variant="plain" contact>{content.openDoorCta}</AP_Button></div></div>
              <div className="ap-ref-wave-art" aria-hidden="true"><i/><i/><i/><i/><i/></div>
            </article>
          </div>
        </div>
        <div className="container ap-ref-quality-band">
          <div><AP_Icon name="shield"/><span><strong>Secure by design</strong><small>Trust built in from day one.</small></span></div>
          <div><AP_Icon name="spark"/><span><strong>Proven outcomes</strong><small>Focused on practical impact.</small></span></div>
          <div><AP_Icon name="nodes"/><span><strong>Built to scale</strong><small>Modular, flexible, and ready to grow.</small></span></div>
        </div>
      </AP_Component>
    );
  }

  return (
    <AP_Component className="ap-ref-section ap-ref-industries-home" id="industries">
      <div className="container">
        <div className="ap-ref-section-heading-row">
          <div><span className="eyebrow">WHO WE SERVE</span><h2>{content.title}</h2></div>
          <p>{content.body}</p>
        </div>
        <div className="ap-ref-industry-cards">
          {content.items.map((item) => (
            <article className="ap-ref-industry-card" key={item.key}>
              <div className="ap-ref-industry-card-art"><AP_IndustryVisual type={item.key}/></div>
              <div className="ap-ref-industry-card-copy"><AP_Icon name={item.icon}/><h3>{item.title}</h3><p>{item.body}</p><span>Learn more →</span></div>
            </article>
          ))}
          <article className="ap-ref-industry-card ap-ref-industry-open-card">
            <div className="ap-ref-wave-art" aria-hidden="true"><i/><i/><i/><i/><i/></div>
            <div className="ap-ref-industry-card-copy"><AP_Icon name="message"/><h3>{content.openDoorTitle}</h3><p>{content.openDoorBody}</p><AP_Button variant="plain" contact>{content.openDoorCta}</AP_Button></div>
          </article>
        </div>
      </div>
    </AP_Component>
  );
}
