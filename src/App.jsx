import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MascotIntroduction from './components/MascotIntroduction';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import ShowcaseGallery from './components/ShowcaseGallery';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsOfServiceModal from './components/TermsOfServiceModal';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  // Check URL path/hash on load and state changes for direct link navigation
  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        path === '/privacy' ||
        path === '/privacy-policy' ||
        path === '/privacy.html' ||
        hash === '#privacy'
      ) {
        setIsPrivacyOpen(true);
      } else if (
        path === '/terms' ||
        path === '/terms-of-service' ||
        path === '/terms.html' ||
        hash === '#terms'
      ) {
        setIsTermsOpen(true);
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  const handleOpenDownload = () => {
    setIsDownloadOpen(true);
  };

  const handleCloseDownload = () => {
    setIsDownloadOpen(false);
  };

  const handleOpenPrivacy = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsPrivacyOpen(true);
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', '/privacy');
    }
  };

  const handleClosePrivacy = () => {
    setIsPrivacyOpen(false);
    if (
      window.location.pathname === '/privacy' ||
      window.location.pathname === '/privacy-policy' ||
      window.location.hash === '#privacy'
    ) {
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', '/');
      }
    }
  };

  const handleOpenTerms = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsTermsOpen(true);
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', '/terms');
    }
  };

  const handleCloseTerms = () => {
    setIsTermsOpen(false);
    if (
      window.location.pathname === '/terms' ||
      window.location.pathname === '/terms-of-service' ||
      window.location.hash === '#terms'
    ) {
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', '/');
      }
    }
  };

  const handleSwitchToTerms = () => {
    setIsPrivacyOpen(false);
    setIsTermsOpen(true);
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', '/terms');
    }
  };

  const handleSwitchToPrivacy = () => {
    setIsTermsOpen(false);
    setIsPrivacyOpen(true);
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', '/privacy');
    }
  };

  return (
    <div className="bg-[#0F172A] min-h-screen text-[#DAE2FD] font-['Inter',sans-serif] selection:bg-[#0EA5E9] selection:text-white">
      <Header 
        onDownloadClick={handleOpenDownload} 
        onPrivacyClick={handleOpenPrivacy}
        onTermsClick={handleOpenTerms}
      />

      <main className="pt-20">
        <Hero onDownloadClick={handleOpenDownload} />
        <MascotIntroduction />
        <ProblemSolution />
        <Features />
        <ShowcaseGallery />
        <CtaSection onDownloadClick={handleOpenDownload} />
      </main>

      <Footer 
        onPrivacyClick={handleOpenPrivacy} 
        onTermsClick={handleOpenTerms}
      />

      <DownloadModal 
        isOpen={isDownloadOpen} 
        onClose={handleCloseDownload} 
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={handleClosePrivacy}
        onSwitchToTerms={handleSwitchToTerms}
      />

      <TermsOfServiceModal
        isOpen={isTermsOpen}
        onClose={handleCloseTerms}
        onSwitchToPrivacy={handleSwitchToPrivacy}
      />
    </div>
  );
}
