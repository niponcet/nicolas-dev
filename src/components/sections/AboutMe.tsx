import { profile } from '@/data/profile';
import { skills } from '@/data/skills';
import { SkillsBlock } from '@/components/ui/SkillsBlock';
import { FadeIn } from '@/components/ui/FadeIn';

export default function AboutMe() {
  // Helpers para resaltar palabras sin alterar la estructura del texto
  const p1Parts = profile.about.paragraph1.split('Duoc UC');
  const p1SubParts = p1Parts[1] ? p1Parts[1].split('full-stack') : [];

  const p2Parts = profile.about.paragraph2.split('Fleect');

  return (
    <section id="sobre-mi" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-border">
      <FadeIn direction="up">
        <div className="flex items-baseline gap-3 mb-10">
          <span className="font-mono text-accent text-sm">01</span>
          <h2 className="font-display font-semibold text-2xl md:text-[32px] tracking-tight">Sobre mí</h2>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-12 md:gap-16">
        <FadeIn direction="up" delay={0.1}>
          <div>
            <p className="text-text/90 text-[17px] md:text-[18px] leading-relaxed">
              {p1Parts[0]}
              {p1Parts.length > 1 && (
                <>
                  <span className="text-text">Duoc UC</span>
                  {p1SubParts[0]}
                  {p1SubParts.length > 1 && (
                    <>
                      <span className="text-accent">full-stack</span>
                      {p1SubParts[1]}
                    </>
                  )}
                </>
              )}
            </p>
            <p className="mt-5 text-muted text-[16px] leading-relaxed">
              {p2Parts[0]}
              {p2Parts.length > 1 && (
                <>
                  <span className="text-text">Fleect</span>
                  {p2Parts[1]}
                </>
              )}
            </p>

            <div className="mt-9 flex flex-wrap gap-6">
              {profile.about.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="font-display text-2xl font-semibold text-text">{stat.value}</p>
                  <p className="font-mono text-[12px] text-faint mt-1 whitespace-pre-line">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* stack.json signature card */}
        <FadeIn direction="up" delay={0.2} className="md:-mt-4">
          <SkillsBlock skills={skills} />
        </FadeIn>
      </div>
    </section>
  );
}
