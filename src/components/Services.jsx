import { useScrollReveal } from '../hooks/useScrollReveal';
import './Services.css';

const services = [
  {
    title: 'Reels & Socials Videos Editing',
    desc: 'Punchy edits for Instagram, Reels, and YouTube. Built for retention and platform-specific specs.',
    variant: 'accent-border',
  },
  {
    title: 'Long Form Videos Editing',
    desc: 'Narrative pacing, interview cuts, and B-roll integration. We shape stories that hold attention.',
    variant: 'corner-glow',
  },
  {
    title: 'Podcast & Podcast Shortform Videos Editing',
    desc: 'Clean, clear audio editing for podcasts. We enhance clarity and engagement.',
    variant: 'minimal',
  },
  {
    title: 'Commercial & Ads Videos Editing',
    desc: 'High-impact spots for brands. From 15s to 30s social cuts to full broadcast campaigns.',
    variant: 'gradient',
  },
];

export default function Services() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="services" className="services section" ref={ref}>
      <div className="services-head">
        <p className={`services-label reveal ${isVisible ? 'reveal-visible' : ''}`}>What We Do</p>
        <h2 className={`services-title reveal reveal-delay-1 ${isVisible ? 'reveal-visible' : ''}`}>
          Full-Service <span>Video</span> Production
        </h2>
      </div>
      <div className="services-grid">
        {services.map((item, i) => (
          <article
            key={`service-${i}-${item.title}`}
            className={`service-card service-card--${item.variant} reveal reveal-delay-${Math.min(i + 2, 5)} ${isVisible ? 'reveal-visible' : ''}`}
          >
            <div className="service-card-inner">
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
