import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { ProductCard } from '../components/common/ProductCard';
import { ServiceCard } from '../components/common/ServiceCard';
import { BlogCard } from '../components/common/BlogCard';
import { BookCoverMockup } from '../components/common/BookCoverMockup';
import {
  FLAGSHIP_EBOOK,
  ALL_PRODUCTS,
  SERVICES_LIST,
  BLOG_POSTS,
  TRUST_PILLARS,
  FOUNDER_INFO,
  GENERAL_FAQS,
} from '../data/mockData';
import {
  ArrowRight,
  BookOpen,
  Zap,
  CheckCircle2,
  User,
  Layers,
  Sparkles,
  MessageSquare,
  HelpCircle,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo, addToCart } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleBuyFlagship = () => {
    addToCart(FLAGSHIP_EBOOK, 1);
    navigateTo('/checkout');
  };

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden hero-ambient-glow border-b border-slate-200/80 pt-12 pb-16 sm:py-20 lg:py-28">
        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Bengali Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-emerald-200/90 text-emerald-900 text-xs sm:text-sm font-semibold mb-6 max-w-full shadow-2xs">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="leading-snug">বাংলাদেশের প্র্যাকটিক্যাল ডিজিটাল মার্কেটিং প্ল্যাটফর্ম</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-bengali text-slate-950 tracking-tight leading-[1.25] sm:leading-[1.2] mb-6">
              মেটা অ্যাডস শিখে বিজনেসের সেলস বৃদ্ধি করুন{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">
                নিখুঁত দক্ষতায়
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-bengali leading-relaxed mb-8 max-w-2xl mx-auto">
              কোনো গৎবাঁধা অনুবাদ নয় — বিগত ৫ বছরের বাস্তব বিজ্ঞাপন অভিজ্ঞতা থেকে প্রস্তুত বাংলা ই-বুক,
              প্র্যাকটিক্যাল গাইডবুক এবং নির্ভরযোগ্য ডিজিটাল মার্কেটিং সলিউশন।
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigateTo('/shop/ebooks/meta-ads-a-to-z')}
                icon={<BookOpen className="w-5 h-5" />}
                className="w-full sm:w-auto font-bold text-base shadow-md shadow-emerald-700/20"
              >
                Meta Ads eBook দেখুন
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigateTo('/services')}
                className="w-full sm:w-auto text-base font-semibold"
              >
                আমাদের সার্ভিসেস
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>

            {/* Trust highlights under hero */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600 font-bengali mt-10 pt-6 border-t border-slate-200/60">
              <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur-xs px-3 py-1 rounded-lg border border-slate-200/70 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ১০০% প্র্যাকটিক্যাল জ্ঞান
              </span>
              <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur-xs px-3 py-1 rounded-lg border border-slate-200/70 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                তাৎক্ষণিক ডিজিটাল ডাউনলোড
              </span>
              <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur-xs px-3 py-1 rounded-lg border border-slate-200/70 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                বিকাশ/নগদে সহজ পেমেন্ট
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLAGSHIP PRODUCT SPOTLIGHT (Most Important Conversion Block) */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-slate-100/50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              মূল আকর্ষণ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
              ফ্ল্যাগশিপ ই-বুক স্পটলাইট
            </h2>
          </div>

          <div className="bg-white/95 backdrop-blur-xs rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5 p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Cover Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div
                  onClick={() => navigateTo('/shop/ebooks/meta-ads-a-to-z')}
                  className="cursor-pointer"
                >
                  <BookCoverMockup
                    titleBn={FLAGSHIP_EBOOK.titleBn}
                    titleEn={FLAGSHIP_EBOOK.titleEn}
                    authorBn={FLAGSHIP_EBOOK.author.nameBn}
                    size="md"
                    badge="ফ্ল্যাগশিপ হ্যান্ডবুক"
                  />
                </div>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="emerald">মেটা অ্যাডস সম্পূর্ণ কোর্স গাইড</Badge>
                    <Badge variant="rose">৫০% অফার সীমিত সময়ের জন্য</Badge>
                    <Badge variant="slate">২০২৫ সংস্করণ</Badge>
                  </div>

                  <h3
                    onClick={() => navigateTo('/shop/ebooks/meta-ads-a-to-z')}
                    className="text-2xl sm:text-3xl font-bold font-bengali text-slate-900 hover:text-emerald-700 cursor-pointer transition-colors leading-tight mb-3"
                  >
                    {FLAGSHIP_EBOOK.titleBn}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 font-bengali leading-relaxed mb-6">
                    {FLAGSHIP_EBOOK.shortPitchBn} বাংলাদেশের প্রেক্ষাপটে ফেসবুক ও ইনস্টাগ্রামের ক্যাম্পেইন সেটআপ,
                    কাস্টম অডিয়েন্স রিসার্চ, মেটা পিক্সেল ও কনভার্সন এপিআই (CAPI) ট্র্যাকিং এবং বাজেট স্কেলিংয়ের
                    হাতে-কলমে গাইড।
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-sm text-slate-700 font-bengali">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>২৪০+ পৃষ্ঠা তথ্যবহুল স্ক্রিনশট ও চেকলিস্ট</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>আইডি ভেরিফিকেশন ও অ্যাকাউন্ট সুরক্ষা</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>হাই-কনভার্টিং বাংলা অ্যাড কপিরাইটিং ফর্মুলা</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>আজীবন ফ্রি ডিজিটাল আপডেট ও রিস্টোর</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">নির্ধারিত লঞ্চ মূল্য:</div>
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-3xl font-extrabold font-sans text-slate-950 tabular-nums">
                        ৳{FLAGSHIP_EBOOK.price.toLocaleString('bn-BD')}
                      </span>
                      <span className="text-sm line-through text-slate-400 font-sans tabular-nums">
                        ৳{FLAGSHIP_EBOOK.originalPrice?.toLocaleString('bn-BD')}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3">
                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => navigateTo('/shop/ebooks/meta-ads-a-to-z')}
                    >
                      বিস্তারিত সূচিপত্র
                    </Button>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleBuyFlagship}
                      icon={<Zap className="w-4 h-4" />}
                      className="font-bold shadow-sm"
                    >
                      এখনই কিনুন (৳৭৫০)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY DIGITAL ACADEMY BD (3-4 Trust Pillars) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              আমাদের বৈশিষ্ট্য
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
              কেন Digital Academy BD অন্যদের চেয়ে আলাদা?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center font-bold mb-5 shadow-2xs">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold font-bengali text-slate-900 mb-2.5">
                  {pillar.titleBn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-bengali leading-relaxed">
                  {pillar.descBn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOUNDER SECTION (Compact & Honest) */}
      <section className="py-14 sm:py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl bg-slate-900/90 backdrop-blur-md border border-slate-800 p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shrink-0 shadow-xl shadow-emerald-950/60 ring-4 ring-emerald-500/20">
              <User className="w-16 h-16 text-white/90" />
            </div>

            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                প্রতিষ্ঠাতা ও লিড ট্রেইনার
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-bengali text-white">
                {FOUNDER_INFO.nameBn}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-400 font-bengali">
                {FOUNDER_INFO.titleBn} • {FOUNDER_INFO.experienceBn}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-bengali leading-relaxed max-w-2xl">
                {FOUNDER_INFO.bioBn}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => navigateTo('/about')}
                  className="text-xs font-semibold shadow-xs"
                >
                  বিস্তারিত অভিজ্ঞতা পড়ুন
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigateTo('/contact')}
                  className="text-xs border-slate-700/80 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  যোগাযোগ করুন
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BROWSE BY CATEGORY */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                ক্যাটেগরি এক্সপ্লোরার
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
                ডিজিটাল রিসোর্স ও টুলস
              </h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateTo('/shop')}
              className="text-emerald-700 hover:text-emerald-800 font-semibold"
            >
              সব প্রোডাক্ট দেখুন
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_PRODUCTS.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (Structurally Ready, Empty/Placeholder State Without Fake Claims) */}
      <section className="py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              ব্যবহারকারীদের মতামত
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
              ভেরিফাইড টেস্টমোনিয়াল হাব
            </h2>
            <p className="text-xs text-slate-500 font-bengali mt-1">
              আমরা শতভাগ স্বচ্ছতায় বিশ্বাস করি। এখানে কেবল ভেরিফাইড পাঠকদের আসল রিভিউ প্রকাশ করা হবে।
            </p>
          </div>

          <div className="rounded-3xl border border-dashed border-slate-300/90 bg-white/90 backdrop-blur-xs p-8 sm:p-12 text-center shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-2xs">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold font-bengali text-slate-900 mb-2">
              আপনি কি Digital Academy BD এর রিসোর্স ব্যবহার করেছেন?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-bengali max-w-lg mx-auto mb-6 leading-relaxed">
              আপনার সৎ প্রতিক্রিয়া অন্য উদ্যোক্তা ও পাঠকদের সঠিক সিদ্ধান্ত নিতে সাহায্য করবে। বইটি পড়ার পর
              আপনার অভিজ্ঞতা আমাদের সাথে শেয়ার করার জন্য সাদর আমন্ত্রণ জানাচ্ছি।
            </p>
            <Button
              variant="outline"
              size="md"
              onClick={() => navigateTo('/contact')}
              className="font-semibold text-xs sm:text-sm"
            >
              আপনার অভিজ্ঞতা ও ফিডব্যাক পাঠান
            </Button>
          </div>
        </div>
      </section>

      {/* 7. BLOG & RESOURCES TEASER (3 Latest Articles) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                ফ্রি লার্নিং সেন্টার
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
                মার্কেটিং টিপস ও বিশ্লেষণ
              </h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateTo('/blog')}
              className="text-emerald-700 font-semibold"
            >
              সব আর্টিকেল পড়ুন
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. SERVICES TEASER (Soft Secondary CTA Block) */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white p-8 sm:p-12 border border-slate-800 shadow-xl">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                বিশেষজ্ঞ সহায়তা
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-bengali text-white leading-tight mb-4">
                আপনার বিজনেসের জন্য প্রফেশনাল মেটা অ্যাডস ম্যানেজমেন্ট প্রয়োজন?
              </h2>
              <p className="text-xs sm:text-base text-slate-300 font-bengali leading-relaxed mb-8">
                ক্যাম্পেইন সেটআপ, হাই-কনভার্টিং ক্রিয়েটিভ অপ্টিমাইজেশন কিংবা পিক্সেল ট্র্যাকিং সমস্যার সমাধান
                — আমাদের দক্ষ টিমের সাথে সরাসরি কাজ করতে পারেন।
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigateTo('/services')}
                  className="font-bold text-sm shadow-md"
                >
                  সার্ভিসেস ও কনসালটেশন দেখুন
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => navigateTo('/contact')}
                  className="border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white text-sm font-semibold"
                >
                  সরাসরি আলোচনা
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION (4-5 short Q&As) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              সাধারণ জিজ্ঞাসা
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
              সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)
            </h2>
          </div>

          <div className="space-y-3">
            {GENERAL_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 bg-slate-50/70 hover:bg-slate-50 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base font-bold font-bengali text-slate-900">
                      {faq.questionBn}
                    </span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-700 font-bengali leading-relaxed">
                      {faq.answerBn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BAND */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white text-center relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-bengali text-white mb-4">
            আজই মেটা অ্যাডসের কার্যকর ফ্রেমওয়ার্ক আয়ত্ত করুন
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 font-bengali mb-8 max-w-2xl mx-auto">
            আপনার বিজ্ঞাপনের অপ্রয়োজনীয় খরচ রোধ করুন এবং বাস্তবসম্মত কৌশলে ব্যবসাকে পরবর্তী স্তরে নিয়ে যান।
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigateTo('/shop/ebooks/meta-ads-a-to-z')}
              icon={<Zap className="w-5 h-5 text-emerald-400" />}
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold shadow-lg"
            >
              মেটা অ্যাডস ই-বুক কিনুন (৳৭৫০)
            </Button>
            <Button
              id="final-cta-contact-btn"
              variant="outline"
              size="lg"
              onClick={() => navigateTo('/contact')}
              className="border-white bg-white text-slate-950 hover:bg-slate-100 font-bold shadow-md"
            >
              যোগাযোগ করুন
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
