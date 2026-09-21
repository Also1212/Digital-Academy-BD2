import React from 'react';
import { BlogPost } from '../../types';
import { Badge } from './Badge';
import { useApp } from '../../context/AppContext';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { navigateTo } = useApp();

  return (
    <article
      onClick={() => navigateTo(`/blog/${post.slug}`)}
      className="group flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-slate-900/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="slate" size="sm">
            {post.categoryBn}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100/60 px-2 py-0.5 rounded-md">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.readTimeBn}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold font-bengali text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2 mb-2.5">
          {post.titleBn}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 font-bengali line-clamp-3 leading-relaxed mb-4">
          {post.summaryBn}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100/90 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
            <User className="w-3.5 h-3.5" />
          </div>
          <span className="font-bengali font-medium text-slate-700">{post.authorBn}</span>
        </div>
        <div className="inline-flex items-center gap-1 font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
          <span>পড়ুন</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  );
};
