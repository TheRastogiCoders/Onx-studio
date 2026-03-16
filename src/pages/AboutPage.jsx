import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './PageShared.css';

export default function AboutPage() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.08 });
  const [ref2, isVisible2] = useScrollReveal({ threshold: 0.08 });

  return (
    <div className="page page-about">
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="section page-hero-inner">
          <p className={`page-hero-label reveal ${isVisible ? 'reveal-visible' : ''}`}>About Us</p>
          <h1 className={`page-hero-title reveal reveal-delay-1 ${isVisible ? 'reveal-visible' : ''}`}>
            Edit with <span>Intent</span>
          </h1>
          <p className={`page-hero-desc reveal reveal-delay-2 ${isVisible ? 'reveal-visible' : ''}`}>
            A video editing agency built for brands and creators who care about craft.
          </p>
        </div>
      </section>

      <section className="page-content section about-page-intro" ref={ref}>
        <div className="about-page-grid">
          <div className={`about-page-text reveal reveal-delay-1 ${isVisible ? 'reveal-visible' : ''}`}>
            <div className="about-page-label-wrap">
              <span className="about-page-label-line" aria-hidden="true" />
              <span className="about-page-label-text">Our story</span>
            </div>
            <p className="about-page-lead">
              Every cut, grade, and motion choice serves the story — so your content stands out without shouting.
            </p>
            <p className="about-page-body">
              From broadcast spots to social series, we handle the full post pipeline: offline edit, color grading, and motion design. No endless revisions — we get to the right version fast.
            </p>
            <div className="about-page-stats">
              <div className="about-page-stat">
                <span className="about-page-stat-num">120+</span>
                <span className="about-page-stat-label">Projects Delivered</span>
              </div>
              <span className="about-page-stat-divider" aria-hidden="true" />
              <div className="about-page-stat">
                <span className="about-page-stat-num">8+</span>
                <span className="about-page-stat-label">Years in Post</span>
              </div>
            </div>
          </div>
          <div className={`about-page-visual-wrap reveal reveal-from-right reveal-delay-2 ${isVisible ? 'reveal-visible' : ''}`}>
            <div className="about-page-visual">
              <div className="about-page-visual-bg" aria-hidden="true" />
              <div className="about-page-visual-frame" aria-hidden="true" />
              <div className="about-page-visual-glow" aria-hidden="true" />
              <div className="about-page-visual-content">
                <span className="about-page-visual-icon" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M8 5v14l11-7L8 5z" /></svg>
                </span>
                <span className="about-page-visual-caption">Craft in motion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-content section about-page-principles" ref={ref2}>
        <p className={`section-label reveal ${isVisible2 ? 'reveal-visible' : ''}`}>Our Principles</p>
        <h2 className={`section-title reveal reveal-delay-1 ${isVisible2 ? 'reveal-visible' : ''}`}>
          Why <span>Clients</span> Come Back
        </h2>
        <div className="about-page-cards">
          {[
            { title: 'Quality First', desc: 'We don’t ship until it’s right. Clear communication and fewer rounds.' },
            { title: 'On Time', desc: 'Agreed delivery dates. No surprise delays or scope creep.' },
            { title: 'Transparent', desc: 'Flat rates or day rates. You know what you’re paying for.' },
          ].map((item, i) => (
            <div key={item.title} className={`about-page-card reveal reveal-delay-${i + 2} ${isVisible2 ? 'reveal-visible' : ''}`}>
              <h3 className="about-page-card-title">{item.title}</h3>
              <p className="about-page-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className={`page-cta reveal reveal-delay-5 ${isVisible2 ? 'reveal-visible' : ''}`}>
          <Link to="/contact" className="btn btn-primary">Start a Project</Link>
        </div>
      </section>
    </div>
  );
}
