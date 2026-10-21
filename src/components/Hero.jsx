import { Chip } from '@heroui/react';
import mapUI from '../assets/mapUI.webp';
import radioSignalsDetail from '../assets/radio-signals-detail.webp';
import DownloadLink from './DownloadLink';
export default function Hero() {
  return (
    <section className="ride-hero">
      <div className="hero-route" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"><path d="M-100 760 C280 980 350 70 720 310 S990 900 1540 100" /></svg>
      </div>
      <div className="page-container grid lg:grid-cols-2 items-center gap-8 lg:gap-12 relative pt-12 pb-16 lg:pt-16 lg:pb-20">
      <div className="hero-copy max-w-xl">
        <Chip color="success" variant="soft" className="hero-availability"><span className="availability-dot" aria-hidden="true" /><Chip.Label>Google Play exclusive · Android beta</Chip.Label></Chip>
        <p className="hero-kicker mt-8">Your people. Your road. Your ride.</p>
        <h1 className="hero-title">Ride as<br /><span>One.</span></h1>
        <p className="hero-description">The next turn. The next stop. <strong>The whole pack.</strong> One shared map to bring your people together and keep them in the picture.</p>
        <div className="flex flex-wrap items-center gap-5 mt-8">
          <DownloadLink />
          <a href="#ride-film" className="text-sm font-semibold text-white inline-flex items-center gap-2">Watch the ride <span className="material-symbols-outlined text-lg" aria-hidden="true">play_circle</span></a>
        </div>
        <p className="text-sm text-[#94A3B8] mt-4">Available only on Google Play. Built for Android.</p>
        <div className="grid grid-cols-3 gap-3 border-t border-[#334155] mt-10 pt-6">
          {[['map', 'Live group map'], ['pin', 'Invite by code'], ['groups', 'Made for riders']].map(([icon, label]) => (
            <div key={label} className="flex flex-col gap-2 text-xs sm:text-sm text-[#BEC8D2]"><span className="material-symbols-outlined text-[#38BDF8]" aria-hidden="true">{icon}</span>{label}</div>
          ))}
        </div>
      </div>
      <figure className="hero-stage">
        <div className="radar-ring radar-ring-one" aria-hidden="true" />
        <div className="radar-ring radar-ring-two" aria-hidden="true" />
        <span className="stage-coordinate" aria-hidden="true">14.5507° N / 121.0494° E</span>
        <div className="hero-phone w-full max-w-[285px]">
          <div className="rounded-[2rem] border-[5px] border-[#334155] bg-[#090D16] p-1.5 shadow-xl overflow-hidden">
            <img src={mapUI} alt="RideOut's live convoy map with a route through BGC, two rider markers, and group controls." width="720" height="1514" fetchPriority="high" className="w-full h-auto rounded-[1.5rem]" />
          </div>
        </div>
        <div className="ride-callout callout-top"><span className="material-symbols-outlined" aria-hidden="true">groups</span><div><strong>Your pack, connected.</strong><span>Same ride. Same map.</span></div><span className="status-dot" /></div>
        <a href="#chapter-radio" className="hero-radio-card"><span className="hero-card-label"><span className="material-symbols-outlined" aria-hidden="true">campaign</span>One signal. The whole pack.</span><img src={radioSignalsDetail} alt="RideOut radio buttons for fuel, hazards, regrouping, and rest stops" width="668" height="555" /><span className="hero-card-footer">See how your group stays connected <span aria-hidden="true">↗</span></span></a>
        <figcaption className="stage-caption"><span className="material-symbols-outlined text-[#38BDF8]" aria-hidden="true">route</span>Your meetup. Your group. One shared map.</figcaption>
      </figure>
      </div>
      <div className="hero-bottom page-container"><a href="#mission" className="scroll-cue"><span className="material-symbols-outlined" aria-hidden="true">south</span>Scroll for the ride</a><span>Made for the people you ride with.</span><span className="hero-edition">RIDEOUT / 01</span></div>
    </section>
  );
}
