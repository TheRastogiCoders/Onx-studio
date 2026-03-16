import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Hero.css';

const HERO_VIDEO_SRC = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

export default function Hero() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero-video-overlay" aria-hidden="true" />
      </div>
      <div className="hero-inner section">
        <div className="hero-content">
          <div className={`hero-label-wrap reveal ${isVisible ? 'reveal-visible' : ''}`}>
            <span className="hero-label-line" aria-hidden="true" />
            <p className="hero-label">Video Editing Agency</p>
            <span className="hero-label-line hero-label-line-right" aria-hidden="true" />
          </div>
          <h1 className={`hero-title reveal reveal-delay-1 ${isVisible ? 'reveal-visible' : ''}`}>
            <span className="hero-title-line">
              We Craft <span className="hero-title-highlight">Stories</span>
            </span>
            <br />
            <span className="hero-title-line hero-title-line-secondary">
              That Move.
            </span>
          </h1>
          <p className={`hero-sub reveal reveal-delay-2 ${isVisible ? 'reveal-visible' : ''}`}>
            Premium editing, color grading, and motion design for brands and creators.
          </p>
          <div className={`hero-cta reveal reveal-delay-3 ${isVisible ? 'reveal-visible' : ''}`}>
            <Link to="/work" className="hero-btn hero-btn-primary">View Our Work</Link>
            <Link to="/contact" className="hero-btn hero-btn-outline">Get in Touch</Link>
          </div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
