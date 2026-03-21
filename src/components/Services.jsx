import './Services.css';

const SERVICES = [
  { title: 'Commercial & Ads', tag: 'Campaigns', desc: 'Spots that convert' },
  { title: 'Color Grading', tag: 'Cinematic', desc: 'Resolve & Premiere' },
  { title: 'Motion Design', tag: 'Graphics', desc: 'Titles & lower thirds' },
  { title: 'Reels & Social', tag: 'Short-form', desc: 'Hooks & retention' },
  { title: 'Long-form & Docs', tag: 'Story', desc: 'Pacing & structure' },
  { title: 'Podcast & Audio', tag: 'Clarity', desc: 'Dialogue & mix' },
  { title: 'Brand Content', tag: 'Identity', desc: 'Consistent looks' },
  { title: 'VFX & Clean-up', tag: 'Polish', desc: 'Seamless fixes' },
];

function duplicate(list) {
  return [...list, ...list];
}

export default function Services() {
  const hRow1 = duplicate(SERVICES);
  const hRow2 = duplicate([...SERVICES].reverse());
  const vList = duplicate(SERVICES);

  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="services-inner section">
        <header className="services-header">
          <p className="services-eyebrow">What we deliver</p>
          <h2 id="services-heading" className="services-title">
            Services
          </h2>
          <p className="services-lede">
            Editing, grading, and motion — auto-curated below so you can scan while it moves.
          </p>
        </header>

        <p className="services-sr-only">
          Offerings include: {SERVICES.map((s) => s.title).join(', ')}.
        </p>

        <div className="services-layout" aria-hidden="true">
          <div className="services-v-shell">
            <div className="services-v-fade services-v-fade--top" />
            <div className="services-v-mask">
              <div className="services-v-track">
                {vList.map((item, i) => (
                  <article key={`v-${item.title}-${i}`} className="services-v-card">
                    <span className="services-v-tag">{item.tag}</span>
                    <h3 className="services-v-card-title">{item.title}</h3>
                    <p className="services-v-card-desc">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="services-v-fade services-v-fade--bottom" />
          </div>

          <div className="services-h-shell">
            <div className="services-h-rows">
              <div className="services-h-row">
                <div className="services-h-track services-h-track--forward">
                  {hRow1.map((item, i) => (
                    <article key={`h1-${item.title}-${i}`} className="services-h-card">
                      <span className="services-h-index">
                        {String((i % SERVICES.length) + 1).padStart(2, '0')}
                      </span>
                      <h3 className="services-h-card-title">{item.title}</h3>
                      <p className="services-h-card-tag">{item.tag}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="services-h-row">
                <div className="services-h-track services-h-track--reverse">
                  {hRow2.map((item, i) => (
                    <article key={`h2-${item.title}-${i}`} className="services-h-card services-h-card--alt">
                      <span className="services-h-index">{item.tag}</span>
                      <h3 className="services-h-card-title">{item.title}</h3>
                      <p className="services-h-card-tag">{item.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
