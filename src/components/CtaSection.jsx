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

        {/* Section Headline */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00EEFC]/10 border border-[#00EEFC]/40 text-[#00EEFC] font-extrabold text-xs uppercase tracking-wider shadow">
            <span className="w-2 h-2 rounded-full bg-[#00EEFC] animate-ping" />
            Closed Testing Phase Active
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Ready to Ride?
          </h2>
          <p className="text-base md:text-xl text-[#BEC8D2] font-medium max-w-xl mx-auto leading-relaxed">
            Apply for closed testing access today and ensure you never leave a rider behind on your next pack adventure.
          </p>
        </div>

        {/* CTA Button Hierarchy: Primary Join Testing Button & Secondary iOS Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
          {/* Primary Highlighted Join Testing Button */}
          <Button
            onPress={onDownloadClick}
            className="w-full sm:w-auto bg-gradient-to-r from-[#0EA5E9] to-[#00EEFC] hover:from-[#0284C7] hover:to-[#0EA5E9] text-white font-extrabold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] active:scale-95 flex items-center justify-center gap-3 shadow-lg"
          >
            <span className="material-symbols-outlined text-xl">assignment</span>
            Join Testing Today!
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
