import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import './PageShared.css';
import './WorkDetailPage.css';

export default function WorkDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="page page-work-detail">
        <section className="page-hero">
          <div className="page-hero-bg" aria-hidden="true" />
          <div className="section page-hero-inner">
            <p className="page-hero-label">Portfolio</p>
            <h1 className="page-hero-title">Project not found</h1>
            <p className="page-hero-desc">That work item doesn’t exist (or the link is outdated).</p>
            <Link to="/work" className="btn btn-primary">Back to Work</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page page-work-detail">
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="section page-hero-inner">
          <p className="page-hero-label">{project.category}</p>
          <h1 className="page-hero-title">
            {project.title}
          </h1>
          <p className="page-hero-desc">{project.tag}</p>
          <div className="work-detail-hero-actions">
            <Link to="/work" className="btn btn-secondary">Back</Link>
            <Link to="/contact" className="btn btn-primary">Start a Project</Link>
          </div>
        </div>
      </section>

      <section className="page-content section work-detail-wrap">
        <div className="work-detail-player">
          <video
            className="work-detail-video"
            src={project.videoUrl}
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </section>
    </div>
  );
}

