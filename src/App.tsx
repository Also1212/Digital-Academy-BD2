import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ShopPage } from './pages/ShopPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { AccountPage } from './pages/AccountPage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPages } from './pages/LegalPages';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

const MainRouter: React.FC = () => {
  const { currentPath, toast } = useApp();

  // Dynamic Routing Logic
  const renderPage = () => {
    // Flagship eBook direct path
    if (currentPath === '/shop/ebooks/meta-ads-a-to-z') {
      return <ProductDetailPage productSlug="meta-ads-a-to-z" />;
    }

    // Single Product Detail Page
    if (currentPath.startsWith('/shop/') && currentPath.split('/').length >= 4) {
      const parts = currentPath.split('/');
      const slug = parts[parts.length - 1];
      return <ProductDetailPage productSlug={slug} />;
    }

    // Shop Category Pages
    if (currentPath === '/shop/ebooks') {
      return <ShopPage initialCategory="ebooks" />;
    }
    if (currentPath === '/shop/wordpress') {
      return <ShopPage initialCategory="wordpress" />;
    }
    if (currentPath === '/shop/software') {
      return <ShopPage initialCategory="software" />;
    }
    if (currentPath === '/shop') {
      return <ShopPage initialCategory="all" />;
    }

    // E-commerce Flow
    if (currentPath === '/checkout') {
      return <CheckoutPage />;
    }
    if (currentPath.startsWith('/order-confirmation')) {
      const parts = currentPath.split('/');
      const orderId = parts.length > 2 ? parts[2] : undefined;
      return <OrderConfirmationPage orderId={orderId} />;
    }
    if (currentPath.startsWith('/account')) {
      return <AccountPage />;
    }

    // Services
    if (currentPath.startsWith('/services')) {
      return <ServicesPage />;
    }

    // Blog
    if (currentPath.startsWith('/blog')) {
      const parts = currentPath.split('/');
      const postSlug = parts.length > 2 && parts[2] !== '' ? parts[2] : undefined;
      return <BlogPage postSlug={postSlug} />;
    }

    // Informational Pages
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/faq') {
      return <FaqPage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    if (currentPath === '/privacy-policy') {
      return <LegalPages type="privacy" />;
    }
    if (currentPath === '/terms') {
      return <LegalPages type="terms" />;
    }

    // Default Home Page
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-bengali selection:bg-emerald-100 selection:text-emerald-900 w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
      <CartDrawer />

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
          <div
            className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl border text-sm font-bengali ${
              toast.type === 'success'
                ? 'bg-emerald-900 text-emerald-50 border-emerald-700'
                : toast.type === 'error'
                ? 'bg-rose-900 text-rose-50 border-rose-700'
                : 'bg-slate-900 text-slate-50 border-slate-700'
            }`}
          >
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-sky-400" />}
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainRouter />
    </AppProvider>
  );
}
