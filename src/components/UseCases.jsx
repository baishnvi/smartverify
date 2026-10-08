import { useState } from 'react';
import { useCases } from '../data/content.js';
import './UseCases.css';

export default function UseCases() {
  const [active, setActive] = useState(useCases[0].id);
  const current = useCases.find((u) => u.id === active);

  const onKey = (e, index) => {
    let next = index;
    if (e.key === 'ArrowRight') next = (index + 1) % useCases.length;
    else if (e.key === 'ArrowLeft') next = (index - 1 + useCases.length) % useCases.length;
    else return;
    e.preventDefault();
    setActive(useCases[next].id);
    document.getElementById(`tab-${useCases[next].id}`)?.focus();
  };

  return (
    <section className="section" id="use-cases">
      <div className="container">
        <div className="section-head">
          <h2>Built for teams that can’t afford fake users</h2>
        </div>

        <div className="tabs" role="tablist" aria-label="Industries">
          {useCases.map((u, i) => (
            <button
              key={u.id}
              id={`tab-${u.id}`}
              role="tab"
              type="button"
              aria-selected={active === u.id}
              aria-controls={`panel-${u.id}`}
              tabIndex={active === u.id ? 0 : -1}
              className={`tab${active === u.id ? ' is-active' : ''}`}
              onClick={() => setActive(u.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {u.label}
            </button>
          ))}
        </div>

        <div className="tab-panel" role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`}>
          <div className="tab-main">
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <ul className="tab-points">
              {current.points.map((p) => (
                <li key={p}>
                  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#ddf6e8" /><path d="M5.5 10.5l3 3 6-6.5" fill="none" stroke="#0e9f5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <p className="tab-outcome">{current.outcome}</p>
        </div>
      </div>
    </section>
  );
}
