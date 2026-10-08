import Logo from './Logo.jsx';
import { footerColumns } from '../data/content.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>Identity verification for teams that move fast and stay compliant.</p>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l}><a href="#top">{l}</a></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} SmartVerify. All rights reserved.</p>
      </div>
    </footer>
  );
}
