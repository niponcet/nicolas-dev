import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'amber';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] rounded-full px-2.5 py-1",
        variant === 'amber'
          ? "text-amber border border-amber/25 bg-amberDim"
          : "text-muted border border-border"
      )}
    >
      {children}
    </span>
  );
}
