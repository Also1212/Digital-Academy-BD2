import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FOUNDER_INFO } from '../data/mockData';
import { Button } from '../components/common/Button';
import { Input, Textarea } from '../components/common/Input';
import { Badge } from '../components/common/Badge';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactInfo || !message) return;

    setIsSent(true);
    showToast('আপনার বার্তাটি পাঠানো হয়েছে। দ্রুত উত্তর দেওয়া হবে।', 'success');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <Badge variant="emerald" size="sm" className="mb-2">
            যোগাযোগ ও কাস্টমার সাপোর্ট
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-bengali text-slate-900 mb-2">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-bengali">
            বই কেনা, পেমেন্ট ভেরিফিকেশন অথবা যে কোনো সার্ভিস সংক্রান্ত সহায়তার জন্য আমরা প্রস্তুত।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold font-bengali text-slate-900">হোয়াটসঅ্যাপ ও হেল্পলাইন</h3>
                <p className="text-sm text-slate-700 font-sans font-semibold mt-0.5 tabular-nums">
                  {FOUNDER_INFO.phone}
                </p>
                <span className="text-xs text-slate-500 font-bengali block mt-0.5">
                  সকাল ১০টা থেকে সন্ধ্যা ৭টা পর্যন্ত সচল
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold font-bengali text-slate-900">অফিশিয়াল ইমেইল</h3>
                <p className="text-sm text-slate-700 font-sans font-semibold mt-0.5">
                  {FOUNDER_INFO.email}
                </p>
                <span className="text-xs text-slate-500 font-bengali block mt-0.5">
                  যেকোনো প্রশ্ন বা ইনভয়েস অনুসন্ধানে
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold font-bengali text-slate-900">লোকেশন</h3>
                <p className="text-sm text-slate-700 font-bengali font-semibold mt-0.5">
                  ঢাকা, বাংলাদেশ
                </p>
                <span className="text-xs text-slate-500 font-bengali block mt-0.5">
                  ডিজিটাল একাডেমি বিডি সদর দপ্তর
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold font-bengali text-slate-900 mb-4 pb-3 border-b border-slate-100">
              বার্তা পাঠান
            </h2>

            {isSent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-bengali text-emerald-950">
                  বার্তা সফলভাবে পৌঁছেছে!
                </h3>
                <p className="text-sm text-emerald-900 font-bengali max-w-sm mx-auto">
                  ধন্যবাদ। আমাদের সাপোর্ট টিম দ্রুত আপনার সাথে যোগাযোগ করবে।
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSent(false)}
                  className="mt-2 text-xs"
                >
                  আরেকটি মেসেজ পাঠান
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="আপনার নাম *"
                  placeholder="আপনার নাম লিখুন"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <Input
                  label="মোবাইল নম্বর অথবা ইমেইল *"
                  placeholder="01XXXXXXXXX অথবা email@example.com"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  required
                />

                <Input
                  label="বিষয়"
                  placeholder="যেমন: ই-বুক ডাউনলোড সংক্রান্ত / কনসালটেন্সি"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />

                <Textarea
                  label="বার্তা *"
                  placeholder="আপনার প্রশ্ন বা বিস্তারিত বার্তাটি এখানে লিখুন..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={<Send className="w-4 h-4" />}
                  fullWidth
                >
                  বার্তা পাঠান
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
