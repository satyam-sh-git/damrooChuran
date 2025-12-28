
import React, { useState } from 'react';
import { COLORS } from '../constants';

const ContactSeller: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', need: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.need) return;
    
    // Simulate notifying the seller
    console.info("%c[SELLER NOTIFICATION SENT]", "color: #99cb34; font-weight: bold; font-size: 1.2rem;");
    console.table({
      timestamp: new Date().toLocaleTimeString(),
      customerName: formData.name,
      customerRequirement: formData.need,
      status: "Inquiry Pushed to Seller Dashboard"
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', need: '' });
    }, 5000);
  };

  return (
    <section id="seller-contact" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden md:grid md:grid-cols-2 border border-slate-100">
          <div className="p-10 md:p-20 bg-brand text-white flex flex-col justify-center relative">
            {/* Background design element */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Not sure what's right for you?</h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed relative z-10">
              Tell our Ayurveda experts what you're looking for. Whether it's for kids, seniors, or daily health, we'll notify the seller and get back to you with the perfect recommendation!
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="font-bold">Direct Support Line</span>
            </div>
          </div>

          <div className="p-10 md:p-20 relative bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Seller Notified!</h3>
                <p className="text-slate-500">We've sent your requirements to our experts. You'll hear from us shortly via email/phone.</p>
                <p className="text-xs text-slate-400 mt-4 italic">(Check your browser console to see the sent data simulation)</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="E.g. Rahul Sharma"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/20 focus:border-brand outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">What do you need help with?</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.need}
                    onChange={(e) => setFormData({...formData, need: e.target.value})}
                    placeholder="E.g. I need a low-sugar churan for a diabetic senior..."
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand/20 focus:border-brand outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 rounded-2xl font-black text-white text-lg shadow-lg transform active:scale-95 hover:brightness-110 transition-all"
                  style={{ backgroundColor: COLORS.brand }}
                >
                  Notify the Seller
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSeller;
