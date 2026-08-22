import { getCmsContent } from "@/shared/content";
import AP_Header from "@/app/components/AP_Header";
import AP_Footer from "@/app/components/AP_Footer";
import AP_SubscribeForm from "@/app/components/AP_SubscribeForm";
import AP_DotField from "@/app/components/AP_DotField";
import AP_Icon from "@/app/components/AP_Icon";

export default async function AP_BlogsScreen() {
  const { data } = await getCmsContent("en");
  const page = data.blogs;
  return (
    <>
      <AP_Header nav={data.nav} activePath="/blogs" />
      <main className="ap-ref-blog-page">
        <section className="ap-ref-blog-hero">
          <div className="ap-ref-blog-dots"><AP_DotField dotRadius={1.3} dotSpacing={24} bulgeStrength={12} cursorRadius={280} glowRadius={150} gradientFrom="rgba(30,35,40,.10)" gradientTo="rgba(0,179,164,.20)"/></div>
          <div className="container ap-ref-blog-hero-grid">
            <div><span className="eyebrow">BLOG</span><h1>Building the future.<br/>Sharing <span>what&apos;s next.</span></h1><p>{page.body}</p><AP_SubscribeForm /><small>We respect your privacy. Unsubscribe anytime.</small></div>
            <div className="ap-ref-blog-network" aria-hidden="true"><div className="ap-ref-network-core">A</div>{["brain","database","layers","chart","shield","nodes"].map((icon,index)=><span key={icon} className={`n${index+1}`}><AP_Icon name={icon as never}/></span>)}</div>
          </div>
        </section>
        <section className="ap-ref-blog-content">
          <div className="container ap-ref-blog-main-grid">
            <div>
              <article className="ap-ref-blog-feature"><div><span className="eyebrow">FEATURED</span><h2>{page.emptyTitle}</h2><p>{page.emptyBody}</p><span className="ap-ref-text-link">Editorial space ready →</span></div><div className="ap-ref-blog-feature-art"><AP_Icon name="layers"/><i/><i/><i/></div></article>
              <div className="ap-ref-blog-filters">{page.categories.map((category,index)=><span className={index===0?"active":""} key={category}>{category}</span>)}</div>
              <div className="ap-ref-blog-card-grid">{data.solutions.items.slice(0,4).map((item)=><article key={item.key}><div className={`ap-ref-blog-card-art art-${item.key}`}><AP_Icon name={item.icon}/></div><span className="eyebrow">FUTURE EDITORIAL</span><h3>{item.title}</h3><p>{item.body}</p><small>Not published yet</small></article>)}</div>
            </div>
            <aside className="ap-ref-blog-sidebar"><span className="eyebrow">RECENT MILESTONES</span><div className="ap-ref-empty-timeline"><i/><div><strong>No milestones published yet.</strong><p>Approved company updates will appear here through the CMS.</p></div></div><div className="ap-ref-blog-subscribe-card"><AP_Icon name="mail"/><h3>{page.subscribeTitle}</h3><p>{page.subscribeBody}</p><AP_SubscribeForm /></div></aside>
          </div>
        </section>
        <section className="ap-ref-newsletter-band"><div className="container"><AP_Icon name="shield"/><div><strong>Be part of what&apos;s next.</strong><p>Get the latest milestones and updates from APEX.</p></div><AP_SubscribeForm /></div></section>
      </main>
      <AP_Footer nav={data.nav} content={data.footer} social={data.social} />
    </>
  );
}
