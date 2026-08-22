import type { SolutionsContent } from "@/shared/types";
import Link from "next/link";
import AP_Component from "@/app/components/AP_Component";
import AP_Icon from "@/app/components/AP_Icon";

export default function AP_Solutions({ content, standalone = false }: { content: SolutionsContent; standalone?: boolean }) {
  return (
    <AP_Component className={`ap-ref-section ap-ref-solutions ${standalone ? "ap-ref-solutions-page" : ""}`} id="solutions">
      <div className="container ap-ref-split-layout">
        <div className="ap-ref-section-copy">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
          {!standalone && <Link href="/solutions" className="ap-ref-text-link">Explore all solutions <span>→</span></Link>}
        </div>
        <div className="ap-ref-solution-grid">
          {content.items.map((item) => (
            <article className="ap-ref-solution-card" id={item.key} key={item.key}>
              <div className="ap-ref-card-icon"><AP_Icon name={item.icon}/></div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="ap-ref-card-arrow" aria-hidden="true">→</span>
            </article>
          ))}
        </div>
      </div>
    </AP_Component>
  );
}
