import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { faqList } from '../data/faq';

export default function FAQ() {
  const [ref, inView] = useInView();
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="section faq">
      <div ref={ref} className={`animate-in ${inView ? 'in-view' : ''}`}>
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="faq-list">
          {faqList.map((item, index) => {
            const id = `faq-${index}`;
            const isOpen = openId === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenId(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={id}
                  id={`faq-q-${index}`}
                >
                  {item.question}
                  <span className="faq-icon" aria-hidden>{isOpen ? '−' : '+'}</span>
                </button>
                <div
                  id={id}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-q-${index}`}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
