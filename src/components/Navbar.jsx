import { useState } from 'react';
import Logo from './Logo.jsx';
import { navLinks } from '../data/content.js';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar" id="top">
      <div className="container navbar-inner">
        <Logo />
        <nav id="site-nav" className={`navbar-links${open ? ' is-open' : ''}`} aria-label="Main">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
            ))}
          </ul>
          <div className="navbar-actions">
            <a href="#login" className="navbar-login" onClick={close}>Log in</a>
            <a href="#pricing" className="btn btn-primary" onClick={close}>Start free trial</a>
          </div>
        </nav>
        <button
          className="navbar-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
