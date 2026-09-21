import React, { useState } from 'react';
import { GENERAL_FAQS, FLAGSHIP_EBOOK } from '../data/mockData';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';
import { Badge } from '../components/common/Badge';

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Combine general and product FAQs
  const allFaqs = [
    ...GENERAL_FAQS,
    ...(FLAGSHIP_EBOOK.faqs || []),
    {
      questionBn: 'ডাউনলোড লিঙ্ক কি মেয়াদোত্তীর্ণ (Expire) হয়ে যায়?',
      answerBn: 'না। আপনার অ্যাকাউন্টের ড্যাশবোর্ডে লগইন করে আপনি যেকোনো সময় আজীবন আনলিমিটেড বার আপনার ফাইলগুলো রি-ডাউনলোড করতে পারবেন।',
    },
    {
      questionBn: 'বইয়ের কোনো অধ্যায় বুঝতে সমস্যা হলে কী করব?',
      answerBn: 'আমাদের প্রতিটি বইয়ের সাথে সাপোর্ট কমিউনিটি ও ইমেইল সহায়তা অন্তর্ভুক্ত থাকে। সরাসরি লেখকের টিমের সাথে যোগাযোগ করতে পারবেন।',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <Badge variant="emerald" size="sm" className="mb-2">
            প্রশ্নোত্তর হাব
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-bengali text-slate-900 mb-3">
            সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)
          </h1>
          <p className="text-sm text-slate-600 font-bengali">
            Digital Academy BD এর ডিজিটাল পণ্য, পেমেন্ট ও ডেলিভারি সম্পর্কিত সকল সাধারণ প্রশ্নের উত্তর।
          </p>
        </div>

        <div className="space-y-3">
          {allFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 bg-white hover:bg-slate-50/80 flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="text-base font-bold font-bengali text-slate-900">
                    {faq.questionBn}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-5 bg-slate-50/50 border-t border-slate-100 text-sm text-slate-700 font-bengali leading-relaxed">
                    {faq.answerBn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
