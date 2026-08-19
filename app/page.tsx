import Image from "next/image";
import Header from "@/components/Header";
import ContactButton from "@/components/ContactModal";
import { CaseStudyButton } from "@/components/CaseStudyModal";
import {
  ArrowRightIcon,
  BrainIcon,
  BriefcaseIcon,
  CalendarIcon,
  ChartIcon,
  CheckIcon,
  CodeIcon,
  CompassIcon,
  DatabaseIcon,
  FlowIcon,
  GlobeIcon,
  GraduationIcon,
  GridIcon,
  LayersIcon,
  LeafIcon,
  MessageIcon,
  NodesIcon,
  SearchIcon,
  ShieldIcon,
  SparkIcon,
} from "@/components/Icons";

const solutions = [
  { key: "ai", icon: BrainIcon, no: "01", title: "AI & Intelligent Automation", body: "Apply AI where it removes repetitive work, improves response quality, and accelerates decisions." },
  { key: "legacy", icon: LayersIcon, no: "02", title: "Legacy Modernization", body: "Modernize aging applications and workflows without discarding the business logic that still matters." },
  { key: "integration", icon: NodesIcon, no: "03", title: "System Integration", body: "Connect software, teams, and data so information moves cleanly through the operation." },
  { key: "data", icon: DatabaseIcon, no: "04", title: "Data Infrastructure", body: "Create dependable data foundations for reporting, analytics, automation, and AI-enabled operations." },
  { key: "software", icon: CodeIcon, no: "05", title: "Custom Software", body: "Build internal tools and customer experiences around how the business actually needs to work." },
  { key: "workflow", icon: FlowIcon, no: "06", title: "Workflow Automation", body: "Turn manual handoffs, approvals, follow-ups, and reconciliation into reliable digital flows." },
];

const process = [
  { icon: CompassIcon, no: "01", title: "Discover", body: "Map the workflow, users, constraints, data, and the real source of friction." },
  { icon: GridIcon, no: "02", title: "Architect", body: "Define the target system and the cleanest path from today’s environment to the new one." },
  { icon: CodeIcon, no: "03", title: "Build", body: "Develop the highest-value components first and validate them against real operational needs." },
  { icon: NodesIcon, no: "04", title: "Integrate", body: "Connect the new layer to the software, data, and people already inside the business." },
  { icon: ChartIcon, no: "05", title: "Evolve", body: "Measure what changed, strengthen the system, and expand where the value is clear." },
];

function ArchitectureVisual() {
  return (
    <div className="architecture-wrap" aria-label="APEX AI systems architecture illustration">
      <svg viewBox="0 0 760 620" className="architecture-svg" role="img" aria-labelledby="archTitle archDesc">
        <title id="archTitle">APEX AI systems architecture</title>
        <desc id="archDesc">A layered system architecture connecting automation, analytics, AI models, integrations, and data.</desc>
        <defs>
          <linearGradient id="platformTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#ECF9F7"/></linearGradient>
          <linearGradient id="platformSide" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E3EAED"/><stop offset="1" stopColor="#C9D2D7"/></linearGradient>
          <linearGradient id="tealEdge" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#26D2C2"/><stop offset="1" stopColor="#00A99B"/></linearGradient>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#11252B" floodOpacity=".14"/></filter>
          <filter id="cardShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="10" stdDeviation="11" floodColor="#1E2328" floodOpacity=".08"/></filter>
        </defs>

        <g className="arch-orbits" opacity=".55">
          <ellipse cx="390" cy="330" rx="278" ry="178" fill="none" stroke="#DCE6E8" strokeWidth="1.5" strokeDasharray="4 10"/>
          <ellipse cx="390" cy="330" rx="220" ry="132" fill="none" stroke="#DCE6E8" strokeWidth="1.2"/>
          <path d="M115 330C220 248 563 234 671 326" fill="none" stroke="#D8E3E5" strokeWidth="1.2"/>
          <circle cx="143" cy="298" r="5" fill="#00B3A4"/><circle cx="638" cy="285" r="5" fill="#00B3A4"/><circle cx="586" cy="448" r="4" fill="#00B3A4"/><circle cx="208" cy="457" r="4" fill="#00B3A4"/>
        </g>

        <g filter="url(#softShadow)">
          <path d="M237 421 382 492 545 412 400 341Z" fill="#D3DBDF" opacity=".58"/>
          <path d="M226 390 385 470 556 383 396 305Z" fill="url(#platformSide)" stroke="#D3DCDF"/>
          <path d="M226 365 385 445 556 358 396 280Z" fill="#F7F9FA" stroke="#D9E1E4"/>
          <path d="M216 331 386 416 567 324 397 241Z" fill="url(#platformSide)" stroke="#CFD8DC"/>
          <path d="M216 303 386 388 567 296 397 213Z" fill="#FAFCFC" stroke="#D9E2E4"/>
          <path d="M204 257 389 349 580 253 395 161Z" fill="#D4DCDF" stroke="#C9D4D7"/>
          <path d="M204 228 389 320 580 224 395 132Z" fill="url(#platformTop)" stroke="#C9D4D7" strokeWidth="1.4"/>
          <path d="M204 228 389 320 580 224" fill="none" stroke="url(#tealEdge)" strokeWidth="6"/>
          <text x="389" y="215" textAnchor="middle" fill="#1E2328" fontSize="18" fontWeight="800" letterSpacing="2">APEX</text>
          <text x="389" y="237" textAnchor="middle" fill="#7B868C" fontSize="8.8" fontWeight="700" letterSpacing="1.6">AI SYSTEMS ARCHITECTURE</text>
          <text x="390" y="286" textAnchor="middle" fill="#849097" fontSize="8.5" letterSpacing="1.2">INTELLIGENT LAYER</text>
          <text x="390" y="354" textAnchor="middle" fill="#849097" fontSize="8.5" letterSpacing="1.2">INTEGRATION LAYER</text>
          <text x="390" y="417" textAnchor="middle" fill="#849097" fontSize="8.5" letterSpacing="1.2">DATA LAYER</text>
        </g>

        <ArchCard x={116} y={128} title="AUTOMATION" kind="automation" />
        <ArchCard x={500} y={85} title="ANALYTICS" kind="analytics" />
        <ArchCard x={586} y={271} title="AI MODELS" kind="models" />
        <ArchCard x={506} y={440} title="INTEGRATIONS" kind="integrations" />
        <ArchCard x={102} y={380} title="DATA" kind="data" />

        <g stroke="#00B3A4" strokeWidth="1.6" fill="none" opacity=".78">
          <path d="M247 186 302 224"/><path d="M500 150 467 190"/><path d="M586 325 542 316"/><path d="M506 482 459 423"/><path d="M232 426 294 387"/>
        </g>
      </svg>
    </div>
  );
}

function ArchCard({ x, y, title, kind }: { x: number; y: number; title: string; kind: string }) {
  return (
    <g transform={`translate(${x} ${y})`} filter="url(#cardShadow)">
      <rect width="150" height="90" rx="14" fill="rgba(255,255,255,.96)" stroke="#D6E1E3"/>
      <rect x="14" y="14" width="25" height="25" rx="7" fill="#E4F8F5"/>
      <circle cx="26.5" cy="26.5" r="4" fill="#00B3A4"/>
      <text x="48" y="29" fill="#536067" fontSize="9.5" fontWeight="800" letterSpacing=".7">{title}</text>
      {kind === "automation" && <><path d="M17 65h20l9-12 11 8 13-21 12 14 18-18 30 15" fill="none" stroke="#00B3A4" strokeWidth="1.8"/><path d="M17 71h116" stroke="#E4EAEC"/></>}
      {kind === "analytics" && <><path d="M17 69h116" stroke="#E4EAEC"/><path d="m18 65 16-8 14 5 17-17 16 8 17-23 14 10 21-16" fill="none" stroke="#00B3A4" strokeWidth="1.8"/><circle cx="98" cy="30" r="3" fill="#00B3A4"/></>}
      {kind === "models" && <><circle cx="42" cy="62" r="4" fill="#00B3A4"/><circle cx="75" cy="49" r="4" fill="#00B3A4"/><circle cx="109" cy="63" r="4" fill="#00B3A4"/><circle cx="92" cy="28" r="4" fill="#00B3A4"/><path d="M42 62 75 49 109 63M75 49 92 28M92 28 109 63" stroke="#8DDDD5" strokeWidth="1.5" fill="none"/></>}
      {kind === "integrations" && <><rect x="23" y="53" width="21" height="21" rx="5" fill="#E5F8F6"/><rect x="64" y="46" width="21" height="21" rx="5" fill="#E5F8F6"/><rect x="105" y="54" width="21" height="21" rx="5" fill="#E5F8F6"/><path d="M44 63h20M85 57l20 6" stroke="#00B3A4" strokeWidth="1.7"/></>}
      {kind === "data" && <>{[0,1,2,3,4].map((r)=><g key={r}>{[0,1,2,3,4,5].map((c)=><circle key={c} cx={22+c*16} cy={49+r*7} r="1.6" fill={(r+c)%3===0?"#00B3A4":"#C6D2D6"}/>)}</g>)}</>}
    </g>
  );
}

function IndustryVisual({ type }: { type: "education" | "service" | "environment" }) {
  if (type === "education") return (
    <svg viewBox="0 0 320 180" aria-hidden="true"><defs><linearGradient id="eduBg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F4F8F9"/><stop offset="1" stopColor="#E2ECEE"/></linearGradient></defs><rect width="320" height="180" rx="18" fill="url(#eduBg)"/><path d="M22 146h276" stroke="#D1DDE0"/><rect x="54" y="54" width="74" height="62" rx="6" fill="#fff" stroke="#CBD7DB"/><rect x="141" y="42" width="128" height="82" rx="7" fill="#fff" stroke="#CBD7DB"/><path d="M156 60h98M156 74h71M156 88h86" stroke="#B4C5CA" strokeWidth="5" strokeLinecap="round"/><rect x="75" y="126" width="30" height="12" rx="3" fill="#00B3A4" opacity=".16"/><circle cx="91" cy="79" r="13" fill="#00B3A4" opacity=".18"/></svg>
  );
  if (type === "service") return (
    <svg viewBox="0 0 320 180" aria-hidden="true"><defs><linearGradient id="svcBg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F5F8F9"/><stop offset="1" stopColor="#DDE9EB"/></linearGradient></defs><rect width="320" height="180" rx="18" fill="url(#svcBg)"/><rect x="31" y="42" width="258" height="108" rx="10" fill="#fff" stroke="#C9D6DA"/><rect x="47" y="56" width="118" height="76" rx="6" fill="#16323B"/><path d="M59 116V85l20 9 23-25 18 15 29-21" fill="none" stroke="#26D2C2" strokeWidth="3"/><rect x="177" y="58" width="94" height="13" rx="4" fill="#E6ECEF"/><rect x="177" y="81" width="68" height="8" rx="4" fill="#CAD6DA"/><rect x="177" y="98" width="80" height="8" rx="4" fill="#D7E0E3"/><rect x="177" y="116" width="50" height="8" rx="4" fill="#E1E7E9"/></svg>
  );
  return (
    <svg viewBox="0 0 620 190" aria-hidden="true"><defs><linearGradient id="envSky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#EEF8F7"/><stop offset="1" stopColor="#DDE9E7"/></linearGradient></defs><rect width="620" height="190" rx="18" fill="url(#envSky)"/><path d="M0 146 90 100l70 30 87-72 95 85 86-66 104 68 88-52v97H0Z" fill="#C7DDD8"/><path d="M0 163 106 125l82 31 97-68 101 72 104-45 130 57v18H0Z" fill="#9CC8BE" opacity=".7"/><path d="M375 120v-51M375 69l-25 18M375 69l27 17M375 69l5-31M453 136V87M453 87l-21 13M453 87l22 14M453 87l4-27" stroke="#557A73" strokeWidth="3" strokeLinecap="round"/><circle cx="375" cy="69" r="5" fill="#00B3A4"/><circle cx="453" cy="87" r="5" fill="#00B3A4"/></svg>
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
              <h1>Intelligent<br/>systems.<br/><span>Real momentum.</span></h1>
              <p className="hero-lead">APEX builds software, AI, data, and workflow systems that help businesses modernize operations and scale with confidence.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#solutions">Explore Solutions <ArrowRightIcon/></a>
                <ContactButton className="button-secondary">Book a Consultation</ContactButton>
              </div>
              <div className="hero-principles" aria-label="Apex delivery principles">
                <div><ShieldIcon/><strong>Secure by design</strong><span>Built with trust from the ground up.</span></div>
                <div><NodesIcon/><strong>Connected systems</strong><span>Everything works better together.</span></div>
                <div><ChartIcon/><strong>Measurable outcomes</strong><span>Real impact you can see and scale.</span></div>
              </div>
            </div>
            <ArchitectureVisual />
          </div>
        </section>

        <section className="about-strip" id="about">
          <div className="container about-grid">
            <span className="eyebrow">HOW WE THINK</span>
            <p>Good technology should make an operation easier to understand, easier to run, and easier to improve.</p>
            <p>We start with the system around the work — then apply software, AI, automation, and data where they create measurable value.</p>
          </div>
        </section>

        <section className="section solutions-section" id="solutions">
          <div className="container">
            <div className="section-intro center">
              <span className="eyebrow">SOLUTIONS</span>
              <h2>Modern systems for<br/>modern business.</h2>
              <p>From intelligent automation to full-stack engineering, Apex builds the connected digital systems behind faster, clearer operations.</p>
            </div>
            <div className="solutions-layout">
              {solutions.map(({ key, icon: Icon, no, title, body }) => (
                <article className={`solution-card solution-${key}`} key={title}>
                  <div className="solution-number">{no}</div>
                  <div className="solution-icon"><Icon/></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <ContactButton className="solution-link">Explore capability</ContactButton>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section industries-section" id="industries">
          <div className="container">
            <div className="industries-intro">
              <div>
                <span className="eyebrow">INDUSTRIES</span>
                <h2>Built for real<br/>operations.</h2>
                <p>We focus on industries where complex workflows, disconnected systems, and manual work create real friction.</p>
              </div>
              <div className="world-visual" aria-hidden="true"><GlobeIcon/><span className="orbit orbit-a"/><span className="orbit orbit-b"/><i className="world-dot world-dot-a"/><i className="world-dot world-dot-b"/><i className="world-dot world-dot-c"/></div>
            </div>

            <div className="industry-layout">
              <article className="industry-card education-card">
                <div className="industry-content"><span className="industry-no">01</span><div className="industry-icon"><GraduationIcon/></div><h3>Education</h3><p>Smarter platforms for learning, tutoring, administrative operations, and student experiences.</p><ul><li><CheckIcon/>Learning platforms</li><li><CheckIcon/>AI tutor assistance</li><li><CheckIcon/>Operations systems</li></ul><a href="#case-studies">Explore this industry <ArrowRightIcon/></a></div>
                <div className="industry-art"><IndustryVisual type="education"/></div>
              </article>

              <article className="industry-card service-card">
                <div className="industry-content"><span className="industry-no">02</span><div className="industry-icon"><BriefcaseIcon/></div><h3>Service Operations</h3><p>End-to-end systems for service businesses that need efficiency, visibility, and seamless customer journeys.</p><ul><li><CheckIcon/>Booking & scheduling</li><li><CheckIcon/>Customer journey automation</li><li><CheckIcon/>CRM & operations</li></ul><ContactButton className="industry-link">Explore this industry</ContactButton></div>
                <div className="industry-art"><IndustryVisual type="service"/></div>
              </article>

              <article className="industry-card environment-card">
                <div className="industry-content"><span className="industry-no">03</span><div className="industry-icon"><LeafIcon/></div><h3>Public & Environmental Systems</h3><p>Intelligent systems for monitoring, environmental operations, and public data coordination.</p><ul><li><CheckIcon/>Environmental monitoring</li><li><CheckIcon/>Data intelligence</li><li><CheckIcon/>Workflow coordination</li></ul></div>
                <div className="industry-art"><IndustryVisual type="environment"/></div>
              </article>
            </div>

            <div className="industry-open-door">
              <div><span className="open-door-icon"><SparkIcon/></span><div><strong>Have a different operational challenge?</strong><p>Let’s discuss how we can help.</p></div></div>
              <ContactButton className="plain-contact">Talk to our team</ContactButton>
            </div>
          </div>
        </section>

        <section className="case-section" id="case-studies">
          <div className="container">
            <div className="case-intro">
              <div><span className="eyebrow">CASE STUDY</span><h2>Work that proves<br/>the system<span>.</span></h2></div>
              <p>Every case study reveals the challenge, our approach, and the measurable impact we deliver for our clients. Real work. Real outcomes.</p>
            </div>

            <article className="case-feature">
              <div className="case-browser-wrap">
                <div className="browser-frame"><div className="browser-dots"><i/><i/><i/></div><Image src="/tutwithus-reference.png" alt="TutWithUs website" width={1600} height={1000} /></div>
                <div className="case-circuit circuit-a"/><div className="case-circuit circuit-b"/>
              </div>
              <div className="case-copy">
                <Image src="/tutwithus-logo.png" alt="TutWithUs" width={116} height={50} />
                <h3>A polished tutoring experience built around clarity and trust.</h3>
                <p>TutWithUs is a previous APEX collaboration. We worked on the platform experience, AI-assisted support, admin workflows, and the booking journey to create a more coherent system for students, tutors, and administrators.</p>
                <div className="case-capabilities" aria-label="TutWithUs capabilities"><span>Platform redesign</span><span>AI chatbot</span><span>Booking logic</span><span>Admin system</span><span>Analytics</span></div>
                <div className="case-facts">
                  <div><span className="fact-icon"><SearchIcon/></span><strong>Challenge</strong><p>A tutoring experience needed clearer choices, pricing, scheduling, and service expectations.</p></div>
                  <div><span className="fact-icon"><CodeIcon/></span><strong>What we built</strong><p>A modern platform with smart booking, AI support, and an admin system to manage tutors and content.</p></div>
                  <div><span className="fact-icon"><ChartIcon/></span><strong>Impact</strong><p>A clearer user journey, better tutor discovery, and a stronger foundation for future growth.</p></div>
                </div>
                <CaseStudyButton className="case-link">View Full Case Study <ArrowRightIcon/></CaseStudyButton>
              </div>
            </article>
          </div>
        </section>

        <section className="method-section" id="method">
          <div className="container method-grid">
            <div className="method-copy">
              <span className="eyebrow">THE APEX METHOD</span>
              <h2>From friction<br/>to impact<span>.</span></h2>
              <p>A disciplined, proven approach that connects what’s broken to what’s possible. Every step narrows uncertainty and compounds value.</p>
              <div className="method-principles">
                <div><CompassIcon/><span><strong>Purpose-built outcomes</strong><small>Aligned to real business impact.</small></span></div>
                <div><ShieldIcon/><span><strong>Proven and repeatable</strong><small>Battle-tested across industries.</small></span></div>
                <div><ChartIcon/><span><strong>Adaptive by design</strong><small>Built to evolve with your business.</small></span></div>
              </div>
            </div>
            <div className="method-list">
              {process.map(({ icon: Icon, no, title, body }) => <article key={no} className="method-row"><span className="method-no">{no}</span><span className="method-icon"><Icon/></span><h3>{title}</h3><p>{body}</p><ArrowRightIcon/></article>)}
            </div>
          </div>

          <div className="container impact-cta">
            <div className="impact-mark"><Image src="/apex-mark.svg" alt="" width={54} height={42}/></div>
            <h3>Turn operational friction into<br/>compounding <span>business impact.</span></h3>
            <div><p>Let’s build the connected system your business can grow on.</p><ContactButton className="button-light">Start a Conversation</ContactButton></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <a href="#top" className="footer-brand"><Image src="/apex-logo.svg" alt="APEX" width={146} height={45}/></a>
          <nav aria-label="Footer navigation"><a href="#solutions">Solutions</a><a href="#industries">Industries</a><a href="#case-studies">Case Studies</a><a href="#method">Method</a><a href="#about">About</a></nav>
          <span>© {new Date().getFullYear()} APEX. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
