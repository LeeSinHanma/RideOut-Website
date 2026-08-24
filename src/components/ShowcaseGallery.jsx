import React from 'react';
import mapUI from '../assets/mapUI.jpg';
import outOfCircle from '../assets/outOfCircle.jpg';
import radio from '../assets/radio.jpg';
import riderUI from '../assets/riderUI.jpg';
import SOS from '../assets/SOS.jpg';
import withinCircle from '../assets/withinCircle.jpg';
import advancedTelemetry from '../assets/advancedTelemetry.png';

export default function ShowcaseGallery() {
  const galleryItems = [
    {
      title: 'Live Telemetry Map',
      subtitle: 'High-contrast day & night GPS radar layout',
      src: mapUI,
      badge: 'GPS Radar'
    },
    {
      title: 'Pack Roster HUD',
      subtitle: 'Real-time rider status, battery & connection tracker',
      src: riderUI,
      badge: 'Pack Roster'
    },
    {
      title: 'Convoy Radio Signals',
      subtitle: '1-tap glove-friendly presets for gas, hazards & regroup',
      src: radio,
      badge: 'Glove Radio'
    },
    {
      title: 'Emergency SOS Beacon',
      subtitle: 'Instant broadcast safety alert to all squad members',
      src: SOS,
      badge: 'SOS Safety'
    },
    {
      title: 'Geofence Safe Zone',
      subtitle: 'Dynamic green ring keeping the pack together',
      src: withinCircle,
      badge: 'Pack Geofence'
    },
    {
      title: 'Advanced Telemetry Analytics',
      subtitle: 'Velocity profiles, G-force, lean angle & elevation metrics',
      src: advancedTelemetry,
      badge: 'PRO Telematics',
      isPro: true
    },
    {
      title: 'Detour & Out-Of-Bounds Alert',
      subtitle: 'Instant warning overlay when a rider strays from convoy',
      src: outOfCircle,
      badge: 'Route Governance',
      isPro: true
    }
  ];

  return (
    <section id="showcase" className="py-24 px-5 bg-[#060E20] border-t border-[#334155]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#00EEFC]/10 border border-[#00EEFC]/30 text-[#00EEFC] font-black text-xs uppercase tracking-wider">
            UI Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            See It In Action
          </h2>
          <p className="text-base md:text-lg text-[#BEC8D2] font-medium">
            Designed for ultra-clear legibility under direct sunlight or late night highway rides.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`bg-[#1E293B] rounded-2xl border overflow-hidden flex flex-col group transition-all duration-300 shadow-lg ${
                item.isPro 
                  ? 'border-[#8B5CF6]/50 hover:border-[#0EA5E9] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]' 
                  : 'border-[#334155] hover:border-[#0EA5E9]/50 hover:shadow-[0_0_25px_rgba(14,165,233,0.15)]'
              }`}
            >
              <div className="bg-[#0F172A] p-2 relative overflow-hidden flex items-center justify-center min-h-[320px] max-h-[460px]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto max-h-[440px] object-contain rounded-xl border border-[#334155] group-hover:scale-[1.02] transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 backdrop-blur-sm text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider ${
                  item.isPro 
                    ? 'bg-[#8B5CF6] text-white border border-[#A855F7] shadow-[0_0_12px_rgba(139,92,246,0.5)]' 
                    : 'bg-[#0F172A]/90 text-[#89CEFF] border border-[#0EA5E9]/30'
                }`}>
                  {item.badge}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-black text-white group-hover:text-[#0EA5E9] transition-colors">
                    {item.title}
                  </h4>
                  {item.isPro && (
                    <span className="bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow-md">
                      PRO
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#BEC8D2] font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
