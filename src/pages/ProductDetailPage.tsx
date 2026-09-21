import React, { useState } from 'react';
import { Product } from '../types';
import { ALL_PRODUCTS, FLAGSHIP_EBOOK, FOUNDER_INFO } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { BookCoverMockup } from '../components/common/BookCoverMockup';
import { ProductCard } from '../components/common/ProductCard';
import {
  ShoppingBag,
  Zap,
  CheckCircle2,
  FileText,
  Clock,
  ShieldCheck,
  Download,
  Share2,
  ChevronDown,
  ChevronUp,
  User,
  HelpCircle,
  MessageSquare,
  Sparkles,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface ProductDetailPageProps {
  productSlug?: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productSlug }) => {
  const { addToCart, navigateTo } = useApp();

  // Find product by slug, default to Flagship eBook
  const product: Product =
    ALL_PRODUCTS.find((p) => p.slug === productSlug) || FLAGSHIP_EBOOK;

  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleBuyNow = () => {
    addToCart(product, 1);
    navigateTo('/checkout');
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const relatedProducts = ALL_PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <div className="bg-slate-50 min-h-screen pb-24 lg:pb-20">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 font-bengali flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <button onClick={() => navigateTo('/')} className="hover:text-emerald-700">
            হোম
          </button>
          <span>/</span>
          <button onClick={() => navigateTo('/shop')} className="hover:text-emerald-700">
            শপ
          </button>
          <span>/</span>
          <button
            onClick={() => navigateTo(`/shop/${product.category}`)}
            className="hover:text-emerald-700 uppercase"
          >
            {product.category}
          </button>
          <span>/</span>
          <span className="text-slate-900 font-medium">{product.titleBn}</span>
        </div>
      </div>

      {/* Main Top Showcase Section */}
      <section className="bg-white border-b border-slate-200/90 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Col: 3D Book Preview Mockup & Quick Specs */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-50 via-white to-slate-50 border border-slate-200/80 shadow-lg shadow-slate-900/5 flex items-center justify-center w-full">
                <BookCoverMockup
                  titleBn={product.titleBn}
                  titleEn={product.titleEn}
                  authorBn={product.author.nameBn}
                  size="lg"
                  badge={product.badge || 'অফিশিয়াল সংস্করণ'}
                />
              </div>

              {/* Quick Specification Grid */}
              <div className="grid grid-cols-3 gap-2.5 w-full mt-5 text-center">
                <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-3.5 shadow-2xs">
                  <span className="text-[11px] text-slate-500 block font-bengali font-medium">ফরম্যাট</span>
                  <span className="font-bold text-xs text-slate-900 font-sans">PDF E-Book</span>
                </div>
                <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-3.5 shadow-2xs">
                  <span className="text-[11px] text-slate-500 block font-bengali font-medium">মোট পৃষ্ঠা</span>
                  <span className="font-bold text-xs text-slate-900 font-sans tabular-nums">
                    {product.pages || 240}+ পৃষ্ঠা
                  </span>
                </div>
                <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-3.5 shadow-2xs">
                  <span className="text-[11px] text-slate-500 block font-bengali font-medium">অ্যাক্সেস</span>
                  <span className="font-bold text-xs text-emerald-700 font-bengali">আজীবন ফ্রি</span>
                </div>
              </div>
            </div>

            {/* Right Col: Title, Pricing & Value Pitch */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3.5">
                  {product.isFlagship && (
                    <Badge variant="emerald" size="md" icon={<Sparkles className="w-3.5 h-3.5" />}>
                      ফ্ল্যাগশিপ গাইডবুক
                    </Badge>
                  )}
                  {product.discountPercent && (
                    <Badge variant="rose" size="md">
                      {product.discountPercent}% বিশেষ লঞ্চ অফার
                    </Badge>
                  )}
                  <Badge variant="slate" size="md">
                    {product.releaseDateBn || '২০২৫ সংস্করণ'}
                  </Badge>
                </div>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-bengali text-slate-950 leading-tight mb-2 tracking-tight">
                  {product.titleBn}
                </h1>
                <div className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wider mb-4 uppercase">
                  {product.titleEn}
                </div>

                {/* Short Value Line */}
                <p className="text-base sm:text-lg text-slate-600 font-bengali leading-relaxed mb-6">
                  {product.shortPitchBn}
                </p>

                {/* Price Box */}
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 border border-emerald-200/90 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-emerald-900 font-semibold font-bengali">
                      লঞ্চ উপলক্ষে বর্তমান অফার মূল্য:
                    </div>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-950 tabular-nums">
                        ৳{product.price.toLocaleString('bn-BD')}
                      </span>
                      {product.originalPrice && (
                        <span className="text-base line-through text-slate-400 font-sans tabular-nums">
                          ৳{product.originalPrice.toLocaleString('bn-BD')}
                        </span>
                      )}
                      {product.discountPercent && (
                        <span className="text-xs font-bold text-rose-700 bg-rose-100/90 px-2.5 py-0.5 rounded-full border border-rose-200 shadow-2xs">
                          সাশ্রয় ৳{(product.originalPrice! - product.price).toLocaleString('bn-BD')}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-900 bg-white/95 px-3 py-1.5 rounded-full border border-emerald-200/90 shadow-2xs">
                      <Download className="w-3.5 h-3.5 text-emerald-600" />
                      ইনস্ট্যান্ট ডিজিটাল ডাউনলোড
                    </span>
                  </div>
                </div>

                {/* Action CTA Buttons (Desktop) */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-6">
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={handleBuyNow}
                    icon={<Zap className="w-5 h-5" />}
                    className="font-bold shadow-md shadow-emerald-700/20"
                  >
                    এখনই কিনুন (তাৎক্ষণিক ডাউনলোড)
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    onClick={handleAddToCart}
                    icon={<ShoppingBag className="w-5 h-5 text-slate-700" />}
                    className="font-semibold"
                  >
                    কার্টে যোগ করুন
                  </Button>
                </div>

                {/* Trust Points Mini Banner */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600 font-bengali pt-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>বিকাশ, নগদ, রকেটে নিরাপদ ইনস্ট্যান্ট পেমেন্ট</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ব্যক্তিগত ড্যাশবোর্ড থেকে আজীবন রি-ডাউনলোড সুবিধা</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Breakdown & Modules: "এই বইতে যা আছে" */}
      {product.chapters && product.chapters.length > 0 && (
        <section className="py-14 sm:py-20 border-b border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                মডিউল ও সূচিপত্র
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
                এই বইতে যা যা শিখবেন
              </h2>
              <p className="text-sm text-slate-600 font-bengali mt-2">
                প্রতিটি অধ্যায় বাস্তব কাজের স্ক্রিনশট ও বাংলা ব্যাখ্যাসহ নিখুঁতভাবে সাজানো হয়েছে।
              </p>
            </div>

            <div className="space-y-3">
              {product.chapters.map((ch) => {
                const isOpen = expandedChapter === ch.number;
                return (
                  <div
                    key={ch.number}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-colors duration-150"
                  >
                    <button
                      onClick={() => setExpandedChapter(isOpen ? null : ch.number)}
                      className="w-full text-left p-5 sm:p-6 bg-slate-50/60 hover:bg-slate-50 flex items-center justify-between gap-4 transition-colors"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="w-8 h-8 rounded-lg bg-emerald-600/10 text-emerald-700 font-sans font-bold flex items-center justify-center shrink-0 text-sm">
                          {ch.number.toLocaleString('bn-BD')}
                        </span>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold font-bengali text-slate-900">
                            {ch.titleBn}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 font-bengali mt-0.5 line-clamp-1">
                            {ch.summaryBn}
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 text-slate-400">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="p-5 sm:p-6 bg-white border-t border-slate-100">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                          অধ্যায়ের বিস্তারিত বিষয়সমূহ:
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {ch.topics.map((topic, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-slate-700 font-bengali"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Key Benefits */}
      {product.benefits && (
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                বিশেষ সুবিধাসমূহ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
                কেন বইটি আপনার সংগ্রহে রাখা জরুরি?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-sm font-medium text-slate-800 font-bengali leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* "কাদের জন্য এই বই" (Target Audience) */}
      {product.targetAudience && (
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                উপযুক্ত পাঠক
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
                কাদের জন্য এই গাইডবুকটি বিশেষভাবে রচিত?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.targetAudience.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold font-bengali text-slate-900 mb-2">
                      {item.titleBn}
                    </h3>
                    <p className="text-sm text-slate-600 font-bengali leading-relaxed">
                      {item.descBn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Author Bio linking to /about */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-900/50">
              <User className="w-12 h-12 text-white/90" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                লেখক ও বিশেষজ্ঞ পরিচিতি
              </span>
              <h3 className="text-2xl font-bold font-bengali text-white">
                {FOUNDER_INFO.nameBn} ({FOUNDER_INFO.nameEn})
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-bengali">
                {FOUNDER_INFO.titleBn} • {FOUNDER_INFO.experienceBn}
              </p>
              <p className="text-sm text-slate-400 font-bengali leading-relaxed pt-1">
                {FOUNDER_INFO.bioBn}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('/about')}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  <span>সম্পূর্ণ প্রোফাইল ও অভিজ্ঞতা দেখুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product-Specific FAQ */}
      {product.faqs && (
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                প্রশ্নোত্তর
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
                ই-বুক সম্পর্কিত সাধারণ জিজ্ঞাসা
              </h2>
            </div>

            <div className="space-y-3">
              {product.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 bg-slate-50/70 hover:bg-slate-50 flex items-center justify-between gap-4"
                    >
                      <span className="text-base font-bold font-bengali text-slate-900">
                        {faq.questionBn}
                      </span>
                      <span className="text-slate-400 shrink-0">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-5 bg-white border-t border-slate-100 text-sm text-slate-700 font-bengali leading-relaxed">
                        {faq.answerBn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Reviews / Testimonials: Structurally Ready & Honest Placeholder State */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              পাঠকদের প্রতিক্রিয়া
            </span>
            <h2 className="text-2xl font-bold font-bengali text-slate-900">
              ভেরিফাইড রিভিউ সেকশন
            </h2>
            <p className="text-xs text-slate-500 font-bengali mt-1">
              (নীতিমালা অনুযায়ী আমরা কোনো ফেক রিভিউ ব্যবহার করি না)
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 sm:p-10 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-bengali text-slate-900 mb-1">
              আপনি কি বইটি পড়েছেন?
            </h3>
            <p className="text-sm text-slate-600 font-bengali max-w-md mx-auto mb-5 leading-relaxed">
              আপনার বাস্তব অভিজ্ঞতা ও মতামত আমাদের কাছে অত্যন্ত মূল্যবান। বইটি পড়ার পর আপনার ভেরিফাইড
              রিভিউ পাঠাতে আমাদের সাপোর্ট ইমেইলে যোগাযোগ করতে পারেন।
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateTo('/contact')}
              className="text-xs"
            >
              রিভিউ জমা দিন
            </Button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                  অন্যান্য রিসোর্স
                </span>
                <h2 className="text-2xl font-bold font-bengali text-slate-900">
                  সম্পর্কিত ডিজিটাল প্রোডাক্ট
                </h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateTo('/shop')}
                className="text-xs"
              >
                সব দেখুন
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sticky Mobile Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3.5 sm:hidden shadow-lg flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] text-slate-500 font-medium font-bengali">অফার প্রাইস:</div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold font-sans text-slate-900 tabular-nums">
              ৳{product.price.toLocaleString('bn-BD')}
            </span>
            {product.originalPrice && (
              <span className="text-xs line-through text-slate-400 font-sans tabular-nums">
                ৳{product.originalPrice.toLocaleString('bn-BD')}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleAddToCart}
            className="px-3"
            title="কার্টে যোগ করুন"
          >
            <ShoppingBag className="w-4 h-4 text-slate-700" />
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={handleBuyNow}
            icon={<Zap className="w-4 h-4" />}
            className="text-xs font-bold px-4 py-2.5"
          >
            এখনই কিনুন
          </Button>
        </div>
      </div>
    </div>
  );
};
