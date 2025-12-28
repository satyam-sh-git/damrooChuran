
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';
import ContactSeller from './components/ContactSeller';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import { Product, CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [lastNotification, setLastNotification] = useState<string | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.numericPrice * item.quantity), 0);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setLastNotification(`Yummy! Added ${product.name} to bag.`);
    setTimeout(() => setLastNotification(null), 3000);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleShopNow = () => {
    if (cartItems.length > 0) {
      setIsCartOpen(true);
    } else {
      setShowAllProducts(true);
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAddMoreFromCart = () => {
    setIsCartOpen(false);
    setShowAllProducts(true);
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckoutComplete = (details: any) => {
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    setCartItems([]);
    setLastNotification("Order placed successfully! We've notified the seller.");
    setTimeout(() => setLastNotification(null), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand selection:text-white">
      {lastNotification && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-300">
          <span className="text-brand font-bold text-lg">✨</span>
          <span className="font-bold">{lastNotification}</span>
        </div>
      )}

      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} onShopNow={handleShopNow} />

      <main className="flex-grow">
        <Hero onShopNow={handleShopNow} />
        <Features />
        <Products 
          onAddToCart={addToCart} 
          showAll={showAllProducts} 
          setShowAll={setShowAllProducts} 
        />
        <ContactSeller />

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 text-white">
                <h2 className="text-3xl md:text-5xl font-black mb-6">Healthy Tummies Start Here!</h2>
                <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                  Ready to experience the nostalgic taste of India's favorite digestive solutions?
                </p>
                <button 
                  onClick={handleShopNow}
                  className="bg-white text-brand font-black text-xl px-12 py-5 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-transform"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={() => setIsCheckoutOpen(true)}
        onAddMore={handleAddMoreFromCart}
        onAddRecommendation={addToCart}
      />

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        onComplete={handleCheckoutComplete}
        total={cartTotal}
      />
    </div>
  );
}

export default App;
