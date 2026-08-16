import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Reveal from '../components/motion/Reveal';
import WorkVideo from '../components/WorkVideo';
import './PageShared.css';

export default function WorkPage() {
  return (
    <div className="page page-work">
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="page-hero-inner">
          <p className="page-hero-label">Portfolio</p>
          <h1 className="page-hero-title">
            Selected <span>work</span>
          </h1>
          <p className="page-hero-desc">
            A selection of recent edits, grades, and motion projects.
          </p>
        </div>
      </section>

      <section className="page-content section work-page-grid-wrap">
        <div className="work-page-grid">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 4) * 0.05}>
              <Link to={`/work/${project.slug}`} className="work-page-card">
                <div className="work-page-card-glass">
                  <div className="work-page-media">
                    <WorkVideo src={project.videoUrl} className="work-page-video" />
                    <div className="work-page-media-overlay" />
                  </div>
                  <div className="work-page-card-info">
                    <span className="work-page-category">{project.category}</span>
                    <h2 className="work-page-card-title">{project.title}</h2>
                    <span className="work-page-tag">{project.tag}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="page-cta">
          <Link to="/contact" className="btn btn-primary">Start a project</Link>
        </div>
      </section>
    </div>
  );
}
