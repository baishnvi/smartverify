import { testimonials } from '../data/content.js';
import './Testimonials.css';

const initials = (name) => name.split(' ').map((n) => n[0]).join('');

export default function Testimonials() {
  return (
    <section className="section" id="customers">
      <div className="container">
        <div className="section-head">
          <h2>Teams ship faster with SmartVerify</h2>
        </div>
        <div className="quotes">
          {testimonials.map((t) => (
            <figure key={t.name} className={`quote${t.large ? ' quote-large' : ''}`}>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">{initials(t.name)}</span>
                <span><strong>{t.name}</strong><br />{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
