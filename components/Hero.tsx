
import React from 'react';
import { COLORS } from '../constants';

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand uppercase bg-brand/10 rounded-full">
              Traditional Health, Modern Taste
            </span>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.1]">
              The Tasty Way to <span className="text-brand">Happy Digestion!</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl leading-relaxed">
              Traditional recipes, yummy flavors. Perfect for kids' tummies and adults' health. Relieving bloating, acidity, and discomfort since 1988.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <button 
                onClick={onShopNow}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl text-lg font-bold text-white shadow-xl transition-all transform hover:scale-105 hover:brightness-110 active:scale-95 mb-4 sm:mb-0"
                style={{ backgroundColor: COLORS.brand }}
              >
                Explore Flavors
              </button>
              <button 
                onClick={() => {
                   const section = document.getElementById('seller-contact');
                   section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl text-lg font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all active:scale-95"
              >
                Tell us your needs
              </button>
            </div>
            
            <div className="mt-10 flex items-center sm:justify-center lg:justify-start gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white border-2 border-white" src={`https://picsum.photos/seed/${i+10}/100`} alt="user" />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500 italic tracking-tight">Trusted by 10,000+ Indian Families</p>
            </div>
          </div>

          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[500px]">
              <div className="absolute inset-0 bg-brand/20 rounded-[40px] rotate-3 scale-105 blur-sm"></div>
              <img 
                className="relative rounded-[32px] shadow-2xl w-full h-auto object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-500" 
                alt="Damroo Swadisht Churan Bottle" 
                src="pictures/damrooochuran.jpg"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                <span className="text-2xl">🌿</span>
                <span className="font-bold text-slate-800 text-sm">100% Ayurvedic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
