import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { servicesFeaturedList } from '../data/services';

export default function Services() {
  const [ref, inView] = useInView();
  const [index, setIndex] = useState(0);
  const list = servicesFeaturedList;
  const current = list[index];
  const hasMultiple = list.length > 1;

  const goPrev = () => setIndex((i) => (i <= 0 ? list.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i >= list.length - 1 ? 0 : i + 1));

  if (!current) return null;

  const { projectTitle, location, image, services } = current;

  return (
    <section id="services" className="section services services-split">
      <div ref={ref} className={`services-split-inner animate-in ${inView ? 'in-view' : ''}`}>
        <h2 className="section-title services-split-heading">Services</h2>
        <div className="services-split-content">
          <div className="services-panel services-panel-text">
            {hasMultiple && (
              <button
                type="button"
                className="services-carousel-btn services-carousel-btn-prev"
                onClick={goPrev}
                aria-label="Previous service"
              >
                ‹
              </button>
            )}
            <div className="services-panel-overlay">
              <h3 className="services-project-title">{projectTitle}</h3>
              {location && (
                <p className="services-location">
                  <span className="services-location-icon" aria-hidden>📍</span>
                  {location}
                </p>
              )}
              <h4 className="services-provided-title">Services provided</h4>
              <ul className="services-list">
                {services.map((item, i) => (
                  <li key={i}>
                    {item.label}
                    {item.subItems && item.subItems.length > 0 && (
                      <ul className="services-sublist">
                        {item.subItems.map((sub, j) => (
                          <li key={j}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {hasMultiple && (
              <button
                type="button"
                className="services-carousel-btn services-carousel-btn-next"
                onClick={goNext}
                aria-label="Next service"
              >
                ›
              </button>
            )}
          </div>
          <div className="services-panel services-panel-visual">
            <img
              src={image}
              alt=""
              className="services-visual-img"
              onError={(e) => { e.target.onerror = null; e.target.src = '/vite.svg'; }}
            />
            {hasMultiple && (
              <>
                <button
                  type="button"
                  className="services-carousel-btn services-carousel-btn-prev services-carousel-btn-visual"
                  onClick={goPrev}
                  aria-label="Previous service"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="services-carousel-btn services-carousel-btn-next services-carousel-btn-visual"
                  onClick={goNext}
                  aria-label="Next service"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
        {hasMultiple && (
          <div className="services-carousel-dots">
            {list.map((_, i) => (
              <button
                key={list[i].id}
                type="button"
                className={`services-carousel-dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to service ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
