import { useScrollReveal } from '../hooks/useScrollReveal';
import './Process.css';

const steps = [
  { num: '01', title: 'Brief & Creative', text: 'We align on vision, tone, and deliverables so nothing gets lost in translation.' },
  { num: '02', title: 'Edit & Assembly', text: 'First cut to fine cut. We focus on pacing and story before moving to grade.' },
  { num: '03', title: 'Grade & Finish', text: 'Color and motion design bring the final look. We deliver in your required specs.' },
];

export default function Process() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="process" className="process section" ref={ref}>
      <div className="process-head">
        <p className={`process-label reveal ${isVisible ? 'reveal-visible' : ''}`}>How We Work</p>
        <h2 className={`process-title reveal reveal-delay-1 ${isVisible ? 'reveal-visible' : ''}`}>
          Our <span>Process</span>
        </h2>
        <p className={`process-sub reveal reveal-delay-2 ${isVisible ? 'reveal-visible' : ''}`}>
          A clear, repeatable workflow so your project stays on track and on brand.
        </p>
      </div>
      <div className="process-grid">
        {steps.map((step, i) => (
          <article
            key={step.num}
            className={`process-card reveal reveal-delay-${i + 2} ${isVisible ? 'reveal-visible' : ''}`}
          >
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
