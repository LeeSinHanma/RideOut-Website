import React, { useState, useEffect } from 'react';

export default function PrivacyPolicyModal({ isOpen, onClose, onSwitchToTerms }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [shouldRender, setShouldRender] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'pdf'

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
      className={`legal-backdrop fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto transition-all duration-300 ${
        animateIn ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleClose}
    >
      {/* Legal Fine Print Document Container */}
      <div 
        className={`legal-dialog relative w-full max-w-4xl bg-[#0B1326] border border-[#334155] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300 transform ${
          animateIn ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Document Header Bar */}
        <div className="legal-header px-6 py-4 bg-[#060E20] border-b border-[#334155] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="legal-title text-lg font-bold text-white tracking-wide uppercase font-mono">
                RideOut Privacy Policy
              </h2>
              {/* Tab Switcher */}
              <div className="legal-tabs flex items-center gap-1 bg-[#1E293B] p-1 rounded-lg border border-[#334155]">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                    activeTab === 'overview'
                      ? 'bg-[#0EA5E9] text-white shadow'
                      : 'text-[#88929B] hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('pdf')}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                    activeTab === 'pdf'
                      ? 'bg-[#0EA5E9] text-white shadow'
                      : 'text-[#88929B] hover:text-white'
                  }`}
                >
                  <span>Full PDF</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00EEFC] animate-ping" />
                </button>
              </div>
            </div>
            <div className="legal-metadata text-xs text-[#88929B] font-mono mt-1">
              Legal Entity: Saiken Studio | Package: com.rideout.app | Effective: August 24, 2026
            </div>
          </div>

          <div className="legal-actions flex items-center gap-2 flex-wrap sm:flex-nowrap">
            {/* Download PDF Button */}
            <a
              href="/RideOut_Privacy_Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="RideOut_Privacy_Policy.pdf"
              className="px-3 py-1.5 rounded-lg bg-[#0EA5E9] text-white text-xs font-extrabold hover:bg-[#0284C7] transition-colors flex items-center gap-1.5 shadow"
              title="Download Complete PDF Document"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              <span>Download PDF</span>
            </a>

            {/* Jump to Terms Navigation Link */}
            {onSwitchToTerms && (
              <button
                onClick={onSwitchToTerms}
                className="px-3 py-1.5 rounded-lg bg-[#1E293B] border border-[#334155] text-xs font-bold text-[#00EEFC] hover:text-white hover:border-[#00EEFC] transition-colors flex items-center gap-1 shadow"
                title="Switch to Terms of Service"
              >
                <span>Terms of Service</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            )}

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-[#1E293B] border border-[#334155] text-[#BEC8D2] hover:text-white hover:border-[#0EA5E9] text-xs font-semibold flex items-center gap-1 transition-colors"
              title="Print Document"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleClose}
              className="p-1.5 text-[#88929B] hover:text-white hover:bg-[#1E293B] rounded-lg transition-colors"
              aria-label="Close Privacy Policy"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Full Embedded PDF Viewer */}
        {activeTab === 'pdf' ? (
          <div className="legal-pdf p-4 flex-1 flex flex-col bg-[#090D16] min-h-[500px]">
            <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155] mb-3 flex items-center justify-between text-xs text-[#89CEFF]">
              <span className="font-mono">Official Document File: RideOut_Privacy_Policy.pdf</span>
              <a
                href="/RideOut_Privacy_Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00EEFC] hover:underline font-bold flex items-center gap-1"
              >
                <span>Open in New Tab</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>
            <iframe
              src="/RideOut_Privacy_Policy.pdf"
              title="RideOut Official Privacy Policy PDF"
              className="w-full flex-1 min-h-[480px] rounded-xl border border-[#334155] bg-white shadow-inner"
            />
          </div>
        ) : (
          /* View Mode 2: Structured Web Overview Text */
          <div className="legal-body p-6 sm:p-8 overflow-y-auto font-sans text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6 select-text">
            
            {/* Legal Document Overview Notice Banner */}
            <div className="legal-notice bg-[#0EA5E9]/10 border border-[#0EA5E9]/40 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#00EEFC] text-xl shrink-0 mt-0.5">info</span>
                <div>
                  <span className="font-bold text-white block text-sm">Document Overview Notice</span>
                  <span className="text-[#BEC8D2]">
                    The content displayed on this website is a high-level summary. To view or download the complete, unabridged official legal document, get the full PDF below.
                  </span>
                </div>
              </div>
              <a 
                href="/RideOut_Privacy_Policy.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                download="RideOut_Privacy_Policy.pdf"
                className="px-3.5 py-2 rounded-lg bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-extrabold text-xs flex items-center gap-1.5 shrink-0 transition-colors shadow"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Download Full PDF
              </a>
            </div>

            {/* Formal Header Section */}
            <div className="border-b border-slate-800 pb-6">
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
                PRIVACY POLICY OVERVIEW
              </h1>
              <p className="text-xs text-slate-400 font-mono">
                OFFICIAL LEGAL DOCUMENT — SAIKEN STUDIO (TAGUIG, PHILIPPINES)
              </p>
              <div className="mt-4 p-3 bg-slate-900/80 border border-slate-800 rounded-lg text-xs text-slate-300">
                <strong className="text-white">LEGAL COMPLIANCE:</strong> Philippine Data Privacy Act of 2012 (RA 10173), EU GDPR, CCPA/CPRA, and Google Play / Apple App Store developer safety standards.
              </div>
            </div>

            {/* Section 1: Introduction & Scope */}
            <section className="space-y-2">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-1">
                1. INTRODUCTION & SCOPE
              </h3>
              <p>
                Welcome to <strong>RideOut</strong> ("we," "us," or "our"), operated by <strong>Saiken Studio</strong> (Taguig, Metro Manila, Philippines). RideOut is a real-time group location tracking, convoy communication, and ride session telemetry platform engineered for motorcycle, scooter, bicycle, and automobile riders.
              </p>
              <p>
                This Privacy Policy governs the collection, processing, storage, transmission, protection, and deletion of personal and telemetry data when you access or use the <strong>RideOut</strong> mobile application (<code className="bg-slate-900 px-1 py-0.5 rounded text-sky-400">com.rideout.app</code>), official web interfaces, and cloud backends. By using the Application, you acknowledge and agree to the practices outlined in this policy.
              </p>
            </section>

            {/* Section 2: Data Controller */}
            <section className="space-y-2">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-1">
                2. DATA CONTROLLER & CONTACT INFORMATION
              </h3>
              <p>
                Saiken Studio acts as the sole Data Controller for personal data processed through the RideOut application under the Philippine Data Privacy Act of 2012 (RA 10173) and global data protection regulations.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li><strong>Entity Name:</strong> Saiken Studio</li>
                <li><strong>Operating Location:</strong> Taguig City, Metro Manila, Republic of the Philippines</li>
                <li><strong>Data Protection Officer (DPO) / Legal Contact:</strong> <a href="mailto:saikenstudio.app@gmail.com" className="text-sky-400 hover:underline">saikenstudio.app@gmail.com</a></li>
                <li><strong>Official Repository:</strong> <a href="https://github.com/LeeSinHanma/RideOut" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">https://github.com/LeeSinHanma/RideOut</a></li>
              </ul>
            </section>

            {/* Section 3: Categories of Data Collected */}
            <section className="space-y-2">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-1">
                3. CATEGORIES OF DATA COLLECTED
              </h3>
              <p>
                To provide real-time group tracking, convoy radio signals, and safety alerts, RideOut collects the following categories of data:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li><strong>Real-Time Location & GPS Telemetry:</strong> Latitude, longitude, altitude, heading degree, velocity, and timestamp telemetry transmitted during an active ride room session.</li>
                <li><strong>Account & Profile Identifiers:</strong> Email address, Google account profile picture, display name, and unique Rider Tag (e.g. <code className="bg-slate-900 px-1 py-0.5 rounded text-sky-400">ALEX#8920</code>).</li>
                <li><strong>Device Telemetry:</strong> Device model, OS version, battery level, network connection state, and anti-spoofing integrity flags (<code className="bg-slate-900 px-1 py-0.5 rounded text-sky-400">position.isMocked</code>).</li>
                <li><strong>Convoy Intercom & Emergency SOS Signals:</strong> Intercom preset button triggers (Gas Stop ⛽, Hazard ⚠️, Regroup 🐢, Rest Stop ☕) and Emergency SOS beacon alerts.</li>
                <li><strong>Saved Favorite Places:</strong> User-scoped private saved location pins (Home 🏠, Work 💼, Usual Spot 📍) stored under your account.</li>
              </ul>
            </section>

            {/* Section 4: Data Retention & Post-Session Wiping */}
            <section className="space-y-2">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-1">
                4. DATA RETENTION & POST-SESSION LOCATION WIPING PROTOCOL
              </h3>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <p className="font-bold text-sky-400">
                  🔒 POST-SESSION LOCATION WIPING PROTOCOL:
                </p>
                <p className="text-xs">
                  RideOut enforces strict data minimization. Live latitude and longitude coordinates transmitted during a ride room session are held in temporary memory exclusively for the duration of that active ride. When the session host ends the ride, raw GPS telemetry nodes (<code className="bg-[#0B1326] px-1 py-0.5 rounded text-sky-400">rides/$code/participants</code>) are <strong>automatically and permanently purged</strong> from Firebase Realtime Database within 24 hours.
                </p>
              </div>
            </section>

            {/* Section 5: Account Deletion Request */}
            <section className="space-y-2 border-t border-slate-800 pt-4">
              <h3 className="text-base font-bold text-white">
                5. ACCOUNT DELETION & YOUR DATA RIGHTS
              </h3>
              <p>
                You have the right to request complete access to, correction of, or permanent deletion of your account data under the Philippine Data Privacy Act of 2012 (RA 10173) and GDPR.
              </p>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1 text-xs">
                <strong className="text-white block">Delete Your Account in the App:</strong>
                <div>1. Open <strong>Settings</strong> in RideOut.</div>
                <div>2. Go to <strong>Account &amp; Danger Zone</strong>.</div>
                <div>3. Select <strong>Delete Account Permanently</strong>.</div>
                <div>4. Enter your password to confirm permanent account deletion.</div>
                <div className="pt-2">If you cannot access the app, email <a href="mailto:saikenstudio.app@gmail.com?subject=Account%20Deletion%20Request%20-%20RideOut" className="text-sky-400 underline font-mono">saikenstudio.app@gmail.com</a> with the subject <code className="text-sky-400">Account Deletion Request - RideOut</code>. Account profile, saved places, and ride history records requested through email will be permanently purged within thirty (30) business days.</div>
              </div>
            </section>

          </div>
        )}

        {/* Document Footer Bar */}
        <div className="legal-footer px-6 py-4 bg-[#060E20] border-t border-[#334155] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0 text-xs text-[#88929B]">
          <div className="flex items-center gap-3 flex-wrap">
            <span>© 2026 Saiken Studio. All rights reserved.</span>
            {onSwitchToTerms && (
              <button
                onClick={onSwitchToTerms}
                className="text-[#00EEFC] hover:underline font-semibold flex items-center gap-1"
              >
                <span>View Terms of Service</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/RideOut_Privacy_Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="RideOut_Privacy_Policy.pdf"
              className="px-3 py-2 rounded-xl bg-[#1E293B] border border-[#334155] text-[#89CEFF] hover:text-white font-bold text-xs transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Get Full PDF
            </a>
            <button
              onClick={handleClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#00EEFC] text-white font-extrabold text-xs shadow hover:opacity-90 transition-opacity"
            >
              I Understand & Agree
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
