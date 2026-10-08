import { steps } from '../data/content.js';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className="section how" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <h2>From link to decision in four steps</h2>
          <p>Your customer does the easy part. We do the rest.</p>
        </div>
        <ol className="how-steps">
          {steps.map((s, i) => (
            <li className="how-step" key={s.title}>
              <span className="how-num" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
