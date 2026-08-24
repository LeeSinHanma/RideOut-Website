import React from 'react';
import { Button } from '@heroui/react';
import welcomeWholeBody from '../assets/welcomeWholeBody.png';
import readyWholeBody from '../assets/readyWholeBody.png';
import mapUI from '../assets/mapUI.jpg';

export default function Hero({ onDownloadClick }) {
  return (
    <section className="relative px-5 pt-24 pb-16 flex flex-col items-center text-center overflow-hidden map-grid">
      {/* Ambient Radial Blur (Glow on hover feel) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-[#0EA5E9]/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Mascot Welcome Badge */}
        <a 
          href="#ryder"
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1E293B] border border-[#334155] shadow-lg transition-all duration-300 hover:border-[#00EEFC] hover:shadow-[0_0_20px_rgba(0,238,252,0.3)] group cursor-pointer"
        >
          <img 
            src={welcomeWholeBody} 
            alt="Meet Ryder - RideOut Mascot" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(14,165,233,0.5)] group-hover:scale-110 transition-transform"
          />
          <div className="flex items-center gap-2 text-xs font-extrabold text-[#89CEFF] group-hover:text-white uppercase tracking-wider">
            <span>Meet Ryder</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00EEFC] animate-ping" />
            <span className="text-[10px] text-[#00EEFC] bg-[#0EA5E9]/20 px-2 py-0.5 rounded-full border border-[#0EA5E9]/40">Your Pack Co-Pilot</span>
          </div>
        </a>

        {/* Hero Headline */}
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl">
          Never lose your pack again.
        </h1>

        <p className="text-lg md:text-xl font-medium text-[#BEC8D2] max-w-xl leading-relaxed">
          Real-time group location sharing designed for riders on the road. Stop texting, start tracking seamlessly.
        </p>

        {/* CTA Button Hierarchy: Android Highlighted as Primary, iOS Muted as Secondary */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
          {/* Primary Highlighted Android Button */}
          <Button
            onPress={onDownloadClick}
            className="w-full sm:w-auto bg-gradient-to-r from-[#0EA5E9] to-[#00EEFC] hover:from-[#0284C7] hover:to-[#0EA5E9] text-white font-extrabold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] active:scale-95 flex items-center justify-center gap-3 shadow-lg"
          >
            <span className="material-symbols-outlined text-xl">android</span>
            Download Android App (Play Store)
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

      {/* Showcase Stage: Smartphone Mockup (First Image) + Ryder Mascot Beside It */}
      <div className="mt-16 relative w-full max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4">
        
        {/* First Image: Hero Smartphone Mockup */}
        <div className="relative w-full max-w-[320px] md:max-w-[370px] group shrink-0">
          <div className="absolute -inset-6 bg-gradient-to-b from-[#0EA5E9]/20 to-transparent rounded-[48px] blur-2xl pointer-events-none group-hover:from-[#0EA5E9]/40 transition-all duration-500" />

          <div className="relative rounded-[36px] border border-[#334155] bg-[#0F172A] p-3 shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-[#0EA5E9]/70 group-hover:shadow-[0_0_35px_rgba(14,165,233,0.35)]">
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#334155] bg-[#1E293B]/80 rounded-t-[28px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs font-bold text-[#89CEFF]">PACK GPS LIVE</span>
              </div>
              <span className="text-[11px] font-mono text-[#88929B]">RIDE MASTER</span>
            </div>

            <div className="relative w-full rounded-b-[28px] overflow-hidden bg-[#0B1326] flex items-center justify-center p-1">
              <img 
                src={mapUI} 
                alt="RideOut Live Map UI" 
                className="w-full h-auto object-contain rounded-b-[24px]"
              />
            </div>
          </div>
        </div>

        {/* Ryder Mascot Beside First Image (Clickable with Glow Effect on Hover -> Redirects to #ryder) */}
        <a
          href="#ryder"
          className="group relative flex flex-col items-center text-center md:items-start md:text-left w-full max-w-[340px] md:max-w-[380px] shrink-0 transition-all duration-300 cursor-pointer"
          title="Click to meet Ryder Mascot"
        >
          {/* Glowing Aura Backdrop on Hover */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-[#00EEFC]/0 via-[#0EA5E9]/25 to-[#8B5CF6]/0 rounded-[40px] blur-2xl group-hover:from-[#00EEFC]/35 group-hover:to-[#8B5CF6]/35 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

          {/* Speech Bubble */}
          <div className="relative z-20 w-full bg-[#1E293B] border border-[#334155] group-hover:border-[#00EEFC] p-5 rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,238,252,0.4)] group-hover:-translate-y-1">
            <div className="flex items-center gap-2 text-xs font-black text-[#00EEFC] uppercase tracking-wider mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00EEFC] animate-ping" />
              Ryder Safety Advice:
            </div>
            <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
              "Make sure your vehicle is okay before riding out! 🏍️💨 Check tires, fuel, and helmet gear."
            </p>
            <div className="mt-2 text-[11px] font-extrabold text-[#89CEFF] group-hover:text-white flex items-center gap-1.5">
              <span>Meet Ryder Co-Pilot</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>

          {/* Ryder Mascot Image Standee (Larger, matching mapUI size) */}
          <div className="relative z-10 mt-2 flex items-center justify-center w-full">
            <img
              src={readyWholeBody}
              alt="Ryder Mascot Vehicle Safety Check"
              className="w-60 sm:w-72 md:w-[310px] max-h-[460px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(14,165,233,0.45)] group-hover:scale-105 group-hover:drop-shadow-[0_20px_40px_rgba(0,238,252,0.75)] transition-all duration-300"
            />
          </div>
        </a>

      </div>
    </section>
  );
}

