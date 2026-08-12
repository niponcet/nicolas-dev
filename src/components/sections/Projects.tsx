import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';

export default function Projects() {
  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-border">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-accent text-sm">02</span>
        <h2 className="font-display font-semibold text-2xl md:text-[32px] tracking-tight">Proyectos</h2>
      </div>
      <p className="text-muted text-[15px] mb-12 max-w-lg">
        De la idea a producción — cuatro productos que reflejan cómo pienso y construyo.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
