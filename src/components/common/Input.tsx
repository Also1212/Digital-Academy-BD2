import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  isPhoneBangladeshi?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  isPhoneBangladeshi = false,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-800 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {isPhoneBangladeshi && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 font-medium text-sm tabular-nums border-r border-slate-200 pr-2.5 my-1.5">
            🇧🇩 +880
          </div>
        )}
        <input
          id={inputId}
          className={`w-full rounded-xl border bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:ring-4 transition-all duration-200 ${
            isPhoneBangladeshi ? 'pl-24' : ''
          } ${
            error
              ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/15'
              : 'border-slate-200/90 hover:border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/10'
          } ${className}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-rose-600 font-medium">{error}</p>}
      {helperText && !error && <p className="mt-1 text-xs text-slate-500">{helperText}</p>}
    </div>
  );
};

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  helperText,
  error,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-slate-800 mb-1.5">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`w-full rounded-xl border bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:ring-4 transition-all duration-200 ${
          error
            ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/15'
            : 'border-slate-200/90 hover:border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/10'
        } ${className}`}
        rows={props.rows || 4}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-rose-600 font-medium">{error}</p>}
      {helperText && !error && <p className="mt-1 text-xs text-slate-500">{helperText}</p>}
    </div>
  );
};
