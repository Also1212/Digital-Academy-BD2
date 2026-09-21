import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  loading = false,
  disabled,
  children,
  className = '',
  id,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 cursor-pointer select-none rounded-xl';

  const sizeStyles = {
    sm: 'text-xs sm:text-sm px-3.5 py-1.5 gap-1.5 font-medium',
    md: 'text-sm sm:text-base px-5 py-2.5 gap-2 font-semibold',
    lg: 'text-base sm:text-lg px-6 py-3.5 gap-2.5 font-bold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-sm shadow-emerald-700/20 hover:shadow-md hover:shadow-emerald-600/25 border border-emerald-500/30 focus:ring-emerald-500',
    secondary:
      'bg-gradient-to-r from-slate-900 to-slate-950 hover:from-slate-800 hover:to-slate-900 text-white shadow-sm hover:shadow-md border border-slate-800 focus:ring-slate-700',
    outline:
      'border border-slate-200/90 bg-white/90 backdrop-blur-xs text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-xs focus:ring-slate-400',
    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 focus:ring-slate-300',
    danger:
      'bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white shadow-sm shadow-rose-700/20 focus:ring-rose-500',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      id={id}
      disabled={disabled || loading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </>
      )}
    </button>
  );
};
