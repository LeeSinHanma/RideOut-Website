import winkIconFace from '../assets/winkIconFace.png';
import proIconFace from '../assets/proIconFace.png';

const proPricing = { annual: 990, monthly: 149 };
const annualMonthlyEquivalent = proPricing.annual / 12;
const annualSavings = proPricing.monthly * 12 - proPricing.annual;

const plans = [
  {
    name: 'RideOut Free',
    className: 'plan-free',
    image: winkIconFace,
    alt: 'Ryder winking in the Free plan',
    title: 'Your everyday pack.',
    riders: 3,
    caption: 'A few friends. A shared adventure.',
    features: ['Shared group map', 'Room codes & invitations', 'Group ride coordination'],
    note: 'Free to get started',
    link: '#features',
    action: 'Explore the essentials',
  },
  {
    name: 'RideOut PRO',
    pro: true,
    className: 'plan-pro',
    image: proIconFace,
    alt: 'Ryder wearing the reflective PRO visor',
    title: 'Bring the whole crew.',
    riders: 10,
    caption: 'A bigger pack. More ways to ride.',
    features: ['Larger group sessions', 'Additional ride statistics', 'One-tap gas station pit stop', 'More Trail FX & themes'],
    featureDescriptions: {
      'One-tap gas station pit stop': 'Automatically find the nearest gas station near your pack or along your route.',
    },
    note: 'Subscription details in the app',
    link: '#screen-telemetry-ui',
    action: 'Explore PRO ride stats',
  },
];

export default function Plans() {
  return (
    <section id="plans" className="page-container section-space">
      <div className="section-heading">
        <p className="eyebrow">Free &amp; PRO</p>
        <h2>Same Ryder.<br />A different gear.</h2>
        <p>Keep it close with a few friends, or bring the whole pack along.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {plans.map(plan => (
          <article key={plan.name} className={`surface-card mascot-plan ${plan.className}`}>
            <div className="plan-header">
              <p className="eyebrow">{plan.name}</p>
              <span className="plan-label">{plan.riders === 3 ? 'Start your pack' : 'Shift into PRO'}</span>
            </div>
            <div className="plan-art">
              <div className="plan-halo" aria-hidden="true" />
              <span className="plan-capacity-art" aria-hidden="true">{plan.riders.toString().padStart(2, '0')}</span>
              <img src={plan.image} alt={plan.alt} loading="lazy" decoding="async" className="plan-mascot" />
              <span className="plan-rider-pill"><span className="material-symbols-outlined" aria-hidden="true">groups</span>Up to {plan.riders} riders</span>
            </div>
            <div className="plan-copy">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{plan.title}</h3>
              <p className="text-sm text-[#BEC8D2] mt-2">{plan.caption}</p>
              <div className="plan-pricing">
                {plan.pro ? (
                  <>
                    <div className="pricing-heading"><span>Annual plan</span><span className="pricing-value-badge">Best value</span></div>
                    <p className="plan-price">₱{annualMonthlyEquivalent.toFixed(2)}<span>/month</span></p>
                    <p className="pricing-billing">Monthly equivalent · ₱{proPricing.annual} billed annually</p>
                    <p className="pricing-savings">Save ₱{annualSavings} per year compared with monthly billing</p>
                    <p className="pricing-monthly"><span>Monthly plan</span><strong>₱{proPricing.monthly}<span>/month</span></strong></p>
                  </>
                ) : (
                  <>
                    <p className="pricing-heading">Free plan</p>
                    <p className="plan-price">₱0<span>/month</span></p>
                    <p className="pricing-billing">Get your small pack started without a subscription.</p>
                  </>
                )}
              </div>
              <ul className="plan-benefits">
                {plan.features.map(feature => (
                  <li key={feature}>
                    <span className="material-symbols-outlined" aria-hidden="true">check_circle</span>
                    <div>
                      <span>{feature}</span>
                      {plan.featureDescriptions?.[feature] && <p className="text-xs text-[#94A3B8] leading-relaxed mt-1">{plan.featureDescriptions[feature]}</p>}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="plan-footer">
                <p className="text-xs text-[#BEC8D2]">{plan.note}</p>
                <a href={plan.link} className="inline-flex items-center gap-2 text-sm font-semibold">{plan.action}<span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span></a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="text-sm text-[#94A3B8] mt-5">RideOut is in beta. Check the app for current plan features, availability, and pricing.</p>
    </section>
  );
}
