import React from 'react';
import { Button } from '@heroui/react';
import appLogo from '../assets/appLogo.png';

export default function Header({ onDownloadClick, onPrivacyClick }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0F172A]/85 backdrop-blur-md border-b border-[#334155] shadow-sm">
      <div className="flex items-center justify-between px-5 h-20 max-w-7xl mx-auto">
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group cursor-pointer"
          title="Back to Top"
        >
          <img 
            src={appLogo} 
            alt="RideOut Official Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(14,165,233,0.5)] group-hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-black text-[#0EA5E9] tracking-tight flex items-center gap-1.5 group-hover:text-[#00EEFC] transition-colors">
            RideOut
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#ryder" className="text-sm font-semibold text-[#00EEFC] hover:text-white transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00EEFC] animate-pulse" />
            Meet Ryder
          </a>
          <a href="#chaos-clarity" className="text-sm font-semibold text-[#BEC8D2] hover:text-[#0EA5E9] transition-colors">
            Why RideOut
          </a>
          <a href="#features" className="text-sm font-semibold text-[#BEC8D2] hover:text-[#0EA5E9] transition-colors">
            Features
          </a>
          <a href="#showcase" className="text-sm font-semibold text-[#BEC8D2] hover:text-[#0EA5E9] transition-colors">
            Showcase
          </a>
          <a 
            href="/privacy"
            onClick={onPrivacyClick}
            className="text-sm font-semibold text-[#BEC8D2] hover:text-[#0EA5E9] transition-colors cursor-pointer"
          >
            Privacy
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onPress={onDownloadClick}
            className="bg-gradient-to-r from-[#0EA5E9] to-[#00EEFC] hover:from-[#0284C7] hover:to-[#0EA5E9] text-white font-extrabold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] active:scale-95 flex items-center gap-2 text-sm"
          >
            <span className="material-symbols-outlined text-[18px]">android</span>
            Get Android App
          </Button>
        </div>
      </div>
    </header>
  );
}

