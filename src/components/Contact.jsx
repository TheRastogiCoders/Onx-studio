import { useState } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
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
      <div className="contact-bg" aria-hidden="true" />
      <div className="contact-inner section">
        <header className="contact-header">
          <div className="contact-label-row">
            <span className="contact-label-line contact-label-line--left" aria-hidden="true" />
            <p className="contact-eyebrow">Get in touch</p>
            <span className="contact-label-line contact-label-line--right" aria-hidden="true" />
          </div>
          <h2 id="contact-heading" className="contact-title">
            Let&apos;s <span className="contact-title-accent">create</span>
          </h2>
          <p className="contact-lede">
            Share a short brief—timeline, references, and goals. We reply within one business day, often sooner.
          </p>
        </header>

        <div className="contact-grid">
          <aside className="contact-aside" aria-label="Contact options">
            <div className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">
                <Mail size={20} strokeWidth={1.5} />
              </span>
              <div className="contact-card-body">
                <span className="contact-card-label">Email</span>
                <a href="mailto:theonxstudio@gmail.com" className="contact-card-value">
                  theonxstudio@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">
                <Phone size={20} strokeWidth={1.5} />
              </span>
              <div className="contact-card-body">
                <span className="contact-card-label">Phone</span>
                <a href="tel:+918426980385" className="contact-card-value">
                  +91 84269 80385
                </a>
              </div>
            </div>
            <div className="contact-card contact-card--muted">
              <span className="contact-card-icon" aria-hidden="true">
                <Clock size={20} strokeWidth={1.5} />
              </span>
              <div className="contact-card-body">
                <span className="contact-card-label">Availability</span>
                <p className="contact-card-value contact-card-value--static">
                  Mon–Fri · 9am–6pm IST
                </p>
              </div>
            </div>
            <p className="contact-aside-note">
              Prefer a call? Mention it in your message and we&apos;ll schedule a slot.
            </p>
          </aside>

          <div className="contact-form-shell">
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="contact-success" role="status">
                  <CheckCircle2 className="contact-success-icon" size={40} strokeWidth={1.25} aria-hidden="true" />
                  <p className="contact-success-title">Message received</p>
                  <p className="contact-success-desc">We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="contact-form-head">
                    <p className="contact-form-eyebrow">Project brief</p>
                    <p className="contact-form-hint">Fields marked with * are required.</p>
                  </div>
                  <div className="contact-form-fields">
                    <div className="form-row">
                      <label htmlFor="contact-name">Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-row">
                      <label htmlFor="contact-email">Email *</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                      />
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
                  </div>
                  <button type="submit" className="contact-submit">
                    <span>Send message</span>
                    <Send size={18} strokeWidth={2} aria-hidden="true" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
