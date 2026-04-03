import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Work.css';

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="work-inner section">
        <div className="work-head">
          <div className="section-head work-section-head">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">
              Selected <span>Work</span>
            </h2>
            <p className="work-intro">
              Vertical cuts in a responsive grid — tap a frame to open the full player in a new
              tab.
            </p>
          </div>
          <Link to="/work" className="work-view-all">
            View all
            <span className="work-view-all-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      <div className="work-grid section">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/work/${project.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card work-card-button"
            aria-label={`Open project page in new tab: ${project.title}`}
          >
            <article className="work-card-glass">
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
                    onEnded={(ev) => {
                      const v = ev.currentTarget;
                      v.currentTime = 0;
                      v.play().catch(() => {});
                    }}
                  />
                ) : (
                  <div className="work-card-placeholder" />
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="work-cta-wrap section">
        <div className="work-cta">
          <a href="#contact" className="btn btn-reel">
            See Full Reel
          </a>
        </div>
      </div>
    </section>
  );
}
