import convoyMapDetail from '../assets/convoy-map-detail.webp';
import separationAlertDetail from '../assets/separation-alert-detail.webp';
import radioSignalsDetail from '../assets/radio-signals-detail.webp';
import emergencyBeaconDetail from '../assets/emergency-beacon-detail.webp';

const features = [
  { title: 'See your group', description: 'Find your riders on one live map, with your meetup and destination in view.', target: 'map-ui', link: 'Explore the group map' },
  { title: 'Know when riders fall behind', description: 'Group distance alerts help you notice when someone moves outside the pack’s radius.', target: 'out-of-circle-ui', link: 'See group alerts' },
  { title: 'Make quick callouts', description: 'Share a fuel stop, hazard, or regroup request with your group using preset radio signals.', target: 'radio-ui', link: 'See radio signals' },
  { title: 'Ask your group for help', description: 'Use the SOS feature to alert fellow riders when you need assistance during a ride.', target: 'sos-ui', link: 'See the SOS screen' },
];
export default function Features() {
  return (
    <section id="features" className="page-container section-space">
      <div className="section-heading"><p className="eyebrow">Made for group rides</p><h2>Less “where are you?”<br />More riding together.</h2><p>Keep the details that matter to your group in one place.</p></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, index) => (
          <article key={feature.title} className="surface-card flex flex-col items-start">
            <div className="feature-screen-stage">
              <img src={[convoyMapDetail, separationAlertDetail, radioSignalsDetail, emergencyBeaconDetail][index]} alt={['Rider markers on the live convoy map', 'Pack Separation Alert and an orange warning identifying a rider outside the convoy circle', 'Six preset radio buttons for gas, hazards, regrouping, a rider behind, rest stops, and rain', 'Emergency and Breakdown beacon controls with vehicle issue choices'][index]} loading="lazy" decoding="async" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3><p className="text-sm text-[#BEC8D2] leading-relaxed mb-6">{feature.description}</p>
            <a href={`#screen-${feature.target}`} className="mt-auto text-sm font-semibold text-[#7DD3FC] inline-flex items-center gap-1">{feature.link}<span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}
