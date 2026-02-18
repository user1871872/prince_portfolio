import { useState } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#hero" className="header-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          {/* Replace with your name or logo text */}
          Portfolio
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? '✕' : '☰'}
        </button>
        <nav className={`nav ${navOpen ? 'is-open' : ''}`} aria-label="Main">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
