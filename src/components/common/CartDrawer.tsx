import React from 'react';
import { useApp } from '../../context/AppContext';
import { Button } from './Button';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, DownloadCloud } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, cartTotal, navigateTo } = useApp();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigateTo('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-200/80">
          {/* Drawer Header */}
          <div className="p-5 border-b border-slate-200/80 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-extrabold font-bengali text-slate-900">আপনার কার্ট</h2>
              <span className="text-xs bg-emerald-100/80 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full border border-emerald-200/60 shadow-2xs">
                {cart.length} টি আইটেম
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
            {cart.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400 shadow-2xs">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold font-bengali text-slate-800 mb-1">
                  কার্ট বর্তমানে খালি
                </h3>
                <p className="text-sm text-slate-500 font-bengali mb-6">
                  আমাদের ফ্ল্যাগশিপ মেটা অ্যাডস ই-বুক অথবা অন্যান্য রিসোর্স ব্রাউজ করুন।
                </p>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('/shop/ebooks/meta-ads-a-to-z');
                  }}
                  className="font-semibold shadow-xs"
                >
                  ফ্ল্যাগশিপ ই-বুক দেখুন
                </Button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-emerald-500/30 shadow-2xs transition-all relative"
                >
                  <div className="w-16 h-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-xl flex flex-col justify-center items-center text-white text-center p-1.5 shrink-0 shadow-xs border border-slate-800">
                    <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">eBook</span>
                    <span className="text-[10px] font-bengali font-bold line-clamp-2 mt-0.5">
                      {item.product.titleBn}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-bold font-bengali text-slate-900 line-clamp-1">
                          {item.product.titleBn}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 hover:text-rose-600 transition-colors p-1 rounded-md hover:bg-rose-50 cursor-pointer"
                          title="সরিয়ে ফেলুন"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        ডিজিটাল সংস্করণ • PDF
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-slate-500">পরিমাণ: {item.quantity}</span>
                      <span className="text-base font-bold text-slate-900 tabular-nums">
                        ৳{(item.product.price * item.quantity).toLocaleString('bn-BD')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-200/80 bg-slate-50/80 backdrop-blur-xs space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm text-slate-600 font-bengali">
                  <span>সাবটোটাল</span>
                  <span className="tabular-nums font-semibold text-slate-900">
                    ৳{cartTotal.toLocaleString('bn-BD')}
                  </span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm text-slate-600 font-bengali">
                  <span>ডেলিভারি চার্জ</span>
                  <span className="text-emerald-700 font-medium font-bengali">ফ্রি (ডিজিটাল ডাউনলোড)</span>
                </div>
                <div className="pt-2 border-t border-slate-200/80 flex justify-between text-base font-bold text-slate-950">
                  <span className="font-bengali">মোট প্রদেয়</span>
                  <span className="tabular-nums text-lg text-emerald-700 font-sans">
                    ৳{cartTotal.toLocaleString('bn-BD')}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/90 border border-emerald-200/80 flex items-center gap-2.5 text-xs text-emerald-950 shadow-2xs">
                <DownloadCloud className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-bengali">
                  পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই ডাউনলোড লিংক পাওয়া যাবে।
                </span>
              </div>

              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleCheckout}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="font-bold shadow-md shadow-emerald-700/20"
              >
                চেকআউট করুন (পেমেন্ট পেজে যান)
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
