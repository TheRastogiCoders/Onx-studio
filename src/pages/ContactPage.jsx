import { useState } from 'react';
import Reveal from '../components/motion/Reveal';
import './PageShared.css';
import './ContactPage.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page page-contact">
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="page-hero-inner">
          <p className="page-hero-label">Get in touch</p>
          <h1 className="page-hero-title">
            Let's <span>create</span>
          </h1>
          <p className="page-hero-desc">
            Tell us about your project. We'll get back within 24 hours.
          </p>
        </div>
      </section>

      <section className="page-content section contact-page-wrap">
        <div className="contact-page-grid">
          <Reveal className="contact-page-left">
            <div className="contact-page-info">
              <p className="contact-page-label">Contact</p>
              <a href="mailto:theonxstudio@gmail.com" className="contact-page-link">theonxstudio@gmail.com</a>
              <a href="tel:+918426980385" className="contact-page-link">+91 84269 80385</a>
              <p className="contact-page-note">Available Mon–Fri, 9am–6pm IST</p>
            </div>
            <div className="contact-page-tips">
              <p className="contact-page-tips-title">Include in your message</p>
              <ul className="contact-page-tips-list">
                <li>Project type (commercial, music video, etc.)</li>
                <li>Timeline or deadline</li>
                <li>Reference links or a rough cut if you have them</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="contact-page-form" onSubmit={handleSubmit}>
              {submitted ? (
                <p className="contact-page-success">Thanks. We'll be in touch soon.</p>
              ) : (
                <>
                  <div className="form-row">
                    <label htmlFor="page-contact-name">Name</label>
                    <input id="page-contact-name" name="name" type="text" required placeholder="Your name" />
                  </div>
                  <div className="form-row">
                    <label htmlFor="page-contact-email">Email</label>
                    <input id="page-contact-email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                  <div className="form-row">
                    <label htmlFor="page-contact-service">Project type</label>
                    <select id="page-contact-service" name="service" className="contact-page-select">
                      <option value="">Select...</option>
                      <option value="commercial">Reels & social</option>
                      <option value="music">Long form</option>
                      <option value="documentary">Podcast & shortform</option>
                      <option value="social">Commercial & ads</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="page-contact-message">Project details</label>
                    <textarea id="page-contact-message" name="message" rows={5} required placeholder="Tell us about your project, timeline, and any references..." />
                  </div>
                  <button type="submit" className="btn btn-primary">Send message</button>
                </>
              )}
            </form>
          </Reveal>
        </div>
        <div className="contact-page-strip">
          <p className="contact-page-strip-text">We typically respond within 24 hours. Urgent? Call us directly.</p>
        </div>
      </section>
    </div>
  );
}
