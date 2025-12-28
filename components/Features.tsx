
import React from 'react';
import { BENEFITS } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Why Families Choose Damroo</h2>
          <p className="mt-4 text-xl text-slate-600">Health doesn't have to be boring. Discover the Damroo difference.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
