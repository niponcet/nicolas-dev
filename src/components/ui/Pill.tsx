interface PillProps {
  children: React.ReactNode;
}

export function Pill({ children }: PillProps) {
  return (
    <span className="font-mono text-[11.5px] text-text/80 border border-border rounded-full px-2.5 py-1">
      {children}
    </span>
  );
}
