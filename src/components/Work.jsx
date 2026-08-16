import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import Reveal from './motion/Reveal';
import WorkVideo from './WorkVideo';
import './Work.css';

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="work-inner section">
        <div className="work-head">
          <Reveal className="section-head work-section-head">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">
              Selected <span>work</span>
            </h2>
            <p className="section-lede">
              Vertical cuts, campaigns, and motion — tap a frame to open the full piece.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/work" className="work-view-all">
              View all
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="work-grid section">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 4) * 0.06} className="work-card-reveal">
            <Link
              to={`/work/${project.slug}`}
              className="work-card"
              aria-label={`Open project: ${project.title}`}
            >
              <article className="work-card-glass">
                <div className="work-card-media">
                  <WorkVideo src={project.videoUrl} className="work-card-video" />
                  <div className="work-card-overlay">
                    <span className="work-card-play">Play</span>
                    <div className="work-card-meta">
                      <span>{project.category}</span>
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="work-cta-wrap section">
        <Link to="/#contact" className="btn btn-outline">
          See full reel
        </Link>
      </div>
    </section>
  );
}
