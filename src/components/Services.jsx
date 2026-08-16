import {
  Clapperboard,
  Palette,
  Sparkles,
  Smartphone,
  Film,
  Mic,
  Fingerprint,
  Wand2,
} from 'lucide-react';
import Reveal from './motion/Reveal';
import './Services.css';

const SERVICES = [
  { title: 'Commercial & Ads', tag: 'Campaigns', desc: 'Spots that convert — from 15s social cuts to broadcast campaigns.', Icon: Clapperboard, featured: true },
  { title: 'Color Grading', tag: 'Cinematic', desc: 'Looks that carry mood and brand, from LUT to final delivery.', Icon: Palette },
  { title: 'Motion Design', tag: 'Graphics', desc: 'Titles, lower thirds, and animation that clarify the story.', Icon: Sparkles },
  { title: 'Reels & Social', tag: 'Short-form', desc: 'Hooks, pacing, and retention built for every platform.', Icon: Smartphone },
  { title: 'Long-form & Docs', tag: 'Story', desc: 'Narrative structure, interviews, and B-roll that hold attention.', Icon: Film },
  { title: 'Podcast & Audio', tag: 'Clarity', desc: 'Dialogue, mix, and visual packaging for shows that scale.', Icon: Mic },
  { title: 'Brand Content', tag: 'Identity', desc: 'A consistent visual language across every deliverable.', Icon: Fingerprint },
  { title: 'VFX & Clean-up', tag: 'Polish', desc: 'Seamless fixes, screens, and composites that disappear.', Icon: Wand2 },
];

export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="services-inner section">
        <Reveal className="section-head services-head">
          <p className="section-label">What we deliver</p>
          <h2 id="services-heading" className="section-title">
            Full-stack <span>post</span>
          </h2>
          <p className="section-lede">
            Editing, grading, and motion under one roof — so the cut, the look, and the graphics feel like one film.
          </p>
        </Reveal>

        <div className="services-bento">
          {SERVICES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} className={item.featured ? 'services-card services-card-featured' : 'services-card'}>
              <article>
                <div className="services-card-top">
                  <span className="services-card-icon" aria-hidden="true">
                    <item.Icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="services-card-index">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="services-card-tag">{item.tag}</p>
                <h3 className="services-card-title">{item.title}</h3>
                <p className="services-card-desc">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
