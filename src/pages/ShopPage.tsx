import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_PRODUCTS } from '../data/mockData';
import { ProductCategory } from '../types';
import { ProductCard } from '../components/common/ProductCard';
import { Badge } from '../components/common/Badge';
import { BookOpen, Layers, Cpu, Sparkles, Filter } from 'lucide-react';

interface ShopPageProps {
  initialCategory?: ProductCategory | 'all';
}

export const ShopPage: React.FC<ShopPageProps> = ({ initialCategory = 'all' }) => {
  const { currentPath, navigateTo } = useApp();

  // Determine active category from path or prop
  const getActiveCategory = (): ProductCategory | 'all' => {
    if (currentPath.includes('/shop/ebooks')) return 'ebooks';
    if (currentPath.includes('/shop/wordpress')) return 'wordpress';
    if (currentPath.includes('/shop/software')) return 'software';
    return (initialCategory as ProductCategory | 'all') || 'all';
  };

  const activeCategory = getActiveCategory();

  const handleCategoryChange = (cat: ProductCategory | 'all') => {
    if (cat === 'all') {
      navigateTo('/shop');
    } else {
      navigateTo(`/shop/${cat}`);
    }
  };

  const filteredProducts =
    activeCategory === 'all'
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeCategory);

  const categories: { id: ProductCategory | 'all'; labelBn: string; count: number }[] = [
    { id: 'all', labelBn: 'সকল প্রোডাক্ট', count: ALL_PRODUCTS.length },
    {
      id: 'ebooks',
      labelBn: 'ডিজিটাল ই-বুক',
      count: ALL_PRODUCTS.filter((p) => p.category === 'ebooks').length,
    },
    {
      id: 'wordpress',
      labelBn: 'ওয়ার্ডপ্রেস থিম ও প্লাগিন',
      count: ALL_PRODUCTS.filter((p) => p.category === 'wordpress').length,
    },
    {
      id: 'software',
      labelBn: 'সফটওয়্যার ও টুলস',
      count: ALL_PRODUCTS.filter((p) => p.category === 'software').length,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-emerald-200/90 text-emerald-900 text-xs font-semibold mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>ডিজিটাল প্রোডাক্ট ক্যাটালগ</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-bengali text-slate-950 mb-3 tracking-tight">
            {activeCategory === 'ebooks'
              ? 'ডিজিটাল ই-বুক সংগ্রহ'
              : activeCategory === 'wordpress'
              ? 'ওয়ার্ডপ্রেস প্রিমিয়াম থিম ও টুলস'
              : activeCategory === 'software'
              ? 'ডিজিটাল সফটওয়্যার ও ট্র্যাকার'
              : 'সকল ডিজিটাল রিসোর্স ও ই-বুক'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-bengali leading-relaxed">
            মেটা অ্যাডস ও ই-কমার্স গ্রোথের জন্য বিশেষভাবে প্রস্তুত প্র্যাকটিক্যাল গাইডবুক ও ডিজিটাল টুলস।
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-200/80 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold font-bengali whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-md shadow-slate-950/15 ring-2 ring-emerald-500/20'
                    : 'bg-white/90 backdrop-blur-xs text-slate-700 hover:bg-slate-100/80 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <span>{cat.labelBn}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-sans font-bold ${
                    isActive ? 'bg-slate-800 text-emerald-400' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Notice for Coming Soon Categories */}
        {(activeCategory === 'wordpress' || activeCategory === 'software') && (
          <div className="mb-8 p-5 rounded-2xl bg-amber-50/90 border border-amber-200/80 shadow-xs flex items-start gap-3.5">
            <span className="p-1 rounded-md bg-amber-100 text-amber-800 shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="text-xs sm:text-sm text-amber-900 font-bengali">
              <span className="font-bold">শীঘ্রই আসছে: </span>
              এই ক্যাটেগরির পণ্যগুলো বর্তমানে নিবিড় পরীক্ষার মধ্যে রয়েছে। লঞ্চ হওয়ার সাথে সাথে নোটিফিকেশন পেতে
              আমাদের ফ্রি নিউজলেটারে যুক্ত থাকুন।
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};
