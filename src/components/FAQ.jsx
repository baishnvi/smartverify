import { faqs } from '../data/content.js';
import './FAQ.css';

export default function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq-inner">
        <div className="section-head">
          <h2>Questions, answered</h2>
          <p>Can’t find what you need? Our team replies within one business day.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item" open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
