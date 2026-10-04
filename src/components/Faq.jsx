export default function Faq({ onPrivacyClick }) {
  const questions = [
    ['Who is RideOut for?', 'RideOut is built for riders who want to organize a group ride and see fellow riders in a shared session. Set a meetup, invite your group, and keep your ride details together.'],
    ['Is RideOut available on my phone?', 'The Android beta is available on Google Play. An iOS version is planned, but is not available yet.'],
    ['How much does RideOut PRO cost?', 'The annual plan costs ₱990, billed once per year. That works out to ₱82.50 per month and saves ₱798 compared with 12 monthly payments. The monthly plan costs ₱149 per month. Prices are in Philippine pesos.'],
    ['Do I need an internet connection?', 'Live group location sharing needs an internet connection and location access. Updates can be delayed when mobile coverage or GPS reception is poor.'],
    ['How does location sharing work?', 'RideOut uses location access to show rider positions during shared ride sessions. Review your permissions and the privacy policy for details about location data and how it is handled.'],
    ['What is the difference between Free and PRO?', 'Free sessions support up to 3 riders. The optional PRO subscription supports up to 10 riders, additional ride statistics, a one-tap pit stop that automatically finds the nearest gas station near your pack or along your route, and more Trail FX and themes. Check the app for current beta features and subscription details.'],
    ['How can I share beta feedback?', 'Use the feedback options available on RideOut’s Google Play listing to share your experience. Include what happened, your phone model, and the app version when reporting an issue.'],
  ];
  return (
    <section id="faq" className="page-container section-space">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20">
        <div className="section-heading mb-0"><p className="eyebrow">Before you ride</p><h2>A few things<br />to know.</h2><p>Getting started with the Android beta.</p><a href="/privacy" onClick={onPrivacyClick} className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#7DD3FC]">Read our privacy policy <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span></a></div>
        <div>{questions.map(([question, answer]) => (<details key={question} className="faq-item border-b border-[#334155] py-5"><summary className="text-base font-semibold text-white cursor-pointer">{question}</summary><p className="text-sm text-[#BEC8D2] leading-relaxed mt-4 pr-5">{answer}</p></details>))}</div>
      </div>
    </section>
  );
}
