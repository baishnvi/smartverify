import { useEffect, useState } from 'react';
import './VerifyDemo.css';

const CHECKS = [
  { label: 'Document captured', done: 'Passport, valid until 2031' },
  { label: 'Details read', done: 'Name and date of birth match' },
  { label: 'Face match', done: '99.2% match with selfie' },
  { label: 'Liveness', done: 'Real person confirmed' },
];
const FINAL = CHECKS.length + 1; // stage after all checks: verified

export default function VerifyDemo() {
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [stage, setStage] = useState(reduced ? FINAL : 0);

  useEffect(() => {
    if (reduced) return undefined;
    const delay = stage === FINAL ? 4200 : stage === 0 ? 1400 : 1150;
    const t = setTimeout(() => setStage((s) => (s === FINAL ? 0 : s + 1)), delay);
    return () => clearTimeout(t);
  }, [stage, reduced]);

  const verified = stage === FINAL;
  const scanning = stage < 2;

  return (
    <div className="demo" role="img" aria-label="Animated example of an identity check finishing with a Verified result">
      <div className="demo-backplate" aria-hidden="true" />
      <div className={`demo-card${verified ? ' is-verified' : ''}`}>
        <div className="demo-id">
          <div className={`demo-photo${scanning ? ' is-scanning' : ''}`}>
            <svg viewBox="0 0 64 72" aria-hidden="true">
              <circle cx="32" cy="26" r="13" fill="#b8c3e6" />
              <path d="M6 72c2-20 14-28 26-28s24 8 26 28z" fill="#b8c3e6" />
            </svg>
          </div>
          <div className="demo-fields">
            <span className="demo-small">Passport</span>
            <strong>Samira Okafor</strong>
            <span className="demo-line" />
            <span className="demo-line short" />
            <span className="demo-small">Date of birth 14 Mar 1994</span>
          </div>
        </div>

        <ul className="demo-checks">
          {CHECKS.map((c, i) => {
            const state = stage > i + 1 ? 'done' : stage === i + 1 ? 'active' : 'idle';
            return (
              <li key={c.label} className={`demo-check is-${state}`}>
                <span className="demo-icon" aria-hidden="true">
                  {state === 'done' && (
                    <svg viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
                </span>
                <span className="demo-check-text">
                  <span>{c.label}</span>
                  {state === 'done' && <small>{c.done}</small>}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="demo-result" aria-hidden={!verified}>
          <span className="demo-badge">
            <svg viewBox="0 0 20 20" width="18" height="18"><path d="M4.5 10.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Verified
          </span>
          <span className="demo-time">Decision in 38 seconds</span>
        </div>
      </div>
    </div>
  );
}
