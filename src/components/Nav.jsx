import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (mobileOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous;
      };
    }
    return undefined;
  }, [mobileOpen]);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-backdrop" aria-hidden="true" />
      <div className="nav-inner">
        <a href="#top" className="nav-logo-wrap" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Onx Studio" className="nav-logo-img" aria-hidden="true" />
          <div className="nav-logo-text-wrap">
            <span className="nav-logo-tagline">Video Editing Agency</span>
            <span className="nav-logo">
              <span className="nav-logo-main">ONX</span>
              <span className="nav-logo-accent">STUDIO</span>
            </span>
          </div>
        </a>

        {/* Pill-shaped nav container — frosted glass (desktop only now) */}
        <nav className={`nav-pill ${mobileOpen ? 'nav-pill-open' : ''}`}>
          <div className="nav-pill-inner">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <span className="nav-pill-divider" aria-hidden="true" />
            <a href="#contact" className="nav-cta" onClick={() => setMobileOpen(false)}>
              Start Project
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
