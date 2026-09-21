import React from 'react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS, FOUNDER_INFO } from '../data/mockData';
import { BlogCard } from '../components/common/BlogCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Clock, Calendar, ArrowLeft, User, Sparkles, Share2, BookOpen } from 'lucide-react';

interface BlogPageProps {
  postSlug?: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({ postSlug }) => {
  const { currentPath, navigateTo, showToast } = useApp();

  // If viewing a single post
  const isSinglePost = Boolean(postSlug || (currentPath.startsWith('/blog/') && currentPath !== '/blog'));
  const currentSlug = postSlug || currentPath.replace('/blog/', '');
  const activePost = BLOG_POSTS.find((p) => p.slug === currentSlug) || BLOG_POSTS[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('আর্টিকেল লিংক কপি হয়েছে!', 'success');
  };

  if (isSinglePost && activePost) {
    return (
      <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigateTo('/blog')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition-colors mb-6 font-bengali"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ব্লগে ফিরে যান</span>
          </button>

          <article className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <Badge variant="emerald" size="sm">
                {activePost.categoryBn}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-slate-500 font-bengali">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{activePost.readTimeBn}</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-bengali">{activePost.publishDateBn}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-bengali text-slate-900 leading-tight mb-6">
              {activePost.titleBn}
            </h1>

            {/* Author bar */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold font-bengali text-slate-900">
                    {activePost.authorBn}
                  </div>
                  <div className="text-xs text-slate-500 font-bengali">
                    {FOUNDER_INFO.titleBn}
                  </div>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                title="লিংক কপি করুন"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Content body */}
            <div className="prose prose-slate max-w-none text-slate-700 font-bengali leading-relaxed text-base whitespace-pre-line space-y-4">
              {activePost.contentBn}
            </div>

            {/* End of article CTA */}
            <div className="mt-12 p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold font-bengali text-emerald-950">
                  সম্পূর্ণ মেটা অ্যাডস গাইডবুক খুঁজছেন?
                </h4>
                <p className="text-xs text-emerald-900 font-bengali mt-0.5">
                  আমাদের ২৪০ পৃষ্ঠার প্র্যাকটিক্যাল হ্যান্ডবুকে সব কৌশল বিস্তারিতভাবে অন্তর্ভুক্ত রয়েছে।
                </p>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigateTo('/shop/ebooks/meta-ads-a-to-z')}
                icon={<BookOpen className="w-4 h-4" />}
                className="shrink-0 text-xs font-bold"
              >
                ই-বুক সংগ্রহ করুন
              </Button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Blog Listing
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>প্র্যাকটিক্যাল নলেজ হাব</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-bengali text-slate-900 mb-3">
            ডিজিটাল মার্কেটিং ও মেটা অ্যাডস ব্লগ
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-bengali leading-relaxed">
            বাংলাদেশের ই-কমার্স এবং অনলাইন উদ্যোক্তাদের জন্য সাম্প্রতিক অ্যাড পলিসি, বাজেট সেভিং কৌশল ও
            ট্র্যাকিংয়ের বাস্তব বিশ্লেষণ।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
