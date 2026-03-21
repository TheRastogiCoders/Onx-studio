import './Hero.css';

/** Hero background video (file in /public) */
const HERO_VIDEO_SRC = '/IMG_2234%203.mov';

const HERO_CONTENT = {
  sub: 'Premium editing, color grading, and motion design for brands and creators.',
};

export default function Hero() {
  return (
    <section id="hero" className="hero" role="region" aria-label="Featured stories">
      <div className="hero-slide">
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
        </div>
        <div className="hero-inner section">
          <div className="hero-content">
            <h1 className="hero-title hero-title-headline">
              <span className="hero-title-white">Welcome to </span>
              <span className="hero-title-red">ONX</span>
              <span className="hero-title-white"> STUDIO</span>
            </h1>
            <p className="hero-sub"><em>{HERO_CONTENT.sub}</em></p>
            <div className="hero-cta">
              <a href="#work" className="hero-btn hero-btn-primary">View Our Work</a>
              <a href="#contact" className="hero-btn hero-btn-outline">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
