import rideSetupDetail from '../assets/ride-setup-detail.webp';
import joinRideDetail from '../assets/join-ride-detail.webp';
import convoyMapDetail from '../assets/convoy-map-detail.webp';

const steps = [
  { number: '01', icon: 'location_on', title: 'Create your ride', description: 'Set a meetup and destination so your group knows where the ride begins and where you’re heading.' },
  { number: '02', icon: 'person_add', title: 'Bring your group', description: 'Share your room code or invite link. Your riders can join the same ride session.' },
  { number: '03', icon: 'map', title: 'Stay together', description: 'See your riders on the shared map and use group callouts to coordinate along the way.' },
];
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-band">
      <div className="page-container section-space">
        <div className="section-heading"><p className="eyebrow">How it works</p><h2>From meetup to ride out.</h2><p>A shared plan before you leave. A shared map when you’re on the road.</p></div>
        <div className="ride-steps-grid">
          {steps.map((step, index) => (
            <article key={step.number} className="ride-step" style={{ '--step-index': index }}>
              <div className="step-card">
                <div className="step-copy">
                  <div className="step-card-header"><span className="step-number">{step.number}</span><span className="step-icon material-symbols-outlined" aria-hidden="true">{step.icon}</span></div>
                  <p className="step-chapter">Your shared ride / Step {step.number}</p>
                  <h3>{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                <div className="step-screen-stage">
                  <img src={[rideSetupDetail, joinRideDetail, convoyMapDetail][index]} alt={['Meetup point and destination fields with locations set for a new ride', 'Join Existing Session card with a six-character convoy code field and Join a Session button', 'Live convoy map showing rider markers together inside the group radius'][index]} loading="lazy" decoding="async" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
