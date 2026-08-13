"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";

// Rangos de aparición para las 4 tarjetas
const CARD_RANGES = [
  [0.10, 0.32], // Card 1
  [0.32, 0.54], // Card 2
  [0.54, 0.76], // Card 3
  [0.76, 0.98], // Card 4
];

// Sub-componente para abstraer la lógica de Hooks por cada tarjeta
function ScrollCard({ project, scrollYProgress, range }: any) {
  // Transiciones lineales basadas en el scroll
  const rawOpacity = useTransform(scrollYProgress, range, [0.12, 1]);
  const rawY = useTransform(scrollYProgress, range, [30, 0]);
  const rawScale = useTransform(scrollYProgress, range, [0.94, 1]);

  // Envolvemos las transformaciones espaciales en un Spring para el efecto "magnético"
  const springConfig = { stiffness: 180, damping: 14 };
  const y = useSpring(rawY, springConfig);
  const scale = useSpring(rawScale, springConfig);

  return (
    <motion.div style={{ opacity: rawOpacity, y, scale }} className="will-change-transform">
      <ProjectCard project={project} />
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Obtenemos el progreso (0 a 1) del scroll a lo largo de este contenedor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Si el usuario tiene movimiento reducido, renderizamos la versión normal sin anclaje
  if (shouldReduceMotion) {
    return (
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <FadeIn direction="up">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-mono text-accent text-sm">02</span>
            <h2 className="font-display font-semibold text-2xl tracking-tight">Proyectos</h2>
          </div>
          <p className="text-muted text-[15px] mb-12 max-w-lg">
            De la idea a producción. Aquí presento cuatro productos que reflejan mi forma de construir software.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.id} direction="up" delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>
    );
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // En móvil (1 columna) necesitamos subir mucho más el grid para ver las 4 tarjetas.
  const gridY = useTransform(scrollYProgress, [0.3, 1], [0, isMobile ? -900 : -280]);

  return (
    <>
      <section
        ref={containerRef}
        id="proyectos"
        // En móvil le damos más altura (300vh) para que el scroll de 4 tarjetas no sea tan rápido
        className="relative border-t border-border"
        style={{ height: isMobile ? '300vh' : '220vh' }}
      >
        <div className="sticky top-0 h-screen w-full flex flex-col pt-24 md:pt-32 max-w-6xl mx-auto px-6 md:px-10 overflow-hidden">

          <div className="flex flex-col mb-10 md:mb-12">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-mono text-accent text-sm">02</span>
              <h2 className="font-display font-semibold text-2xl md:text-[32px] tracking-tight">Proyectos</h2>
            </div>
            <p className="text-muted text-[15px] max-w-lg">
              De la idea a producción. Aquí presento cuatro productos que reflejan mi forma de construir software.
            </p>
          </div>

          <motion.div style={{ y: gridY }} className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full will-change-transform">
            {projects.slice(0, 4).map((project, index) => (
              <ScrollCard
                key={project.id}
                project={project}
                scrollYProgress={scrollYProgress}
                range={CARD_RANGES[index]}
                direction={index % 2 === 0 ? -1 : 1}
              />
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}
