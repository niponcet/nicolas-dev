import React from 'react';
import { SkillCategory } from '@/types';

interface SkillsBlockProps {
  skills: SkillCategory[];
}

export function SkillsBlock({ skills }: SkillsBlockProps) {
  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-elev">
        <span className="font-mono text-[11px] text-faint">stack.json</span>
      </div>
      <div className="p-5 md:p-6 font-mono text-[13px] leading-[1.85] overflow-x-auto">
        <div className="whitespace-pre-wrap">
          <div className="text-muted">{`{`}</div>
          {skills.map((skill, index) => (
            <div key={skill.category} className="pl-4">
              <span className="text-accent">"{skill.category}"</span>
              <span className="text-muted">: </span>
              <span className="text-amber">[{skill.items.map((i) => `"${i}"`).join(', ')}]</span>
              {index < skills.length - 1 && <span className="text-muted">,</span>}
            </div>
          ))}
          <div className="text-muted">{`}`}</div>
        </div>
      </div>
    </div>
  );
}
