import { Link } from 'react-router-dom';
import Reveal from '../components/motion/Reveal';
import './ResourcesPage.css';

const RESOURCE_ITEMS = [
  { id: 'portfolio', title: 'Portfolio Highlights', note: 'Selected frames and case notes.' },
  { id: 'workflow', title: 'Workflow & Timelines', note: 'How a typical project moves from brief to delivery.' },
  { id: 'brochure', title: 'Service Brochure', note: 'Capabilities, packages, and collaboration models.' },
  { id: 'brief', title: 'Project Brief Form', note: 'A structured start so we can reply faster.' },
];

export default function ResourcesPage() {
  return (
    <div className="page page-resources">
      <div className="resources-inner section">
        <Link to="/" className="resources-back">
          ← Back to home
        </Link>

        <Reveal>
          <header className="resources-header">
            <p className="section-label">Studio</p>
            <h1 className="resources-heading">Resources</h1>
          </header>
        </Reveal>

        <ul className="resources-list" role="list">
          {RESOURCE_ITEMS.map((item, i) => (
            <Reveal as="li" key={item.id} id={item.id} delay={i * 0.06} className="resources-item">
              <span>
                <span className="resources-item-title">{item.title}</span>
                <span className="resources-item-note">{item.note}</span>
              </span>
              <span className="resources-badge">Coming soon</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
}
