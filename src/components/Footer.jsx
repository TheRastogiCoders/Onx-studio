import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-marquee" aria-hidden="true">
        <div className="footer-marquee-track">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i}>ONX STUDIO <b>✦</b></span>
          ))}
        </div>
      </div>

      <div className="footer-inner section">
        <div className="footer-hero">
          <Link to="/" className="footer-logo">
            <span>ONX</span>
            <span className="footer-logo-accent">STUDIO</span>
          </Link>
          <p className="footer-tagline">
            Premium post-production for brands that refuse to look ordinary.
          </p>
        </div>

        <div className="footer-grid">
          <div>
            <h4 className="footer-heading">Navigate</h4>
            <nav className="footer-links">
              <Link to="/#services">Services</Link>
              <Link to="/#work">Work</Link>
              <Link to="/#about">About</Link>
              <Link to="/#process">Process</Link>
              <Link to="/#contact">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="footer-heading">Studio</h4>
            <ul className="footer-list">
              <li><a href="mailto:theonxstudio@gmail.com">theonxstudio@gmail.com</a></li>
              <li><a href="tel:+918426980385">+91 84269 80385</a></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Hours</h4>
            <ul className="footer-list">
              <li>Mon–Fri · 9am–6pm IST</li>
              <li>Typical reply within 24h</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} ONX Studio. All rights reserved.</p>
          <p className="footer-credit">
            Designed, Developed &amp; Maintained by{' '}
            <a
              href="https://rastogicodeworks.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rastogi Codeworks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
