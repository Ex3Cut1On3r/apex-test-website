import { getCmsContent } from "@/shared/content";
import AP_Header from "@/app/components/AP_Header";
import AP_Footer from "@/app/components/AP_Footer";
import AP_Icon from "@/app/components/AP_Icon";
import AP_SubscribeForm from "@/app/components/AP_SubscribeForm";
import AP_DotGrid from "@/app/components/AP_DotGrid";
import AP_GradientText from "@/app/components/AP_GradientText";
import AP_SpotlightCard from "@/app/components/AP_SpotlightCard";

export default async function AP_BlogsScreen() {
  const { data } = await getCmsContent("en");
  const page = data.blogs;

  return (
    <>
      <AP_Header nav={data.nav} activePath="/blogs" />
      <main className="subpage-main">
        <section className="subpage-hero relative overflow-hidden">
          <AP_DotGrid />
          <div className="container subpage-hero-grid relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_.8fr]">
            <div className="subpage-copy">
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{page.title}<br/><AP_GradientText>{page.highlight}</AP_GradientText></h1>
              <p>{page.body}</p>
            </div>
            <AP_SpotlightCard className="blog-hero-card">
              <span className="blog-hero-card-icon"><AP_Icon name="mail"/></span>
              <h2>{page.subscribeTitle}</h2>
              <p>{page.subscribeBody}</p>
              <AP_SubscribeForm />
            </AP_SpotlightCard>
          </div>
        </section>

        <section className="blog-layout-section">
          <div className="container">
            <AP_SpotlightCard className="blog-feature-shell grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
              <div className="blog-feature-copy"><span className="feature-chip">{page.featuredLabel}</span><h2>{page.emptyTitle}</h2><p>{page.emptyBody}</p></div>
              <div className="blog-feature-visual" aria-hidden="true"><div className="blog-stack"><i/><i/><i/><i/></div></div>
            </AP_SpotlightCard>
            <div className="blog-toolbar flex flex-wrap gap-2">{page.categories.map((category, index) => <span className={`blog-filter ${index === 0 ? "active" : ""}`} key={category}>{category}</span>)}</div>
            <div className="blog-empty-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Future APEX blog collection layout">
              {[0,1,2,3,4,5].map((item) => <div className="blog-empty-card" key={item}><i/><i/><i/><i/></div>)}
              <div className="blog-empty-center"><strong>{page.emptyTitle}</strong>{page.emptyBody}</div>
            </div>
          </div>
        </section>
      </main>
      <AP_Footer nav={data.nav} content={data.footer} social={data.social} />
    </>
  );
}
