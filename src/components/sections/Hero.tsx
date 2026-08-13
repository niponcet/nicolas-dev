import { profile } from '@/data/profile';
import { HeroPanel } from '@/components/ui/HeroPanel';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';

export default function Hero() {
  const nameParts = profile.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  // Resaltamos la compañía en el tagline
  const taglineParts = profile.tagline.split(profile.company.name);

  return (
    <section id="top" className="max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-20 md:pb-28">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-10 items-start">

        {/* Left: identity */}
        <FadeIn direction="none">
          <div>
            <div className="flex w-fit mx-auto md:mx-0 items-center gap-2 font-mono text-[12px] text-accent border border-accent/25 bg-accentDim rounded-full pl-2.5 pr-3.5 py-1 mb-7">
              <span className="relative w-1.5 h-1.5 rounded-full bg-accent status-dot"></span>
              {profile.status.label}
            </div>

            <h1 className="font-display font-semibold text-[40px] leading-[1.08] sm:text-[52px] md:text-[60px] tracking-tight text-text">
              {profile.name}
            </h1>

            <p className="mt-5 font-mono text-accent text-[15px] md:text-base">
              &gt; {profile.role}
            </p>

            <p className="mt-4 text-muted text-[16px] md:text-[17px] leading-relaxed max-w-md">
              {taglineParts[0]}
              {taglineParts.length > 1 && (
                <>
                  <span className="text-text">{profile.company.name}</span>
                  {taglineParts[1]}
                </>
              )}
            </p>

            <div className="mt-6 flex items-center gap-2 text-faint font-mono text-[13px]">
              <span></span> {profile.location}
            </div>

            <div className="mt-9 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
              <Button variant="primary" href="#proyectos" className="justify-center">
                Ver proyectos
              </Button>
              <Button variant="secondary" href="#contacto" className="justify-center">
                Contactar
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Right: terminal panel */}
        <FadeIn direction="left" delay={0.2} className="md:mt-10">
          <HeroPanel profile={profile} />
        </FadeIn>
      </div>
    </section>
  );
}
