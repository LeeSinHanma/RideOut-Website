import { useEffect, useState } from 'react';
import mapUI from '../assets/mapUI.webp';
import riderUI from '../assets/riderUI.webp';
import radio from '../assets/radio.webp';
import SOS from '../assets/SOS.webp';
import withinCircle from '../assets/withinCircle.webp';
import outOfCircle from '../assets/outOfCircle.webp';
import advancedTelemetry from '../assets/advancedTelemetry.webp';
import createRide from '../assets/createRide.webp';
import rideRecap from '../assets/rideRecap.webp';
import promoPoster from '../assets/promoPoster.webp';
import convoyRider1 from '../assets/convoyRider1.webp';
import convoyRider2 from '../assets/convoyRider2.webp';
import convoyRider3 from '../assets/convoyRider3.webp';
import welcomeWholeBody from '../assets/welcomeWholeBody.png';
import readyWholeBody from '../assets/readyWholeBody.png';
import approveWholeBody from '../assets/approveWholeBody.png';
import sadFullBody from '../assets/sadFullBody.png';
import proIconFace from '../assets/proIconFace.png';
const screens = [
  { id: 'map-ui', title: 'One map for your ride', description: 'See your meetup, destination, and fellow riders together.', src: mapUI },
  { id: 'rider-ui', title: 'Meet your riding group', description: 'See who is in your convoy, check rider status, and invite your group.', src: riderUI },
  { id: 'radio-ui', title: 'A quick callout to the group', description: 'Choose a preset signal for a fuel stop, hazard, or regroup.', src: radio },
  { id: 'geofence-ui', title: 'Keep the pack in view', description: 'A group radius gives you a visual reference for staying together.', src: withinCircle },
  { id: 'out-of-circle-ui', title: 'Notice a gap in the group', description: 'See when a rider is outside the group’s radius.', src: outOfCircle },
  { id: 'sos-ui', title: 'Let your riders know you need help', description: 'Send a breakdown or SOS beacon so your convoy can see your alert and location.', src: SOS },
  { id: 'telemetry-ui', title: 'A closer look at your ride', description: 'Explore the PRO telemetry options in your ride summary, including speed profiles and motion stats. Check the app for current availability.', src: advancedTelemetry, pro: true },
  { id: 'create-ui', title: 'Your ride. Your way.', description: 'Choose a destination or go with the flow in Free Ride. Set your meetup before bringing the group along.', src: createRide },
  { id: 'recap-ui', title: 'Keep the ride. Share the story.', description: 'Look back at your ride summary, then create a Convoy Story Card to save or share.', src: rideRecap },
];
export default function ShowcaseGallery() {
  const [activeIndex, setActiveIndex] = useState(() => {
    const index = screens.findIndex(screen => window.location.hash === `#screen-${screen.id}`);
    return index < 0 ? 0 : index;
  });
  useEffect(() => {
    const syncScreen = () => {
      const index = screens.findIndex(screen => window.location.hash === `#screen-${screen.id}`);
      if (index >= 0) setActiveIndex(index);
    };
    window.addEventListener('hashchange', syncScreen);
    return () => window.removeEventListener('hashchange', syncScreen);
  }, []);
  const screen = screens[activeIndex];
  const screenLabels = ['Group map', 'Your riders', 'Radio', 'Pack radius', 'Group alerts', 'SOS', 'Ride stats', 'Ride setup', 'Ride recap'];
  const mascot = [welcomeWholeBody, readyWholeBody, approveWholeBody, approveWholeBody, sadFullBody, sadFullBody, proIconFace, readyWholeBody, approveWholeBody][activeIndex];
  const selectScreen = index => {
    setActiveIndex(index);
    window.history.replaceState(null, '', `#screen-${screens[index].id}`);
  };
  return (
    <section id="showcase" className="section-band">
      <div className="page-container section-space">
        <div id="ride-film" className="promo-stage">
          <div className="promo-copy">
            <p className="eyebrow">The RideOut film · 2 minutes</p>
            <h2>Your next ride.<br /><span>With the whole pack.</span></h2>
            <p>From the first meetup to the final stop, see how RideOut keeps your tropa connected along the way.</p>
            <div className="promo-convoy" aria-hidden="true">
              <img src={convoyRider2} alt="" width="280" height="280" loading="lazy" decoding="async" />
              <img src={convoyRider1} alt="" width="280" height="280" loading="lazy" decoding="async" />
              <img src={convoyRider3} alt="" width="280" height="280" loading="lazy" decoding="async" />
            </div>
            <p className="promo-tagline">Ride as one. No one left behind.</p>
          </div>
          <figure className="promo-player">
            <video controls playsInline preload="none" poster={promoPoster} width="720" height="1280" aria-label="RideOut promotional film" aria-describedby="promo-caption">
              <source src="/video/rideout-promo.mp4" type="video/mp4" />
              <track kind="captions" src="/video/rideout-promo.vtt" srcLang="en" label="English / Taglish" />
              <a href="/video/rideout-promo.mp4">Watch the RideOut film</a>
            </video>
            <figcaption id="promo-caption">Meet the map. Hear the callouts. Keep the memories.</figcaption>
          </figure>
        </div>
        <div className="section-heading"><p className="eyebrow">Inside RideOut</p><h2>Take it for a spin.</h2><p>Meet the map, the callouts, and the little things that keep your group together.</p></div>
        <div className="screen-selector" aria-label="Choose an app screen">
          {screens.map((item, index) => (
            <button id={`screen-${item.id}`} key={item.id} type="button" onClick={() => selectScreen(index)} aria-pressed={index === activeIndex} aria-controls="app-screen-preview" className="screen-tab">
              <span className="screen-tab-number">0{index + 1}</span>{screenLabels[index]}
            </button>
          ))}
        </div>
        <div id="app-screen-preview" className="gallery-stage">
          <div className="gallery-description" aria-live="polite" aria-atomic="true">
            <p className="eyebrow flex items-center gap-3"><span className="gallery-number" aria-hidden="true">0{activeIndex + 1}</span>{screen.pro ? 'RideOut PRO' : 'Your ride, connected'}</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-5">{screen.title}</h3>
            <p className="text-[#BEC8D2] leading-relaxed max-w-md">{screen.description}</p>
            <div className="gallery-preview-row">
              <div className="gallery-mascot"><img src={mascot} alt="" decoding="async" /></div>
              {[1, 2].map(offset => {
                const index = (activeIndex + offset) % screens.length;
                return (
                  <button key={screens[index].id} type="button" className="gallery-thumbnail" onClick={() => selectScreen(index)} aria-label={`Preview ${screenLabels[index]}`}>
                    <img src={screens[index].src} alt="" loading="lazy" decoding="async" />
                    <span>{screenLabels[index]}<span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></span>
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-3 mt-5">
              <button type="button" className="gallery-arrow" aria-label="Previous app screen" onClick={() => selectScreen((activeIndex + screens.length - 1) % screens.length)}><span className="material-symbols-outlined" aria-hidden="true">arrow_back</span></button>
              <button type="button" className="gallery-arrow" aria-label="Next app screen" onClick={() => selectScreen((activeIndex + 1) % screens.length)}><span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>
              <span className="text-sm text-[#94A3B8] ml-2">{activeIndex + 1} / {screens.length}</span>
            </div>
          </div>
          <a href={screen.src} target="_blank" rel="noopener noreferrer" className="gallery-phone-stage" aria-label={`View full screenshot: ${screen.title} (opens in a new tab)`}>
            <div className="gallery-orbit" aria-hidden="true" />
            <img key={screen.id} src={screen.src} alt={screen.title} decoding="async" className="gallery-phone" />
            <span className="gallery-expand">View full screen <span className="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span></span>
          </a>
        </div>
      </div>
    </section>
  );
}
