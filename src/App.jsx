import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import ShowcaseGallery from './components/ShowcaseGallery';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const handleOpenDownload = () => {
    setIsDownloadOpen(true);
  };

  const handleCloseDownload = () => {
    setIsDownloadOpen(false);
  };

  return (
    <div className="bg-[#0F172A] min-h-screen text-[#DAE2FD] font-['Inter',sans-serif] selection:bg-[#0EA5E9] selection:text-white">
      <Header onDownloadClick={handleOpenDownload} />

      <main className="pt-20">
        <Hero onDownloadClick={handleOpenDownload} />
        <ProblemSolution />
        <Features />
        <ShowcaseGallery />
        <CtaSection onDownloadClick={handleOpenDownload} />
      </main>

      <Footer />

      <DownloadModal 
        isOpen={isDownloadOpen} 
        onClose={handleCloseDownload} 
      />
    </div>
  );
}
