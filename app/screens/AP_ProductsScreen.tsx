import { getCmsContent } from "@/shared/content";
import AP_Header from "@/app/components/AP_Header";
import AP_Footer from "@/app/components/AP_Footer";
import AP_Button from "@/app/components/AP_Button";
import AP_Icon from "@/app/components/AP_Icon";


export default async function AP_ProductsScreen() {
  const { data } = await getCmsContent("en");
  const page = data.products;

  return (
    <>
      <AP_Header nav={data.nav} activePath="/products" />
      <main className="subpage-main">
        <section className="subpage-hero">
          <div className="container subpage-hero-grid">
            <div className="subpage-copy">
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{page.title}<br/><span>{page.highlight}</span></h1>
              <p>{page.body}</p>
              <p className="secondary-copy">{page.secondaryBody}</p>
              <div className="subpage-actions">
                <AP_Button contact>{page.primaryCta}</AP_Button>
                <AP_Button href="/#solutions" variant="secondary">{page.secondaryCta}</AP_Button>
              </div>
            </div>
            <div className="product-console" aria-label="Future APEX product interface layout preview">
              <div className="console-bar"><i/><i/><i/></div>
              <div className="console-grid">
                <div className="console-side"><i/><i/><i/><i/><i/></div>
                <div className="console-panel">
                  <div className="console-stat"><i/><b/></div><div className="console-stat"><i/><b/></div><div className="console-stat"><i/><b/></div>
                  <div className="console-chart"><i/><i/><i/><i/><i/><i/></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="collection-section">
          <div className="container">
            <div className="collection-head">
              <div><span className="eyebrow">{page.suiteEyebrow}</span><h2>{page.suiteTitle}</h2></div>
              <p>{page.suiteBody}</p>
            </div>
            <div className="empty-collection">
              <div><span className="empty-collection-icon"><AP_Icon name="box"/></span><h3>{page.emptyTitle}</h3><p>{page.emptyBody}</p></div>
            </div>
          </div>
        </section>

        <section className="ecosystem-section">
          <div className="container ecosystem-card">
            <div><span className="eyebrow">{page.ecosystemEyebrow}</span><h2>{page.ecosystemTitle}</h2><p>{page.ecosystemBody}</p></div>
            <div className="ecosystem-diagram" aria-hidden="true">
              <div className="ecosystem-node"><span>Product</span></div><div className="ecosystem-node"><span>Product</span></div><div className="ecosystem-node"><span>Product</span></div><div className="ecosystem-node ecosystem-core"><span>Shared APEX foundation</span></div>
            </div>
          </div>
        </section>
      </main>
      <AP_Footer nav={data.nav} content={data.footer} />
    </>
  );
}
