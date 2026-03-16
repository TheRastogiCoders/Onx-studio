import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner section">
        {/* Hero logo block — big, premium */}
        <div className="footer-hero">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-main">ONX</span>
            <span className="footer-logo-accent">STUDIO</span>
          </Link>
          <p className="footer-tagline">
            Crafting premium digital experiences. Strategy, design, and development for brands that lead.
          </p>
        </div>

        {/* Content grid */}
        <div className="footer-grid">
          <div className="footer-col footer-col-nav">
            <h4 className="footer-heading">Navigate</h4>
            <nav className="footer-links">
              <Link to="/services">Services</Link>
              <Link to="/work">Work</Link>
              <Link to="/process">Process</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><Link to="/services">Video Editing</Link></li>
              <li><Link to="/services">Color Grading</Link></li>
              <li><Link to="/services">Motion & Film</Link></li>
              <li><Link to="/process">Process</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/work">Case Studies</Link></li>
              <li><Link to="/contact">Careers</Link></li>
              <li><Link to="/contact">Press</Link></li>
            </ul>
          </div>
          <div className="footer-col footer-col-connect">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Vimeo">Vimeo</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
            <a href="mailto:hello@onxstudio.com" className="footer-email">hello@onxstudio.com</a>
          </div>
        </div>

        {/* Bottom bar — premium, professional "edited by" style */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="footer-copy">© {year} ONX Studio. All rights reserved.</p>
            <div className="footer-legal-links">
              <a href="#">Privacy</a>
              <span className="footer-dot">·</span>
              <a href="#">Terms</a>
            </div>
          </div>
          <p className="footer-credit">
            Designed & developed by ONX Studio. Edited for clarity and impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
