import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PaymentMethod } from '../types';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Badge } from '../components/common/Badge';
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  CheckCircle2,
  Download,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { cart, cartTotal, createOrder, navigateTo, showToast } = useApp();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('ঢাকা');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bkash');
  const [transactionId, setTransactionId] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [copiedNumber, setCopiedNumber] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // If cart is empty, show empty state
  if (cart.length === 0) {
    return (
      <div className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold font-bengali text-slate-900 mb-2">
            আপনার কার্টে কোনো প্রোডাক্ট নেই
          </h2>
          <p className="text-sm text-slate-600 font-bengali mb-6">
            চেকআউট সম্পন্ন করার পূর্বে আমাদের শপ থেকে প্রোডাক্ট কার্টে যুক্ত করুন।
          </p>
          <Button
            variant="primary"
            size="md"
            onClick={() => navigateTo('/shop/ebooks/meta-ads-a-to-z')}
            fullWidth
          >
            ফ্ল্যাগশিপ মেটা অ্যাডস ই-বুক দেখুন
          </Button>
        </div>
      </div>
    );
  }

  const BKASH_NUMBER = '01700-000000';
  const NAGAD_NUMBER = '01700-000000';
  const ROCKET_NUMBER = '01700-000000-8';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(true);
    showToast('নম্বর কপি করা হয়েছে!', 'success');
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!customerName.trim()) {
      setError('দয়া করে আপনার পূর্ণ নাম লিখুন।');
      return;
    }
    if (!phone.trim()) {
      setError('দয়া করে আপনার মোবাইল নম্বর লিখুন।');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('একটি সঠিক ইমেইল অ্যাড্রেস লিখুন (ডিজিটাল ডাউনলোডের জন্য প্রয়োজনীয়)।');
      return;
    }

    if (paymentMethod !== 'card' && !transactionId.trim()) {
      setError('দয়া করে পেমেন্টের ট্রানজ্যাকশন আইডি (TrxID) প্রদান করুন।');
      return;
    }

    setIsSubmitting(true);

    // Simulate safe processing
    setTimeout(() => {
      const trxId =
        paymentMethod === 'card'
          ? `CARD-TXN-${Math.floor(100000 + Math.random() * 900000)}`
          : transactionId.trim().toUpperCase();

      const created = createOrder({
        customerName: customerName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        district,
        paymentMethod,
        transactionId: trxId,
        senderPhone: senderPhone.trim() || phone.trim(),
      });

      setIsSubmitting(false);
      showToast('অর্ডার সফলভাবে সম্পন্ন হয়েছে!', 'success');
      navigateTo(`/order-confirmation/${created.orderNumber}`);
    }, 800);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-bengali text-slate-900 mb-1.5">
            নিরাপদ চেকআউট ও পেমেন্ট
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-bengali">
            পেমেন্ট সফল হওয়ার সাথে সাথে আপনি সরাসরি ফাইল ডাউনলোড করতে পারবেন।
          </p>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Customer Details & Payment Options (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Customer Information Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                    ১
                  </span>
                  <h2 className="text-base font-bold font-bengali text-slate-900">
                    আপনার তথ্য (ডিজিটাল ডেলিভারি)
                  </h2>
                </div>

                <div className="space-y-4">
                  <Input
                    label="আপনার পুরো নাম *"
                    placeholder="যেমন: মোঃ সাকিব আহমেদ"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="মোবাইল নম্বর *"
                      placeholder="01XXXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      isPhoneBangladeshi={true}
                      helperText="এসএমএস নোটিফিকেশন পাঠানোর জন্য"
                      required
                    />

                    <Input
                      label="ইমেইল অ্যাড্রেস *"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      helperText="ডাউনলোড ইনভয়েস ও রিসিট পাঠানো হবে"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-1.5 font-bengali">
                      জেলা / লোকেশন
                    </label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 font-bengali"
                    >
                      <option value="ঢাকা">ঢাকা</option>
                      <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                      <option value="সিলেট">সিলেট</option>
                      <option value="রাজশাহী">রাজশাহী</option>
                      <option value="খুলনা">খুলনা</option>
                      <option value="বরিশাল">বরিশাল</option>
                      <option value="রংপুর">রংপুর</option>
                      <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                      <option value="অন্যান্য">অন্যান্য জেলা</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Method Selector Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                    ২
                  </span>
                  <h2 className="text-base font-bold font-bengali text-slate-900">
                    পেমেন্ট মেথড নির্বাচন করুন
                  </h2>
                </div>

                {/* Method Radio Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
                  {/* bKash */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bkash')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                      paymentMethod === 'bkash'
                        ? 'border-[#E2136E] bg-[#E2136E]/5 ring-2 ring-[#E2136E]/30 text-[#E2136E]'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="font-extrabold text-sm">বিকাশ</span>
                    <span className="text-[10px] font-semibold text-[#E2136E]">bKash</span>
                  </button>

                  {/* Nagad */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('nagad')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                      paymentMethod === 'nagad'
                        ? 'border-[#F7941D] bg-[#F7941D]/5 ring-2 ring-[#F7941D]/30 text-[#F7941D]'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="font-extrabold text-sm">নগদ</span>
                    <span className="text-[10px] font-semibold text-[#F7941D]">Nagad</span>
                  </button>

                  {/* Rocket */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('rocket')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                      paymentMethod === 'rocket'
                        ? 'border-[#8C3494] bg-[#8C3494]/5 ring-2 ring-[#8C3494]/30 text-[#8C3494]'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="font-extrabold text-sm">রকেট</span>
                    <span className="text-[10px] font-semibold text-[#8C3494]">Rocket</span>
                  </button>

                  {/* Card */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                      paymentMethod === 'card'
                        ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/30 text-emerald-800'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="font-extrabold text-sm font-bengali">কার্ড</span>
                    <span className="text-[10px] text-slate-500">Visa/Mastercard</span>
                  </button>
                </div>

                {/* Payment Instructions according to selected method */}
                {paymentMethod === 'bkash' && (
                  <div className="p-4 rounded-xl bg-[#E2136E]/5 border border-[#E2136E]/20 space-y-3">
                    <div className="text-xs font-semibold text-[#E2136E] uppercase tracking-wide">
                      বিকাশ পেমেন্ট নির্দেশিকা:
                    </div>
                    <ol className="text-xs text-slate-700 font-bengali space-y-1.5 list-decimal pl-4">
                      <li>আপনার বিকাশ অ্যাপে গিয়ে <strong>Send Money</strong> অথবা <strong>Payment</strong> অপশনে যান।</li>
                      <li className="flex items-center gap-2">
                        <span>এই নাম্বারে টাকা পাঠান: <strong>{BKASH_NUMBER}</strong> (Personal)</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(BKASH_NUMBER)}
                          className="p-1 rounded hover:bg-[#E2136E]/10 text-[#E2136E]"
                          title="নম্বর কপি করুন"
                        >
                          {copiedNumber ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </li>
                      <li>টাকার পরিমাণ লিখুন: <strong>৳{cartTotal.toLocaleString('bn-BD')}</strong></li>
                      <li>রেফারেন্সে আপনার নাম বা <strong>DAB</strong> লিখুন।</li>
                      <li>পেমেন্ট সম্পন্ন হওয়ার পর প্রাপ্ত <strong>Transaction ID (TrxID)</strong> নিচে লিখুন।</li>
                    </ol>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Input
                        label="প্রেরকের বিকাশ নম্বর"
                        placeholder="01XXXXXXXXX"
                        value={senderPhone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                        helperText="যে নম্বর থেকে টাকা পাঠিয়েছেন"
                      />
                      <Input
                        label="বিকাশ TrxID (Transaction ID) *"
                        placeholder="যেমন: BKH98X72Z"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        helperText="এসএমএস বা স্টেটমেন্ট থেকে ট্রানজ্যাকশন কোড"
                        required
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'nagad' && (
                  <div className="p-4 rounded-xl bg-[#F7941D]/5 border border-[#F7941D]/20 space-y-3">
                    <div className="text-xs font-semibold text-[#F7941D] uppercase tracking-wide">
                      নগদ পেমেন্ট নির্দেশিকা:
                    </div>
                    <ol className="text-xs text-slate-700 font-bengali space-y-1.5 list-decimal pl-4">
                      <li>আপনার নগদ অ্যাপ বা *167# ডায়াল করে <strong>Send Money</strong> অপশনে যান।</li>
                      <li className="flex items-center gap-2">
                        <span>প্রাপক নম্বর: <strong>{NAGAD_NUMBER}</strong> (Personal)</span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(NAGAD_NUMBER)}
                          className="p-1 rounded hover:bg-[#F7941D]/10 text-[#F7941D]"
                        >
                          {copiedNumber ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </li>
                      <li>টাকার পরিমাণ: <strong>৳{cartTotal.toLocaleString('bn-BD')}</strong></li>
                      <li>লেনদেন সম্পন্ন হওয়ার পর <strong>TrxID</strong> নিচে ইনপুট দিন।</li>
                    </ol>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Input
                        label="প্রেরকের নগদ নম্বর"
                        placeholder="01XXXXXXXXX"
                        value={senderPhone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                      />
                      <Input
                        label="নগদ TrxID *"
                        placeholder="যেমন: NGD7239XZ"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'rocket' && (
                  <div className="p-4 rounded-xl bg-[#8C3494]/5 border border-[#8C3494]/20 space-y-3">
                    <div className="text-xs font-semibold text-[#8C3494] uppercase tracking-wide">
                      রকেট পেমেন্ট নির্দেশিকা:
                    </div>
                    <ol className="text-xs text-slate-700 font-bengali space-y-1.5 list-decimal pl-4">
                      <li>আপনার রকেট অ্যাকাউন্ট থেকে <strong>Send Money</strong> নির্বাচন করুন।</li>
                      <li>প্রাপক রকেট নম্বর: <strong>{ROCKET_NUMBER}</strong></li>
                      <li>টাকার পরিমাণ: <strong>৳{cartTotal.toLocaleString('bn-BD')}</strong></li>
                      <li>পেমেন্ট শেষে প্রাপ্ত <strong>Transaction ID</strong> নিচে লিখুন।</li>
                    </ol>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Input
                        label="প্রেরকের রকেট নম্বর"
                        placeholder="01XXXXXXXXX"
                        value={senderPhone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                      />
                      <Input
                        label="রকেট TrxID *"
                        placeholder="যেমন: RCK12984X"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="text-xs font-semibold text-slate-800 uppercase tracking-wide">
                      ভিসা / মাস্টারকার্ড পেমেন্ট (সিমুলেশন গেটওয়ে):
                    </div>
                    <div className="space-y-3 pt-1">
                      <Input
                        label="কার্ডহোল্ডারের নাম"
                        placeholder="MD SAKIB AHMED"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                      />
                      <Input
                        label="কার্ড নম্বর"
                        placeholder="4111 2222 3333 4444"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          label="মেয়াদ (MM/YY)"
                          placeholder="12/28"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                        />
                        <Input
                          label="CVC / CVV"
                          placeholder="123"
                          type="password"
                          maxLength={4}
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2.5 text-xs sm:text-sm text-rose-700 font-bengali">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* Right Column: Order Summary & Instant Checkout Button (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs sticky top-24">
                <h2 className="text-base font-bold font-bengali text-slate-900 mb-4 pb-3 border-b border-slate-100">
                  অর্ডার সামারি ({cart.length} টি আইটেম)
                </h2>

                <div className="space-y-3.5 mb-6 max-h-72 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between text-sm py-2 border-b border-slate-50 gap-3"
                    >
                      <div className="min-w-0">
                        <div className="font-bold font-bengali text-slate-900 line-clamp-1">
                          {item.product.titleBn}
                        </div>
                        <div className="text-xs text-slate-500 font-bengali">
                          পরিমাণ: {item.quantity} • ডিজিটাল কপি
                        </div>
                      </div>
                      <div className="font-bold font-sans text-slate-900 tabular-nums shrink-0">
                        ৳{(item.product.price * item.quantity).toLocaleString('bn-BD')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Calculation */}
                <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                  <div className="flex justify-between text-sm text-slate-600 font-bengali">
                    <span>সাবটোটাল</span>
                    <span className="font-semibold text-slate-900 tabular-nums">
                      ৳{cartTotal.toLocaleString('bn-BD')}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600 font-bengali">
                    <span>ডেলিভারি মেথড</span>
                    <span className="text-emerald-700 font-medium">ইনস্ট্যান্ট ডাউনলোড (ফ্রি)</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between text-lg font-bold text-slate-950">
                    <span className="font-bengali">সর্বমোট</span>
                    <span className="font-sans tabular-nums text-emerald-700 text-xl">
                      ৳{cartTotal.toLocaleString('bn-BD')}
                    </span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  icon={<ShieldCheck className="w-5 h-5" />}
                  className="font-bold text-base shadow-sm"
                >
                  অর্ডার সম্পন্ন ও ডাউনলোড করুন
                </Button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 font-bengali text-center">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SSL সিকিউর এনক্রিপ্টেড পেমেন্ট প্রসেসিং</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
