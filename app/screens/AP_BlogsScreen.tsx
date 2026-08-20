import { getCmsContent } from "@/shared/content";
import AP_Header from "@/app/components/AP_Header";
import AP_Footer from "@/app/components/AP_Footer";
import AP_Icon from "@/app/components/AP_Icon";
import AP_SubscribeForm from "@/app/components/AP_SubscribeForm";


export default async function AP_BlogsScreen() {
  const { data } = await getCmsContent("en");
  const page = data.blogs;

  return (
    <>
      <AP_Header nav={data.nav} activePath="/blogs" />
      <main className="subpage-main">
        <section className="subpage-hero">
          <div className="container subpage-hero-grid">
            <div className="subpage-copy">
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{page.title}<br/><span>{page.highlight}</span></h1>
              <p>{page.body}</p>
            </div>
            <aside className="blog-hero-card">
              <span className="blog-hero-card-icon"><AP_Icon name="mail"/></span>
              <h2>{page.subscribeTitle}</h2>
              <p>{page.subscribeBody}</p>
              <AP_SubscribeForm />
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
      <AP_Footer nav={data.nav} content={data.footer} />
    </>
  );
}
