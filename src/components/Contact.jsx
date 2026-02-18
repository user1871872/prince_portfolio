import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="section contact">
      <div ref={ref} className={`animate-in ${inView ? 'in-view' : ''}`}>
        <h2 className="section-title">Contact</h2>
        <div className="contact-inner">
        {/* Add your email and phone here; form is structure-only—wire to Formspree/Netlify later if needed. */}
        <p style={{ marginBottom: '1rem' }}>
          Add your email and phone here, or use the form below.
        </p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" type="text" name="name" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" name="email" placeholder="your@email.com" required />
          </div>
          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" placeholder="Your message" required />
          </div>
          <button type="submit" className="btn">
            Send message
          </button>
        </form>
        </div>
      </div>
    </section>
  );
}
