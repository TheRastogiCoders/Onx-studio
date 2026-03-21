import './HeroMarquee.css';

const MARQUEE_ITEMS = [
  'Stories That Move',
  'Reels & Socials Editing',
  'Long Form Editing',
  'Podcast & Shortform',
  'Commercial & Ads',
  'Color Grading',
  'Motion Design',
  'Brand Content',
];

export default function HeroMarquee() {
  const row1 = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  const reversed = [...MARQUEE_ITEMS].reverse();
  const row2 = [...reversed, ...reversed];

  return (
    <section className="hero-marquee" aria-hidden="true">
      <div className="hero-marquee-track hero-marquee-track--left">
        {row1.map((item, i) => (
          <span key={`l-${i}`} className="hero-marquee-item">{item}</span>
        ))}
      </div>
      <div className="hero-marquee-track hero-marquee-track--right">
        {row2.map((item, i) => (
          <span key={`r-${i}`} className="hero-marquee-item">{item}</span>
        ))}
      </div>
    </section>
  );
}
