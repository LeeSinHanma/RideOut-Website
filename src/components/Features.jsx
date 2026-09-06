import React from 'react';
import proIconFace from '../assets/proIconFace.png';
import winkIconFace from '../assets/winkIconFace.png';

export default function Features() {
  const featuresList = [
    {
      id: 'live-map',
      title: 'Live Pack Map',
      description: 'See every rider in real-time on a high-contrast, dark-mode GPS radar map built specifically for road visibility.',
      icon: 'share_location',
      accentColor: '#0EA5E9',
      glowClass: 'hover:border-[#0EA5E9]/60 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]',
      mascot: proIconFace,
      badge: 'PRO Telemetry'
    },
    {
      id: 'geofence',
      title: 'Geofence Alerts',
      description: 'Instant audio and haptic notifications if a rider falls behind, takes a wrong turn, or strays from the pack route.',
      icon: 'crisis_alert',
      accentColor: '#F59E0B',
      glowClass: 'hover:border-[#F59E0B]/60 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]',
      badge: 'Safety First'
    },
    {
      id: 'group-tracking',
      title: '10 Rider Convoys',
      description: 'Connect up to 3 riders 100% free per session, or upgrade to RideOut PRO to host up to 10 rider pack convoys.',
      icon: 'groups',
      accentColor: '#00EEFC',
      glowClass: 'hover:border-[#00EEFC]/60 hover:shadow-[0_0_20px_rgba(0,238,252,0.2)]',
      badge: 'PRO Convoy'
    },
    {
      id: 'instant-setup',
      title: 'Instant Code Join',
      description: 'No complex registration required. Just enter a 6-character room code or tap an invite link to instantly join the pack session.',
      icon: 'pin',
      accentColor: '#10B981',
      glowClass: 'hover:border-[#10B981]/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]',
      mascot: winkIconFace,
      badge: 'Zero Friction'
    }
  ];

  return (
    <section id="features" className="py-24 px-5 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="px-4 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 text-[#0EA5E9] font-black text-xs uppercase tracking-wider">
          Engineered for the Road
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white">
          Built for the Ride Master
        </h2>
        <p className="text-base md:text-lg text-[#BEC8D2] font-medium">
          Every feature is designed to reduce glance time, preserve battery, and ensure zero riders get left behind.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresList.map((feature) => (
          <div
            key={feature.id}
            className={`bg-[#1E293B] p-6 rounded-2xl border border-[#334155] flex flex-col justify-between gap-6 transition-all duration-300 group ${feature.glowClass}`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feature.accentColor}18`, color: feature.accentColor }}
                >
                  <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                </div>

                {feature.mascot ? (
                  <img 
                    src={feature.mascot} 
                    alt={feature.title} 
                    className="w-9 h-9 object-contain drop-shadow-md"
                  />
                ) : (
                  <span 
                    className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border"
                    style={{ borderColor: `${feature.accentColor}40`, color: feature.accentColor, backgroundColor: `${feature.accentColor}10` }}
                  >
                    {feature.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-extrabold text-white group-hover:text-[#0EA5E9] transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm text-[#BEC8D2] leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#334155]/60 flex items-center justify-between text-xs font-bold text-[#88929B] group-hover:text-white transition-colors">
              <span>Learn more</span>
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
