import React from 'react';
import { Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

interface BookCoverMockupProps {
  titleBn?: string;
  titleEn?: string;
  authorBn?: string;
  badge?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BookCoverMockup: React.FC<BookCoverMockupProps> = ({
  titleBn = 'মেটা অ্যাডস এ টু জেড',
  titleEn = 'META ADS A-Z COMPLETE GUIDE',
  authorBn = 'মোঃ মনসুর আলম',
  badge = '৫ম সংস্করণ ২০২৫',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-44 sm:w-48 h-60 sm:h-64 text-xs',
    md: 'w-56 sm:w-72 h-76 sm:h-96 text-xs sm:text-sm',
    lg: 'w-60 sm:w-84 h-80 sm:h-[460px] text-xs sm:text-base',
  };

  return (
    <div className={`relative inline-block select-none max-w-full ${className}`}>
      {/* Soft atmospheric depth glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Book Container with 3D spine and paper edge */}
      <div
        className={`relative ${sizeClasses[size]} max-w-full rounded-r-2xl rounded-l-md bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white shadow-2xl overflow-hidden border border-slate-700/60 flex flex-col justify-between p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-emerald-950/40`}
      >
        {/* Book spine simulation lines on left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-slate-950 via-slate-800 to-transparent opacity-80 border-r border-slate-700/50" />

        {/* Decorative subtle background grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        {/* Header tag */}
        <div className="relative z-10 pl-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-medium text-[11px] tracking-wide backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>{badge}</span>
          </div>
        </div>

        {/* Center Title Block */}
        <div className="relative z-10 pl-2 my-auto">
          <div className="text-[10px] tracking-widest uppercase font-semibold text-emerald-400 mb-2">
            {titleEn}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-bengali text-white leading-tight tracking-tight drop-shadow-md">
            {titleBn}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-bengali mt-2.5 line-clamp-2 leading-relaxed">
            ফেসবুক ও ইনস্টাগ্রাম বিজ্ঞাপনের পূর্ণাঙ্গ প্র্যাকটিক্যাল গাইডবুক
          </p>
        </div>

        {/* Footer info: Author & Digital Academy logo mark */}
        <div className="relative z-10 pl-2 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <div>
            <span className="text-[10px] text-slate-400 block font-medium">লেখক</span>
            <span className="font-semibold text-slate-100 font-bengali">{authorBn}</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-emerald-400 block font-semibold">Digital Academy BD</span>
            <span className="text-[10px] text-slate-400">অফিশিয়াল ই-বুক</span>
          </div>
        </div>

        {/* Subtle holographic sheen overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
