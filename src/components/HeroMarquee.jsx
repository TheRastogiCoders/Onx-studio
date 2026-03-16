import './HeroMarquee.css';

const MARQUEE_ITEMS = [
  'Editing',
  'Color Grading',
  'Motion Design',
  'VFX',
  'Stories That Move',
  'Commercial',
  'Music Videos',
  'Documentary',
  'Brand Content',
  'Social',
];

export default function HeroMarquee() {
  const row1 = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  const row2 = [...MARQUEE_ITEMS].reverse();

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
