import { useState } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
import Reveal from './motion/Reveal';
import Magnetic from './motion/Magnetic';
import './Contact.css';

const PROJECT_TYPES = [
  { value: '', label: 'Project type' },
  { value: 'commercial', label: 'Commercial & ads' },
  { value: 'social', label: 'Reels & social' },
  { value: 'longform', label: 'Long-form / documentary' },
  { value: 'podcast', label: 'Podcast & audio-to-video' },
  { value: 'other', label: 'Other' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact-inner section">
        <Reveal className="contact-header">
          <p className="section-label">Get in touch</p>
          <h2 id="contact-heading" className="section-title">
            Let's <span>create</span>
          </h2>
          <p className="section-lede contact-lede">
            Share a short brief — timeline, references, and goals. We reply within one business day.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-aside" delay={0.05}>
            <a className="contact-card" href="mailto:theonxstudio@gmail.com">
              <span className="contact-card-icon" aria-hidden="true">
                <Mail size={18} strokeWidth={1.6} />
              </span>
              <span>
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">theonxstudio@gmail.com</span>
              </span>
            </a>
            <a className="contact-card" href="tel:+918426980385">
              <span className="contact-card-icon" aria-hidden="true">
                <Phone size={18} strokeWidth={1.6} />
              </span>
              <span>
                <span className="contact-card-label">Phone</span>
                <span className="contact-card-value">+91 84269 80385</span>
              </span>
            </a>
            <div className="contact-card contact-card-static">
              <span className="contact-card-icon" aria-hidden="true">
                <Clock size={18} strokeWidth={1.6} />
              </span>
              <span>
                <span className="contact-card-label">Availability</span>
                <span className="contact-card-value">Mon–Fri · 9am–6pm IST</span>
              </span>
            </div>
            <p className="contact-aside-note">
              Prefer a call? Mention it in your message and we'll schedule a slot.
            </p>
          </Reveal>

          <Reveal className="contact-form-shell" delay={0.1}>
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="contact-success" role="status">
                  <CheckCircle2 size={40} strokeWidth={1.3} aria-hidden="true" />
                  <p className="contact-success-title">Message received</p>
                  <p className="contact-success-desc">We'll get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="contact-form-head">
                    <p className="contact-form-eyebrow">Project brief</p>
                    <p className="contact-form-hint">Fields marked with * are required.</p>
                  </div>
                  <div className="form-row">
                    <label htmlFor="contact-name">Name *</label>
                    <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="Your name" />
                  </div>
                  <div className="form-row">
                    <label htmlFor="contact-email">Email *</label>
                    <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
                  </div>
                  <div className="form-row">
                    <label htmlFor="contact-type">Focus</label>
                    <div className="contact-select-wrap">
                      <select id="contact-type" name="projectType" className="contact-select">
                        {PROJECT_TYPES.map((opt) => (
                          <option key={opt.value || 'default'} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <label htmlFor="contact-message">Details *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Timeline, deliverables, references, links…"
                    />
                  </div>
                  <Magnetic strength={0.12} className="contact-submit-wrap">
                    <button type="submit" className="contact-submit">
                      <span>Send message</span>
                      <Send size={16} strokeWidth={2} aria-hidden="true" />
                    </button>
                  </Magnetic>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
