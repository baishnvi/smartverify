import { documentTypes, sanctionLists } from '../data/content.js';
import './Features.css';

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <h2>Every check you need, in one flow</h2>
          <p>Stop stitching vendors together. SmartVerify runs identity, fraud and compliance checks side by side and returns one decision.</p>
        </div>

        <div className="features-grid">
          <article className="feature feature-doc">
            <h3>Document verification</h3>
            <p>Read and authenticate IDs from around the world. We catch edited photos, screen captures and expired documents.</p>
            <ul className="chips chips-dark">
              {documentTypes.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </article>

          <article className="feature">
            <h3>Face match and liveness</h3>
            <p>Compare the selfie to the ID photo and confirm a real person is present, not a photo or a mask.</p>
            <div className="meter" role="img" aria-label="Face match score 99.2 percent">
              <div className="meter-row"><span>Face match</span><strong>99.2%</strong></div>
              <div className="meter-track"><span style={{ width: '99.2%' }} /></div>
            </div>
          </article>

          <article className="feature">
            <h3>AML and sanctions screening</h3>
            <p>Screen every customer against global watchlists at signup and keep monitoring afterwards.</p>
            <ul className="chips">
              {sanctionLists.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </article>

          <article className="feature feature-api">
            <div>
              <h3>An API your developers will like</h3>
              <p>One endpoint to start a verification, one webhook to receive the result. Test everything in a sandbox that behaves like production.</p>
              <a className="feature-link" href="#docs">Read the API reference</a>
            </div>
            <pre className="code" aria-label="Example API response"><code>
<span className="c-dim">POST /v1/verifications/vf_8Q2x</span>{'\n\n'}
{'{'}{'\n'}
{'  '}<span className="c-key">"status"</span>: <span className="c-str">"approved"</span>,{'\n'}
{'  '}<span className="c-key">"checks"</span>: {'{'}{'\n'}
{'    '}<span className="c-key">"document"</span>: <span className="c-str">"pass"</span>,{'\n'}
{'    '}<span className="c-key">"face_match"</span>: <span className="c-num">0.992</span>,{'\n'}
{'    '}<span className="c-key">"liveness"</span>: <span className="c-str">"pass"</span>,{'\n'}
{'    '}<span className="c-key">"aml"</span>: <span className="c-str">"clear"</span>{'\n'}
{'  }'},{'\n'}
{'  '}<span className="c-key">"decision_ms"</span>: <span className="c-num">38214</span>{'\n'}
{'}'}
            </code></pre>
          </article>
        </div>
      </div>
    </section>
  );
}
