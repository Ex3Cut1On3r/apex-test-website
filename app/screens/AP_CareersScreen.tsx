import { getCmsContent } from "@/shared/content";
import type { AP_IconName, CareerStat, CareerStep } from "@/shared/types";
import AP_Header from "@/app/components/AP_Header";
import AP_Footer from "@/app/components/AP_Footer";
import AP_Icon from "@/app/components/AP_Icon";
import AP_TeamVisual from "@/app/components/AP_TeamVisual";
import AP_CareerApplyForm from "@/app/components/AP_CareerApplyForm";

const VALUE_ICONS: AP_IconName[] = ["shield-check", "sparkles", "users", "bulb", "rocket"];
const ROLE_ICONS: AP_IconName[] = ["code", "brain", "cloud", "chart", "trend-up"];

const FALLBACK_STEPS: CareerStep[] = [
  { title: "Application Review", body: "We review your application and get back to you." },
  { title: "Intro Call", body: "A quick call to learn more about you and the role." },
  { title: "Skills & Culture", body: "Technical or practical assessment and team conversation." },
  { title: "Final Interview", body: "Meet with leaders and align on impact and growth." },
  { title: "Offer & Onboard", body: "We extend an offer and prepare you for an amazing start." },
];

export default async function AP_CareersScreen() {
  const { data } = await getCmsContent("en");
  const page = data.careers;

  const stats: CareerStat[] = page.heroStats ?? [];
  const steps = page.steps?.length ? page.steps : FALLBACK_STEPS;
  const locations = Array.from(new Set([...page.roles.map((role) => role.location), "Remote", "Other"])).filter(Boolean);

  return (
    <>
      <AP_Header nav={data.nav} activePath="/careers" />
      <main className="ap-cx">
        <section className="ap-cx-hero">
          <div className="ap-cx-hero-media">
            {page.heroImage
              ? <img src={page.heroImage} alt="The APEX team collaborating in the studio" />
              : <AP_TeamVisual />}
            {stats.length > 0 && (
              <div className="ap-cx-stats">
                {stats.map((stat) => (
                  <div key={stat.value}>
                    <AP_Icon name={stat.icon ?? "users"} />
                    <div><strong>{stat.value}</strong><small>{stat.label}</small></div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="container ap-cx-hero-inner">
            <div className="ap-cx-hero-copy">
              <span className="ap-cx-eyebrow">{page.eyebrow}</span>
              <h1>{page.title}<br /><span>{page.highlight}</span></h1>
              <p>{page.body}</p>
              <div className="ap-cx-hero-actions">
                <a className="ap-cx-btn" href="#open-roles"><span>{page.primaryCta}</span><AP_Icon name="arrow-right" /></a>
                <a className="ap-cx-textlink" href="#life-at-apex"><span>{page.secondaryCta ?? "Life at APEX"}</span><AP_Icon name="arrow-right" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="ap-cx-values" id="life-at-apex">
          <div className="container ap-cx-split">
            <div>
              <span className="ap-cx-eyebrow">{page.valuesEyebrow}</span>
              <h2>{page.valuesTitle}</h2>
            </div>
            <div className="ap-cx-value-grid">
              {page.values.map((value, index) => (
                <article key={value.title}>
                  <AP_Icon name={value.icon ?? VALUE_ICONS[index % VALUE_ICONS.length]} />
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ap-cx-roles" id="open-roles">
          <div className="container ap-cx-split">
            <div className="ap-cx-roles-head">
              <div>
                <span className="ap-cx-eyebrow">{page.rolesEyebrow}</span>
                <h2>{page.rolesTitle}</h2>
              </div>
              <a className="ap-cx-textlink" href="#apply"><span>{page.viewAllLabel ?? "View all roles"}</span><AP_Icon name="arrow-right" /></a>
            </div>
            <div className="ap-cx-role-grid">
              {page.roles.length ? page.roles.map((role, index) => (
                <article className="ap-cx-role" key={role.title}>
                  <div className="ap-cx-role-top">
                    <strong>{role.title}</strong>
                    <span className="ap-cx-role-icon"><AP_Icon name={role.icon ?? ROLE_ICONS[index % ROLE_ICONS.length]} /></span>
                  </div>
                  <div className="ap-cx-role-meta">
                    <span><AP_Icon name="pin" />{role.location}</span>
                    <span><AP_Icon name="building" />{role.type}</span>
                  </div>
                  <p>{role.summary}</p>
                  <a className="ap-cx-role-link" href="#apply" data-apply-role={role.title}><span>View role</span><AP_Icon name="arrow-right" /></a>
                </article>
              )) : (
                <div className="ap-cx-no-roles">
                  <AP_Icon name="briefcase" />
                  <div>
                    <strong>{page.emptyTitle}</strong>
                    <p>{page.emptyBody}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="ap-cx-apply">
          <div className="container ap-cx-split">
            <div className="ap-cx-apply-head">
              <span className="ap-cx-eyebrow">{page.applyEyebrow ?? "Apply now"}</span>
              <h2>{page.applyTitle ?? "We'd love to hear from you"}</h2>
              {page.applyBody && <p>{page.applyBody}</p>}
            </div>
            <AP_CareerApplyForm
              roles={page.roles}
              locations={locations}
              note={page.applyNote ?? "Your information is safe with us. We'll only use it to review your application and will never share it without your consent."}
            />
          </div>
        </section>

        <section className="ap-cx-process">
          <div className="container ap-cx-split">
            <div>
              <span className="ap-cx-eyebrow">{page.processEyebrow ?? "Our hiring process"}</span>
              <h2>{page.processTitle ?? "What to expect"}</h2>
            </div>
            <ol className="ap-cx-steps">
              {steps.map((step, index) => (
                <li className="ap-cx-step" key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.body}</p>
                  </div>
                  <i className="ap-cx-step-arrow" aria-hidden="true"><AP_Icon name="arrow-right" /></i>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ap-cx-closing">
          <div className="container">
            <span className="ap-cx-closing-icon"><AP_Icon name="users" /></span>
            <div>
              <strong>{page.closingTitle ?? "Do meaningful work. With great people."}</strong>
              <p>{page.closingBody ?? "Let's build the future of intelligent systems—together."}</p>
            </div>
            <a className="ap-cx-btn ap-cx-btn-light" href="#open-roles"><span>{page.closingCta ?? page.primaryCta}</span><AP_Icon name="arrow-right" /></a>
          </div>
        </section>
      </main>
      <AP_Footer nav={data.nav} content={data.footer} social={data.social} />
    </>
  );
}
