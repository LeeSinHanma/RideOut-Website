import React, { useState, useEffect } from 'react';

export default function TermsOfServiceModal({ isOpen, onClose, onSwitchToPrivacy }) {
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
    const pdfUrl = '/RideOut_Terms_of_Service.pdf';
    
    // Create a hidden iframe to trigger browser print dialog directly
    const existingIframe = document.getElementById('pdf-print-iframe-terms');
    if (existingIframe) {
      existingIframe.remove();
    }

    const iframe = document.createElement('iframe');
    iframe.id = 'pdf-print-iframe-terms';
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
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-white tracking-wide uppercase font-mono">
                RideOut Terms of Service
              </h2>
              {/* Tab Switcher */}
              <div className="flex items-center gap-1 bg-[#1E293B] p-1 rounded-lg border border-[#334155]">
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
            <div className="text-xs text-[#88929B] font-mono mt-1">
              Legal Entity: Saiken Studio | Package: com.rideout.app | Effective: August 24, 2026
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            {/* Download PDF Button */}
            <a
              href="/RideOut_Terms_of_Service.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="RideOut_Terms_of_Service.pdf"
              className="px-3 py-1.5 rounded-lg bg-[#0EA5E9] text-white text-xs font-extrabold hover:bg-[#0284C7] transition-colors flex items-center gap-1.5 shadow"
              title="Download Complete PDF Document"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              <span>Download PDF</span>
            </a>

            {/* Jump to Privacy Policy Navigation Link */}
            {onSwitchToPrivacy && (
              <button
                onClick={onSwitchToPrivacy}
                className="px-3 py-1.5 rounded-lg bg-[#1E293B] border border-[#334155] text-xs font-bold text-[#00EEFC] hover:text-white hover:border-[#00EEFC] transition-colors flex items-center gap-1 shadow"
                title="Switch to Privacy Policy"
              >
                <span>Privacy Policy</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            )}

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#1E293B] border border-[#334155] text-[#BEC8D2] hover:text-white hover:border-[#0EA5E9] rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
              title="Print Official Legal Document"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="p-1.5 text-[#88929B] hover:text-white hover:bg-[#1E293B] rounded-lg transition-colors"
              aria-label="Close Terms of Service"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Full Embedded PDF Viewer */}
        {activeTab === 'pdf' ? (
          <div className="p-4 flex-1 flex flex-col bg-[#090D16] min-h-[500px]">
            <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155] mb-3 flex items-center justify-between text-xs text-[#89CEFF]">
              <span className="font-mono">Official Document File: RideOut_Terms_of_Service.pdf</span>
              <a
                href="/RideOut_Terms_of_Service.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00EEFC] hover:underline font-bold flex items-center gap-1"
              >
                <span>Open in New Tab</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>
            <iframe
              src="/RideOut_Terms_of_Service.pdf"
              title="RideOut Official Terms of Service PDF"
              className="w-full flex-1 min-h-[480px] rounded-xl border border-[#334155] bg-white shadow-inner"
            />
          </div>
        ) : (
          /* View Mode 2: Structured Web Overview Text */
          <div className="p-6 sm:p-8 overflow-y-auto font-sans text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6 select-text">
            
            {/* Legal Document Overview Notice Banner */}
            <div className="bg-[#0EA5E9]/10 border border-[#0EA5E9]/40 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
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
                href="/RideOut_Terms_of_Service.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                download="RideOut_Terms_of_Service.pdf"
                className="px-3.5 py-2 rounded-lg bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-extrabold text-xs flex items-center gap-1.5 shrink-0 transition-colors shadow"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Download Full PDF
              </a>
            </div>

            {/* Formal Header Section */}
            <div className="border-b border-slate-800 pb-6">
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
                TERMS OF SERVICE OVERVIEW
              </h1>
              <p className="text-xs text-slate-400 font-mono">
                OFFICIAL LEGAL DOCUMENT — SAIKEN STUDIO (TAGUIG, PHILIPPINES)
              </p>
              <div className="mt-4 p-3 bg-slate-900/80 border border-slate-800 rounded-lg text-xs text-slate-300">
                <strong className="text-white">NOTICE REGARDING OPERATING PLATFORMS:</strong> RideOut is currently released exclusively for the <strong>Android</strong> operating system via Google Play Store. References to iOS or Apple App Store are included for architectural context and future cross-platform deployment.
              </div>
            </div>

            {/* Section 1: Acceptance of Terms */}
            <section className="space-y-2">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-1">
                1. ACCEPTANCE OF TERMS
              </h3>
              <p>
                Welcome to <strong>RideOut</strong> ("we," "us," "our," or the "Application"), owned and operated by <strong>Saiken Studio</strong>, located in Taguig, Republic of the Philippines.
              </p>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the RideOut mobile application, backend services, real-time location features, and related software applications (collectively, the "Services"). By downloading, installing, registering for, accessing, or using RideOut, you explicitly agree to be bound by these Terms and our Privacy Policy.
              </p>
            </section>

            {/* Section 2: Eligibility & Account Creation */}
            <section className="space-y-2">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-1">
                2. ELIGIBILITY & ACCOUNT CREATION
              </h3>
              <p>
                <strong>Minimum Age Requirement:</strong> You must be at least <strong>thirteen (13) years of age</strong> to access or use RideOut. RideOut provides two modes of access: Anonymous Guest Mode (temporary device session) and Registered Accounts (Google Sign-In or Email/Password with unique Rider Tag).
              </p>
            </section>

            {/* Section 3: Description of Service */}
            <section className="space-y-2">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-1">
                3. DESCRIPTION OF SERVICE
              </h3>
              <p>
                RideOut is a real-time group location tracking, convoy walkie-talkie communication, and ride session organizer designed for riders of motorcycles 🏍️, scooters 🛵, bicycles 🚲, and cars 🚗. Features include live telemetry map, 6-character room codes, hands-free convoy radio buttons, Emergency SOS beacons, and saved favorite places.
              </p>
            </section>

            {/* Section 4: Critical Disclaimer */}
            <section className="space-y-2">
              <h3 className="text-base font-bold text-amber-400 border-b border-slate-800 pb-1">
                4. CRITICAL DISCLAIMER: NOT AN EMERGENCY SERVICE
              </h3>
              <div className="p-4 bg-amber-950/30 border border-amber-800/60 rounded-xl text-amber-200 text-xs space-y-2">
                <p className="font-bold uppercase tracking-wider text-amber-400">
                  ⚠️ RIDEOUT IS NOT A REPLACEMENT FOR EMERGENCY SERVICES (911 OR LOCAL EMERGENCY RESPONDERS).
                </p>
                <p>
                  Emergency SOS and Mechanical Breakdown beacon features within RideOut function <strong>exclusively as peer-to-peer notifications within your active app session</strong>. Triggering an SOS alert notifies <strong>only fellow RideOut users connected to your active ride room</strong>. It does NOT contact municipal police, ambulance, or official 911 emergency call centers.
                </p>
              </div>
            </section>

            {/* Section 5: Safe Use & Distracted Driving Laws */}
            <section className="space-y-2">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-1">
                5. SAFE USE & DISTRACTED DRIVING LAWS
              </h3>
              <p>
                You must operate your vehicle safely and in strict compliance with traffic laws, including the <strong>Anti-Distracted Driving Act of 2016 (Republic Act No. 10913)</strong> in the Philippines. You must <strong>NEVER</strong> physically interact with your mobile device screen while actively driving or riding a moving vehicle.
              </p>
            </section>

            {/* Section 6: Subscriptions & Payments */}
            <section className="space-y-2">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-1">
                6. SUBSCRIPTIONS & RIDEOUT PRO
              </h3>
              <p>
                RideOut offers an optional premium subscription tier (<strong>RideOut PRO</strong>). All subscription payments are processed exclusively through <strong>Google Play Store In-App Billing</strong> (<code className="bg-slate-900 px-1 py-0.5 rounded text-sky-400">in_app_purchase</code>). Subscriptions auto-renew unless canceled at least 24 hours prior to current billing period expiration in Google Play Store settings.
              </p>
            </section>

            {/* Section 7: Governing Law */}
            <section className="space-y-2">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-1">
                7. GOVERNING LAW & JURISDICTION
              </h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the <strong>Republic of the Philippines</strong>. Any legal proceedings shall be instituted exclusively in the competent courts of <strong>Taguig City, Metro Manila, Philippines</strong>.
              </p>
            </section>

            {/* Section 8: Contact & Deletion */}
            <section className="space-y-2 border-t border-slate-800 pt-4">
              <h3 className="text-base font-bold text-white">
                8. ACCOUNT DELETION & CONTACT INFORMATION
              </h3>
              <p>
                To request permanent deletion of your user account, rider profile, and stored ride history, send an email to <a href="mailto:saikenstudio.app@gmail.com?subject=Account%20Deletion%20Request%20-%20RideOut" className="text-sky-400 hover:underline">saikenstudio.app@gmail.com</a> with the subject line <strong>"Account Deletion Request - RideOut"</strong>.
              </p>
              <div className="mt-4 p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div>Developer: Saiken Studio</div>
                <div>Location: Taguig, Republic of the Philippines</div>
                <div>Contact Email: saikenstudio.app@gmail.com</div>
                <div>Repository: https://github.com/LeeSinHanma/RideOut</div>
              </div>
            </section>

          </div>
        )}

        {/* Document Footer Bar */}
        <div className="px-6 py-4 bg-[#060E20] border-t border-[#334155] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0 text-xs text-[#88929B]">
          <div className="flex items-center gap-3 flex-wrap">
            <span>© 2026 Saiken Studio. All rights reserved.</span>
            {onSwitchToPrivacy && (
              <button
                onClick={onSwitchToPrivacy}
                className="text-[#00EEFC] hover:underline font-semibold flex items-center gap-1"
              >
                <span>View Privacy Policy</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/RideOut_Terms_of_Service.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="RideOut_Terms_of_Service.pdf"
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
