import { useState } from 'react';
import { plans } from '../data/content.js';
import './Pricing.css';

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const price = (p) => (yearly ? Math.round(p * 0.8) : p);

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <h2>Simple pricing that grows with you</h2>
          <p>Start in the sandbox for free. Pay only for completed verifications.</p>
        </div>

        <div className="billing" role="group" aria-label="Billing period">
          <button type="button" className={!yearly ? 'is-on' : ''} aria-pressed={!yearly} onClick={() => setYearly(false)}>Monthly</button>
          <button type="button" className={yearly ? 'is-on' : ''} aria-pressed={yearly} onClick={() => setYearly(true)}>Yearly <small>save 20%</small></button>
        </div>

        <div className="plans">
          {plans.map((plan) => (
            <article key={plan.name} className={`plan${plan.featured ? ' is-featured' : ''}`}>
              {plan.featured && <span className="plan-flag">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="plan-blurb">{plan.blurb}</p>
              <p className="plan-price">
                {plan.price === null ? (
                  <span className="plan-amount">Let’s talk</span>
                ) : (
                  <>
                    <span className="plan-amount">${price(plan.price)}</span>
                    <span className="plan-per">per month</span>
                  </>
                )}
              </p>
              <ul className="plan-list">
                {plan.features.map((f) => (
                  <li key={f}>
                    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d="M4.5 10.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn btn-block ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}>
                {plan.price === null ? 'Contact sales' : 'Start free trial'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
