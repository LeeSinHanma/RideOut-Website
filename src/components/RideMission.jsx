import convoyRider1 from '../assets/convoyRider1.webp';
import convoyRider2 from '../assets/convoyRider2.webp';
import convoyRider3 from '../assets/convoyRider3.webp';

export default function RideMission() {
  return (
    <section id="mission" className="ride-mission">
      <div className="mission-scene">
        <svg className="mission-route" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
          <path className="mission-route-base" d="M-100 650C200 800 300 350 620 480S950 650 1300 200" />
          <path className="mission-route-trace" pathLength="1" d="M-100 650C200 800 300 350 620 480S950 650 1300 200" />
        </svg>
        <div className="page-container section-space mission-content">
          <div className="mission-topline"><p className="eyebrow">The reason we ride</p><span>Same road. Shared adventure.</span></div>
          <h2 className="mission-title"><span className="mission-line mission-line-first">No one</span>{' '}<span className="mission-line mission-line-last">left behind.</span></h2>
          <div className="mission-bottom">
            <p>A traffic light. A missed turn. An unexpected stop. Your ride has a few moving parts. <strong>Keeping your people together should be the easy one.</strong></p>
            <div className="mission-convoy" aria-hidden="true">
              <div className="convoy-lane" />
              <img src={convoyRider2} width="280" height="280" alt="" loading="lazy" decoding="async" />
              <img src={convoyRider1} width="280" height="280" alt="" loading="lazy" decoding="async" />
              <img src={convoyRider3} width="280" height="280" alt="" loading="lazy" decoding="async" />
              <span>One pack. One shared map.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
