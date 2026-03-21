import { Clapperboard, Palette, Sparkles } from 'lucide-react';
import './About.css';

const PRINCIPLES = [
  {
    title: 'Edit with intent',
    desc: 'Every cut earns its place—pacing that holds attention without noise.',
    Icon: Clapperboard,
  },
  {
    title: 'Color as story',
    desc: 'Grades that support mood and brand, from social to broadcast.',
    Icon: Palette,
  },
  {
    title: 'Motion that serves',
    desc: 'Graphics and titles that clarify, not distract.',
    Icon: Sparkles,
  },
];

const STATS = [
  { value: '200+', label: 'Projects delivered' },
  { value: '3+', label: 'Years in post' },
  { value: '24h', label: 'Typical reply' },
];

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about-bg" aria-hidden="true" />
      <div className="about-inner section">
        <div className="about-shell">
          <div className="about-panel">
            <div className="about-label-row">
              <span className="about-label-line about-label-line--left" aria-hidden="true" />
              <p className="about-eyebrow">About us</p>
              <span className="about-label-line about-label-line--right" aria-hidden="true" />
            </div>
            <h2 id="about-heading" className="about-title">
              <span className="about-title-line">Craft-led</span>{' '}
              <span className="about-title-accent">post production</span>
            </h2>
            <p className="about-lede">
              We partner with brands and creators who care how their work feels—not just how fast it ships.
              Offline edit, grade, and motion under one roof, with a pipeline built for clarity and speed.
            </p>
            <p className="about-body">
              From campaign spots to long-form series, we treat each project as a narrative problem: rhythm,
              contrast, and sound design working together. Fewer endless loops—more decisive passes until the
              cut feels inevitable.
            </p>
            <ul className="about-principles" role="list">
              {PRINCIPLES.map(({ title, desc, Icon }) => (
                <li key={title} className="about-principle">
                  <span className="about-principle-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.35} />
                  </span>
                  <span className="about-principle-title">{title}</span>
                  <span className="about-principle-desc">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-stats" role="list" aria-label="Studio highlights">
            {STATS.map((s) => (
              <div key={s.label} className="about-stat" role="listitem">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
