import { useScrollReveal } from '../hooks/useScrollReveal';
import './Testimonials.css';

const quotes = [
  {
    text: 'ONX delivered a broadcast spot that our client approved in two rounds. Their color work alone elevated the whole campaign.',
    author: 'Vama',
    role: 'Creative Director, Brand Co',
  },
  {
    text: 'We send all our social series to ONX. Fast turnarounds, consistent quality, and they actually understand the platform.',
    author: 'Ketlee',
    role: 'Head of Content, Media Co',
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.12 });

  return (
    <section id="testimonials" className="testimonials section" ref={ref}>
      <div className="section-head">
        <p className={`section-label reveal ${isVisible ? 'reveal-visible' : ''}`}>Testimonials</p>
        <h2 className={`section-title reveal reveal-delay-1 ${isVisible ? 'reveal-visible' : ''}`}>
          What <span>Clients</span> Say
        </h2>
      </div>
      <div className="testimonials-grid">
        {quotes.map((q, i) => (
          <blockquote
            key={i}
            className={`testimonial-card reveal reveal-delay-${i + 2} ${isVisible ? 'reveal-visible' : ''}`}
          >
            <p className="testimonial-text">"{q.text}"</p>
            <footer>
              <cite className="testimonial-author">{q.author}</cite>
              <span className="testimonial-role">{q.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
