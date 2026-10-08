import VerifyDemo from './VerifyDemo.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Verify real people in under a minute.</h1>
          <p className="hero-sub">
            SmartVerify checks IDs, faces and sanctions lists in one flow, so your team approves good
            customers fast and stops fraud before it starts.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#pricing">Start free trial</a>
            <a className="btn btn-ghost" href="#how-it-works">See how it works</a>
          </div>
          <p className="hero-note">Free sandbox. No credit card needed.</p>
        </div>
        <div className="hero-visual">
          <VerifyDemo />
        </div>
      </div>
    </section>
  );
}
