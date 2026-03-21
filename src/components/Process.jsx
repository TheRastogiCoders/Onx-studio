import './Process.css';

const steps = [
  { num: '01', title: 'Brief & Creative', text: 'We align on vision, tone, and deliverables so nothing gets lost in translation.' },
  { num: '02', title: 'Edit & Assembly', text: 'First cut to fine cut. We focus on pacing and story before moving to grade.' },
  { num: '03', title: 'Grade & Finish', text: 'Color and motion design bring the final look. We deliver in your required specs.' },
];

export default function Process() {
  return (
    <section id="process" className="process section">
      <div className="process-head">
        <p className="process-label">How We Work</p>
        <h2 className="process-title">
          Our <span>Process</span>
        </h2>
        <p className="process-sub-text">
          A clear, repeatable workflow so your project stays on track and on brand.
        </p>
      </div>
      <div className="process-grid">
        {steps.map((step, i) => (
          <article key={step.num} className="process-card">
            {i < steps.length - 1 && <div className="process-card-arrow" aria-hidden="true" />}
            <div className="process-card-inner">
              <span className="process-num" aria-hidden="true">{step.num}</span>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-text">{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
