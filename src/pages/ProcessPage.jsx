import { Link } from 'react-router-dom';
import './PageShared.css';

const steps = [
  { num: '01', title: 'Brief & Creative', text: 'We align on vision, tone, and deliverables. Kickoff call, creative brief, and asset handoff so nothing gets lost in translation.' },
  { num: '02', title: 'Edit & Assembly', text: 'First cut to fine cut. We focus on pacing and story before moving to grade. You get review links with clear feedback rounds.' },
  { num: '03', title: 'Grade & Finish', text: 'Color and motion design bring the final look. We deliver in your required specs — broadcast, social, or both.' },
];

export default function ProcessPage() {
  return (
    <div className="page page-process">
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="section page-hero-inner">
          <p className="page-hero-label">How We Work</p>
          <h1 className="page-hero-title">
            Our <span>Process</span>
          </h1>
          <p className="page-hero-desc">
            A clear, repeatable workflow so your project stays on track and on brand.
          </p>
        </div>
      </section>

      <section className="page-content section process-page-steps">
        {steps.map((step, i) => (
          <div key={step.num} className="process-page-step">
            <span className="process-page-num">{step.num}</span>
            <div className="process-page-step-content">
              <h2 className="process-page-step-title">{step.title}</h2>
              <p className="process-page-step-text">{step.text}</p>
            </div>
            {i < steps.length - 1 && <div className="process-page-connector" />}
          </div>
        ))}
        <div className="page-cta">
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
}
