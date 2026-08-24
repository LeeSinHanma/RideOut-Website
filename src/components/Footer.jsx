import React from 'react';
import appLogo from '../assets/appLogo.png';

export default function Footer({ onPrivacyClick, onTermsClick }) {
  return (
    <footer className="bg-[#060E20] border-t border-[#334155] w-full py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-5 max-w-7xl mx-auto">
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
            alt="RideOut Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(14,165,233,0.4)] group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="text-xl font-black text-[#0EA5E9] tracking-tight group-hover:text-[#00EEFC] transition-colors">
              RideOut
            </div>
            <div className="text-xs text-[#88929B] font-medium">
              © {new Date().getFullYear()} RideOut Inc. Master the Ride.
            </div>
          </div>
        </a>

        <nav className="flex flex-wrap gap-6 text-xs font-semibold text-[#BEC8D2]">
          <a 
            href="/privacy"
            onClick={onPrivacyClick} 
            className="hover:text-[#0EA5E9] transition-colors focus:outline-none cursor-pointer"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            onClick={onTermsClick}
            className="hover:text-[#0EA5E9] transition-colors focus:outline-none cursor-pointer"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
}

