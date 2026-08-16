import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './motion/Reveal';
import Magnetic from './motion/Magnetic';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <div className="cta-banner-inner section">
        <Reveal>
          <p className="section-label">Next cut</p>
          <h2 id="cta-heading" className="cta-banner-title">
            Your next film
            <em> starts here.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <Magnetic>
            <Link to="/#contact" className="cta-banner-btn">
              Book a kickoff
              <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
