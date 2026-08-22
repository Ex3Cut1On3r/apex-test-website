import type { HeroContent } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";
import AP_ArchitectureVisual from "@/app/components/AP_ArchitectureVisual";
import AP_Component from "@/app/components/AP_Component";
import AP_BlurText from "@/app/components/AP_BlurText";
import AP_DotField from "@/app/components/AP_DotField";

export default function AP_Hero({ hero }: { hero: HeroContent }) {
  return (
    <AP_Component className="hero ap-ref-hero">
      <div className="ap-ref-hero-dots" aria-hidden="true">
        <AP_DotField
          dotRadius={1.65}
          dotSpacing={21}
          bulgeStrength={11}
          cursorRadius={260}
          glowRadius={145}
          waveAmplitude={0.22}
          gradientFrom="rgba(30,35,40,.15)"
          gradientTo="rgba(0,179,164,.34)"
          glowColor="rgba(0,179,164,.10)"
        />
      </div>
      <div className="container ap-ref-hero-grid">
        <div className="ap-ref-hero-copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>
            <AP_BlurText text={`${hero.lines[0]} ${hero.lines[1]}`} />
            <br />
            <span><AP_BlurText text={`${hero.lines[2]}.`} delay={90} /></span>
          </h1>
          <p>{hero.body}</p>
          <div className="ap-ref-hero-actions">
            <AP_Button href="/solutions">{hero.primaryCta}</AP_Button>
            <AP_Button variant="secondary" contact>{hero.secondaryCta}</AP_Button>
          </div>
        </div>
        <div className="ap-ref-hero-visual" aria-hidden="true">
          <AP_ArchitectureVisual />
        </div>
      </div>
    </AP_Component>
  );
}
