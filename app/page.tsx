import Image from "next/image";
import Header from "@/components/Header";
import ContactButton, { ContactModal } from "@/components/ContactModal";
import {
  BrainIcon,
  BriefcaseIcon,
  ChartIcon,
  CodeIcon,
  CompassIcon,
  DatabaseIcon,
  FactoryIcon,
  FlowIcon,
  GridIcon,
  LayersIcon,
  NodesIcon,
  PeopleIcon,
  PlaneIcon,
  ShieldIcon,
} from "@/components/Icons";

const solutions = [
  { icon: BrainIcon, title: "AI & Intelligent Automation", body: "Apply AI where it removes repetitive work, improves response quality, and accelerates decisions." },
  { icon: LayersIcon, title: "Legacy Modernization", body: "Modernize aging applications and workflows without discarding the business logic that still matters." },
  { icon: NodesIcon, title: "System Integration", body: "Connect software, teams, and data so information moves cleanly through the operation." },
  { icon: DatabaseIcon, title: "Data Infrastructure", body: "Create dependable data foundations for reporting, analytics, automation, and AI-enabled operations." },
  { icon: CodeIcon, title: "Custom Software", body: "Build internal tools and customer experiences around how the business actually needs to work." },
  { icon: FlowIcon, title: "Workflow Automation", body: "Turn manual handoffs, approvals, follow-ups, and reconciliation into reliable digital flows." },
];

const industries = [
  { icon: FactoryIcon, no: "01", title: "Manufacturing", body: "Production visibility, operational workflows, integrations, and data that can be acted on." },
  { icon: PlaneIcon, no: "02", title: "Aerospace & Defense", body: "Modern systems for environments where reliability, traceability, and disciplined execution matter." },
  { icon: PeopleIcon, no: "03", title: "Recruiting & Staffing", body: "Candidate workflows, matching operations, communication, reporting, and back-office automation." },
  { icon: BriefcaseIcon, no: "04", title: "Service Businesses", body: "Connected customer journeys and operations that reduce admin work and protect delivery quality." },
];

const process = [
  { icon: CompassIcon, no: "01", title: "Discover", body: "Map the workflow, users, constraints, data, and the real source of friction." },
  { icon: GridIcon, no: "02", title: "Architect", body: "Define the target system and the cleanest path from today’s environment to the new one." },
  { icon: CodeIcon, no: "03", title: "Build", body: "Develop the highest-value components first and validate them against real operational needs." },
  { icon: NodesIcon, no: "04", title: "Integrate", body: "Connect the new layer to the software, data, and people already inside the business." },
  { icon: ChartIcon, no: "05", title: "Evolve", body: "Measure what changed, strengthen the system, and expand where the value is clear." },
];

function Arrow() {
  return <span className="text-arrow" aria-hidden="true">→</span>;
}

function MountainVisual() {
  return (
    <div className="mountain-frame">
      <div className="mountain-frame-head">
        <span>APEX / SYSTEM MAP</span>
        <span className="system-live"><i /> LIVE</span>
      </div>
      <div className="mountain-canvas">
        <svg viewBox="0 0 720 500" role="img" aria-labelledby="mountainTitle mountainDesc" className="mountain-art">
          <title id="mountainTitle">Apex growth path</title>
          <desc id="mountainDesc">An ascending system path across a structured mountain with five evenly spaced milestones.</desc>
          <defs>
            <linearGradient id="peakFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F8FAFB" />
              <stop offset="55%" stopColor="#E7EDF0" />
              <stop offset="100%" stopColor="#D9E1E5" />
            </linearGradient>
            <linearGradient id="peakShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C8D1D6" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#F8FAFB" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="routeGlow" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#1EC6B8" />
              <stop offset="100%" stopColor="#00A99B" />
            </linearGradient>
          </defs>

          <g className="contour-lines" opacity="0.72">
            <path d="M98 432C190 379 240 342 306 281C365 227 406 150 466 84" />
            <path d="M160 443C235 393 302 354 357 298C411 243 451 176 501 117" />
            <path d="M235 446C301 411 361 368 405 318C450 267 487 207 533 151" />
          </g>

          <path className="mountain-fill" d="M76 438L153 390L222 337L280 284L338 220L397 145L471 58L523 129L578 219L638 334L689 438H76Z" fill="url(#peakFill)" />
          <path d="M471 58L397 145L434 179L405 207L442 246L398 277L437 321L380 360L418 438H689L638 334L578 219L523 129L471 58Z" fill="url(#peakShade)" opacity="0.82" />
          <path className="mountain-outline" d="M76 438L153 390L222 337L280 284L338 220L397 145L471 58L523 129L578 219L638 334L689 438" />

          <path className="route-glow" d="M120 420C250 390 370 110 575 50" />
          <path className="route-line" d="M120 420C250 390 370 110 575 50" stroke="url(#routeGlow)" />

          {[
            [120, 420],
            [239.7, 335.2],
            [338.9, 224.4],
            [445.5, 120.9],
            [575, 50],
          ].map(([cx, cy], index) => (
            <g key={`${cx}-${cy}`} className="route-node">
              <circle cx={cx} cy={cy} r={index === 4 ? 18 : 14} className="route-node-ring" />
              <circle cx={cx} cy={cy} r={index === 4 ? 6 : 5} className="route-node-core" />
            </g>
          ))}
        </svg>

        <div className="mountain-caption">
          <Image src="/apex-mark.svg" alt="" width={60} height={45} />
          <div><span>CONTINUOUS IMPROVEMENT</span><strong>Systems that climb with the business.</strong></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">AI & DIGITAL SYSTEMS</span>
              <h1>Intelligent systems.<br /><span>Real impact.</span></h1>
              <p className="hero-lead">APEX designs software, AI, data, and workflow systems that help businesses modernize operations and scale with confidence.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#solutions">Explore Solutions <Arrow /></a>
                <ContactButton className="button-secondary">Book a Consultation</ContactButton>
              </div>
              <div className="hero-principles" aria-label="Apex delivery principles">
                <div><ShieldIcon /><strong>Secure by design</strong><span>Disciplined foundations</span></div>
                <div><NodesIcon /><strong>End to end</strong><span>Systems that connect</span></div>
                <div><ChartIcon /><strong>Measurable</strong><span>Built around outcomes</span></div>
              </div>
            </div>
            <MountainVisual />
          </div>
        </section>

        <section className="statement" id="about">
          <div className="container statement-grid">
            <p className="statement-title">Modernization should make the operation simpler — not add another layer of complexity.</p>
            <p>We start with the business process, then design the technology around it. That keeps the work grounded in adoption, reliability, and measurable operational value.</p>
          </div>
        </section>

        <section className="section section-soft" id="solutions">
          <div className="container">
            <div className="section-intro center">
              <span className="eyebrow">SOLUTIONS</span>
              <h2>Modern systems for modern business.</h2>
              <p>From intelligent automation to full-stack engineering, Apex builds the connected digital systems behind faster, clearer operations.</p>
            </div>
            <div className="solutions-grid">
              {solutions.map(({ icon: Icon, title, body }, index) => (
                <article className="solution-card" key={title}>
                  <div className="solution-top"><span className="solution-number">0{index + 1}</span><div className="icon-frame"><Icon /></div></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <ContactButton className="text-button">Discuss this capability</ContactButton>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="industries">
          <div className="container">
            <div className="section-intro split">
              <div><span className="eyebrow">INDUSTRIES</span><h2>Built for operationally demanding businesses.</h2></div>
              <p>Apex is most valuable where disconnected processes, legacy tools, and manual work are expensive enough to hold the business back.</p>
            </div>
            <div className="industry-grid">
              {industries.map(({ icon: Icon, no, title, body }) => (
                <article className="industry-card" key={title}>
                  <div className="industry-top"><Icon /><span>{no}</span></div>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section" id="case-studies">
          <div className="container">
            <div className="case-heading">
              <div><span className="eyebrow">CASE STUDIES</span><h2>Work shown with context, not hype.</h2></div>
              <p>Each case study is designed to explain the business problem, Apex’s contribution, and verified outcomes. No invented numbers, no empty claims.</p>
            </div>

            <article className="case-card">
              <div className="case-visual">
                <div className="case-browser">
                  <div className="browser-bar"><span /><span /><span /><strong>tutwithus.com</strong></div>
                  <Image
                    src="/tutwithus-reference.png"
                    alt="TutWithUs website, a previous Apex collaboration"
                    width={2047}
                    height={1299}
                    sizes="(max-width: 900px) 100vw, 56vw"
                  />
                </div>
              </div>
              <div className="case-content">
                <div className="case-brand-line"><Image src="/tutwithus-logo.png" alt="TutWithUs" width={195} height={64} /><div><strong>Selected collaboration</strong><small>Education platform</small></div></div>
                <h3>A polished tutoring experience built around clarity and trust.</h3>
                <p className="case-summary">TutWithUs is presented as a previous Apex collaboration. The current case-study copy stays deliberately factual until the team approves public scope and performance metrics.</p>
                <div className="case-facts">
                  <div><span>CONTEXT</span><p>An online tutoring experience must make tutor choice, pricing, scheduling, and service expectations easy to understand.</p></div>
                  <div><span>APEX CONTRIBUTION</span><p>Product and engineering collaboration supporting a professional digital experience and the platform’s continued evolution.</p></div>
                  <div><span>READY TO EXPAND</span><p>The structure is ready for verified scope, stack, timeline, challenges, screenshots, and measurable results as more case studies are approved.</p></div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-intro center narrow">
              <span className="eyebrow">THE APEX METHOD</span>
              <h2>A disciplined path from friction to impact.</h2>
              <p>Each step narrows uncertainty and keeps the build aligned with the operation.</p>
            </div>
            <div className="process-grid">
              {process.map(({ icon: Icon, no, title, body }) => (
                <article className="process-card" key={no}>
                  <div className="process-head"><span>{no}</span><Icon /></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="transformation-section">
          <div className="container transformation-grid">
            <div className="transformation-copy">
              <span className="eyebrow eyebrow-light">FROM FRAGMENTED TO CONNECTED</span>
              <h2>One operating flow instead of five workarounds.</h2>
              <p>Apex connects the points where teams currently compensate for disconnected systems with spreadsheets, email, manual entry, and repeated follow-up.</p>
              <div className="impact-list">
                <div><strong>01</strong><span>Reduce repetitive handoffs</span></div>
                <div><strong>02</strong><span>Create shared operational visibility</span></div>
                <div><strong>03</strong><span>Move data once, not repeatedly</span></div>
                <div><strong>04</strong><span>Keep people focused on judgment and service</span></div>
              </div>
            </div>
            <div className="workflow-panel" aria-label="Before and after workflow comparison">
              <div className="workflow-column before">
                <span className="workflow-title">BEFORE</span>
                <div>Customer request</div><b>↓</b><div>Email / inbox</div><b>↓</b><div>Spreadsheet</div><b>↓</b><div>Manual update</div><b>↓</b><div>Delayed report</div>
              </div>
              <div className="workflow-center"><Image src="/apex-mark.svg" alt="Apex" width={52} height={39} /><span>APEX SYSTEM LAYER</span></div>
              <div className="workflow-column after">
                <span className="workflow-title">AFTER</span>
                <div>Connected intake</div><b>↓</b><div>Automated routing</div><b>↓</b><div>Unified data</div><b>↓</b><div>Live workflow</div><b>↓</b><div>Clear visibility</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container cta-card">
            <div><span className="eyebrow eyebrow-light">BUILD WHAT&apos;S NEXT</span><h2>Turn operational friction into a system your business can grow on.</h2></div>
            <ContactButton>Start a Conversation</ContactButton>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand"><Image src="/apex-logo.svg" alt="APEX" width={160} height={49} /><p>Intelligent systems.<br />Real impact.</p></div>
          <div><strong>Solutions</strong><a href="#solutions">AI & Automation</a><a href="#solutions">Modernization</a><a href="#solutions">Integrations</a><a href="#solutions">Custom Software</a></div>
          <div><strong>Industries</strong><a href="#industries">Manufacturing</a><a href="#industries">Aerospace & Defense</a><a href="#industries">Recruiting & Staffing</a><a href="#industries">Service Businesses</a></div>
          <div><strong>Company</strong><a href="#case-studies">Case Studies</a><a href="#process">Method</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} APEX. All rights reserved.</span><span>AI & DIGITAL SYSTEMS</span></div>
      </footer>
      <ContactModal />
    </>
  );
}
