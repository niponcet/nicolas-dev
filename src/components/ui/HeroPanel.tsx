import { Profile } from '@/types';

interface HeroPanelProps {
  profile: Profile;
}

export function HeroPanel({ profile }: HeroPanelProps) {
  const terminalName = profile.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '_');

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-elev">
        <span className="w-2.5 h-2.5 rounded-full bg-[#4A4C53]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#4A4C53]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#4A4C53]"></span>
        <span className="ml-3 font-mono text-[11px] text-faint">whoami — zsh</span>
      </div>
      <div className="p-5 md:p-6 font-mono text-[13px] md:text-[13.5px] leading-[1.9]">
        <p><span className="text-accent">$</span> <span className="text-text">whoami</span></p>
        <p className="text-muted">&gt; {terminalName}</p>
        <p className="text-muted">&nbsp;&nbsp;role: <span className="text-text">{profile.role}</span></p>
        <p className="text-muted">&nbsp;&nbsp;mention: <span className="text-text">{profile.mention}</span></p>
        <p className="text-muted">&nbsp;&nbsp;stack: <span className="text-text">{profile.stack.join(' · ')}</span></p>
        <p className="text-muted">&nbsp;&nbsp;building: <span className="text-text">{profile.company.name}</span> <span className="text-amber">({profile.company.role})</span></p>
        <p className="text-muted">&nbsp;&nbsp;school: <span className="text-text">{profile.education.institution} — {profile.education.graduationDate}</span></p>
        <p className="text-muted">&nbsp;&nbsp;status: <span className="text-accent">{profile.status.id} ✔</span></p>
        <p className="mt-1"><span className="text-accent">$</span><span className="terminal-cursor"></span></p>
      </div>
    </div>
  );
}
