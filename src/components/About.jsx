import { Clapperboard, Palette, Sparkles } from 'lucide-react';
import Reveal from './motion/Reveal';
import CountUp from './motion/CountUp';
import './About.css';

const PRINCIPLES = [
  {
    title: 'Edit with intent',
    desc: 'Every cut earns its place — pacing that holds attention without noise.',
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

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about-inner section">
        <div className="about-layout">
          <Reveal className="about-copy">
            <p className="section-label">About us</p>
            <h2 id="about-heading" className="section-title">
              Craft-led <span>post</span>
            </h2>
            <p className="about-lede">
              We partner with brands and creators who care how their work feels — not just how fast it ships.
            </p>
            <p className="about-body">
              Offline edit, grade, and motion under one roof. From campaign spots to long-form series, we treat each project as a narrative problem: rhythm, contrast, and sound working together until the cut feels inevitable.
            </p>
          </Reveal>

          <div className="about-stats" role="list" aria-label="Studio highlights">
            <Reveal delay={0.05} className="about-stat" role="listitem">
              <CountUp className="about-stat-value" end={200} suffix="+" />
              <span className="about-stat-label">Projects delivered</span>
            </Reveal>
            <Reveal delay={0.12} className="about-stat" role="listitem">
              <CountUp className="about-stat-value" end={3} suffix="+" />
              <span className="about-stat-label">Years in post</span>
            </Reveal>
            <Reveal delay={0.18} className="about-stat" role="listitem">
              <span className="about-stat-value">24h</span>
              <span className="about-stat-label">Typical reply</span>
            </Reveal>
          </div>
        </div>

        <ul className="about-principles" role="list">
          {PRINCIPLES.map((item, i) => {
            const PrincipleIcon = item.Icon;
            return (
              <Reveal as="li" key={item.title} delay={i * 0.08} className="about-principle">
                <span className="about-principle-icon" aria-hidden="true">
                  <PrincipleIcon size={22} strokeWidth={1.4} />
                </span>
                <span className="about-principle-title">{item.title}</span>
                <span className="about-principle-desc">{item.desc}</span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
