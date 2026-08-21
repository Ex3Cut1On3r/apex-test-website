import type { AboutContent, HeroContent } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";
import AP_Icon from "@/app/components/AP_Icon";
import AP_ArchitectureVisual from "@/app/components/AP_ArchitectureVisual";
import AP_Component from "@/app/components/AP_Component";
import AP_BlurText from "@/app/components/AP_BlurText";
import AP_DotField from "@/app/components/AP_DotField";

export default function AP_Hero({ hero, about }: { hero: HeroContent; about: AboutContent }) {
  return (
    <>
      <AP_Component className="hero hero-centered">
        <div className="hero-background" aria-hidden="true">
          <AP_DotField
            dotRadius={1.55}
            dotSpacing={20}
            bulgeStrength={18}
            cursorRadius={350}
            glowRadius={165}
            waveAmplitude={0.72}
            gradientFrom="rgba(30,35,40,.18)"
            gradientTo="rgba(0,179,164,.24)"
            glowColor="rgba(0,179,164,.12)"
          />
          <AP_ArchitectureVisual />
        </div>

        <div className="container hero-centered-grid">
          <div className="hero-copy hero-copy-centered">
            <span className="eyebrow hero-eyebrow">{hero.eyebrow}</span>
            <h1>
              <AP_BlurText text={`${hero.lines[0]} ${hero.lines[1]}`} />
              <br />
              <span className="hero-accent-line"><AP_BlurText text={`${hero.lines[2]}.`} delay={100} /></span>
            </h1>
            <p className="hero-lead">{hero.body}</p>
            <div className="hero-actions">
              <AP_Button href="#solutions">{hero.primaryCta}</AP_Button>
              <AP_Button variant="secondary" contact>{hero.secondaryCta}</AP_Button>
            </div>
            <div className="hero-principles" aria-label="APEX delivery principles">
              {hero.principles.map((item) => (
                <div key={item.title}>
                  <AP_Icon name={item.icon} />
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AP_Component>

      <AP_Component className="about-strip" id="about">
        <div className="container about-grid grid gap-7 py-10 md:grid-cols-[.55fr_1.35fr_1.1fr] md:gap-10 lg:gap-14">
          <span className="eyebrow">{about.eyebrow}</span>
          <p>{about.statement}</p>
          <p>{about.body}</p>
        </div>
      </AP_Component>
    </>
  );
}
