import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Work.css';

// Add your own video URLs here — use .mp4 placed in /public for best autoplay support (muted required for autoplay)
const projects = [
  { id: 1, title: 'Brand Campaign — Automotive', category: 'Commercial', tag: 'Color • Edit', videoUrl: '/IMG_9795.MP4' },
  { id: 2, title: 'Music Video — Indie Artist', category: 'Music', tag: 'Full Pipeline', videoUrl: '/IMG_9793.MP4' },
  { id: 3, title: 'Product Launch — Tech', category: 'Ads', tag: 'Motion • Edit', videoUrl: '/IMG_9794.MP4' },
  { id: 4, title: 'Doc Series — Ep. 1', category: 'Documentary', tag: 'Edit • Grade', videoUrl: '/IMG_9796.MP4' },
  { id: 5, title: 'Social Series — 12 Episodes', category: 'Social', tag: 'Edit', videoUrl: '/IMG_9797.MP4' },
  { id: 6, title: 'Fashion Film', category: 'Fashion', tag: 'Color • Motion', videoUrl: '/V.1.mov' },
  { id: 7, title: 'Brand Campaign — Automotive', category: 'Commercial', tag: 'Color • Edit', videoUrl: '/V.2.mp4' },
];

export default function Work() {
  const scrollRef = useRef(null);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="work" className="work" ref={ref}>
      <div className="work-inner section">
        <div className="work-head">
          <div className="section-head">
            <p className={`section-label reveal ${isVisible ? 'reveal-visible' : ''}`}>Portfolio</p>
            <h2 className={`section-title reveal reveal-delay-1 ${isVisible ? 'reveal-visible' : ''}`}>
              Selected <span>Work</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="work-track-wrap">
        <div className="work-track-fade work-track-fade-left" aria-hidden="true" />
        <div className="work-track-fade work-track-fade-right" aria-hidden="true" />
        <div
          className="work-track work-track--auto"
          ref={scrollRef}
          role="region"
          aria-label="Selected work carousel"
        >
          {projects.map((project, i) => (
            <a
              key={`${project.id}-${i}`}
              href="#contact"
              className="work-card"
            >
              <div className="work-card-glass">
                <div className="work-card-media">
                  {project.videoUrl ? (
                    <video
                      className="work-card-video"
                      src={project.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-hidden="true"
                    />
                  ) : (
                    <div className="work-card-placeholder" />
                  )}
                  <div className="work-card-media-overlay" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="work-cta-wrap section">
        <div className={`work-cta reveal reveal-delay-3 ${isVisible ? 'reveal-visible' : ''}`}>
          <a href="#contact" className="btn btn-reel">See Full Reel</a>
        </div>
      </div>
    </section>
  );
}
