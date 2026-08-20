import type { Metadata } from "next";
import { getCmsContent, getContent } from "@/shared/content/content";
import ApHeader from "@/shared/components/ap_header";
import ApFooter from "@/shared/components/ap_footer";
import ApIcon from "@/shared/components/ap_icon";
import ApSubscribeForm from "@/shared/components/ap_subscribe_form";

export function generateMetadata(): Metadata {
  const page = getContent("en").blogs;
  return { title: `Blogs | APEX`, description: page.body };
}

export default async function BlogsPage() {
  const { data } = await getCmsContent("en");
  const page = data.blogs;

  return (
    <>
      <ApHeader nav={data.nav} activePath="/blogs" />
      <main className="subpage-main">
        <section className="subpage-hero">
          <div className="container subpage-hero-grid">
            <div className="subpage-copy">
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{page.title}<br/><span>{page.highlight}</span></h1>
              <p>{page.body}</p>
            </div>
            <aside className="blog-hero-card">
              <span className="blog-hero-card-icon"><ApIcon name="mail"/></span>
              <h2>{page.subscribeTitle}</h2>
              <p>{page.subscribeBody}</p>
              <ApSubscribeForm />
            </aside>
          </div>
        </section>

        <section className="blog-layout-section">
          <div className="container">
            <div className="blog-feature-shell">
              <div className="blog-feature-copy"><span className="feature-chip">{page.featuredLabel}</span><h2>{page.emptyTitle}</h2><p>{page.emptyBody}</p></div>
              <div className="blog-feature-visual" aria-hidden="true"><div className="blog-stack"><i/><i/><i/><i/></div></div>
            </div>
            <div className="blog-toolbar">{page.categories.map((category, index) => <span className={`blog-filter ${index === 0 ? "active" : ""}`} key={category}>{category}</span>)}</div>
            <div className="blog-empty-grid" aria-label="Future APEX blog collection layout">
              {[0,1,2,3,4,5].map((item) => <div className="blog-empty-card" key={item}><i/><i/><i/><i/></div>)}
              <div className="blog-empty-center"><strong>{page.emptyTitle}</strong>{page.emptyBody}</div>
            </div>
          </div>
        </section>
      </main>
      <ApFooter nav={data.nav} content={data.footer} />
    </>
  );
}
