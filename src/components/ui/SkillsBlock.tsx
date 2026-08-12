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
        <pre className="whitespace-pre-wrap">
          <span className="text-muted">{`{\n`}</span>
          {skills.map((skill, index) => (
            <React.Fragment key={skill.category}>
              {'  '}<span className="text-accent">"{skill.category}"</span>
              <span className="text-muted">: </span>
              <span className="text-amber">[{skill.items.map((i) => `"${i}"`).join(', ')}]</span>
              {index < skills.length - 1 ? <span className="text-muted">,\n</span> : '\n'}
            </React.Fragment>
          ))}
          <span className="text-muted">{`}`}</span>
        </pre>
      </div>
    </div>
  );
}
