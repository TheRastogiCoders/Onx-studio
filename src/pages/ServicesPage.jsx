import { Link } from 'react-router-dom';
import './PageShared.css';

const services = [
  { title: 'Commercial & Ads', desc: 'High-impact spots for brands. From 15s social cuts to full broadcast campaigns. We deliver agency-grade edits that convert.', icon: '01' },
  { title: 'Color Grading', desc: 'Cinematic looks and consistent palettes. DaVinci Resolve & Premiere pipelines. From LUT development to final delivery.', icon: '02' },
  { title: 'Motion Design', desc: 'Titles, lower thirds, and animated graphics that elevate every frame. After Effects and Cinema 4D integration.', icon: '03' },
  { title: 'Social & Short-Form', desc: 'Punchy edits for TikTok, Reels, and YouTube. Built for retention and platform-specific specs.', icon: '04' },
  { title: 'Documentary & Long-Form', desc: 'Narrative pacing, interview cuts, and B-roll integration. We shape stories that hold attention.', icon: '05' },
  { title: 'VFX & Clean-Up', desc: 'Screen replacements, object removal, and compositing. Seamless integration with your edit.', icon: '06' },
];

export default function ServicesPage() {
  return (
    <div className="page page-services">
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="section page-hero-inner">
          <p className="page-hero-label">What We Do</p>
          <h1 className="page-hero-title">
            Full-Service <span>Video</span> Production
          </h1>
          <p className="page-hero-desc">
            From concept to delivery — edit, grade, and motion design under one roof.
          </p>
          <Link to="/work" className="btn btn-primary">
            View Our Work
          </Link>
        </div>
      </section>

      <section className="page-content section">
        <div className="services-page-grid">
          {services.map((item) => (
            <article key={item.title} className="service-page-card">
              <span className="service-page-num">{item.icon}</span>
              <h2 className="service-page-title">{item.title}</h2>
              <p className="service-page-desc">{item.desc}</p>
            </article>
          ))}
        </div>
        <div className="page-cta">
          <Link to="/contact" className="btn btn-outline">Start a Project</Link>
        </div>
      </section>
    </div>
  );
}
