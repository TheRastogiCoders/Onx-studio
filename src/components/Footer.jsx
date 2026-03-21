import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const studioHighlights = ['Fast Turnarounds', 'Brand-First Editing', 'Dedicated Team'];
  const studioStats = [
    { value: '250+', label: 'Projects Delivered' },
    { value: '40+', label: 'Brands Supported' },
    { value: '8hr', label: 'Avg. Response Time' },
  ];

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
          <div className="footer-highlight-row" aria-label="Studio highlights">
            {studioHighlights.map((item) => (
              <span key={item} className="footer-highlight-pill">{item}</span>
            ))}
          </div>
          <div className="footer-stats" aria-label="Studio stats">
            {studioStats.map((stat) => (
              <div key={stat.label} className="footer-stat-card">
                <p className="footer-stat-value">{stat.value}</p>
                <p className="footer-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content grid */}
        <div className="footer-grid">
          <div className="footer-col footer-col-nav">
            <h4 className="footer-heading">Navigate</h4>
            <nav className="footer-links">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><a href="#work">Video Editing</a></li>
              <li><a href="#work">Color Grading</a></li>
              <li><a href="#work">Motion & Film</a></li>
              <li><a href="#process">Process</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#work">Case Studies</a></li>
              <li><a href="#contact">Careers</a></li>
              <li><a href="#contact">Press</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-list">
              <li><Link to="/resources">Portfolio Highlights</Link></li>
              <li><Link to="/resources">Workflow & Timelines</Link></li>
              <li><Link to="/resources">Service Brochure</Link></li>
              <li><Link to="/resources">Project Brief Form</Link></li>
            </ul>
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
