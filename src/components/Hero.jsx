import { useState, useEffect } from 'react';
import { contactInfo } from '../data/contactInfo';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className={`hero-content hero-animate ${visible ? 'in-view' : ''}`}>
        <h1 className="hero-title">PJR Engineering Services</h1>
        <p className="hero-subtitle">
          Civil engineering and layout design in Bohol — from residential to subdivision plans.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
            View work
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            Get a quote
          </a>
        </div>
        <p className="hero-trust">
          {contactInfo.credentials}
        </p>
      </div>
    </section>
  );
}
