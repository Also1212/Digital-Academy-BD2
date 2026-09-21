import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';
import { ServiceCard } from '../components/common/ServiceCard';
import { Button } from '../components/common/Button';
import { Input, Textarea } from '../components/common/Input';
import { Badge } from '../components/common/Badge';
import {
  Briefcase,
  CheckCircle2,
  Clock,
  Sparkles,
  Send,
  ShieldCheck,
  Phone,
  MessageCircle,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { showToast } = useApp();

  const [selectedService, setSelectedService] = useState<string>(SERVICES_LIST[0].titleBn);
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pageUrl, setPageUrl] = useState('');
  const [budget, setBudget] = useState('৳২০,০০০ - ৳৫০,০০০');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !businessName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('আপনার অনুরোধটি সফলভাবে গৃহীত হয়েছে। ২৪ ঘণ্টার মধ্যে যোগাযোগ করা হবে।', 'success');
    }, 600);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>ডিজিটাল মার্কেটিং সেবা</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-bengali text-slate-900 mb-3">
            মেটা অ্যাডস ও ট্র্যাকিং স্পেশালাইজড সার্ভিসেস
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-bengali leading-relaxed">
            আপনার বিজনেসের ফেসবুক ও ইনস্টাগ্রাম বিজ্ঞাপনে নিখুঁত আরওএএস (ROAS) এবং নির্ভুল সার্ভার-সাইড
            কনভার্সন এপিআই সেটআপের জন্য আমাদের অভিজ্ঞ টিমের সাথে কাজ করুন।
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SERVICES_LIST.map((service, idx) => (
            <ServiceCard key={service.id} service={service} featured={idx === 0} />
          ))}
        </div>

        {/* Request a Quote / Consultation Form */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm max-w-4xl mx-auto">
          <div className="max-w-2xl mb-8">
            <Badge variant="emerald" size="sm" className="mb-2">
              প্রজেক্ট কোটেশন
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold font-bengali text-slate-900">
              আপনার ব্যবসার জন্য সঠিক সমাধান নিয়ে আলোচনা করুন
            </h2>
            <p className="text-sm text-slate-600 font-bengali mt-1">
              নিচের ফর্মটি পূরণ করুন। আমরা আপনার বিজনেস পেজ অডিট করে বাস্তবসম্মত প্রস্তাবনা প্রদান করব।
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-bengali text-emerald-950">
                ধন্যবাদ! আপনার তথ্য সফলভাবে পৌঁছেছে
              </h3>
              <p className="text-sm text-emerald-900 font-bengali max-w-md mx-auto">
                আমাদের লিড স্পেশালিস্ট মোঃ মনসুর আলম বা প্রতিনিধি ২৪ ঘণ্টার মধ্যে আপনার সাথে হোয়াটসঅ্যাপ বা কলে
                যোগাযোগ করবেন।
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs"
              >
                আরেকটি অনুরোধ পাঠান
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmitQuote} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1.5 font-bengali">
                    কাঙ্ক্ষিত সার্ভিস নির্বাচন করুন *
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 font-bengali focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 text-sm"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.titleBn}>
                        {s.titleBn} (শুরু ৳{s.startingPrice.toLocaleString('bn-BD')})
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  label="ব্যবসা বা ব্র্যান্ডের নাম *"
                  placeholder="যেমন: স্টাইলিশ ফ্যাশন বিডি"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="মোবাইল / WhatsApp নম্বর *"
                  placeholder="01XXXXXXXXX"
                  isPhoneBangladeshi={true}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <Input
                  label="ইমেইল অ্যাড্রেস"
                  type="email"
                  placeholder="contact@business.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="ফেসবুক পেজ বা ওয়েবসাইট লিংক"
                  placeholder="https://facebook.com/yourpage"
                  value={pageUrl}
                  onChange={(e) => setPageUrl(e.target.value)}
                />

                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1.5 font-bengali">
                    মাসিক বিজ্ঞাপন বাজেট অনুমিত
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 font-bengali focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 text-sm"
                  >
                    <option value="৳১০,০০০ - ৳২০,০০০">৳১০,০০০ - ৳২০,০০০</option>
                    <option value="৳২০,০০০ - ৳৫০,০০০">৳২০,০০০ - ৳৫০,০০০</option>
                    <option value="৳৫০,০০০ - ৳১,০০,০০০">৳৫০,০০০ - ৳১,০০,০০০</option>
                    <option value="৳১,০০,০০০+">৳১,০০,০০০+ এর বেশি</option>
                  </select>
                </div>
              </div>

              <Textarea
                label="আপনার ব্যবসার মূল চ্যালেঞ্জ বা কী ধরনের রেজাল্ট চাইছেন?"
                placeholder="যেমন: সেলস ড্রপ করছে, সঠিক অডিয়েন্স পাচ্ছি না অথবা পিক্সেল সেটআপ করতে হবে..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={3}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                  fullWidth
                >
                  কোটেশন ও ফ্রি অডিট অনুরোধ পাঠান
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
