import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
  };

  const navLinks = [
    { to: '/#about', label: 'About', id: 'about' },
    { to: '/#services', label: 'Services', id: 'services' },
    { to: '/#projects', label: 'Projects', id: 'projects' },
    { to: '/#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={() => setNavOpen(false)}>
          Portfolio
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? '✕' : '☰'}
        </button>
        <nav className={`nav ${navOpen ? 'is-open' : ''}`} aria-label="Main">
          {navLinks.map(({ to, label, id }) =>
            isHome ? (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
              >
                {label}
              </a>
            ) : (
              <Link key={id} to={to} onClick={() => setNavOpen(false)}>
                {label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
