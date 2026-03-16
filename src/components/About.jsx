import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.12 });

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="about-wrap">
        <div className="about-content">
          <div className={`about-label-wrap reveal ${isVisible ? 'reveal-visible' : ''}`}>
            <span className="about-label-line" aria-hidden="true" />
            <p className="section-label about-label">About Us</p>
          </div>
          <h2 className={`section-title about-title reveal reveal-delay-1 ${isVisible ? 'reveal-visible' : ''}`}>
            Edit with <span>Intent</span>
          </h2>
          <p className={`about-lead reveal reveal-delay-2 ${isVisible ? 'reveal-visible' : ''}`}>
            We're a video editing agency built for brands and creators who care about craft. Every cut, grade, and motion choice serves the story—so your content stands out without shouting.
          </p>
          <p className={`about-text reveal reveal-delay-3 ${isVisible ? 'reveal-visible' : ''}`}>
            From broadcast spots to social series, we handle the full post pipeline: offline edit, color grading, and motion design. No endless revisions—we get to the right version fast.
          </p>
          <div className={`about-stats reveal reveal-delay-4 ${isVisible ? 'reveal-visible' : ''}`}>
            <div className="about-stat">
              <span className="about-stat-num">120+</span>
              <span className="about-stat-label">Projects Delivered</span>
            </div>
            <div className="about-stat-divider" aria-hidden="true" />
            <div className="about-stat">
              <span className="about-stat-num">8+</span>
              <span className="about-stat-label">Years in Post</span>
            </div>
          </div>
        </div>
        <div className={`about-visual-wrap reveal reveal-from-right reveal-delay-2 ${isVisible ? 'reveal-visible' : ''}`}>
          <div className="about-visual">
            <div className="about-visual-bg" aria-hidden="true" />
            <div className="about-visual-frame" aria-hidden="true" />
            <div className="about-visual-glow" aria-hidden="true" />
            <div className="about-visual-content">
              <span className="about-visual-icon" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </span>
              <span className="about-visual-caption">Our craft in motion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
