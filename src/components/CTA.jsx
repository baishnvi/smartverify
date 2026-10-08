import './CTA.css';

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="container cta-inner">
        <h2>Ready to verify your first customer?</h2>
        <p>Spin up the sandbox in five minutes. Talk to us when you’re ready to go live.</p>
        <div className="cta-actions">
          <a className="btn btn-light" href="#pricing">Start free trial</a>
          <a className="btn btn-outline-light" href="mailto:sales@smartverify.example">Book a demo</a>
        </div>
      </div>
    </section>
  );
}
