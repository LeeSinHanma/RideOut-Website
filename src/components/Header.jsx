import appLogo from '../assets/appLogo.png';
import DownloadLink from './DownloadLink';
export default function Header() {
  return (
    <header className="fixed top-0 w-full z-40 bg-[#0F172A]/95 backdrop-blur-md border-b border-[#334155]/60">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="page-container flex items-center justify-between gap-4 h-20">
        <a href="#" className="flex items-center gap-2.5 font-extrabold text-xl text-white" aria-label="RideOut home"><img src={appLogo} alt="" className="w-9 h-9 object-contain" />RideOut</a>
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7 text-sm text-[#BEC8D2]">
          <a href="#how-it-works">How it works</a><a href="#features">Features</a><a href="#showcase">The app</a><a href="#plans">Free &amp; PRO</a><a href="#faq">FAQ</a>
        </nav>
        <DownloadLink compact />
      </div>
    </header>
  );
}
