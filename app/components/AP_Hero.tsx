import type { AboutContent, HeroContent } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";
import AP_Icon from "@/app/components/AP_Icon";
import AP_ArchitectureVisual from "@/app/components/AP_ArchitectureVisual";
import AP_Component from "@/app/components/AP_Component";

export default function AP_Hero({ hero, about }: { hero: HeroContent; about: AboutContent }) {
  return (
    <>
      <AP_Component className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1>{hero.lines[0]}<br/>{hero.lines[1]}<br/><span>{hero.lines[2]}</span></h1>
            <p className="hero-lead">{hero.body}</p>
            <div className="hero-actions">
              <AP_Button href="#solutions">{hero.primaryCta}</AP_Button>
              <AP_Button variant="secondary" contact>{hero.secondaryCta}</AP_Button>
            </div>
            <div className="hero-principles" aria-label="APEX delivery principles">
              {hero.principles.map((item) => <div key={item.title}><AP_Icon name={item.icon}/><strong>{item.title}</strong><span>{item.body}</span></div>)}
            </div>
          </div>
          <AP_ArchitectureVisual />
        </div>
      </AP_Component>
      <AP_Component className="about-strip" id="about">
        <div className="container about-grid">
          <span className="eyebrow">{about.eyebrow}</span>
          <p>{about.statement}</p>
          <p>{about.body}</p>
        </div>
      </AP_Component>
    </>
  );
}
