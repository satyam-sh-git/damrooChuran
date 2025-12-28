
import React from 'react';
import { COLORS } from '../constants';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onShopNow: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onShopNow }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/40 backdrop-blur-xl backdrop-saturate-150 border-b border-white/20 shadow-sm"
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex-shrink-0 flex items-center group">
            <div className="flex items-center gap-3 transform transition-all duration-300 group-hover:scale-105">
              <div className="relative h-14 w-auto">
                <img 
                  alt="Damroo Logo" 
                  className="h-full w-auto object-contain" 
                  src="public/pictures/logohindi.png" 
                />
              </div>
              <div className="flex flex-col leading-none relative h-14 w-auto">
                <img 
                  alt="Damroo Churan Text" 
                  className="h-[40px] w-auto object-contain pt-4" 
                  src="public/pictures/headerlgo.png" 
                />
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            <a href="#home" className="text-base font-semibold text-slate-600 hover:text-brand transition-colors">Home</a>
            <a href="#products" className="text-base font-semibold text-slate-600 hover:text-brand transition-colors">Products</a>
            <a href="#benefits" className="text-base font-semibold text-slate-600 hover:text-brand transition-colors">Benefits</a>
          </nav>

          {/* Cart & CTA */}
          <div className="flex items-center gap-6">
            <button onClick={onCartClick} className="relative cursor-pointer group p-2">
              <svg className="w-7 h-7 text-slate-700 group-hover:text-brand transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={onShopNow}
              className="hidden sm:block px-6 py-2.5 rounded-full font-bold text-white shadow-lg transition-all transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: COLORS.brand }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
