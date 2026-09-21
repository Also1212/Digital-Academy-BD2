import React from 'react';
import { useApp } from '../context/AppContext';
import { FOUNDER_INFO, TRUST_PILLARS } from '../data/mockData';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { User, ShieldCheck, Sparkles, BookOpen, ArrowRight, Target, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="emerald" size="sm" className="mb-2">
            আমাদের লক্ষ্য ও পরিচিতি
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-bengali text-slate-900 mb-3">
            Digital Academy BD এর গল্প
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-bengali leading-relaxed">
            বাংলাদেশের অনলাইন উদ্যোক্তা ও মার্কেটারদের বাস্তবমুখী ডিজিটাল স্কিল অর্জনের বিশ্বস্ত ঠিকানা।
          </p>
        </div>

        {/* Founder Story Block */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xs mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8 pb-8 border-b border-slate-100">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-700/20">
              <User className="w-20 h-20 text-white/90" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                প্রতিষ্ঠাতা ও লিড ট্রেইনার
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
                {FOUNDER_INFO.nameBn}
              </h2>
              <div className="text-sm font-semibold text-slate-500 font-sans mb-3">
                {FOUNDER_INFO.nameEn} • {FOUNDER_INFO.titleBn}
              </div>
              <p className="text-sm text-slate-600 font-bengali leading-relaxed">
                {FOUNDER_INFO.experienceBn}। বাংলাদেশের অসংখ্য এসএমই ও ব্র্যান্ডের জন্য লাভজনক ফেসবুক
                বিজ্ঞাপন ক্যাম্পেইন পরিচালনা করেছেন।
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 font-bengali leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-xl font-bold font-bengali text-slate-900">
              কেন Digital Academy BD তৈরি করা হলো?
            </h3>
            <p>
              আজকাল ইন্টারনেটে ডিজিটাল মার্কেটিং শেখার উপাদানের অভাব নেই। কিন্তু ৯০% রিসোর্সই বিদেশি অথবা
              অনুবাদ করা তাত্ত্বিক কথা দিয়ে ভরা, যা বাংলাদেশের বাজারের সাথে খাপ খায় না।
            </p>
            <p>
              আমাদের দেশে ক্যাশ অন ডেলিভারি (COD) কালচার, গ্রাহকদের সাইকোলজি, ডলারের উচ্চ রেট ও ব্যাংক চার্জ
              এবং মেটা অ্যাকাউন্ট রেস্ট্রিকশনের মতো বাস্তব জটিলতা মোকাবিলা করতে প্রয়োজন ফিল্ড-লেভেলের
              পরীক্ষিত কৌশল।
            </p>
            <p>
              এই শূন্যতা পূরণ করতেই Digital Academy BD এর যাত্রা। এখানে কোনো বিভ্রান্তিকর অলীক স্বপ্ন বা
              ভুয়া সংখ্যা নেই — যা আছে তা হলো ১০০% খাঁটি, প্র্যাকটিক্যাল নির্দেশিকা।
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h3 className="text-xl font-bold font-bengali text-slate-900 text-center mb-6">
            আমাদের মূল ভিত্তি ও নীতিমালা
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRUST_PILLARS.map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <h4 className="text-base font-bold font-bengali text-slate-900 mb-1.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{p.titleBn}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-bengali leading-relaxed">
                  {p.descBn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white text-center">
          <h3 className="text-xl sm:text-2xl font-bold font-bengali text-white mb-2">
            আমাদের ফ্ল্যাগশিপ ই-বুক দিয়ে আজই শুরু করুন
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-bengali mb-6 max-w-lg mx-auto">
            মেটা বিজ্ঞাপনের এ টু জেড প্র্যাকটিক্যাল গাইডবুক সংগ্রহ করে আপনার মার্কেটিং স্কিলকে এক ধাপ এগিয়ে নিন।
          </p>
          <Button
            variant="primary"
            size="md"
            onClick={() => navigateTo('/shop/ebooks/meta-ads-a-to-z')}
            icon={<BookOpen className="w-4 h-4" />}
          >
            মেটা অ্যাডস ই-বুক সংগ্রহ করুন (৳৭৫০)
          </Button>
        </div>
      </div>
    </div>
  );
};
