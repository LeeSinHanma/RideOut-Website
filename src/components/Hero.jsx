import mapUI from '../assets/mapUI.jpg';
import readyWholeBody from '../assets/readyWholeBody.png';
import DownloadLink from './DownloadLink';
export default function Hero() {
  return (
    <section className="ride-hero">
      <div className="hero-route" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"><path d="M-100 760 C280 980 350 70 720 310 S990 900 1540 100" /></svg>
      </div>
      <div className="page-container grid lg:grid-cols-2 items-center gap-8 lg:gap-12 relative pt-12 pb-16 lg:pt-16 lg:pb-20">
      <div className="hero-copy max-w-xl">
        <p className="eyebrow flex flex-wrap items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#10B981]" />Available on Google Play <span className="beta-label">Beta</span></p>
        <p className="hero-kicker mt-8">Good roads. Great company.</p>
        <h1 className="hero-title">Ride as<br /><span>One.</span></h1>
        <p className="text-lg sm:text-xl text-[#BEC8D2] leading-relaxed mt-6 max-w-lg">Plan your meetup, see your group on the map, and stay connected throughout the ride.</p>
        <div className="flex flex-wrap items-center gap-5 mt-8">
          <DownloadLink />
          <a href="#how-it-works" className="text-sm font-semibold text-white inline-flex items-center gap-2">See how it works <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_downward</span></a>
        </div>
        <p className="text-sm text-[#94A3B8] mt-4">Android beta available now. iOS is coming soon.</p>
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
            <img src={mapUI} alt="RideOut map showing a BGC meetup, destination, two riders, and their invite code." width="995" height="2048" fetchPriority="high" className="w-full h-auto rounded-[1.5rem]" />
          </div>
        </div>
        <div className="ride-callout callout-top"><span className="material-symbols-outlined" aria-hidden="true">groups</span><div><strong>Your pack, connected.</strong><span>Same ride. Same map.</span></div><span className="status-dot" /></div>
        <a href="#ryder" className="hero-ryder" aria-label="Meet Ryder, the RideOut mascot"><img src={readyWholeBody} alt="Ryder getting ready for the ride" /><span>Let’s ride out! <span aria-hidden="true">↗</span></span></a>
        <figcaption className="stage-caption"><span className="material-symbols-outlined text-[#38BDF8]" aria-hidden="true">route</span>Your meetup. Your group. One shared map.</figcaption>
      </figure>
      </div>
      <div className="ride-strip" aria-hidden="true"><span>Find your people.</span><span className="strip-star">✳</span><span>Pick your road.</span><span className="strip-star">✳</span><span>Ride as one.</span><span className="strip-star">✳</span></div>
    </section>
  );
}
