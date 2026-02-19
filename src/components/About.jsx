import { useInView } from '../hooks/useInView';
import { contactInfo } from '../data/contactInfo';

const expertiseItems = [
  'Site layout design',
  'Subdivision design',
  'Bill of materials',
  'Permit & notarization',
  'Complete plan sets',
];

export default function About() {
  const [ref, inView] = useInView();
  const { serviceArea, serviceAreas } = contactInfo;

  return (
    <section id="about" className="section about">
      <div ref={ref} className={`animate-in ${inView ? 'in-view' : ''}`}>
        <h2 className="section-title about-title">About</h2>
        <p className="about-intro">
          PJR Engineering Services provides civil engineering and layout design for residential, commercial, and subdivision projects in Bohol.
        </p>
        {serviceArea && (
          <p className="about-service-area">
            <strong>{serviceArea}</strong>
            {serviceAreas && serviceAreas.length > 0 && (
              <span className="about-service-areas"> — {serviceAreas.join(', ')}</span>
            )}
          </p>
        )}
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              We deliver complete sets of plans with sign and seal of involved professionals, from site development to structural and electrical documentation. Our work is geared toward permit-ready submissions and smooth coordination with local requirements.
            </p>
            <p className="about-text">
              Whether you need a one-storey residential building, commercial or multi-storey plans, or subdivision and road layout, we focus on clear, buildable designs and the paperwork that goes with them — including notarization and forms for permits and occupancy.
            </p>
          </div>
          <div className="about-expertise">
            <h3 className="about-expertise-title">What we do</h3>
            <ul className="about-expertise-list">
              {expertiseItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
