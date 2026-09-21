import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Button } from './Button';
import { FOUNDER_INFO } from '../../data/mockData';
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, showToast } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showToast('নিউজলেটারে সফলভাবে যুক্ত হয়েছেন! ধন্যবাদ।', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          {/* Col 1 & 2: Brand & Founder Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => navigateTo('/')}
              className="flex items-center gap-2.5 cursor-pointer select-none group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                <img
                  src="/brand-logo.png"
                  alt="Digital Academy BD"
                  className="w-full h-full object-contain bg-white"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                  Digital Academy <span className="text-emerald-400">BD</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase mt-1">
                  বাংলাদেশের প্রিমিয়াম ডিজিটাল একাডেমি
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-bengali leading-relaxed max-w-md pt-1">
              {FOUNDER_INFO.nameBn} এর নেতৃত্বে পরিচালিত একটি বিশেষায়িত ডিজিটাল প্ল্যাটফর্ম। আমাদের মূল
              উদ্দেশ্য লোকাল বিজনেস ও মার্কেটারদের প্র্যাকটিক্যাল মেটা অ্যাডস ও ডিজিটাল স্কিল অর্জনে
              নির্ভরযোগ্য রিসোর্স সরবরাহ করা।
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>contact@digitalacademybd.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="tabular-nums">+880 1700-000000 (সকাল ১০টা - সন্ধ্যা ৭টা)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ঢাকা, বাংলাদেশ</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-600/20 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-all"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-600/20 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-600/20 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-all"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Digital Products */}
          <div className="space-y-3 font-bengali">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              ডিজিটাল প্রোডাক্ট
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => navigateTo('/shop/ebooks/meta-ads-a-to-z')}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>মেটা অ্যাডস A-Z ই-বুক</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/shop/ebooks')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  সকল ডিজিটাল ই-বুক
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/shop/wordpress')}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center justify-between w-full"
                >
                  <span>ওয়ার্ডপ্রেস থিম ও প্লাগিন</span>
                  <span className="text-[10px] text-amber-400">শীঘ্রই</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/shop/software')}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center justify-between w-full"
                >
                  <span>ডিজিটাল সফটওয়্যার টুলস</span>
                  <span className="text-[10px] text-amber-400">শীঘ্রই</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services & Company */}
          <div className="space-y-3 font-bengali">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              সার্ভিস ও কোম্পানি
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => navigateTo('/services')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  মেটা অ্যাডস ম্যানেজমেন্ট
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/services')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  পিক্সেল ও CAPI ট্র্যাকিং সেটআপ
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/services')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  ১-অন-১ কনসালটেশন
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/about')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  আমাদের সম্পর্কে ও প্রতিষ্ঠাতা
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/faq')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  সাধারণ প্রশ্নোত্তর (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/contact')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  সরাসরি যোগাযোগ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter & Security */}
          <div className="space-y-3 font-bengali">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              ফ্রি মার্কেটিং আপডেট
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              মেটা অ্যাডস পলিসি আপডেট ও নতুন ডিজিটাল রিসোর্সের টিপস নিয়মিত ইমেইলে পেতে যুক্ত হোন।
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল অ্যাড্রেস..."
                required
                className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
              <Button
                type="submit"
                variant="primary"
                size="sm"
                fullWidth
                className="text-xs font-semibold shadow-xs"
              >
                যুক্ত হোন
              </Button>
            </form>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>আমরা কোনো স্প্যাম পাঠাই না। ১০০% তথ্য সুরক্ষিত।</span>
            </div>
          </div>
        </div>

        {/* Payment Methods & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Payment Trust Marks */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs text-slate-400 font-bengali">নিরাপদ পেমেন্ট মেথড:</span>
            <div className="flex flex-wrap items-center gap-2">
              {/* bKash badge */}
              <div className="px-3 py-1 rounded-lg bg-[#E2136E]/10 border border-[#E2136E]/30 text-[#E2136E] font-bold text-xs tracking-tight shadow-2xs">
                বিকাশ (bKash)
              </div>
              {/* Nagad badge */}
              <div className="px-3 py-1 rounded-lg bg-[#F7941D]/10 border border-[#F7941D]/30 text-[#F7941D] font-bold text-xs tracking-tight shadow-2xs">
                নগদ (Nagad)
              </div>
              {/* Rocket badge */}
              <div className="px-3 py-1 rounded-lg bg-[#8C3494]/10 border border-[#8C3494]/30 text-[#8C3494] font-bold text-xs tracking-tight shadow-2xs">
                রকেট (Rocket)
              </div>
              {/* Card badge */}
              <div className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium shadow-2xs">
                ভিসা / মাস্টারকার্ড
              </div>
            </div>
          </div>

          {/* Legal Links & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-500 font-bengali text-center sm:text-right">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigateTo('/privacy-policy')}
                className="hover:text-slate-400 transition-colors"
              >
                গোপনীয়তা নীতি
              </button>
              <button
                onClick={() => navigateTo('/terms')}
                className="hover:text-slate-400 transition-colors"
              >
                ব্যবহারের শর্তাবলী
              </button>
            </div>
            <div>
              © {new Date().getFullYear()} Digital Academy BD. সর্বস্বত্ব সংরক্ষিত।
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
