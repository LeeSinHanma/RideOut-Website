import React from 'react';
import { Button } from '@heroui/react';
import readyWholeBody from '../assets/readyWholeBody.png';

export default function CtaSection({ onDownloadClick }) {
  return (
    <section className="py-24 px-5 relative overflow-hidden map-grid flex flex-col items-center text-center">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0EA5E9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
        {/* Ready Mascot Graphic */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#0EA5E9]/20 rounded-full blur-xl transition-all duration-500 group-hover:bg-[#0EA5E9]/40" />
          <img 
            src={readyWholeBody} 
            alt="Ready RideOut Mascot" 
            className="relative w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-[0_0_20px_rgba(14,165,233,0.6)]"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Ready to Ride?
          </h2>
          <p className="text-base md:text-xl text-[#BEC8D2] font-medium max-w-xl mx-auto">
            Download RideOut today and ensure you never leave a rider behind on your next pack adventure.
          </p>
        </div>

        {/* QR Code Scan Card (Glows on Hover) */}
        <div className="bg-[#1E293B] border border-[#334155] p-5 rounded-3xl shadow-2xl flex flex-col items-center gap-3 transition-all duration-300 hover:border-[#0EA5E9]/60 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]">
          <div className="bg-white p-3 rounded-2xl shadow-inner">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLSPRWwqsW7NPbhDybvfNCEXygXy4vMcjahj-X330R8EuxrMRvOKtQiA1NKAGVpZJPyIMoIrWj5Sikob3ZtM2MsPBgwkKNdLUyhsOGBNCX7AOow-d7oi8UwTxSUyznNw2diD7osYwupbhianielmUCwAOXSqBWANd4IBi52Ot5xX1GUZJvk1Sr15bTMjIsKa-0RSkReAvZYKGyNSxGbXAu297p1whZRT7iPWt8OdJ9i3VPpXfaADj1" 
              alt="Scan to Download QR Code" 
              className="w-36 h-36 object-contain"
            />
          </div>
          <span className="text-xs font-bold text-[#89CEFF] tracking-wide">
            SCAN QR WITH YOUR PHONE
          </span>
        </div>

        {/* CTA Button Hierarchy: Android Highlighted as Primary, iOS Muted as Secondary */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary Highlighted Android Button */}
          <Button
            onPress={onDownloadClick}
            className="w-full sm:w-auto bg-gradient-to-r from-[#0EA5E9] to-[#00EEFC] hover:from-[#0284C7] hover:to-[#0EA5E9] text-white font-extrabold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] active:scale-95 flex items-center justify-center gap-3 shadow-lg"
          >
            <span className="material-symbols-outlined text-xl">android</span>
            Download Android App
          </Button>

          {/* Secondary Muted iOS Button */}
          <div className="w-full sm:w-auto opacity-70">
            <Button
              className="w-full sm:w-auto bg-[#0F172A]/80 text-[#64748B] font-bold text-sm px-6 py-4 rounded-xl border border-[#334155]/60 flex items-center justify-center gap-2.5 cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-lg">apple</span>
              iOS App
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#334155]/60 text-[#88929B] ml-1">SOON</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
