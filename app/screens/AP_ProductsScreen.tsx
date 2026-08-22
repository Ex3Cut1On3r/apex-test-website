import { getCmsContent } from "@/shared/content";
import AP_Header from "@/app/components/AP_Header";
import AP_Footer from "@/app/components/AP_Footer";
import AP_Button from "@/app/components/AP_Button";
import AP_Icon from "@/app/components/AP_Icon";
import AP_DotField from "@/app/components/AP_DotField";
import AP_CtaBand from "@/app/components/AP_CtaBand";

export default async function AP_ProductsScreen() {
  const { data } = await getCmsContent("en");
  const page = data.products;
  return <><AP_Header nav={data.nav} activePath="/products"/><main className="ap-ref-products-page"><section className="ap-ref-products-hero"><div className="ap-ref-products-dots"><AP_DotField dotRadius={1.4} dotSpacing={24} bulgeStrength={13} cursorRadius={300} glowRadius={150}/></div><div className="container ap-ref-products-grid"><div><span className="eyebrow">{page.eyebrow}</span><h1>{page.title} <span>{page.highlight}</span></h1><p>{page.body}</p><div><AP_Button contact>{page.primaryCta}</AP_Button><AP_Button href="/solutions" variant="secondary">{page.secondaryCta}</AP_Button></div></div><div className="ap-ref-product-shell" aria-hidden="true"><div className="ap-ref-product-shell-top"><span>APEX PRODUCT SYSTEM</span><i/><i/></div><div className="ap-ref-product-shell-main"><aside><i/><i/><i/><i/></aside><section><div className="ap-ref-product-stat"><i/><i/></div><div className="ap-ref-product-stat"><i/><i/></div><div className="ap-ref-product-chart"><b/><b/><b/><b/><b/><b/></div></section></div></div></div></section><section className="ap-ref-product-catalog"><div className="container"><div className="ap-ref-section-heading-row"><div><span className="eyebrow">{page.suiteEyebrow}</span><h2>{page.suiteTitle}</h2></div><p>{page.suiteBody}</p></div><div className="ap-ref-product-empty"><AP_Icon name="box"/><div><h3>{page.emptyTitle}</h3><p>{page.emptyBody}</p></div></div></div></section><AP_CtaBand content={data.method}/></main><AP_Footer nav={data.nav} content={data.footer} social={data.social}/></>;
}
