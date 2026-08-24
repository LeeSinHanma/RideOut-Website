import React, { useState, useEffect } from 'react';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [shouldRender, setShouldRender] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setAnimateIn(true);
      }, 20);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 280);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setAnimateIn(false);
    setTimeout(() => {
      onClose();
    }, 250);
  };

  if (!shouldRender) return null;

  const handlePrint = () => {
    const pdfUrl = '/RideOut_Privacy_Policy.pdf';
    
    // Create a hidden iframe to trigger browser print dialog on the PDF document directly
    const existingIframe = document.getElementById('pdf-print-iframe');
    if (existingIframe) {
      existingIframe.remove();
    }

    const iframe = document.createElement('iframe');
    iframe.id = 'pdf-print-iframe';
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.src = pdfUrl;

    document.body.appendChild(iframe);

    iframe.onload = () => {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } catch (err) {
        // If cross-origin or plugin blocks iframe print, open PDF directly in a print window
        const win = window.open(pdfUrl, '_blank');
        if (win) {
          win.focus();
          win.print();
        }
      }
    };
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto transition-all duration-300 ${
        animateIn ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleClose}
    >
      {/* Legal Fine Print Document Container */}
      <div 
        className={`relative w-full max-w-4xl bg-[#0B1326] border border-[#334155] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300 transform ${
          animateIn ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Document Header Bar */}
        <div className="px-6 py-4 bg-[#060E20] border-b border-[#334155] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide uppercase font-mono">
              RideOut Privacy Policy
            </h2>
            <div className="text-xs text-[#88929B] font-mono mt-0.5">
              Legal Entity: Saiken Studio | Package: com.rideout.app | Effective: August 24, 2026
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Search Input */}
            <div className="relative w-40 sm:w-48">
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#1E293B] border border-[#334155] rounded-lg px-3 py-1 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#0EA5E9]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[#88929B] hover:text-white"
                >
                  ×
                </button>
              )}
            </div>

            <a
              href="/RideOut_Privacy_Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#1E293B] border border-[#334155] text-xs font-medium text-[#89CEFF] hover:text-white hover:border-[#0EA5E9] transition-colors flex items-center gap-1"
              title="Open / Download PDF"
            >
              PDF
            </a>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#0EA5E9] text-white text-xs font-bold hover:bg-[#0284C7] transition-colors flex items-center gap-1 shadow"
              title="Print Official PDF Policy"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              Print PDF
            </button>

            <button
              onClick={handleClose}
              className="px-3 py-1.5 rounded-lg bg-[#1E293B] border border-[#334155] text-xs font-medium text-white hover:bg-[#334155] transition-colors"
            >
              Close
            </button>
          </div>
        </div>

        {/* Scrollable Fine Print Document Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-[#CBD5E1] font-sans leading-relaxed scrollbar-thin">
          
          {/* Metadata Block */}
          <div className="p-3 bg-[#0F172A] border border-[#334155]/80 rounded-lg text-[11px] text-[#88929B] font-mono grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <div><strong>Application:</strong> RideOut (`com.rideout.app`)</div>
            <div><strong>Data Controller:</strong> Saiken Studio</div>
            <div><strong>Jurisdiction:</strong> Republic of the Philippines</div>
            <div><strong>Last Revised:</strong> August 24, 2026</div>
            <div><strong>Contact:</strong> saikenstudio.app@gmail.com</div>
            <div><strong>Compliance:</strong> PH DPA 2012, GDPR, CCPA</div>
          </div>

          {/* Section 1 */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#334155] pb-1">
              1. Introduction & Scope
            </h3>
            <p>
              Welcome to <strong>RideOut</strong> ("we," "us," or "our"), operated by <strong>Saiken Studio</strong> (Taguig, Metro Manila, Philippines). RideOut is a real-time group location tracking, convoy communication, and ride session telemetry platform engineered for motorcycle, scooter, bicycle, and automobile riders.
            </p>
            <p>
              This Privacy Policy governs the collection, processing, storage, transmission, protection, and deletion of personal and telemetry data when you access or use the <strong>RideOut</strong> mobile application (`com.rideout.app`), official web interfaces, and cloud backends. By using the Application, you acknowledge and agree to the practices outlined in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#334155] pb-1">
              2. Responsible Entity & Compliance Framework
            </h3>
            <p>
              RideOut operates under the legal framework of the <strong>Republic of the Philippines</strong>, specifically complying with the <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong> and its Implementing Rules and Regulations issued by the <strong>National Privacy Commission (NPC)</strong>.
            </p>
            <p>
              For international users, processing practices align with the <strong>General Data Protection Regulation (GDPR) (EU/UK 2016/679)</strong>, the <strong>California Consumer Privacy Act (CCPA/CPRA)</strong>, and Google Play Developer Policies.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#334155] pb-1">
              3. Information We Collect
            </h3>
            <div className="space-y-2 pl-2">
              <div>
                <strong className="text-white">3.1 Account & Identity Information:</strong> Email address, display name, unique Firebase User Identifier (UID), and profile photo URL obtained via Google Authentication. Guest Mode generates an anonymous local UID. Passwords are encrypted directly by Firebase Authentication and are never accessible to us.
              </div>
              <div>
                <strong className="text-white">3.2 Real-Time Location & Telemetry:</strong> Latitude, longitude, altitude, GPS accuracy radius (meters), speed (km/h), bearing heading angle (degrees 0–360°), and timestamped breadcrumbs collected strictly during active ride sessions.
              </div>
              <div>
                <strong className="text-white">3.3 Convoy Communications & Safety Alerts:</strong> Preset walkie-talkie signal callouts (Gas Stop Needed, Hazard Ahead, Regroup, Rest Stop, Heavy Rain) and Emergency SOS beacons containing exact GPS coordinates.
              </div>
              <div>
                <strong className="text-white">3.4 User-Saved Locations:</strong> Private user-saved spots (Home, Work, Usual Spot, Scenic View) containing custom labels, formatted addresses, and coordinates.
              </div>
              <div>
                <strong className="text-white">3.5 Aggregate Ride History:</strong> Total distance covered (km), average/maximum speed, ride duration (minutes), participant counts, and milestone trophies recorded post-session.
              </div>
              <div>
                <strong className="text-white">3.6 Technical Diagnostics:</strong> Firebase Cloud Messaging (FCM) push tokens and Firebase App Check attestation payloads (Play Integrity on Android and App Attest on iOS).
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#334155] pb-1">
              4. Lawful Bases for Processing (GDPR Art. 6)
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li><strong>Performance of Contract (Art. 6(1)(b)):</strong> Real-time location streaming and convoy features requested by the user.</li>
              <li><strong>Consent (Art. 6(1)(a)):</strong> Background location access and push notifications granted via operating system permission prompts.</li>
              <li><strong>Legitimate Interests (Art. 6(1)(f)):</strong> Anti-fraud app integrity verification via Firebase App Check.</li>
              <li><strong>Legal Obligation (Art. 6(1)(c)):</strong> Minimal transaction/audit log retention required by statutory law.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#334155] pb-1">
              5. Device Permissions & Location Disclosures
            </h3>
            <div className="space-y-1.5">
              <p>
                <strong>Precise & Background Location (`ACCESS_FINE_LOCATION`, `ACCESS_BACKGROUND_LOCATION`):</strong> Required to transmit coordinates to convoy members, update map markers, calculate telemetry, and trigger geofence notifications while the phone screen is locked or the app is running in the background during an active ride.
              </p>
              <p>
                <strong>Foreground Service (`FOREGROUND_SERVICE_LOCATION`):</strong> Displays a persistent status bar notification while background location services are actively running during a ride.
              </p>
              <p>
                <strong>System Notifications (`POST_NOTIFICATIONS`):</strong> Delivers alerts for incoming ride invites, convoy radio callouts, and Emergency SOS notifications.
              </p>
              <p>
                <em>RideOut does not access device camera, microphone, contacts, SMS, photos, calendar, or biometric sensors.</em>
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#334155] pb-1">
              6. Post-Session Location Privacy & Data Retention Protocol
            </h3>
            <p>
              RideOut enforces a strict <strong>Post-Session Privacy Protocol</strong>. When a ride session is ended by the host, raw latitude, longitude, and elevation coordinates are <strong>permanently and automatically wiped</strong> from our cloud database (`rides/$code/participants`). Only aggregate non-sensitive summary totals (total distance, duration, average speed) remain in your private ride history log.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#334155] pb-1">
              7. Technical Data Security & Non-Sale Disclosure
            </h3>
            <p>
              All cloud data is encrypted using standard <strong>TLS 1.3 / HTTPS</strong> in transit to Google Firebase Realtime Database. Database access is controlled via strict user-scoped Security Rules (`database.rules.json`). API keys are restricted by application signature (`com.rideout.app`).
            </p>
            <p className="font-semibold text-white">
              We do NOT sell, rent, monetize, or trade personal information or real-time location telemetry to data brokers, ad networks, or marketing partners.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#334155] pb-1">
              8. User Rights & Account / Data Deletion Instructions
            </h3>
            <p>
              You hold full statutory rights to access, rectify, or request permanent deletion of your account and ride records under the Data Privacy Act of 2012 and GDPR.
            </p>
            <div className="p-3 bg-[#0F172A] border border-[#334155] rounded-lg space-y-1">
              <strong className="text-white block">Account Deletion Request Procedure:</strong>
              <div>1. Email: <a href="mailto:saikenstudio.app@gmail.com?subject=Account%20Deletion%20Request%20-%20RideOut" className="text-[#0EA5E9] underline font-mono">saikenstudio.app@gmail.com</a></div>
              <div>2. Subject Line: <code className="text-[#00EEFC]">Account Deletion Request - RideOut</code></div>
              <div>3. Details: Include registered email address and unique Rider Tag (e.g., `ALEX#8920`).</div>
              <div>4. Fulfillment: Account profile, saved places, and ride history records will be permanently purged within thirty (30) calendar days.</div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-2 border-t border-[#334155] pt-3 text-[11px] text-[#88929B] font-mono">
            <div>Data Controller: Saiken Studio</div>
            <div>Contact Email: saikenstudio.app@gmail.com</div>
            <div>Operating Address: Taguig City, Metro Manila, Philippines</div>
            <div>Official Repository: https://github.com/LeeSinHanma/RideOut</div>
          </section>

        </div>

        {/* Document Footer Bar */}
        <div className="px-6 py-3 bg-[#060E20] border-t border-[#334155] flex items-center justify-between shrink-0 text-xs text-[#88929B]">
          <span>
            © 2026 Saiken Studio. All rights reserved.
          </span>
          <button
            onClick={handleClose}
            className="px-4 py-1.5 rounded-lg bg-[#1E293B] border border-[#334155] text-white hover:bg-[#334155] transition-colors font-medium"
          >
            Close Fine Print
          </button>
        </div>

      </div>
    </div>
  );
}
