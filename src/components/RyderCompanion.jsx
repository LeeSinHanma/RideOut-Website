import { useEffect, useState } from 'react';
import { Button } from '@heroui/react';
import useScrollSection from '../hooks/useScrollSection';
import welcome from '../assets/welcomeWholeBody.png';
import ready from '../assets/readyWholeBody.png';
import approve from '../assets/approveWholeBody.png';
import sad from '../assets/sadFullBody.png';

const poses = { welcome, ready, approve, sad };
const stops = [
  ['.ride-hero', 'welcome', 'Hey, I’m Ryder. Let’s get your pack riding as one.'],
  ['#mission', 'approve', 'No one left behind. That’s why we ride together.'],
  ['#how-it-works', 'ready', 'Three steps: plan your ride, invite your group, and stay together.'],
  ['.ride-step:nth-child(1)', 'ready', 'Start here: set your meetup and destination before you leave.'],
  ['.ride-step:nth-child(2)', 'welcome', 'Bring your people along. Share your room code or invite link.'],
  ['.ride-step:nth-child(3)', 'approve', 'Your pack is on the map. Follow rider positions and coordinate with callouts.'],
  ['#features', 'ready', 'Here’s how the map, alerts, signals, and beacons keep your group connected.'],
  ['#chapter-map', 'ready', 'One shared map shows your riders and route together.'],
  ['#chapter-alerts', 'sad', 'Someone outside the circle? The separation alert helps your pack notice the gap.'],
  ['#chapter-radio', 'approve', 'Fuel, hazards, or a coffee stop: send your group a preset radio signal.'],
  ['#chapter-help', 'sad', 'Need your group’s help? A breakdown or SOS beacon shares your alert and location.'],
  ['.story-closing', 'approve', 'Different roads. The same goal: keep your people together.'],
  ['#showcase', 'welcome', 'Watch the RideOut film to see the whole ride come together.'],
  ['#showcase .section-heading', 'ready', 'Take a closer look at the real app screens. Choose what you want to explore.'],
  ['.screen-selector', 'ready', 'Pick an app screen below. I’ll show you what each one does.'],
  ['#app-screen-preview', 'ready', 'Explore the app screens with your pack in mind.'],
  ['#plans', 'ready', 'Free brings up to 3 riders. PRO makes room for up to 10.'],
  ['#ryder', 'welcome', 'That’s me! Set up before riding, and pull over safely to use your phone.'],
  ['#faq', 'ready', 'Questions before you ride? Check Android availability, plans, and location sharing here.'],
  ['.ride-cta', 'approve', 'Ready for your next group ride? Get the Android beta on Google Play.'],
  ['footer', 'welcome', 'Thanks for riding along. Find our privacy policy and terms here.'],
];
const selectors = stops.map(([selector]) => selector);

export default function RyderCompanion({ hidden = false }) {
  const activeIndex = useScrollSection(selectors);
  const [gallery, setGallery] = useState(null);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const preview = document.getElementById('app-screen-preview');
    if (!preview) return;
    const update = () => setGallery({ pose: preview.dataset.ryderPose, message: preview.dataset.ryderMessage });
    const observer = new MutationObserver(update);
    observer.observe(preview, { attributes: true, attributeFilter: ['data-ryder-pose', 'data-ryder-message'] });
    update();
    return () => observer.disconnect();
  }, []);

  const [section, sectionPose, sectionMessage] = stops[activeIndex];
  const { pose, message } = section === '#app-screen-preview' && gallery
    ? gallery
    : { pose: sectionPose, message: sectionMessage };

  return (
    <aside className={`ryder-companion ${minimized ? 'is-minimized' : ''}`} hidden={hidden} data-pose={pose} data-section={section} aria-label="Ryder, your riding companion">
      <Button variant={minimized ? 'secondary' : 'ghost'} isIconOnly className={minimized ? 'ryder-restore' : 'ryder-hide'} aria-label={minimized ? 'Show Ryder companion' : 'Hide Ryder companion'} aria-expanded={!minimized} onPress={() => setMinimized(value => !value)}>
        {minimized ? <img src={welcome} alt="" width="1080" height="1080" /> : <span className="material-symbols-outlined" aria-hidden="true">close</span>}
      </Button>
      {!minimized && (
        <>
          <p key={message} className="ryder-bubble" aria-hidden="true">{message}</p>
          <div className="ryder-poses" aria-hidden="true">
            {Object.entries(poses).map(([name, src]) => <img key={name} src={src} alt="" width="1080" height="1080" className={name === pose ? 'is-active' : ''} decoding="async" />)}
          </div>
          <p className="ryder-name">Ryder<span>Riding with you</span></p>
        </>
      )}
    </aside>
  );
}
