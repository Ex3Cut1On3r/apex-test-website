import type { BlogsPageContent, SolutionsContent } from "@/shared/types";
import AP_Icon from "@/app/components/AP_Icon";

export default function AP_Insights({ blogs, solutions, compact = false }: { blogs: BlogsPageContent; solutions: SolutionsContent; compact?: boolean }) {
  const cards = solutions.items.slice(0, compact ? 3 : 4);
  return (
    <section className={`ap-ref-insights ${compact ? "ap-ref-insights-compact" : ""}`}>
      <div className="container">
        <div className="ap-ref-insights-head">
          <div><span className="eyebrow">INSIGHTS & UPDATES</span><h2>Ideas, perspectives,<br/>and expertise.</h2></div>
          <p>{blogs.emptyBody}</p>
        </div>
        <div className={`ap-ref-insight-grid ${compact ? "ap-ref-insight-grid-3" : ""}`}>
          {cards.map((item) => (
            <article className="ap-ref-insight-card" key={item.key}>
              <div className={`ap-ref-insight-art ap-ref-insight-art-${item.key}`}><AP_Icon name={item.icon}/><i/><i/><i/></div>
              <span className="eyebrow">EDITORIAL THEME</span>
              <h3>{item.title}</h3><p>{item.body}</p><small>Publishing soon</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
