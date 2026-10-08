export default function Logo({ light = false }) {
  return (
    <a href="#top" className={`logo${light ? ' logo-light' : ''}`} aria-label="SmartVerify home">
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="#2447F5" />
        <path d="M9 16.5l4.5 4.5L23 11.5" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>SmartVerify</span>
    </a>
  );
}
