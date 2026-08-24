import React from 'react';
import appLogo from '../assets/appLogo.png';

export default function Footer() {
  return (
    <footer className="bg-[#060E20] border-t border-[#334155] w-full py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img 
            src={appLogo} 
            alt="RideOut Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(14,165,233,0.4)]"
          />
          <div>
            <div className="text-xl font-black text-[#0EA5E9] tracking-tight">
              RideOut
            </div>
            <div className="text-xs text-[#88929B] font-medium">
              © {new Date().getFullYear()} RideOut Inc. Master the Ride.
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-6 text-xs font-semibold text-[#BEC8D2]">
          <a href="#" className="hover:text-[#0EA5E9] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#0EA5E9] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#0EA5E9] transition-colors">Rider Support</a>
          <a href="#" className="hover:text-[#0EA5E9] transition-colors">Community Guidelines</a>
        </nav>
      </div>
    </footer>
  );
}
