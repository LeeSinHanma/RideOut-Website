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
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <article key={step.number} className="ride-step">
              <div className="flex items-center justify-between mb-5"><span className="step-number">{step.number}</span><span className="step-icon material-symbols-outlined" aria-hidden="true">{step.icon}</span></div>
              <div className="step-mascot-stage">
                <img src={[welcomeWholeBody, readyWholeBody, approveWholeBody][index]} alt={['Ryder welcoming your new ride', 'Ryder geared up to join the group', 'Ryder giving your group a thumbs-up'][index]} loading="lazy" decoding="async" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3><p className="text-[#BEC8D2] text-sm leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import welcomeWholeBody from '../assets/welcomeWholeBody.png';
import readyWholeBody from '../assets/readyWholeBody.png';
import approveWholeBody from '../assets/approveWholeBody.png';
