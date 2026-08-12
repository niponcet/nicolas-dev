import { profile } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contacto" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-baseline gap-3 mb-6">
          <span className="font-mono text-accent text-sm">03</span>
          <h2 className="font-display font-semibold text-2xl md:text-[32px] tracking-tight">Contacto</h2>
        </div>

        <h3 className="font-display font-semibold text-[34px] sm:text-[44px] md:text-[52px] leading-[1.1] tracking-tight max-w-2xl">
          ¿Conversemos sobre la práctica?
        </h3>
        <p className="text-muted text-[16px] md:text-[17px] mt-5 max-w-md">
          Disponible para práctica profesional a partir de diciembre 2026. Respondo rápido.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button variant="primary" href={`mailto:${profile.contact.email}`}>
            {profile.contact.email}
          </Button>
          {/* TODO: Actualizar URLs de GitHub y LinkedIn desde data/profile.ts */}
          <Button variant="secondary" href={profile.contact.github}>
            <FaGithub className="w-4 h-4" />
            GitHub
          </Button>
          <Button variant="secondary" href={profile.contact.linkedin}>
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </Button>
        </div>

        <div className="mt-6 flex items-center gap-2 text-faint font-mono text-[13px]">
          <span>📍</span> {profile.location}
        </div>
      </div>
    </section>
  );
}
