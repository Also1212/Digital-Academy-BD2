import React from 'react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import {
  CheckCircle2,
  Download,
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  User,
  ShoppingBag,
  Mail,
} from 'lucide-react';

interface OrderConfirmationPageProps {
  orderId?: string;
}

export const OrderConfirmationPage: React.FC<OrderConfirmationPageProps> = ({ orderId }) => {
  const { orders, navigateTo, downloadProductFile } = useApp();

  // Pick latest order or match by orderId
  const order =
    orders.find((o) => o.orderNumber === orderId || o.id === orderId) || orders[0];

  if (!order) {
    return (
      <div className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center bg-white rounded-3xl border border-slate-200 p-8">
          <h2 className="text-xl font-bold font-bengali text-slate-900 mb-2">
            কোনো সাম্প্রতিক অর্ডার পাওয়া যায়নি
          </h2>
          <Button variant="primary" size="md" onClick={() => navigateTo('/')} fullWidth>
            হোমপেজে ফিরে যান
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <Badge variant="emerald" size="md" className="mb-2">
            অর্ডার সফল হয়েছে
          </Badge>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900">
            ধন্যবাদ, {order.customerName}!
          </h1>
          <p className="text-sm text-slate-600 font-bengali mt-1">
            আপনার অর্ডারটি সফলভাবে গৃহীত হয়েছে। নিচে আপনার ডিজিটাল ডাউনলোড লিংক প্রস্তুত রয়েছে।
          </p>
        </div>

        {/* Digital Downloads Box (Most Important) */}
        <div className="bg-white rounded-2xl border-2 border-emerald-500/40 p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <Download className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold font-bengali text-slate-900">
              আপনার ডিজিটাল ফাইলসমূহ (তাৎক্ষণিক ডাউনলোড)
            </h2>
          </div>

          <div className="space-y-4">
            {order.items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-bengali text-slate-900 leading-snug">
                      {item.product.titleBn}
                    </h3>
                    <p className="text-xs text-slate-500 font-bengali mt-0.5">
                      ফরম্যাট: PDF • সাইজ: {item.product.fileSize || '৩৫ MB'} • লাইফটাইম অ্যাক্সেস
                    </p>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => downloadProductFile(item.product)}
                  icon={<Download className="w-4 h-4" />}
                  className="font-bold text-xs sm:text-sm shrink-0 shadow-xs"
                >
                  ই-বুক ডাউনলোড করুন
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-bengali flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <span>
              <strong>নিশ্চিন্ত থাকুন:</strong> আপনার কেনা সমস্ত ই-বুক আপনার ডিজিটাল একাডেমি বিডি একাউন্টে
              স্থায়ীভাবে সংরক্ষিত থাকবে। ভবিষ্যতে যে কোনো সময় আবার ডাউনলোড করতে পারবেন।
            </span>
          </div>
        </div>

        {/* Order Details / Invoice Receipt Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs text-slate-500 block">ইনভয়েস নম্বর</span>
              <span className="text-base font-bold font-sans text-slate-900">{order.orderNumber}</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 block">অর্ডারের তারিখ</span>
              <span className="text-sm font-medium text-slate-700 font-bengali">{order.date}</span>
            </div>
          </div>

          {/* Customer & Payment Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <span className="text-xs text-slate-400 block mb-1">গ্রাহকের বিবরণ:</span>
              <div className="font-bold text-slate-900 font-bengali">{order.customerName}</div>
              <div className="text-slate-600">{order.phone}</div>
              <div className="text-slate-600">{order.email}</div>
            </div>

            <div>
              <span className="text-xs text-slate-400 block mb-1">পেমেন্ট মেথড ও তথ্য:</span>
              <div className="font-bold text-slate-900 uppercase">
                {order.paymentMethod === 'bkash'
                  ? 'বিকাশ (bKash)'
                  : order.paymentMethod === 'nagad'
                  ? 'নগদ (Nagad)'
                  : order.paymentMethod === 'rocket'
                  ? 'রকেট (Rocket)'
                  : 'কার্ড পেমেন্ট'}
              </div>
              <div className="text-slate-600 font-mono text-xs">
                TrxID: {order.transactionId}
              </div>
              <div className="text-emerald-700 font-semibold text-xs mt-0.5">
                স্ট্যাটাস: ভেরিফাইড ও পেইড
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-base font-bold text-slate-950">
            <span className="font-bengali">মোট পরিশোধিত টাকা</span>
            <span className="text-xl font-sans text-emerald-700 tabular-nums">
              ৳{order.totalAmount.toLocaleString('bn-BD')}
            </span>
          </div>
        </div>

        {/* Next Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="secondary"
            size="md"
            onClick={() => navigateTo('/account')}
            icon={<User className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            আমার অ্যাকাউন্ট ও ডাউনলোড হিস্ট্রি
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={() => navigateTo('/')}
            className="w-full sm:w-auto"
          >
            হোমে ফিরে যান
          </Button>
        </div>
      </div>
    </div>
  );
};
