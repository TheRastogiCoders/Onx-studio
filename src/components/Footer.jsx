import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner section">
        {/* Hero logo block — big, premium */}
        <div className="footer-hero">
          <a href="#top" className="footer-logo">
            <span className="footer-logo-main">ONX</span>
            <span className="footer-logo-accent">STUDIO</span>
          </a>
          <p className="footer-tagline">
            Crafting premium digital experiences. Strategy, design, and development for brands that lead.
          </p>
        </div>

        {/* Content grid */}
        <div className="footer-grid">
          <div className="footer-col footer-col-nav">
            <h4 className="footer-heading">Navigate</h4>
            <nav className="footer-links">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><a href="#services">Video Editing</a></li>
              <li><a href="#services">Color Grading</a></li>
              <li><a href="#services">Motion & Film</a></li>
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
          <div className="footer-col footer-col-connect">
            <h4 className="footer-heading">Contact</h4>
            <a href="mailto:onxstudio@gmail.com" className="footer-email">onxstudio@gmail.com</a>
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
