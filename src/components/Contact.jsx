import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="contact-wrap">
        <div className="contact-info">
          <p className={`section-label reveal ${isVisible ? 'reveal-visible' : ''}`}>Contact</p>
          <h2 className={`section-title reveal reveal-delay-1 ${isVisible ? 'reveal-visible' : ''}`}>
            Let's <span>Create</span>
          </h2>
          <p className={`contact-desc reveal reveal-delay-2 ${isVisible ? 'reveal-visible' : ''}`}>
            Tell us about your project. We'll get back within 24 hours.
          </p>
          <div className={`contact-details reveal reveal-delay-3 ${isVisible ? 'reveal-visible' : ''}`}>
            <a href="mailto:onxstudio@gmail.com">onxstudio@gmail.com</a>
            <a href="tel:+918426980385">+91 84269 80385</a>
          </div>
        </div>
        <form
          className={`contact-form reveal reveal-from-right reveal-delay-2 ${isVisible ? 'reveal-visible' : ''}`}
          onSubmit={handleSubmit}
        >
          {submitted ? (
            <p className="contact-success">Thanks. We'll be in touch soon.</p>
          ) : (
            <>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@company.com" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Project details</label>
                <textarea id="message" name="message" rows={4} required placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
