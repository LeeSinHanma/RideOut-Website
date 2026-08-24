import React, { useState } from 'react';
import welcomeWholeBody from '../assets/welcomeWholeBody.png';
import readyWholeBody from '../assets/readyWholeBody.png';
import approveWholeBody from '../assets/approveWholeBody.png';
import sadFullBody from '../assets/sadFullBody.png';
import winkIconFace from '../assets/winkIconFace.png';
import sadIconFace from '../assets/sadIconFace.png';
import proIconFace from '../assets/proIconFace.png';

export default function MascotIntroduction() {
  const [activeMode, setActiveMode] = useState('welcome'); // 'welcome' | 'ready' | 'warning' | 'pro'

  const ryderModes = [
    {
      id: 'welcome',
      label: 'Pack Master',
      iconFace: winkIconFace,
      fullBody: welcomeWholeBody,
      badge: 'Squad Co-Pilot',
      quote: "Hey Rider! I'm Ryder, your RideOut pack co-pilot. I keep an eye on your squad's live coordinates, distance gap, and connection status 60 times a second so you can focus on the road ahead!",
      duties: [
        { title: 'Live Radar Watch', desc: 'Continuous tracking of all convoy members on a vector map.' },
        { title: 'Glove Presets', desc: '1-tap audio callouts for gas, hazards, and regroup points.' }
      ]
    },
    {
      id: 'ready',
      label: 'Convoy Ready',
      iconFace: winkIconFace,
      fullBody: readyWholeBody,
      badge: 'Ready to Roll',
      quote: "Helmets on, engines roaring! Before you hit the ignition, I generate your 6-character room code and sync everyone's GPS radar seamlessly.",
      duties: [
        { title: 'Instant Room Sync', desc: 'Join room codes in 2 seconds with zero registration required for guests.' },
        { title: 'Helmet TTS Engine', desc: 'Voice announcements routed directly to your Bluetooth headset.' }
      ]
    },
    {
      id: 'warning',
      label: 'Off-Course Alert',
      iconFace: sadIconFace,
      fullBody: sadFullBody,
      badge: 'Safety Guardian',
      quote: "Uh oh! If a rider strays from the convoy geofence or experiences a breakdown, I trigger an immediate visual warning and sound the Emergency SOS beacon!",
      duties: [
        { title: 'Geofence Guard', desc: 'Alerts the pack when any rider strays outside the convoy safety radius.' },
        { title: 'Emergency SOS', desc: 'Broadcasts instant latitude/longitude pin coordinates to all squad members.' }
      ]
    },
    {
      id: 'pro',
      label: 'PRO Telematics',
      iconFace: proIconFace,
      fullBody: approveWholeBody,
      badge: 'Telemetry Analyst',
      quote: "For riders who demand performance analytics, I calculate your lean angle degrees, G-forces, acceleration curves, and award post-ride milestone trophies!",
      duties: [
        { title: 'IMU Fusion Telemetry', desc: 'Precision Lean Angle and G-force metrics recorded during active rides.' },
        { title: 'Milestone Badges', desc: 'Unlock exclusive trophies for long-haul distance and elevation gains.' }
      ]
    }
  ];

  const currentRyder = ryderModes.find((m) => m.id === activeMode) || ryderModes[0];

  return (
    <section id="ryder" className="py-24 px-4 sm:px-6 bg-[#090D16] border-t border-[#334155]/60 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#0EA5E9]/15 via-[#00EEFC]/10 to-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 text-[#00EEFC] font-black text-xs uppercase tracking-wider shadow">
            <span className="material-symbols-outlined text-sm">face</span>
            Official Mascot Introduction
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Meet Ryder — Your Pack Co-Pilot
          </h2>
          <p className="text-base sm:text-lg text-[#BEC8D2] font-medium leading-relaxed">
            Every great ride needs a reliable leader. Ryder is RideOut's official mascot, engineered into the app to protect your squad on every highway and sharp curve.
          </p>
        </div>

        {/* Interactive Mode Selector Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {ryderModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all duration-300 flex items-center gap-2.5 border ${
                activeMode === mode.id
                  ? 'bg-gradient-to-r from-[#0EA5E9] to-[#00EEFC] border-[#00EEFC] text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] scale-105'
                  : 'bg-[#0F172A] border-[#334155] text-[#BEC8D2] hover:border-[#0EA5E9]/50 hover:text-white'
              }`}
            >
              <img 
                src={mode.iconFace} 
                alt={mode.label} 
                className="w-5 h-5 object-contain"
              />
              {mode.label}
            </button>
          ))}
        </div>

        {/* Interactive Stage Card */}
        <div className="bg-[#0F172A]/90 rounded-3xl border border-[#334155] p-6 sm:p-10 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Mascot Image & Aura Display (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-4">
            {/* Ambient Aura Ring */}
            <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-to-b from-[#0EA5E9]/25 to-[#00EEFC]/10 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <img
                key={currentRyder.id}
                src={currentRyder.fullBody}
                alt={`Ryder mascot in ${currentRyder.label} mode`}
                className="w-64 sm:w-80 h-auto object-contain drop-shadow-[0_10px_30px_rgba(14,165,233,0.45)] transition-all duration-500 hover:scale-105"
              />
              
              <div className="mt-4 px-4 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-black text-[#00EEFC] uppercase tracking-wider shadow">
                Ryder — {currentRyder.badge}
              </div>
            </div>
          </div>

          {/* Right: Speech Bubble & Duties (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Speech Bubble */}
            <div className="relative bg-[#1E293B] border border-[#334155] p-5 sm:p-6 rounded-2xl shadow-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-black text-[#89CEFF] uppercase tracking-wider">
                <span className="material-symbols-outlined text-base">chat_bubble</span>
                Message from Ryder:
              </div>
              <p className="text-sm sm:text-base font-semibold text-white leading-relaxed italic">
                "{currentRyder.quote}"
              </p>
            </div>

            {/* Duties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentRyder.duties.map((duty, idx) => (
                <div 
                  key={idx}
                  className="bg-[#060E20] p-4 rounded-2xl border border-[#334155]/80 flex flex-col gap-1.5 hover:border-[#0EA5E9]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-xs font-black text-white">
                    <span className="w-2 h-2 rounded-full bg-[#00EEFC]" />
                    {duty.title}
                  </div>
                  <p className="text-xs text-[#BEC8D2] font-medium leading-normal">
                    {duty.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Mascot Guarantee Callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0EA5E9]/15 to-[#8B5CF6]/15 border border-[#0EA5E9]/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src={currentRyder.iconFace} alt="Ryder Face" className="w-9 h-9 object-contain" />
                <div className="text-xs">
                  <span className="font-extrabold text-white block">Ryder's Pack Guarantee</span>
                  <span className="text-[#BEC8D2]">No rider is ever left behind on a RideOut session.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
