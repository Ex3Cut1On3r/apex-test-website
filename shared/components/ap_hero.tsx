import type { AboutContent, HeroContent } from "@/shared/types/types";
import ApButton from "./ap_button";
import ApIcon from "./ap_icon";
import ApArchitectureVisual from "./ap_architecture_visual";
import ApComponent from "./ap_component";

export default function ApHero({ hero, about }: { hero: HeroContent; about: AboutContent }) {
  return (
    <>
      <ApComponent className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1>{hero.lines[0]}<br/>{hero.lines[1]}<br/><span>{hero.lines[2]}</span></h1>
            <p className="hero-lead">{hero.body}</p>
            <div className="hero-actions">
              <ApButton href="#solutions">{hero.primaryCta}</ApButton>
              <ApButton variant="secondary" contact>{hero.secondaryCta}</ApButton>
            </div>
            <div className="hero-principles" aria-label="APEX delivery principles">
              {hero.principles.map((item) => <div key={item.title}><ApIcon name={item.icon}/><strong>{item.title}</strong><span>{item.body}</span></div>)}
            </div>
          </div>
          <ApArchitectureVisual />
        </div>
      </ApComponent>
      <ApComponent className="about-strip" id="about">
        <div className="container about-grid">
          <span className="eyebrow">{about.eyebrow}</span>
          <p>{about.statement}</p>
          <p>{about.body}</p>
        </div>
      </ApComponent>
    </>
  );
}
