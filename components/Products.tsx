
import React from 'react';
import { PRODUCT_DATA, COLORS } from '../constants';
import { Product } from '../types';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  showAll: boolean;
  setShowAll: (val: boolean) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart, showAll, setShowAll }) => {
  // Display only top 3 by default, or all if showAll is true
  const displayedProducts = showAll ? PRODUCT_DATA : PRODUCT_DATA.slice(0, 3);

  return (
    <section id="products" className="py-24 bg-white transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-slate-900 sm:text-5xl leading-tight">
              {showAll ? 'Our ' : 'Our '}<span className="text-brand">{showAll ? 'Full Collection' : 'Bestsellers'}</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 font-medium leading-relaxed">
              {showAll 
                ? "Browse our complete range of authentic digestive treats, from traditional churans to modern healthy candies."
                : "Loved by millions across India. From tangy churan jars to sweet digestive toffees, we have something for every tummy."
              }
            </p>
          </div>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand/10 text-brand font-bold rounded-2xl hover:bg-brand hover:text-white transition-all duration-300 group"
          >
            {showAll ? 'Show Less' : 'Explore All Products'}
            <svg className={`w-5 h-5 transform transition-transform ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full animate-in fade-in zoom-in duration-500"
            >
              <div className="relative h-72 overflow-hidden bg-slate-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {product.id <= 3 && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-brand shadow-sm">
                    Best Seller
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-slate-800 leading-tight">{product.name}</h3>
                  <span className="text-2xl font-black text-brand">{product.price}</span>
                </div>
                <p className="text-slate-500 mb-8 font-medium leading-relaxed flex-grow">
                  {product.description}
                </p>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="w-full py-4 rounded-2xl font-bold text-white shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 hover:brightness-110 transform hover:-translate-y-1"
                  style={{ backgroundColor: COLORS.brand }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {showAll && (
          <div className="mt-16 text-center">
             <button 
              onClick={() => {
                setShowAll(false);
                const section = document.getElementById('products');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-slate-400 font-bold hover:text-brand transition-colors"
            >
              Back to Bestsellers
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
