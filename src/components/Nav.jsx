import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import './Nav.css';

const NAV_LINKS = [
  { to: '/#about',    label: 'About Us' },
  { to: '/#services', label: 'Services' },
  { to: '/#work',     label: 'Work'     },
];

export default function Nav() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.documentElement.classList.toggle('nav-menu-open', mobileOpen);
    return () => document.documentElement.classList.remove('nav-menu-open');
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  /* Drawer & overlay rendered via portal so they are never
     inside a transformed parent — fixes iOS fixed-position bug */
  const portal = createPortal(
    <>
      {/* Dark overlay */}
      <div
        className={`nav-overlay${mobileOpen ? ' nav-overlay-visible' : ''}`}
        aria-hidden="true"
        onClick={close}
      />

      {/* Slide-in drawer */}
      <div
        id="mobile-menu"
        className={`nav-drawer${mobileOpen ? ' nav-drawer-open' : ''}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {/* Close button inside drawer */}
        <button
          type="button"
          className="nav-drawer-close"
          aria-label="Close menu"
          onClick={close}
        >
          <X size={22} strokeWidth={2} />
        </button>

        <nav className="nav-drawer-links" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="nav-drawer-link" onClick={close}>
              {label}
            </Link>
          ))}
        </nav>

        <Link to="/#contact" className="nav-drawer-cta" onClick={close}>
          Let's Create
        </Link>
      </div>
    </>,
    document.body
  );

  return (
    <>
      <header
        className={`nav${scrolled ? ' nav-scrolled' : ''}`}
        role="banner"
      >
        {/* ── Shared wrapper — merges on scroll ── */}
        <div className="nav-inner">

        {/* ── Standalone logo circle ── */}
        <Link to="/" className="nav-logo-circle" aria-label="ONX Studio — home">
          <img src="/logo.png" alt="ONX Studio" className="nav-logo-img" />
        </Link>

        {/* ── Cylinder pill: links + CTA + hamburger ── */}
        <div className="nav-pill-wrap">
          <nav className="nav-links" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className="nav-link">
                {label}
              </Link>
            ))}
          </nav>

          <Link to="/#contact" className="nav-cta nav-cta-desktop">
            Let's Create
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(v => !v)}
          >
            <Menu size={20} strokeWidth={2} />
          </button>
        </div>

        </div>{/* end nav-inner */}
      </header>

      {portal}
    </>
  );
}
