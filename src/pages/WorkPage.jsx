import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './PageShared.css';

export default function WorkPage() {
  return (
    <div className="page page-work">
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="section page-hero-inner">
          <p className="page-hero-label">Portfolio</p>
          <h1 className="page-hero-title">
            Selected <span>Work</span>
          </h1>
          <p className="page-hero-desc">
            A selection of recent edits, grades, and motion projects.
          </p>
        </div>
      </section>

      <section className="page-content section work-page-grid-wrap">
        <div className="work-page-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="work-page-card"
            >
              <div className="work-page-card-glass">
                <div className="work-page-media">
                  {project.videoUrl && (
                    <video
                      className="work-page-video"
                      src={project.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-hidden="true"
                    />
                  )}
                  <div className="work-page-media-overlay" />
                </div>
                <div className="work-page-card-info">
                  <span className="work-page-category">{project.category}</span>
                  <h2 className="work-page-card-title">{project.title}</h2>
                  <span className="work-page-tag">{project.tag}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="page-cta">
          <Link to="/contact" className="btn btn-primary">Start a Project</Link>
        </div>
      </section>
    </div>
  );
}
