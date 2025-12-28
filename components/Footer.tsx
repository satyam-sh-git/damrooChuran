
import React from 'react';
import { COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            {/* Logo and Brand Name */}
            <div className="flex align-center gap-3 mb-6 transform transition-all duration-300">
              <div className="relative h-14 w-auto">
                <img 
                  alt="Damroo Logo" 
                  className="h-full w-auto object-contain  " 
                  src="public/pictures/logohindi.png" 
                />
              </div>
              <div className="flex flex-col leading-none relative h-14 w-auto">
                <img 
                  alt="Damroo Churan Text" 
                  className="h-[50px] w-auto object-contain pt-2  " 
                  src="public/pictures/fotterlogo.png" 
                />
              </div>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-sm">
              Bringing traditional Ayurvedic wisdom to your modern lifestyle. Pure, authentic, and delicious digestive solutions for the whole family.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand transition-colors cursor-pointer group">
                   <div className="w-5 h-5 bg-slate-600 group-hover:bg-white rounded-sm transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-6">Shop Categories</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#products" className="hover:text-brand transition-colors block">Our Churan</a></li>
              <li><a href="#products" className="hover:text-brand transition-colors block">Tasty Candies</a></li>
              <li><a href="#products" className="hover:text-brand transition-colors block">Digestive Salts</a></li>
              <li><a href="#products" className="hover:text-brand transition-colors block">Gift Packs</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#benefits" className="hover:text-brand transition-colors block">Our Benefits</a></li>
              <li><a href="#seller-contact" className="hover:text-brand transition-colors block">Get Expert Advice</a></li>
              <li><a href="#" className="hover:text-brand transition-colors block">FAQ</a></li>
              <li><a href="#" className="hover:text-brand transition-colors block">Contact Us</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-brand">Stay Healthy</h4>
            <p className="text-slate-400 mb-6">Subscribe for seasonal digestive tips and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 border-none rounded-xl px-4 py-3 flex-grow focus:ring-2 focus:ring-brand outline-none transition-all"
              />
              <button className="bg-brand text-white font-bold px-5 py-3 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand/20">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 Damroo Churan. Crafting health since 1988.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
