import React from 'react';
import { Button } from '@heroui/react';
import readyWholeBody from '../assets/readyWholeBody.png';

export default function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#060E20]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 bg-[#1E293B] border border-[#334155] text-white p-6 md:p-8 rounded-3xl max-w-md w-full shadow-2xl flex flex-col items-center gap-6 animate-in fade-in zoom-in-95 duration-200 hover:border-[#0EA5E9]/50 transition-all duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#88929B] hover:text-white transition-colors p-1 rounded-lg"
          aria-label="Close Modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <img 
            src={readyWholeBody} 
            alt="RideOut Mascot" 
            className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]"
          />
          <h3 className="text-2xl font-black text-white">
            Get RideOut Mobile
          </h3>
        </div>

        {/* Body */}
        <p className="text-sm text-[#BEC8D2] text-center font-medium">
          Scan the QR code below using your phone camera to open Google Play Store.
        </p>

        <div className="bg-white p-4 rounded-2xl border-2 border-[#0EA5E9] shadow-lg">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLSPRWwqsW7NPbhDybvfNCEXygXy4vMcjahj-X330R8EuxrMRvOKtQiA1NKAGVpZJPyIMoIrWj5Sikob3ZtM2MsPBgwkKNdLUyhsOGBNCX7AOow-d7oi8UwTxSUyznNw2diD7osYwupbhianielmUCwAOXSqBWANd4IBi52Ot5xX1GUZJvk1Sr15bTMjIsKa-0RSkReAvZYKGyNSxGbXAu297p1whZRT7iPWt8OdJ9i3VPpXfaADj1" 
            alt="Scan to Download QR Code" 
            className="w-44 h-44 object-contain"
          />
        </div>

        {/* CTA Button Hierarchy: Android Highlighted as Primary, iOS Muted as Secondary */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          {/* Primary Highlighted Android Button */}
          <Button 
            onPress={() => window.open('https://play.google.com', '_blank')}
            className="w-full sm:flex-1 bg-gradient-to-r from-[#0EA5E9] to-[#00EEFC] hover:from-[#0284C7] hover:to-[#0EA5E9] text-white font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md hover:shadow-[0_0_25px_rgba(14,165,233,0.4)] active:scale-95 order-1"
          >
            <span className="material-symbols-outlined text-lg">android</span>
            Android App
          </Button>

          {/* Secondary Muted iOS Button */}
          <Button 
            className="w-full sm:flex-1 bg-[#0F172A]/80 border border-[#334155]/60 text-[#64748B] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs cursor-not-allowed opacity-70 order-2"
          >
            <span className="material-symbols-outlined text-base">apple</span>
            iOS (Coming Soon)
          </Button>
        </div>
      </div>
    </div>
  );
}
