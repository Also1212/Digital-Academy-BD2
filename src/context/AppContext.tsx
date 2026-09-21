import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, PaymentMethod } from '../types';

interface AppContextType {
  currentPath: string;
  navigateTo: (path: string) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  orders: Order[];
  createOrder: (orderData: {
    customerName: string;
    phone: string;
    email: string;
    district?: string;
    paymentMethod: PaymentMethod;
    transactionId: string;
    senderPhone?: string;
  }) => Order;
  toast: { message: string; type: 'success' | 'info' | 'error' } | null;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  downloadProductFile: (product: Product) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'dab_cart_v1';
const ORDERS_STORAGE_KEY = 'dab_orders_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Current route
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.pathname) {
      return window.location.pathname === '' ? '/' : window.location.pathname;
    }
    return '/';
  });

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart State
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toast notification
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Save Cart to storage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cart]);

  // Orders State with initial mock order for demo
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch {
      // fallback
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to save orders', e);
    }
  }, [orders]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`"${product.titleBn}" কার্টে যুক্ত হয়েছে!`, 'success');
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('আইটেম কার্ট থেকে সরানো হয়েছে', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const createOrder = (orderData: {
    customerName: string;
    phone: string;
    email: string;
    district?: string;
    paymentMethod: PaymentMethod;
    transactionId: string;
    senderPhone?: string;
  }): Order => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `DAB-${new Date().getFullYear()}-${randomSuffix}`;
    const token = `DL-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

    const newOrder: Order = {
      id: 'order-' + Date.now(),
      orderNumber,
      date: new Date().toLocaleDateString('bn-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      customerName: orderData.customerName,
      phone: orderData.phone,
      email: orderData.email,
      district: orderData.district || 'ঢাকা',
      items: cart.map((item) => ({
        product: item.product,
        quantity: item.quantity,
        unitPrice: item.product.price,
      })),
      totalAmount: cartTotal,
      paymentMethod: orderData.paymentMethod,
      transactionId: orderData.transactionId,
      senderPhone: orderData.senderPhone,
      status: 'completed',
      downloadToken: token,
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  // Helper to trigger realistic digital download of PDF eBook
  const downloadProductFile = (product: Product) => {
    const fileName = product.downloadFileName || `${product.slug}.pdf`;
    
    // Create an authentic stylized digital download certificate/PDF placeholder document
    const textContent = `%PDF-1.4
% Digital Academy BD - Official Digital Product
Title: ${product.titleBn} (${product.titleEn})
Author: ${product.author.nameBn} (${product.author.titleBn})
License: Single User Lifetime Access
Platform: Digital Academy BD (https://digitalacademybd.com)
Product ID: ${product.id}

==================================================
ডিজিটাল একাডেমি বিডি - অফিশিয়াল ডিজিটাল প্রোডাক্ট লাইসেন্স
==================================================
বইয়ের নাম: ${product.titleBn}
লেখক: ${product.author.nameBn}
প্রকাশক: Digital Academy BD

ধন্যবাদ! আপনার বইটি সফলভাবে ডাউনলোড হয়েছে। এই ডিজিটাল কপিটি শুধুমাত্র আপনার ব্যক্তিগত ব্যবহারের জন্য।
যেকোনো সহায়তায় ইমেইল করুন: contact@digitalacademybd.com
==================================================
`;

    const blob = new Blob([textContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`"${product.titleBn}" ডাউনলোড শুরু হয়েছে`, 'success');
  };

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigateTo,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        orders,
        createOrder,
        toast,
        showToast,
        downloadProductFile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
