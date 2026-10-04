import welcomeWholeBody from '../assets/welcomeWholeBody.png';
export default function MascotIntroduction() {
  return (
    <section id="ryder" className="section-band">
      <div className="page-container py-12 sm:py-16 grid md:grid-cols-[220px_1fr] gap-8 items-center">
        <img src={welcomeWholeBody} alt="Ryder, RideOut’s motorcycle rider mascot" loading="lazy" className="h-52 w-auto mx-auto object-contain" />
        <div className="max-w-xl"><p className="eyebrow">Meet Ryder</p><h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3 mb-4">A familiar face for your pack.</h2><p className="text-[#BEC8D2] leading-relaxed">Ryder is RideOut’s mascot and a reminder of what brings us together: the road, the group, and the next adventure.</p><p className="text-sm text-[#94A3B8] mt-4">Get your group set up before you leave, and pull over safely whenever you need to use your phone.</p></div>
      </div>
    </section>
  );
}
