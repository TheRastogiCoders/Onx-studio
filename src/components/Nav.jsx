import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Work' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-backdrop" aria-hidden="true" />
      <div className="nav-inner">
        <Link to="/" className="nav-logo-wrap">
          <img src="/logo.png" alt="Onx Studio" className="nav-logo-img" aria-hidden="true" />
          <div className="nav-logo-text-wrap">
            <span className="nav-logo-tagline">Video Editing Agency</span>
            <span className="nav-logo">
              <span className="nav-logo-main">ONX</span>
              <span className="nav-logo-accent">STUDIO</span>
            </span>
          </div>
        </Link>

        {/* Pill-shaped nav container — frosted glass */}
        <nav className={`nav-pill ${mobileOpen ? 'nav-pill-open' : ''}`}>
          <div className="nav-pill-inner">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <span className="nav-pill-divider" aria-hidden="true" />
            <Link to="/contact" className="nav-cta" onClick={() => setMobileOpen(false)}>
              Start Project
            </Link>
            <span className="nav-pill-divider" aria-hidden="true" />
            <a href="#" className="nav-social" aria-label="Instagram" onClick={() => setMobileOpen(false)}>
              <InstagramIcon />
            </a>
            <a href="#" className="nav-social" aria-label="LinkedIn" onClick={() => setMobileOpen(false)}>
              <LinkedInIcon />
            </a>
          </div>
        </nav>

        <button
          type="button"
          className={`nav-toggle ${mobileOpen ? 'nav-toggle-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
