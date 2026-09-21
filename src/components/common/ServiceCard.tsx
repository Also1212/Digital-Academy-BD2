import React from 'react';
import { ServiceItem } from '../../types';
import { Button } from './Button';
import { Badge } from './Badge';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const { navigateTo } = useApp();

  return (
    <div
      className={`flex flex-col justify-between rounded-3xl bg-white border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'border-emerald-500/50 shadow-lg shadow-emerald-950/5 ring-1 ring-emerald-500/20'
          : 'border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-slate-900/5 hover:border-slate-300'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="emerald" size="sm" icon={<ShieldCheck className="w-3 h-3" />}>
            ভেরিফাইড এক্সপার্ট সার্ভিস
          </Badge>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100/70 px-2 py-0.5 rounded-md">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {service.deliveryTimeBn}
          </span>
        </div>

        <h3 className="text-xl font-bold font-bengali text-slate-900 mb-1.5 leading-snug">
          {service.titleBn}
        </h3>
        <p className="text-sm font-semibold text-emerald-700 font-bengali mb-3">
          {service.subtitleBn}
        </p>
        <p className="text-xs sm:text-sm text-slate-600 font-bengali leading-relaxed mb-5">
          {service.descriptionBn}
        </p>

        {/* Feature List */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
          <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
            সার্ভিসের অন্তর্ভুক্ত বিষয়সমূহ:
          </div>
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-bengali">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-5 border-t border-slate-100/90 flex items-center justify-between gap-4">
        <div>
          <div className="text-[10px] text-slate-400 font-medium">শুরু হচ্ছে</div>
          <div className="text-xl font-extrabold text-slate-950 font-sans tabular-nums">
            ৳{service.startingPrice.toLocaleString('bn-BD')}
          </div>
        </div>

        <Button
          size="sm"
          variant={featured ? 'primary' : 'outline'}
          onClick={() => navigateTo(`/services/${service.slug}`)}
          className="text-xs sm:text-sm rounded-xl font-semibold"
        >
          <span>বিস্তারিত ও আলোচনা</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </Button>
      </div>
    </div>
  );
};
