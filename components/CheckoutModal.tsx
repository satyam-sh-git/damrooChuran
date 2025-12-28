
import React, { useState } from 'react';
import { COLORS } from '../constants';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (details: any) => void;
  total: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, onComplete, total }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      onComplete(formData);
      setStep(1); // Reset for next time
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-[3rem] w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-black text-slate-800">Complete Order</h2>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <div className="space-y-4">
                <div className="bg-brand/10 p-4 rounded-2xl flex items-center justify-between mb-6">
                  <span className="font-bold text-brand">Order Total</span>
                  <span className="font-black text-2xl text-brand">₹{total}</span>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">FULL NAME</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:ring-4 focus:ring-brand/20" placeholder="Rahul Sharma" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">PHONE NUMBER</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:ring-4 focus:ring-brand/20" placeholder="+91 98765 43210" />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-slate-500 mb-4">Almost there, {formData.name}! Enter your delivery address.</p>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">DELIVERY ADDRESS</label>
                  <textarea required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} rows={3} className="w-full px-5 py-4 rounded-xl border border-slate-200 outline-none focus:ring-4 focus:ring-brand/20 resize-none" placeholder="House No, Street, City, Pincode" />
                </div>
              </div>
            )}

            <button 
              type="submit"
              className="w-full py-5 rounded-2xl font-black text-white text-lg shadow-xl transition-all active:scale-95"
              style={{ backgroundColor: COLORS.brand }}
            >
              {step === 1 ? 'Next: Shipping' : 'Confirm Order'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
