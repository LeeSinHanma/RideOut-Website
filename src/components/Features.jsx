const features = [
  { title: 'See your group', description: 'Find your riders on one live map, with your meetup and destination in view.', icon: 'share_location', target: 'map-ui', link: 'Explore the group map' },
  { title: 'Know when riders fall behind', description: 'Group distance alerts help you notice when someone moves outside the pack’s radius.', icon: 'notifications_active', target: 'geofence-ui', link: 'See group alerts' },
  { title: 'Make quick callouts', description: 'Share a fuel stop, hazard, or regroup request with your group using preset radio signals.', icon: 'campaign', target: 'radio-ui', link: 'See radio signals' },
  { title: 'Ask your group for help', description: 'Use the SOS feature to alert fellow riders when you need assistance during a ride.', icon: 'sos', target: 'sos-ui', link: 'See the SOS screen' },
];
export default function Features() {
  return (
    <section id="features" className="page-container section-space">
      <div className="section-heading"><p className="eyebrow">Made for group rides</p><h2>Less “where are you?”<br />More riding together.</h2><p>Keep the details that matter to your group in one place.</p></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, index) => (
          <article key={feature.title} className="surface-card flex flex-col items-start">
            <div className={`feature-mascot-stage feature-mascot-${index}`}>
              <span className="material-symbols-outlined feature-symbol" aria-hidden="true">{feature.icon}</span>
              <img src={[welcomeWholeBody, sadFullBody, approveWholeBody, sadIconFace][index]} alt="" loading="lazy" decoding="async" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3><p className="text-sm text-[#BEC8D2] leading-relaxed mb-6">{feature.description}</p>
            <a href={`#screen-${feature.target}`} className="mt-auto text-sm font-semibold text-[#7DD3FC] inline-flex items-center gap-1">{feature.link}<span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}
import welcomeWholeBody from '../assets/welcomeWholeBody.png';
import sadFullBody from '../assets/sadFullBody.png';
import approveWholeBody from '../assets/approveWholeBody.png';
import sadIconFace from '../assets/sadIconFace.png';
