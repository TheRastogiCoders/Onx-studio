import './StatsStrip.css';

const STATS = [
  {
    key: 'projects',
    value: '200+',
    label: 'Projects delivered',
  },
  {
    key: 'experience',
    value: '3+',
    label: 'Years experience',
  },
  {
    key: 'brands',
    value: '50+',
    label: 'Brand partners',
  },
  {
    key: 'response',
    value: '24h',
    label: 'Avg. reply time',
  },
];

export default function StatsStrip() {
  return (
    <section className="stats-strip" aria-labelledby="stats-strip-heading">
      <h2 id="stats-strip-heading" className="visually-hidden">
        Studio at a glance
      </h2>
      <div className="section stats-strip-inner">
        <div className="stats-strip-grid">
          {STATS.map((item) => (
            <article key={item.key} className={`stats-card stats-card--${item.key}`}>
              <div className={`stats-card-media stats-card-media--${item.key}`} aria-hidden="true">
                <span className="stats-card-media-noise" />
                <span className="stats-card-media-shine" />
              </div>
              <div className="stats-card-body">
                <span className="stats-card-value">{item.value}</span>
                <span className="stats-card-label">{item.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
