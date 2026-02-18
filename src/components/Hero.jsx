import { useState, useEffect } from 'react';

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
        {/* Add your name and title below */}
        <h1 className="hero-title">PJR Engineering Services</h1>
        <p className="hero-subtitle">
        Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
            View work
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
