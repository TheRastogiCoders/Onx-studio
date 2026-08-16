import Reveal from './motion/Reveal';
import './Process.css';

const STEPS = [
  {
    num: '01',
    title: 'Brief',
    text: 'We lock vision, tone, references, and deliverables so nothing gets lost in translation.',
  },
  {
    num: '02',
    title: 'Edit',
    text: 'First cut to fine cut. Pacing and story first — polish only after the narrative holds.',
  },
  {
    num: '03',
    title: 'Grade',
    text: 'Color, motion, and sound design bring the look. One language across every frame.',
  },
  {
    num: '04',
    title: 'Deliver',
    text: 'Masters in your specs — social, broadcast, or both — with a pipeline built for speed.',
  },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="process-inner section">
        <Reveal className="section-head">
          <p className="section-label">How we work</p>
          <h2 className="section-title">
            A clear <span>process</span>
          </h2>
          <p className="section-lede">
            Repeatable enough to stay on time. Sharp enough that the cut still feels inevitable.
          </p>
        </Reveal>

        <div className="process-grid">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.08} className="process-card">
              <article>
                <span className="process-num">{step.num}</span>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-text">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
