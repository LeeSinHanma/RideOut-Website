import { Button, Chip } from '@heroui/react';
import useScrollSection from '../hooks/useScrollSection';
import mapUI from '../assets/mapUI.webp';
import outOfCircle from '../assets/outOfCircle.webp';
import radio from '../assets/radio.webp';
import SOS from '../assets/SOS.webp';
import convoyMapDetail from '../assets/convoy-map-detail.webp';
import separationAlertDetail from '../assets/separation-alert-detail.webp';
import radioSignalsDetail from '../assets/radio-signals-detail.webp';
import emergencyBeaconDetail from '../assets/emergency-beacon-detail.webp';

const features = [
  { id: 'map', title: 'See your group.', lead: 'Your people. In the picture.', description: 'A shared map puts your riders and route in one place. Spend less time asking where everyone is, and more time looking forward to the next stop.', target: 'map-ui', link: 'Explore the group map', screen: mapUI, crop: convoyMapDetail, alt: 'Live rider markers inside the convoy radius on the RideOut map', color: 'success', status: 'One shared map' },
  { id: 'alerts', title: 'Notice the gap.', lead: 'Someone falling behind? Get a heads-up.', description: 'A missed light can split the pack. Group distance alerts help you spot when a rider moves outside your circle, so you can make a plan to regroup.', target: 'out-of-circle-ui', link: 'See group alerts', screen: outOfCircle, crop: separationAlertDetail, alt: 'Pack Separation Alert identifying a rider outside the convoy circle', color: 'warning', status: 'A heads-up to regroup', audio: { src: '/audio/separation-alert.mp3', title: 'Hear the separation alert', description: 'The notification chime when a rider leaves the convoy circle.' } },
  { id: 'radio', title: 'Say it with a signal.', lead: 'One tap. Everyone in the loop.', description: 'Fuel stop? Pothole? Time for a coffee? Preset Convoy Radio signals get the message to your group without starting another chat.', target: 'radio-ui', link: 'See radio signals', screen: radio, crop: radioSignalsDetail, alt: 'Preset Convoy Radio buttons for fuel, hazards, regrouping, and rest stops', color: 'accent', status: 'The whole pack, in the loop' },
  { id: 'help', title: 'Help finds a way.', lead: 'Let your riders know where you need them.', description: 'A flat tire does not have to become a guessing game. Send a breakdown or SOS beacon so your convoy can see the alert and your location.', target: 'sos-ui', link: 'See the SOS screen', screen: SOS, crop: emergencyBeaconDetail, alt: 'RideOut Emergency and Breakdown beacon controls and vehicle issue choices', color: 'danger', status: 'Your location. Your group.', audio: { src: '/audio/sos-alert.mp3', title: 'Hear the SOS siren', description: 'The app’s emergency siren, played when an SOS is sent.' } },
];
const chapterSelectors = features.map(feature => `#chapter-${feature.id}`);

export default function Features() {
  const activeIndex = useScrollSection(chapterSelectors);

  const goToChapter = index => {
    document.getElementById(`chapter-${features[index].id}`).scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'center',
    });
  };

  return (
    <section id="features" className="ride-story page-container section-space">
      <div className="section-heading story-heading"><p className="eyebrow">Made for group rides</p><h2>Less “where are you?”<br />More <span>riding together.</span></h2><p>Follow the ride. See what keeps your pack connected.</p></div>
      <div className="story-layout">
        <div className="story-visual" data-scene={activeIndex}>
          <div className="story-stage">
            <div className="story-stage-label"><span className="availability-dot" />Inside RideOut<span>0{activeIndex + 1} / 04</span></div>
            <div className="story-map-grid" aria-hidden="true" />
            <div className="story-orbit" aria-hidden="true" />
            <div className="story-phone">
              {features.map((feature, index) => <img key={feature.id} src={feature.screen} alt={feature.title} width="720" height="1514" loading="lazy" decoding="async" className={index === activeIndex ? 'is-active' : ''} aria-hidden={index !== activeIndex} />)}
            </div>
            <div className="story-status"><Chip color={features[activeIndex].color} variant="soft"><Chip.Label>{features[activeIndex].status}</Chip.Label></Chip></div>
          </div>
          <div className="story-navigation" role="group" aria-label="Explore ride features">
            {features.map((feature, index) => <Button key={feature.id} variant="ghost" isIconOnly aria-label={`Show feature: ${feature.title}`} aria-pressed={index === activeIndex} onPress={() => goToChapter(index)} className="story-nav-button"><span>0{index + 1}</span></Button>)}
            <span className="story-scroll-hint">Scroll to explore <span aria-hidden="true">↓</span></span>
          </div>
        </div>
        <div className="story-chapters">
          {features.map((feature, index) => (
            <article id={`chapter-${feature.id}`} data-index={index} key={feature.id} className={`story-chapter ${index === activeIndex ? 'is-active' : ''}`}>
              <p className="story-chapter-label"><span>0{index + 1}</span>{feature.lead}</p>
              <h3>{feature.title}</h3>
              <p className="story-chapter-description">{feature.description}</p>
              <div className="feature-screen-stage"><img src={feature.crop} alt={feature.alt} loading="lazy" decoding="async" /></div>
              {feature.audio && (
                <figure className="story-audio">
                  <figcaption><span className="material-symbols-outlined" aria-hidden="true">volume_up</span>{feature.audio.title}</figcaption>
                  <audio controls preload="none" aria-label={feature.audio.title} onPlay={() => goToChapter(index)}>
                    <source src={feature.audio.src} type="audio/mpeg" />
                    <a href={feature.audio.src}>Listen to this alert</a>
                  </audio>
                  <p>{feature.audio.description}</p>
                </figure>
              )}
              <a href={`#screen-${feature.target}`} className="story-feature-link">{feature.link}<span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>
            </article>
          ))}
        </div>
      </div>
      <p className="story-closing">Different roads. <strong>One thing in common: your people.</strong></p>
    </section>
  );
}
