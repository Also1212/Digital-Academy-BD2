import React from 'react';
import { Product } from '../../types';
import { Badge } from './Badge';
import { Button } from './Button';
import { BookCoverMockup } from './BookCoverMockup';
import { useApp } from '../../context/AppContext';
import { ShoppingBag, ArrowRight, BookOpen, Clock, FileText } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { navigateTo, addToCart } = useApp();

  const handleCardClick = () => {
    navigateTo(`/shop/${product.category}/${product.slug}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.isComingSoon) return;
    addToCart(product);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 hover:border-emerald-500/40 shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden ${
        featured ? 'ring-2 ring-emerald-500/30' : ''
      }`}
    >
      {/* Top Preview Area */}
      <div className="relative bg-gradient-to-b from-slate-100/70 via-slate-50 to-white p-6 flex items-center justify-center min-h-[250px] border-b border-slate-100/80 overflow-hidden">
        {/* Badge */}
        <div className="absolute top-3.5 left-3.5 z-20">
          {product.isComingSoon ? (
            <Badge variant="amber">শীঘ্রই আসছে</Badge>
          ) : product.isFlagship ? (
            <Badge variant="emerald">ফ্ল্যাগশিপ ই-বুক</Badge>
          ) : product.discountPercent ? (
            <Badge variant="rose">{product.discountPercent}% ছাড়</Badge>
          ) : (
            <Badge variant="slate">{product.badge || 'ডিজিটাল প্রোডাক্ট'}</Badge>
          )}
        </div>

        {/* Format / Pages tag on right */}
        {product.pages && (
          <div className="absolute top-3.5 right-3.5 z-20">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/90 backdrop-blur-sm text-slate-600 border border-slate-200/80 shadow-2xs">
              <FileText className="w-3 h-3 text-slate-400" />
              <span>{product.pages} পৃষ্ঠা</span>
            </span>
          </div>
        )}

        {/* Visual Mockup */}
        <div className="transform transition-transform duration-300 group-hover:scale-105">
          <BookCoverMockup
            titleBn={product.titleBn}
            titleEn={product.titleEn}
            authorBn={product.author.nameBn}
            size="sm"
            badge={product.badge || 'ডিজিটাল গাইড'}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] font-bold text-emerald-700 mb-1.5 tracking-wider uppercase">
            {product.category === 'ebooks'
              ? 'ই-বুক (eBook)'
              : product.category === 'wordpress'
              ? 'ওয়ার্ডপ্রেস (WordPress)'
              : 'টুলস ও সফটওয়্যার'}
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-bengali text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1 mb-2">
            {product.titleBn}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-bengali line-clamp-2 leading-relaxed mb-4">
            {product.shortPitchBn}
          </p>
        </div>

        {/* Price and Action */}
        <div className="pt-3.5 border-t border-slate-100/90 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] text-slate-400 font-medium">নির্ধারিত মূল্য</div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold font-sans text-slate-950 tabular-nums">
                ৳{product.price.toLocaleString('bn-BD')}
              </span>
              {product.originalPrice && (
                <span className="text-xs line-through text-slate-400 font-sans tabular-nums">
                  ৳{product.originalPrice.toLocaleString('bn-BD')}
                </span>
              )}
            </div>
          </div>

          <div>
            {product.isComingSoon ? (
              <span className="inline-flex items-center text-xs font-semibold text-amber-700 bg-amber-50/90 px-3 py-1.5 rounded-xl border border-amber-200/80 shadow-2xs">
                <Clock className="w-3.5 h-3.5 mr-1" />
                শীঘ্রই আসছে
              </span>
            ) : (
              <div className="flex items-center gap-1.5">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleAddToCart}
                  title="কার্টে যোগ করুন"
                  className="px-2.5 py-1.5 rounded-xl"
                >
                  <ShoppingBag className="w-4 h-4 text-slate-700" />
                </Button>
                <Button size="sm" variant="primary" className="text-xs px-3 py-1.5 rounded-xl font-semibold">
                  বিস্তারিত
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
