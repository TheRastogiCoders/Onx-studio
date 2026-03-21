import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import './Work.css';

export default function Work() {
  const scrollRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProject]);

  return (
    <section id="work" className="work">
      <div className="work-inner section">
        <div className="work-head">
          <div className="section-head">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">
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
          {/* Render twice — animation scrolls -50% for a seamless infinite loop */}
          {[...projects, ...projects].map((project, i) => (
            <button
              key={`${project.id}-${i}`}
              type="button"
              className="work-card work-card-button"
              onClick={() => setActiveProject(project)}
              aria-label={`Open project: ${project.title}`}
              aria-hidden={i >= projects.length ? 'true' : undefined}
              tabIndex={i >= projects.length ? -1 : 0}
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
            </button>
          ))}
        </div>
      </div>

      <div className="work-cta-wrap section">
        <div className="work-cta">
          <a href="#contact" className="btn btn-reel">See Full Reel</a>
        </div>
      </div>

      {activeProject && (
        <div
          className="work-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Project video: ${activeProject.title}`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActiveProject(null);
          }}
        >
          <div className="work-modal-card" role="document">
            <button
              type="button"
              className="work-modal-close-absolute"
              onClick={() => setActiveProject(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="work-modal-player">
              <video
                className="work-modal-video"
                src={activeProject.videoUrl}
                controls
                autoPlay
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
