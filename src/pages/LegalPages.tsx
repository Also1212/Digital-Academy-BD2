import React from 'react';
import { useApp } from '../context/AppContext';
import { Badge } from '../components/common/Badge';
import { ShieldCheck, FileText } from 'lucide-react';

interface LegalPagesProps {
  type: 'privacy' | 'terms';
}

export const LegalPages: React.FC<LegalPagesProps> = ({ type }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="emerald" size="sm">
              আইন ও নীতিমালা
            </Badge>
            <span className="text-xs text-slate-400">সর্বশেষ সংস্করণ: ২০২৫</span>
          </div>

          {type === 'privacy' ? (
            <div className="prose prose-slate max-w-none font-bengali text-slate-700 leading-relaxed space-y-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                গোপনীয়তা নীতি (Privacy Policy)
              </h1>
              <p>
                Digital Academy BD ব্যবহারকারীদের ব্যক্তিগত তথ্যের সুরক্ষাকে সর্বোচ্চ অগ্রাধিকার দেয়। এই
                নথিতে ব্যাখ্যা করা হয়েছে আমরা কীভাবে আপনার তথ্য সংগ্রহ, সংরক্ষণ ও সুরক্ষিত রাখি।
              </p>
              <h2 className="text-lg font-bold text-slate-900 mt-6">১. সংগৃহীত তথ্যাবলী</h2>
              <p>
                অর্ডার প্রক্রিয়াকরণ ও ডিজিটাল ডাউনলোড লাইসেন্স ইস্যুর উদ্দেশ্যে আমরা গ্রাহকের নাম, মোবাইল
                নম্বর, ইমেইল অ্যাড্রেস এবং বিকাশ/নগদ পেমেন্ট ভেরিফিকেশনের জন্য ট্রানজ্যাকশন আইডি (TrxID) সংগ্রহ
                করি। আমরা কোনো ব্যাংকিং পাসওয়ার্ড বা পিন সংরক্ষণ করি না।
              </p>
              <h2 className="text-lg font-bold text-slate-900 mt-6">২. তথ্যের ব্যবহার</h2>
              <p>
                আপনার তথ্য কেবলমাত্র ডিজিটাল পণ্য ও সেবা সরবরাহ, রসিদ পাঠানো, অ্যাকাউন্ট সুরক্ষা নিশ্চিত করা
                এবং আপডেট সংক্রান্ত নোটিফিকেশন পাঠানোর কাজে ব্যবহৃত হয়।
              </p>
              <h2 className="text-lg font-bold text-slate-900 mt-6">৩. তৃতীয় পক্ষের সাথে তথ্য বণ্টন</h2>
              <p>
                আমরা কোনো অবস্থাতেই আপনার ফোন নম্বর বা ইমেইল বাণিজ্যিক কোনো থার্ড পার্টির কাছে বিক্রয় বা শেয়ার
                করি না।
              </p>
            </div>
          ) : (
            <div className="prose prose-slate max-w-none font-bengali text-slate-700 leading-relaxed space-y-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                ব্যবহারের শর্তাবলী (Terms & Conditions)
              </h1>
              <p>
                Digital Academy BD ওয়েবসাইট ব্যবহার বা কোনো ডিজিটাল প্রোডাক্ট ক্রয় করার মাধ্যমে আপনি নিচের
                শর্তাবলীর সাথে সম্মতি প্রকাশ করছেন।
              </p>
              <h2 className="text-lg font-bold text-slate-900 mt-6">১. কপিরাইট ও ইন্টেলেকচুয়াল প্রপার্টি</h2>
              <p>
                আমাদের সমস্ত ই-বুক, গাইডলাইন ও ডিজিটাল সফটওয়্যারের স্বত্বাধিকারী মোঃ মনসুর আলম ও Digital
                Academy BD। ক্রয়কৃত কপিটি কেবল ব্যক্তিগত ব্যবহারের জন্য লাইসেন্সকৃত। কোনো বই বা রিসোর্স
                অনলাইনে বিনামূল্যে বিতরণ, পুনঃবিক্রয় বা সোশ্যাল মিডিয়ায় শেয়ার করা আইনত দণ্ডনীয়।
              </p>
              <h2 className="text-lg font-bold text-slate-900 mt-6">২. ডিজিটাল পণ্য ও লাইফটাইম অ্যাক্সেস</h2>
              <p>
                পেমেন্ট সম্পন্ন হওয়ার পর গ্রাহক অবিলম্বে ফাইল ডাউনলোড করার লিংক পাবেন এবং নিজের অ্যাকাউন্টে
                সংরক্ষণ থাকবে। কোনো যান্ত্রিক ত্রুটির ক্ষেত্রে আমাদের হেল্পলাইনে জানালে তাৎক্ষণিক নতুন লিংক দেওয়া
                হবে।
              </p>
              <h2 className="text-lg font-bold text-slate-900 mt-6">৩. রিফান্ড পলিসি</h2>
              <p>
                যেহেতু ই-বুক একটি ডিজিটাল ফাইল এবং ক্রয়ের সাথে সাথেই সম্পূর্ণ কপি ডাউনলোডযোগ্য হয়ে যায়, তাই
                সাধারণত ডাউনলোড সম্পন্ন হওয়ার পর রিফান্ড প্রযোজ্য হয় না। তবে ফাইল ক্ষতিগ্রস্ত হলে বা সঠিক ফাইল
                না পেলে আমরা অবিলম্বে সঠিক ফাইল নিশ্চিত করি।
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
