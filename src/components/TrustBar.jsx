import { stats } from '../data/content.js';
import './TrustBar.css';

export default function TrustBar() {
  return (
    <section className="trust" aria-label="SmartVerify in numbers">
      <div className="container">
        <dl className="trust-list">
          {stats.map((s) => (
            <div className="trust-item" key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
