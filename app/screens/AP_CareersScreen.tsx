import { getCmsContent } from "@/shared/content";
import AP_Header from "@/app/components/AP_Header";
import AP_Footer from "@/app/components/AP_Footer";
import AP_Button from "@/app/components/AP_Button";
import AP_Icon from "@/app/components/AP_Icon";
import AP_TeamVisual from "@/app/components/AP_TeamVisual";

export default async function AP_CareersScreen() {
  const { data } = await getCmsContent("en");
  const page = data.careers;
  const process = ["Application Review","Intro Call","Skills & Culture","Final Interview","Offer & Onboard"];
  return (
    <>
      <AP_Header nav={data.nav} activePath="/careers" />
      <main className="ap-ref-careers-page">
        <section className="ap-ref-careers-hero"><div className="container ap-ref-careers-hero-grid"><div><span className="eyebrow">CAREERS AT APEX</span><h1>Build intelligent systems.<br/>Create <span>real impact.</span></h1><p>{page.body}</p><div className="ap-ref-career-actions"><AP_Button href="#open-roles">Browse open roles</AP_Button><a href="#life-at-apex">Life at APEX →</a></div></div><AP_TeamVisual/></div></section>
        <section className="ap-ref-career-values" id="life-at-apex"><div className="container"><div className="ap-ref-career-values-head"><span className="eyebrow">OUR VALUES</span><h2>The way we build.</h2></div><div className="ap-ref-career-value-grid">{page.values.map((value,index)=><article key={value.title}><span>0{index+1}</span><AP_Icon name={["shield","spark","nodes"][index] as never}/><h3>{value.title}</h3><p>{value.body}</p></article>)}</div></div></section>
        <section className="ap-ref-career-roles" id="open-roles"><div className="container ap-ref-career-roles-grid"><div><span className="eyebrow">OPEN ROLES</span><h2>Join our mission</h2><p>{page.rolesBody}</p><AP_Button variant="plain" contact>Introduce yourself →</AP_Button></div><div className="ap-ref-role-list">{page.roles.length ? page.roles.map((role)=><article key={role.title}><div><strong>{role.title}</strong><small>{role.type} • {role.location}</small></div><p>{role.summary}</p><span>View role →</span></article>) : <div className="ap-ref-no-roles"><AP_Icon name="briefcase"/><div><strong>{page.emptyTitle}</strong><p>{page.emptyBody}</p></div></div>}</div></div></section>
        <section className="ap-ref-career-interest"><div className="container ap-ref-career-interest-grid"><div><span className="eyebrow">APEX TEAM</span><h2>We&apos;d love to<br/>hear from you.</h2><p>Tell us what you build best and where you think you can create unusual value.</p></div><div className="ap-ref-interest-form"><div className="ap-ref-form-grid"><label>Full Name<input placeholder="Your name" readOnly/></label><label>Email<input placeholder="you@example.com" readOnly/></label><label>Area of interest<input placeholder="Engineering / Product / Data" readOnly/></label><label>Location<input placeholder="Lebanon / Remote" readOnly/></label><label className="wide">Your note<textarea placeholder="Tell us where you create unusual value." readOnly/></label></div><AP_Button contact>Start a conversation</AP_Button><small>This preview routes to the APEX contact flow; application storage will be connected later.</small></div></div></section>
        <section className="ap-ref-career-process"><div className="container"><span className="eyebrow">OUR HIRING PROCESS</span><h2>What to expect</h2><div>{process.map((item,index)=><article key={item}><span>{index+1}</span><strong>{item}</strong><small>{index===0?"We review your application and get back to you.":index===1?"A quick call to learn more about you and the role.":index===2?"A practical conversation about how you think and build.":index===3?"Meet with leaders and align on impact and growth.":"We extend an offer and prepare you for an amazing start."}</small></article>)}</div></div></section>
        <section className="ap-ref-career-bottom"><div className="container"><AP_Icon name="nodes"/><div><strong>Do meaningful work. With great people.</strong><p>Let&apos;s build the future of intelligent systems — together.</p></div><AP_Button href="#open-roles" variant="light">Browse open roles</AP_Button></div></section>
      </main>
      <AP_Footer nav={data.nav} content={data.footer} social={data.social} />
    </>
  );
}
