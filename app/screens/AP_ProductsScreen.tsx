import { getCmsContent } from "@/shared/content";
import AP_Header from "@/app/components/AP_Header";
import AP_Footer from "@/app/components/AP_Footer";
import AP_Button from "@/app/components/AP_Button";
import AP_Icon from "@/app/components/AP_Icon";
import AP_DotGrid from "@/app/components/AP_DotGrid";
import AP_GradientText from "@/app/components/AP_GradientText";
import AP_TiltCard from "@/app/components/AP_TiltCard";
import AP_SpotlightCard from "@/app/components/AP_SpotlightCard";

export default async function AP_ProductsScreen() {
  const { data } = await getCmsContent("en");
  const page = data.products;

  return (
    <>
      <AP_Header nav={data.nav} activePath="/products" />
      <main className="subpage-main">
        <section className="subpage-hero relative overflow-hidden">
          <AP_DotGrid />
          <div className="container subpage-hero-grid relative z-10 grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div className="subpage-copy">
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{page.title}<br/><AP_GradientText>{page.highlight}</AP_GradientText></h1>
              <p>{page.body}</p>
              <p className="secondary-copy">{page.secondaryBody}</p>
              <div className="subpage-actions flex flex-wrap gap-3">
                <AP_Button contact>{page.primaryCta}</AP_Button>
                <AP_Button href="/#solutions" variant="secondary">{page.secondaryCta}</AP_Button>
              </div>
            </div>
            <AP_TiltCard max={3} className="product-console animate-apex-float" aria-label="Future APEX product interface layout preview">
              <div className="console-bar"><i/><i/><i/></div>
              <div className="console-grid">
                <div className="console-side"><i/><i/><i/><i/><i/></div>
                <div className="console-panel">
                  <div className="console-stat"><i/><b/></div><div className="console-stat"><i/><b/></div><div className="console-stat"><i/><b/></div>
                  <div className="console-chart"><i/><i/><i/><i/><i/><i/></div>
                </div>
              </div>
            </AP_TiltCard>
          </div>
        </section>

        <section className="collection-section">
          <div className="container">
            <div className="collection-head grid gap-6 lg:grid-cols-2 lg:items-end">
              <div><span className="eyebrow">{page.suiteEyebrow}</span><h2>{page.suiteTitle}</h2></div>
              <p>{page.suiteBody}</p>
            </div>
            <AP_SpotlightCard className="empty-collection">
              <div><span className="empty-collection-icon"><AP_Icon name="box"/></span><h3>{page.emptyTitle}</h3><p>{page.emptyBody}</p></div>
            </AP_SpotlightCard>
          </div>
        </section>

        <section className="ecosystem-section">
          <div className="container ecosystem-card grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div><span className="eyebrow">{page.ecosystemEyebrow}</span><h2>{page.ecosystemTitle}</h2><p>{page.ecosystemBody}</p></div>
            <div className="ecosystem-diagram ap-orbit-shell" aria-hidden="true">
              <div className="ecosystem-node"><span>Product</span></div><div className="ecosystem-node"><span>Product</span></div><div className="ecosystem-node"><span>Product</span></div><div className="ecosystem-node ecosystem-core"><span>Shared APEX foundation</span></div>
            </div>
          </div>
        </section>
      </main>
      <AP_Footer nav={data.nav} content={data.footer} social={data.social} />
    </>
  );
}
