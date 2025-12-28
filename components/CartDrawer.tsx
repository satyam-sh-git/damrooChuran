
import React from 'react';
import { CartItem, Product } from '../types';
import { COLORS, PRODUCT_DATA } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
  onAddMore: () => void;
  onAddRecommendation: (product: Product) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckout, onAddMore, onAddRecommendation 
}) => {
  const total = items.reduce((sum, item) => sum + (item.numericPrice * item.quantity), 0);

  // Recommendations: Items not in cart
  const recommendations = PRODUCT_DATA
    .filter(p => !items.find(item => item.id === p.id))
    .slice(0, 2);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      ></div>
      
      {/* Drawer Panel */}
      <div className={`fixed inset-y-0 right-0 z-[101] w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-6 py-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-black text-slate-800">Your Tummy Bag</h2>
            <p className="text-sm text-slate-400 font-medium">{items.length} items collected</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8 scroll-smooth">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <p className="text-slate-800 font-black text-xl mb-2">Your bag is empty!</p>
              <p className="text-slate-400 mb-8 max-w-[200px] mx-auto">Looks like you haven't picked any tasty treats yet.</p>
              <button 
                onClick={onAddMore} 
                className="px-8 py-3 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20 hover:scale-105 transition-transform"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Cart Items */}
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 group animate-in slide-in-from-right duration-300">
                    <div className="relative h-20 w-20 flex-shrink-0">
                       <img src={item.image} className="h-full w-full rounded-2xl object-cover bg-slate-50 border border-slate-100" alt={item.name} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-slate-800 leading-tight">{item.name}</h4>
                        <button onClick={() => onRemove(item.id)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                      <p className="text-sm font-bold text-brand mb-3">{item.price}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center bg-slate-100 rounded-lg p-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-md bg-white flex items-center justify-center hover:bg-white/80 shadow-sm active:scale-90 transition-all"
                          >-</button>
                          <span className="font-black w-8 text-center text-slate-700">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-md bg-white flex items-center justify-center hover:bg-white/80 shadow-sm active:scale-90 transition-all"
                          >+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add More Button */}
              <button 
                onClick={onAddMore}
                className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:border-brand hover:text-brand transition-all flex items-center justify-center gap-2 group"
              >
                <svg className="w-5 h-5 transform group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Add More Products
              </button>

              {/* Cross Sell */}
              {recommendations.length > 0 && (
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-lg font-black text-slate-800 mb-6">You might also like...</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {recommendations.map(p => (
                      <div key={p.id} className="bg-slate-50 p-4 rounded-2xl group cursor-pointer hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                        <img src={p.image} className="w-full h-24 object-cover rounded-xl mb-3 shadow-sm" alt={p.name} />
                        <h5 className="font-bold text-sm text-slate-800 mb-1 line-clamp-1">{p.name}</h5>
                        <p className="text-xs font-bold text-brand mb-3">{p.price}</p>
                        <button 
                          onClick={() => onAddRecommendation(p)}
                          className="w-full py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-brand hover:text-white hover:border-brand transition-all active:scale-95"
                        >
                          Add to Bag
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-8 border-t border-slate-100 space-y-4 bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center text-lg">
              <span className="font-bold text-slate-600">Subtotal</span>
              <span className="font-black text-2xl text-slate-900">₹{total}</span>
            </div>
            <p className="text-xs text-slate-400 text-center">Free shipping on orders above ₹499!</p>
            <button 
              onClick={onCheckout}
              className="w-full py-5 rounded-2xl font-black text-white text-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all transform flex items-center justify-center gap-3 group"
              style={{ backgroundColor: COLORS.brand }}
            >
              Checkout Now
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
