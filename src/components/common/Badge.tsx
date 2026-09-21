import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'slate' | 'amber' | 'blue' | 'rose' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  size = 'md',
  className = '',
  icon,
}) => {
  const sizeStyles = {
    sm: 'text-[11px] sm:text-xs px-2.5 py-0.5 font-medium tracking-tight',
    md: 'text-xs sm:text-sm px-3 py-1 font-semibold tracking-tight',
  };

  const variantStyles = {
    emerald: 'bg-emerald-50/90 text-emerald-800 border border-emerald-200/90 shadow-2xs',
    slate: 'bg-slate-100/90 text-slate-700 border border-slate-200/90 shadow-2xs',
    amber: 'bg-amber-50/90 text-amber-800 border border-amber-200/90 shadow-2xs',
    blue: 'bg-sky-50/90 text-sky-800 border border-sky-200/90 shadow-2xs',
    rose: 'bg-rose-50/90 text-rose-800 border border-rose-200/90 shadow-2xs',
    outline: 'bg-white/90 text-slate-700 border border-slate-200/90 shadow-2xs',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full whitespace-nowrap ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
