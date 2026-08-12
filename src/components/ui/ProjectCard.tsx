import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Pill } from '@/components/ui/Pill';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 md:p-7 transition-all duration-300 ease-out hover:border-borderHover hover:-translate-y-[3px] hover:bg-elev cursor-default">
      <div className="flex items-start justify-between gap-3 mb-5">
        <span className="font-mono text-[12px] text-faint">{project.id}</span>
        <Badge variant={project.status === 'En producción' ? 'amber' : 'default'}>
          {project.status}
        </Badge>
      </div>
      
      <h3 className="font-display font-semibold text-xl text-text">{project.title}</h3>
      <p className="font-mono text-[12.5px] text-accent mt-1">{project.role}</p>
      
      <p className="text-muted text-[14.5px] leading-relaxed mt-4">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-5">
        {project.stack.map(tech => (
          <Pill key={tech}>{tech}</Pill>
        ))}
      </div>
    </div>
  );
}
