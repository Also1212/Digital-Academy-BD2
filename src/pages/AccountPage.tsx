import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import {
  Download,
  ShoppingBag,
  User,
  Clock,
  ShieldCheck,
  FileText,
  Lock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const AccountPage: React.FC = () => {
  const { orders, downloadProductFile, navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState<'downloads' | 'orders' | 'profile'>('downloads');

  // Extract all downloadable items across all completed orders
  const allDownloadableItems = orders.flatMap((order) =>
    order.items.map((item) => ({
      ...item,
      orderNumber: order.orderNumber,
      orderDate: order.date,
    }))
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Account Header */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 mb-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-extrabold text-2xl shadow-xs">
              <User className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h1 className="text-xl sm:text-2xl font-bold font-bengali text-slate-900">
                  গ্রাহক ড্যাশবোর্ড
                </h1>
                <Badge variant="emerald" size="sm">
                  ভেরিফাইড অ্যাকাউন্ট
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-bengali mt-0.5">
                আপনার কেনা সমস্ত ডিজিটাল প্রোডাক্ট এখানে আজীবন সংরক্ষিত থাকবে।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateTo('/shop')}
              icon={<ShoppingBag className="w-4 h-4 text-slate-700" />}
              className="text-xs sm:text-sm"
            >
              শপ ভিজিট করুন
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-3 border-b border-slate-200 mb-8 pb-3">
          <button
            onClick={() => setActiveTab('downloads')}
            className={`px-4 py-2 rounded-xl text-sm font-bold font-bengali transition-colors flex items-center gap-2 ${
              activeTab === 'downloads'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>আমার ডাউনলোড ({allDownloadableItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-xl text-sm font-bold font-bengali transition-colors flex items-center gap-2 ${
              activeTab === 'orders'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>অর্ডার হিস্ট্রি ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 rounded-xl text-sm font-bold font-bengali transition-colors flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <User className="w-4 h-4" />
            <span>প্রোফাইল সেটিংস</span>
          </button>
        </div>

        {/* Tab 1: Downloads */}
        {activeTab === 'downloads' && (
          <div>
            {allDownloadableItems.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
                <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold font-bengali text-slate-800 mb-1">
                  এখনো কোনো ই-বুক কেনা হয়নি
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-bengali mb-5 leading-relaxed">
                  আমাদের ফ্ল্যাগশিপ মেটা অ্যাডস এ টু জেড বইটি সংগ্রহ করে সরাসরি বিজ্ঞাপন শেখা শুরু করুন।
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigateTo('/shop/ebooks/meta-ads-a-to-z')}
                >
                  মেটা অ্যাডস ই-বুক দেখুন
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allDownloadableItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3.5 mb-4">
                      <div className="w-12 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0 shadow-xs">
                        <FileText className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <Badge variant="emerald" size="sm">
                            PDF E-Book
                          </Badge>
                          <span className="text-[11px] text-slate-400">
                            ইনভয়েস: {item.orderNumber}
                          </span>
                        </div>
                        <h3 className="text-base font-bold font-bengali text-slate-900 leading-snug">
                          {item.product.titleBn}
                        </h3>
                        <p className="text-xs text-slate-500 font-bengali mt-0.5">
                          সাইজ: {item.product.fileSize || '৩৮.৫ MB'} • আজীবন আনলিমিটেড অ্যাক্সেস
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-bengali">
                        ক্রয়ের তারিখ: {item.orderDate}
                      </span>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => downloadProductFile(item.product)}
                        icon={<Download className="w-3.5 h-3.5" />}
                        className="text-xs"
                      >
                        ডাউনলোড করুন (PDF)
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Orders History */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
                <h3 className="text-base font-bold font-bengali text-slate-800 mb-1">
                  কোনো অতীত অর্ডার পাওয়া যায়নি
                </h3>
                <p className="text-xs text-slate-500 font-bengali mb-5">
                  আপনি এখনো কোনো অর্ডার করেননি।
                </p>
                <Button variant="primary" size="sm" onClick={() => navigateTo('/shop')}>
                  শপে যান
                </Button>
              </div>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-900">{order.orderNumber}</span>
                      <span className="text-slate-400 mx-2">•</span>
                      <span className="text-slate-500 font-bengali">{order.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="emerald" size="sm">
                        সফল ও পেইড
                      </Badge>
                      <span className="text-slate-500 uppercase font-medium text-xs">
                        ({order.paymentMethod})
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-xs sm:text-sm"
                      >
                        <span className="font-medium text-slate-800 font-bengali">
                          {item.product.titleBn} × {item.quantity}
                        </span>
                        <span className="font-bold text-slate-900 tabular-nums">
                          ৳{(item.product.price * item.quantity).toLocaleString('bn-BD')}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      TrxID: <span className="font-mono">{order.transactionId}</span>
                    </div>
                    <div className="font-bold text-base text-emerald-700 tabular-nums">
                      সর্বমোট: ৳{order.totalAmount.toLocaleString('bn-BD')}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 3: Profile */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold font-bengali text-slate-900 mb-4 pb-3 border-b border-slate-100">
              গ্রাহক একাউন্ট সেটিংস
            </h2>
            <div className="space-y-4 text-sm font-bengali">
              <div>
                <span className="text-xs text-slate-400 block mb-1">অ্যাকাউন্টের ধরন</span>
                <div className="font-semibold text-slate-800">ব্যক্তিগত কাস্টমার অ্যাকাউন্ট</div>
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-1">ডিজিটাল লাইব্রেরি স্ট্যাটাস</span>
                <div className="text-emerald-700 font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>সক্রিয় এবং আজীবন ক্লাউড এক্সেস নিশ্চিত</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
                আপনার কেনা কোনো ফাইল ডাউনলোড করতে সমস্যা হলে সরাসরি আমাদের সাথে যোগাযোগ করতে পারেন:
                <br />
                ইমেইল: <strong className="text-slate-800">contact@digitalacademybd.com</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
