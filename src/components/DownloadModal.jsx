import React, { useState, useEffect } from 'react';
import { Button } from '@heroui/react';
import readyWholeBody from '../assets/readyWholeBody.png';

export default function DownloadModal({ isOpen, onClose }) {
  const [shouldRender, setShouldRender] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  // Configurable Google Form testing URL from Vercel / environment variables
  const TESTER_FORM_URL = import.meta.env.VITE_TESTER_FORM_URL || 'https://forms.gle/7rwERovv4JXTd3nU7';

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setAnimateIn(true);
      }, 20);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setAnimateIn(false);
    setTimeout(() => {
      onClose();
    }, 250);
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        animateIn ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#060E20]/80 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Modal Dialog Card */}
      <div 
        className={`relative z-10 bg-[#1E293B] border border-[#334155] text-white p-6 md:p-8 rounded-3xl max-w-md w-full shadow-2xl flex flex-col items-center gap-6 transition-all duration-300 transform ${
          animateIn ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#88929B] hover:text-white transition-colors p-1.5 rounded-xl bg-[#0F172A]/60 border border-[#334155]/60"
          aria-label="Close Modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Testing Phase Notice Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00EEFC]/10 border border-[#00EEFC]/40 text-[#00EEFC] font-extrabold text-[11px] uppercase tracking-wider shadow">
          <span className="w-2 h-2 rounded-full bg-[#00EEFC] animate-ping shrink-0" />
          Currently in Closed Testing Phase
        </div>

        {/* Mascot & Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <img 
            src={readyWholeBody} 
            alt="RideOut Mascot Ryder" 
            className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]"
          />
          <h3 className="text-2xl font-black text-white">
            Join Closed Testing
          </h3>
        </div>

        {/* Body Description */}
        <p className="text-xs sm:text-sm text-[#BEC8D2] text-center font-medium leading-relaxed">
          RideOut is currently in an active <strong className="text-white font-bold">Closed Testing Phase</strong>. Please complete the application form below to get your Google Play account whitelisted for early access.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 w-full pt-2">
          {/* Primary Google Form Application Button */}
          <Button 
            onPress={() => window.open(TESTER_FORM_URL, '_blank')}
            className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#00EEFC] hover:from-[#0284C7] hover:to-[#0EA5E9] text-white font-extrabold py-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md hover:shadow-[0_0_25px_rgba(14,165,233,0.4)] active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">assignment</span>
            <span>Apply for Tester Access (Google Form)</span>
          </Button>

          {/* Secondary Muted iOS Button */}
          <Button 
            className="w-full bg-[#0F172A]/80 border border-[#334155]/60 text-[#64748B] font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-xs cursor-not-allowed opacity-70"
          >
            <span className="material-symbols-outlined text-base">apple</span>
            <span>iOS App (Coming Soon)</span>
          </Button>
        </div>

      </div>
    </div>
  );
}
