import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { FORMSPREE_FORM_ID } from '../config/contactForm';
import { contactInfo } from '../data/contactInfo';

const STATUS_IDLE = 'idle';
const STATUS_SENDING = 'sending';
const STATUS_SUCCESS = 'success';
const STATUS_ERROR = 'error';

export default function Contact() {
  const [ref, inView] = useInView();
  const [status, setStatus] = useState(STATUS_IDLE);
  const [errorMessage, setErrorMessage] = useState('');
  const { phone, email, address } = contactInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === STATUS_SENDING) return;

    const form = e.target;
    setStatus(STATUS_SENDING);
    setErrorMessage('');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      const data = await res.json();

      if (data.ok) {
        setStatus(STATUS_SUCCESS);
        form.reset();
      } else {
        setStatus(STATUS_ERROR);
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus(STATUS_ERROR);
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div ref={ref} className={`animate-in ${inView ? 'in-view' : ''}`}>
        <h2 className="section-title">Contact</h2>
        <div className="contact-inner">
          <div className="contact-details">
            {phone && (
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-detail-item">
                <span className="contact-detail-icon" aria-hidden>📞</span>
                {phone}
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="contact-detail-item">
                <span className="contact-detail-icon" aria-hidden>✉️</span>
                {email}
              </a>
            )}
            {address && (
              <p className="contact-detail-item contact-detail-address">
                <span className="contact-detail-icon" aria-hidden>📍</span>
                {address}
              </p>
            )}
          </div>
          <p className="contact-form-intro">Or send a message using the form below.</p>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" name="name" placeholder="Your name" required disabled={status === STATUS_SENDING} />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="email" placeholder="your@email.com" required disabled={status === STATUS_SENDING} />
            </div>
            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" placeholder="Your message" required disabled={status === STATUS_SENDING} />
            </div>
            <p className="contact-privacy">
              We use your details only to respond to your inquiry.
            </p>
            {status === STATUS_SUCCESS && (
              <p className="contact-form-message contact-form-message--success">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === STATUS_ERROR && (
              <p className="contact-form-message contact-form-message--error">
                {errorMessage}
              </p>
            )}
            <button type="submit" className="btn" disabled={status === STATUS_SENDING}>
              {status === STATUS_SENDING ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
