import DownloadLink from './DownloadLink';
import approveWholeBody from '../assets/approveWholeBody.png';
export default function CtaSection() {
  return (
    <section className="page-container pb-16 sm:pb-24">
      <div className="ride-cta mascot-cta rounded-3xl px-6 py-12 sm:p-14">
        <div className="cta-mascot-stage"><img src={approveWholeBody} alt="Ryder giving a thumbs-up for your next ride" loading="lazy" decoding="async" /></div>
        <div className="cta-copy">
        <p className="eyebrow">Available on Google Play · Beta</p><h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-4">Your next ride starts together.</h2><p className="text-[#BEC8D2] mt-4 mb-7 max-w-lg mx-auto">Get RideOut, invite your group, and make a plan for the road ahead.</p><DownloadLink /><p className="text-sm text-[#94A3B8] mt-4">Android beta available now. iOS is coming soon.</p>
        </div>
      </div>
    </section>
  );
}
