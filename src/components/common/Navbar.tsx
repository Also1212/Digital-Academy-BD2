import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Button } from './Button';
import {
  ShoppingBag,
  Menu,
  X,
  BookOpen,
  Briefcase,
  Layers,
  User,
  Sparkles,
  Phone,
  ChevronDown,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigateTo, cartCount, setIsCartOpen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'হোম', path: '/' },
    {
      label: 'শপ ও ই-বুক',
      path: '/shop',
      hasDropdown: true,
    },
    { label: 'সার্ভিসেস', path: '/services' },
    { label: 'ব্লগ ও রিসোর্স', path: '/blog' },
    { label: 'আমাদের সম্পর্কে', path: '/about' },
    { label: 'যোগাযোগ', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigateTo(path);
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full max-w-full ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-xs py-2.5 sm:py-3'
            : 'bg-white/80 backdrop-blur-lg border-b border-slate-200/60 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand Logo */}
            <div
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none group shrink-0 min-w-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs p-0.5 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden shrink-0">
                <img
                  src="/brand-logo.png"
                  alt="Digital Academy BD"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-slate-900 whitespace-nowrap">
                Digital Academy <span className="text-emerald-600">BD</span>
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 p-1 rounded-2xl border border-slate-200/60">
              {navLinks.map((link) => {
                const isActive =
                  currentPath === link.path ||
                  (link.path !== '/' && currentPath.startsWith(link.path));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => setShopDropdownOpen(true)}
                      onMouseLeave={() => setShopDropdownOpen(false)}
                    >
                      <button
                        onClick={() => handleNavClick(link.path)}
                        className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 cursor-pointer ${
                          isActive
                            ? 'text-emerald-800 bg-white shadow-2xs font-semibold'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                      </button>

                      {/* Dropdown Menu */}
                      {shopDropdownOpen && (
                        <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/90 p-1.5 mt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                          <button
                            onClick={() => handleNavClick('/shop/ebooks/meta-ads-a-to-z')}
                            className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-emerald-50/90 transition-colors flex items-center gap-2.5 cursor-pointer"
                          >
                            <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                              <BookOpen className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold font-bengali text-slate-900">
                                মেটা অ্যাডস A-Z ই-বুক
                              </div>
                              <div className="text-xs text-emerald-700 font-medium font-sans">
                                ফ্ল্যাগশিপ গাইড • ৳৭৫০
                              </div>
                            </div>
                          </button>
                          <button
                            onClick={() => handleNavClick('/shop/ebooks')}
                            className="w-full text-left px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2.5 text-slate-700 text-sm cursor-pointer"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 ml-1.5 mr-1" />
                            সকল ই-বুক ব্রাউজ করুন
                          </button>
                          <div className="my-1 border-t border-slate-100" />
                          <button
                            onClick={() => handleNavClick('/shop/wordpress')}
                            className="w-full text-left px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between text-slate-500 text-xs cursor-pointer"
                          >
                            <span>ওয়ার্ডপ্রেস থিম ও প্লাগিন</span>
                            <span className="text-[10px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded-md border border-amber-200/80 font-medium">
                              শীঘ্রই আসছে
                            </span>
                          </button>
                          <button
                            onClick={() => handleNavClick('/shop/software')}
                            className="w-full text-left px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between text-slate-500 text-xs cursor-pointer"
                          >
                            <span>সফটওয়্যার ও ডিজিটাল টুলস</span>
                            <span className="text-[10px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded-md border border-amber-200/80 font-medium">
                              শীঘ্রই আসছে
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-emerald-800 bg-white shadow-2xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Account button */}
              <button
                onClick={() => handleNavClick('/account')}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-all active:scale-95 cursor-pointer"
                title="আমার অ্যাকাউন্ট ও ডাউনলোড"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all active:scale-95 cursor-pointer"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-[10px] sm:text-xs rounded-full flex items-center justify-center tabular-nums shadow-xs ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Primary Direct CTA to Flagship (Desktop only) */}
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleNavClick('/shop/ebooks/meta-ads-a-to-z')}
                className="hidden xl:inline-flex shadow-xs whitespace-nowrap w-[50px] justify-center items-center"
                aria-label="মেটা অ্যাডস ই-বুক"
                title="মেটা অ্যাডস ই-বুক"
              >
                <BookOpen className="w-4 h-4" />
              </Button>

              {/* Mobile Hamburger Menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100/80 transition-all active:scale-95 lg:hidden cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200/90 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => handleNavClick('/shop/ebooks/meta-ads-a-to-z')}
                className="text-left py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold flex items-center justify-between shadow-xs mb-2 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>মেটা অ্যাডস A-Z ই-বুক</span>
                </span>
                <span className="text-xs bg-emerald-800/60 px-2 py-0.5 rounded-md font-sans">৳৭৫০</span>
              </button>
              <button
                onClick={() => handleNavClick('/')}
                className="text-left py-2.5 px-3.5 rounded-xl text-slate-800 font-medium hover:bg-slate-100/70 transition-colors"
              >
                হোম
              </button>
              <button
                onClick={() => handleNavClick('/shop')}
                className="text-left py-2.5 px-3.5 rounded-xl text-slate-800 font-medium hover:bg-slate-100/70 transition-colors"
              >
                সকল শপ ক্যাটেগরি
              </button>
              <button
                onClick={() => handleNavClick('/services')}
                className="text-left py-2.5 px-3.5 rounded-xl text-slate-800 font-medium hover:bg-slate-100/70 transition-colors"
              >
                সার্ভিসেস ও কনসালটেশন
              </button>
              <button
                onClick={() => handleNavClick('/blog')}
                className="text-left py-2.5 px-3.5 rounded-xl text-slate-800 font-medium hover:bg-slate-100/70 transition-colors"
              >
                ব্লগ ও মার্কেটিং গাইড
              </button>
              <button
                onClick={() => handleNavClick('/account')}
                className="text-left py-2.5 px-3.5 rounded-xl text-slate-800 font-medium hover:bg-slate-100/70 transition-colors flex items-center gap-2"
              >
                <User className="w-4 h-4 text-slate-500" />
                <span>আমার অ্যাকাউন্ট ও ডাউনলোড</span>
              </button>
              <button
                onClick={() => handleNavClick('/about')}
                className="text-left py-2.5 px-3.5 rounded-xl text-slate-800 font-medium hover:bg-slate-100/70 transition-colors"
              >
                আমাদের সম্পর্কে
              </button>
              <button
                onClick={() => handleNavClick('/contact')}
                className="text-left py-2.5 px-3.5 rounded-xl text-slate-800 font-medium hover:bg-slate-100/70 transition-colors"
              >
                যোগাযোগ ও সহায়তা
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
