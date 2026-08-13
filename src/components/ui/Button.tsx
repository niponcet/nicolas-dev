import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 font-medium text-[14px] rounded-full px-6 py-3 md:py-2.5 transition-colors border border-transparent",
        variant === 'primary' && "bg-accent text-bg hover:bg-accent/90",
        variant === 'secondary' && "border-border text-text hover:border-borderHover",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
