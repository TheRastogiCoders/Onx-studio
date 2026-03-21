import { Link } from 'react-router-dom';
import './ResourcesPage.css';

const RESOURCE_ITEMS = [
  { id: 'portfolio', title: 'Portfolio Highlights' },
  { id: 'workflow', title: 'Workflow & Timelines' },
  { id: 'brochure', title: 'Service Brochure' },
  { id: 'brief', title: 'Project Brief Form' },
];

export default function ResourcesPage() {
  return (
    <div className="page page-resources">
      <div className="resources-inner section">
        <Link to="/" className="resources-back">
          ← Back to home
        </Link>

        <header className="resources-header">
          <h1 className="resources-heading">Resources</h1>
        </header>

        <ul className="resources-list" role="list">
          {RESOURCE_ITEMS.map((item) => (
            <li key={item.id} id={item.id} className="resources-item">
              <span className="resources-item-title">{item.title}</span>
              <span className="resources-badge">Coming soon</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
