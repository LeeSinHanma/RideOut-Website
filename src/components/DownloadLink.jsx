export default function DownloadLink({ compact = false }) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.rideout.app"
      target="_blank"
      rel="noopener noreferrer"
      className={`download-link ${compact ? 'download-link-compact' : ''}`}
      aria-label="Get RideOut beta on Google Play (opens in a new tab)"
    >
      <span className="material-symbols-outlined" aria-hidden="true">android</span>
      <span>{compact ? 'Get the app' : 'Get it on Google Play'}</span>
      <span className="material-symbols-outlined text-base" aria-hidden="true">north_east</span>
    </a>
  );
}

