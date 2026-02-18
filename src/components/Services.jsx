import { useState, useEffect, useCallback, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { servicesFeaturedList } from '../data/services';

const AUTO_NEXT_MS = 6000;

export default function Services() {
  const [ref, inView] = useInView();
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const list = servicesFeaturedList;
  const current = list[index];
  const hasMultiple = list.length > 1;

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? list.length - 1 : i - 1));
  }, [list.length]);
  const goNext = useCallback(() => {
    setIndex((i) => (i >= list.length - 1 ? 0 : i + 1));
  }, [list.length]);

  const startAutoAdvance = useCallback(() => {
    if (!hasMultiple) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goNext, AUTO_NEXT_MS);
  }, [hasMultiple, goNext]);

  useEffect(() => {
    startAutoAdvance();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoAdvance]);

  if (!current) return null;

  const { projectTitle, location, image, services } = current;

  const handlePrev = () => {
    goPrev();
    startAutoAdvance();
  };
  const handleNext = () => {
    goNext();
    startAutoAdvance();
  };
  const handleDot = (i) => {
    setIndex(i);
    startAutoAdvance();
  };

  return (
    <section id="services" className="section services services-split">
      <div ref={ref} className={`services-split-inner animate-in ${inView ? 'in-view' : ''}`}>
        <h2 className="section-title services-split-heading">Services</h2>
        <div className="services-split-wrapper">
          {hasMultiple && (
            <button
              type="button"
              className="services-carousel-btn services-carousel-btn-prev"
              onClick={handlePrev}
              aria-label="Previous service"
            >
              ‹
            </button>
          )}
          <div className="services-split-content">
            <div className="services-panel services-panel-text">
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
            </div>
            <div className="services-panel services-panel-visual">
              <img
                src={image}
                alt=""
                className="services-visual-img"
                onError={(e) => { e.target.onerror = null; e.target.src = '/vite.svg'; }}
              />
            </div>
          </div>
          {hasMultiple && (
            <button
              type="button"
              className="services-carousel-btn services-carousel-btn-next"
              onClick={handleNext}
              aria-label="Next service"
            >
              ›
            </button>
          )}
        </div>
        {hasMultiple && (
          <div className="services-carousel-dots">
            {list.map((_, i) => (
              <button
                key={list[i].id}
                type="button"
                className={`services-carousel-dot ${i === index ? 'active' : ''}`}
                onClick={() => handleDot(i)}
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
