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
          ¿Empezamos?
        </h3>
        <p className="text-muted text-[16px] md:text-[17px] mt-5 max-w-md">
          Actualmente disponible para nuevos desafíos en la industria. Ya sea para una oportunidad laboral o para hablar de arquitectura y código, ¡escríbeme!.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
          <Button variant="primary" href={`mailto:${profile.contact.email}`} className="w-full sm:w-auto justify-center">
            {profile.contact.email}
          </Button>
          <div className="grid grid-cols-2 gap-4 w-full sm:w-auto sm:flex sm:gap-4">
            <Button variant="secondary" href={profile.contact.github} className="justify-center">
              <FaGithub className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="secondary" href={profile.contact.linkedin} className="justify-center">
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </div>


      </div>
    </section>
  );
}
