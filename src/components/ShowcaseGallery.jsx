import React, { useState, useEffect } from 'react';
import mapUI from '../assets/mapUI.jpg';
import outOfCircle from '../assets/outOfCircle.jpg';
import radio from '../assets/radio.jpg';
import riderUI from '../assets/riderUI.jpg';
import SOS from '../assets/SOS.jpg';
import withinCircle from '../assets/withinCircle.jpg';
import advancedTelemetry from '../assets/advancedTelemetry.png';

export default function ShowcaseGallery() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [viewMode, setViewMode] = useState('spotlight'); // 'spotlight' | 'grid'
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [lightboxItem, setLightboxItem] = useState(null);

  const galleryItems = [
    {
      id: 'map-ui',
      title: 'Live Telemetry Map',
      badge: 'GPS Radar',
      subtitle: 'High-contrast day & night GPS radar layout',
      description: 'Engineered specifically for high-speed riding visibility under glare or night conditions. Continuously updates all rider coordinates on a vector map.',
      src: mapUI,
      isPro: false,
      metrics: [
        { label: 'GPS Precision', value: '< 2 meters' },
        { label: 'Map Refresh', value: '60 Hz Vector' },
        { label: 'Sunlight Visibility', value: 'High Contrast' },
        { label: 'Tracking Mode', value: 'Real-Time' }
      ]
    },
    {
      id: 'rider-ui',
      title: 'Pack Roster HUD',
      badge: 'Pack Roster',
      subtitle: 'Real-time rider status, battery & connection tracker',
      description: 'Keep tabs on every squad member at a glance. Monitors individual velocity, battery percentage, and signal strength so nobody gets left behind.',
      src: riderUI,
      isPro: false,
      metrics: [
        { label: 'Squad Capacity', value: 'Up to 10 Riders' },
        { label: 'Telemetry Metrics', value: 'Speed & Battery' },
        { label: 'Connection Watch', value: 'Live Heartbeat' },
        { label: 'Rider Status', value: 'Active Pack' }
      ]
    },
    {
      id: 'radio-ui',
      title: 'Convoy Radio Signals',
      badge: 'Glove Radio',
      subtitle: '1-tap glove-friendly presets for gas, hazards & regroup',
      description: 'No fiddling with small buttons while wearing heavy riding gloves. Instant 1-tap audio alerts for quick team callouts on the fly.',
      src: radio,
      isPro: false,
      metrics: [
        { label: 'Touch Target', value: 'Glove-Friendly' },
        { label: 'Callout Presets', value: 'Gas / Hazard / Stop' },
        { label: 'Audio Latency', value: '< 50 ms' },
        { label: 'Hands-Free', value: 'BLE Helmet Ready' }
      ]
    },
    {
      id: 'sos-ui',
      title: 'Emergency SOS Beacon',
      badge: 'SOS Safety',
      subtitle: 'Instant broadcast safety alert to all squad members',
      description: 'One emergency trigger broadcasts high-priority audio alerts and precise GPS pin coordinates to all squad members and emergency contacts instantly.',
      src: SOS,
      isPro: false,
      metrics: [
        { label: 'Dispatch Speed', value: 'Instant (< 1s)' },
        { label: 'Coordinates', value: 'Lat/Long Pin' },
        { label: 'Override Mode', value: 'Loud Beacon' },
        { label: 'Fallback', value: 'SMS Gateway' }
      ]
    },
    {
      id: 'geofence-ui',
      title: 'Geofence Safe Zone',
      badge: 'Pack Geofence',
      subtitle: 'Dynamic green ring keeping the pack together',
      description: 'Creates a dynamic safety perimeter around the convoy lead rider. Automatically notifies riders when they stray beyond the pack safety zone.',
      src: withinCircle,
      isPro: false,
      metrics: [
        { label: 'Radius Control', value: 'Dynamic / Custom' },
        { label: 'Auto Calculation', value: 'Lead Anchor' },
        { label: 'Alert Audio', value: 'Chime & Vibration' },
        { label: 'Pack Radius', value: '500m - 5km' }
      ]
    }, 
    {
      id: 'out-of-circle-ui',
      title: 'Detour & Out-Of-Bounds Alert',
      badge: 'Route Governance',
      subtitle: 'Instant warning overlay when a rider strays from convoy',
      description: 'Proactively identifies stragglers and wrong-turn detours before anyone gets lost. Visual red HUD overlay triggers automatically.',
      src: outOfCircle,
      isPro: false,
      metrics: [
        { label: 'Deviation Detect', value: 'Automatic' },
        { label: 'Re-route Guidance', value: 'Instant Turn' },
        { label: 'Squad Notice', value: 'Tail-End Alert' },
        { label: 'Off-Route HUD', value: 'High Visibility' }
      ]
    },
    {
      id: 'telemetry-ui',
      title: 'Advanced Telemetry Analytics',
      badge: 'PRO Telematics',
      subtitle: 'Velocity profiles, G-force, lean angle & elevation metrics',
      description: 'Unlock professional racing telematics right on your phone. Record lean angle degrees, corner acceleration, and high-altitude ride telemetry.',
      src: advancedTelemetry,
      isPro: true,
      metrics: [
        { label: 'Lean Angle Sensors', value: 'IMU Fusion' },
        { label: 'G-Force Tracking', value: '3-Axis Sensor' },
        { label: 'Elevation Profile', value: 'Altimeter Sync' },
        { label: 'Export Format', value: 'GPX / Telematics' }
      ]
    }
  ];

  const currentItem = galleryItems[activeIdx];

  // Auto-play slideshow for spotlight view
  useEffect(() => {
    if (!isAutoplay || viewMode !== 'spotlight' || lightboxItem !== null) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % galleryItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoplay, viewMode, lightboxItem, galleryItems.length]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="showcase" className="py-20 sm:py-24 px-4 sm:px-5 relative overflow-hidden map-grid">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-4 border-b border-[#334155]/40">
          <div className="text-center md:text-left space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00EEFC]/10 border border-[#00EEFC]/30 text-[#00EEFC] font-black text-xs uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">smartphone</span>
              Interactive UI Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Designed for the Helmet HUD & Direct Sunlight
            </h2>
            <p className="text-base sm:text-lg text-[#BEC8D2] font-medium leading-relaxed">
              Explore RideOut's rider-centric interface designed specifically for glove navigation and high-speed clarity.
            </p>
          </div>

          {/* View Mode Switcher Controls */}
          <div className="w-full sm:w-auto flex items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[#0F172A] border border-[#334155] shadow-inner">
            <button
              onClick={() => setViewMode('spotlight')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                viewMode === 'spotlight'
                  ? 'bg-gradient-to-r from-[#0EA5E9] to-[#00EEFC] text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]'
                  : 'text-[#89CEFF] hover:text-white hover:bg-[#1E293B]'
              }`}
            >
              <span className="material-symbols-outlined text-base">phone_iphone</span>
              <span>Spotlight Hub</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-[#0EA5E9] to-[#00EEFC] text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]'
                  : 'text-[#89CEFF] hover:text-white hover:bg-[#1E293B]'
              }`}
            >
              <span className="material-symbols-outlined text-base">grid_view</span>
              <span>Gallery Grid</span>
            </button>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* SPOTLIGHT HUB MODE */}
        {/* ---------------------------------------------------- */}
        {viewMode === 'spotlight' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Feature Tabs Quick Selector Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
              {galleryItems.map((item, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveIdx(idx);
                      setIsAutoplay(false);
                    }}
                    className={`whitespace-nowrap px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 flex items-center gap-2 border ${
                      isActive
                        ? item.isPro
                          ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.35)]'
                          : 'bg-[#0EA5E9]/20 border-[#00EEFC] text-white shadow-[0_0_20px_rgba(0,238,252,0.3)]'
                        : 'bg-[#0F172A]/80 border-[#334155]/60 text-[#BEC8D2] hover:border-[#0EA5E9]/40 hover:text-white'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive
                          ? item.isPro
                            ? 'bg-[#A855F7] animate-ping'
                            : 'bg-[#00EEFC] animate-ping'
                          : 'bg-[#334155]'
                      }`}
                    />
                    {item.badge}
                    {item.isPro && (
                      <span className="bg-[#8B5CF6] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                        PRO
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Main Interactive Stage: 3-Column Grid (Responsive Phone Height & Mobile Order) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#0F172A]/90 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-[#334155]/80 backdrop-blur-xl shadow-2xl">
              
              {/* Center Column: Realistic Mobile Phone Mockup (Ordered first on mobile for high visibility) */}
              <div className="lg:col-span-4 flex items-center justify-center relative py-2 lg:py-4 order-first lg:order-none">
                {/* Dynamic Screen Aura Glow */}
                <div
                  className={`absolute -inset-4 rounded-[48px] blur-2xl transition-all duration-700 pointer-events-none ${
                    currentItem.isPro
                      ? 'bg-[#8B5CF6]/30'
                      : 'bg-[#0EA5E9]/25'
                  }`}
                />

                {/* Smartphone Device Body (Responsive Height for mobile vs desktop) */}
                <div className="relative w-full max-w-[270px] sm:max-w-[310px] h-[400px] sm:h-[460px] lg:h-[510px] rounded-[36px] sm:rounded-[42px] border-4 border-[#334155] bg-[#090D16] p-2.5 sm:p-3 shadow-2xl transition-all duration-500 hover:border-[#0EA5E9]/80 group flex flex-col">
                  {/* Speaker & Dynamic Island Notch */}
                  <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-3.5 sm:h-4 bg-[#090D16] border border-[#1E293B] rounded-b-xl z-30 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#030712] border border-[#334155]" />
                  </div>

                  {/* Mobile Screen Container */}
                  <div className="relative w-full h-full rounded-[26px] sm:rounded-[30px] overflow-hidden bg-[#060E20] border border-[#1E293B] flex flex-col">
                    {/* Simulated OS Top Bar */}
                    <div className="flex items-center justify-between px-4 sm:px-5 pt-2.5 sm:pt-3 pb-1 text-[10px] text-[#89CEFF] font-mono border-b border-[#334155]/40 bg-[#0F172A]/80 relative z-20 shrink-0">
                      <span>09:41</span>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[12px]">signal_cellular_alt</span>
                        <span className="material-symbols-outlined text-[12px]">wifi</span>
                        <span className="material-symbols-outlined text-[12px]">battery_full</span>
                      </div>
                    </div>

                    {/* Screenshot View Area */}
                    <div 
                      onClick={() => setLightboxItem(currentItem)}
                      className="relative flex-1 w-full flex items-center justify-center bg-black cursor-pointer overflow-hidden group/img shrink-0"
                    >
                      <img
                        key={currentItem.id}
                        src={currentItem.src}
                        alt={currentItem.title}
                        className="w-full h-full object-contain transition-all duration-500 group-hover/img:scale-105"
                      />

                      {/* Click to Zoom Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-1 backdrop-blur-[2px]">
                        <span className="material-symbols-outlined text-3xl text-[#00EEFC]">zoom_in</span>
                        <span className="text-xs font-black uppercase tracking-wider">Click to Zoom</span>
                      </div>

                      {/* Live Screen Watermark Indicator */}
                      <div className="absolute bottom-2.5 left-2.5 bg-[#0F172A]/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#0EA5E9]/40 text-[9px] sm:text-[10px] font-bold text-[#00EEFC] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        Screen {activeIdx + 1} of {galleryItems.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left Column: Feature Details & Specs (5 Cols) */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider border ${
                        currentItem.isPro
                          ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] text-[#C084FC]'
                          : 'bg-[#0EA5E9]/20 border-[#0EA5E9]/50 text-[#00EEFC]'
                      }`}
                    >
                      {currentItem.badge}
                    </span>
                    {currentItem.isPro && (
                      <span className="bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] text-white text-xs font-black px-2.5 py-0.5 rounded-md uppercase shadow">
                        PRO Feature
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                      {currentItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#89CEFF]">
                      {currentItem.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#BEC8D2] font-medium leading-relaxed min-h-0 lg:min-h-[60px]">
                    {currentItem.description}
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1 sm:pt-2">
                    {currentItem.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="bg-[#1E293B]/80 p-2.5 sm:p-3 rounded-xl border border-[#334155]/70 flex flex-col gap-0.5"
                      >
                        <span className="text-[9px] sm:text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                          {m.label}
                        </span>
                        <span className="text-xs sm:text-sm font-black text-white">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Controls */}
                <div className="pt-4 flex items-center justify-between border-t border-[#334155]/60 gap-2 flex-wrap sm:flex-nowrap">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 sm:p-2.5 rounded-xl bg-[#1E293B] border border-[#334155] text-white hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/20 transition-all active:scale-95"
                      title="Previous Screen"
                    >
                      <span className="material-symbols-outlined text-base sm:text-lg">arrow_back</span>
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 sm:p-2.5 rounded-xl bg-[#1E293B] border border-[#334155] text-white hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/20 transition-all active:scale-95"
                      title="Next Screen"
                    >
                      <span className="material-symbols-outlined text-base sm:text-lg">arrow_forward</span>
                    </button>
                    <button
                      onClick={() => setIsAutoplay(!isAutoplay)}
                      className={`px-2.5 sm:px-3 py-2 rounded-xl border text-[11px] sm:text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                        isAutoplay
                          ? 'bg-[#10B981]/20 border-[#10B981]/50 text-[#10B981]'
                          : 'bg-[#1E293B] border-[#334155] text-[#88929B]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {isAutoplay ? 'pause_circle' : 'play_circle'}
                      </span>
                      <span>{isAutoplay ? 'Autoplay' : 'Paused'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setLightboxItem(currentItem)}
                    className="px-3 sm:px-3.5 py-2 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/40 text-[#00EEFC] hover:bg-[#0EA5E9] hover:text-white transition-all text-xs font-bold flex items-center gap-1.5 ml-auto sm:ml-0"
                  >
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                    <span>Expand</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Quick Feature List Selector (3 Cols) */}
              <div className="lg:col-span-3 space-y-2.5 h-full flex flex-col justify-center">
                <h4 className="text-xs font-black text-[#89CEFF] uppercase tracking-wider mb-2">
                  All App Screens
                </h4>
                <div className="space-y-2 max-h-[220px] sm:max-h-[300px] lg:max-h-[440px] overflow-y-auto pr-1 sm:pr-2">
                  {galleryItems.map((item, idx) => {
                    const isSelected = idx === activeIdx;
                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          setActiveIdx(idx);
                          setIsAutoplay(false);
                        }}
                        className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all cursor-pointer flex items-center gap-2.5 sm:gap-3 ${
                          isSelected
                            ? item.isPro
                              ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] text-white shadow-md'
                              : 'bg-[#0EA5E9]/20 border-[#00EEFC] text-white shadow-md'
                            : 'bg-[#1E293B]/60 border-[#334155]/40 text-[#BEC8D2] hover:bg-[#1E293B] hover:text-white'
                        }`}
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden bg-[#0F172A] border border-[#334155] shrink-0">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold truncate">
                              {item.title}
                            </span>
                            {item.isPro && (
                              <span className="text-[8px] font-black bg-[#8B5CF6] text-white px-1 rounded uppercase">
                                PRO
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-[#64748B] font-medium truncate">
                            {item.badge}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* GALLERY GRID MODE */}
        {/* ---------------------------------------------------- */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className={`bg-[#0F172A] rounded-2xl border overflow-hidden flex flex-col group transition-all duration-300 cursor-pointer shadow-xl ${
                  item.isPro
                    ? 'border-[#8B5CF6]/40 hover:border-[#8B5CF6] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]'
                    : 'border-[#334155] hover:border-[#00EEFC]/60 hover:shadow-[0_0_25px_rgba(0,238,252,0.2)]'
                }`}
              >
                {/* Screenshot Frame */}
                <div className="bg-[#060E20] p-4 relative overflow-hidden flex items-center justify-center min-h-[300px] max-h-[420px] group/card">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto max-h-[380px] object-contain rounded-xl border border-[#334155] group-hover/card:scale-105 transition-transform duration-500"
                  />

                  {/* Badge */}
                  <span
                    className={`absolute top-4 left-4 backdrop-blur-md text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider ${
                      item.isPro
                        ? 'bg-[#8B5CF6] text-white border border-[#A855F7]'
                        : 'bg-[#0F172A]/90 text-[#00EEFC] border border-[#0EA5E9]/40'
                    }`}
                  >
                    {item.badge}
                  </span>

                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-3xl text-[#00EEFC]">zoom_in</span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-5 flex flex-col gap-1.5 bg-[#1E293B]/60">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-black text-white group-hover:text-[#00EEFC] transition-colors">
                      {item.title}
                    </h4>
                    {item.isPro && (
                      <span className="bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] text-white text-[9px] font-black px-2 py-0.5 rounded uppercase">
                        PRO
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#BEC8D2] font-medium leading-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* FULL RESOLUTION LIGHTBOX MODAL */}
        {/* ---------------------------------------------------- */}
        {lightboxItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-[#0F172A] border border-[#334155] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl overflow-y-auto my-auto flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Perfectly Centered & Sticky Close Button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="sticky top-0 right-0 ml-auto -mb-8 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 hover:text-white hover:bg-[#0EA5E9] hover:border-[#00EEFC] transition-all flex items-center justify-center shadow-lg cursor-pointer shrink-0"
                aria-label="Close preview"
              >
                <span className="text-base sm:text-lg font-bold leading-none">✕</span>
              </button>

              {/* Image Container (Scaled down on mobile so text fits) */}
              <div className="w-full md:w-1/2 flex items-center justify-center bg-[#060E20] p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#334155] shrink-0">
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  className="w-auto max-h-[35vh] sm:max-h-[45vh] md:max-h-[65vh] object-contain rounded-lg sm:rounded-xl shadow-lg"
                />
              </div>

              {/* Information Panel */}
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0EA5E9]/20 border border-[#0EA5E9]/50 text-[#00EEFC] text-[11px] sm:text-xs font-black uppercase">
                  {lightboxItem.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#89CEFF] font-semibold">
                  {lightboxItem.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#BEC8D2] font-medium leading-relaxed">
                  {lightboxItem.description}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-1 sm:pt-2">
                  {lightboxItem.metrics.map((m, i) => (
                    <div key={i} className="bg-[#1E293B] p-2.5 rounded-xl border border-[#334155] text-xs">
                      <div className="text-[9px] sm:text-[10px] text-[#64748B] font-bold uppercase">{m.label}</div>
                      <div className="font-extrabold text-white mt-0.5 text-xs sm:text-sm">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setLightboxItem(null)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#00EEFC] text-white font-extrabold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

