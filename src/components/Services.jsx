import { useInView } from '../hooks/useInView';
import { services } from '../data/services';

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="section services">
      <div ref={ref} className={`animate-in animate-in-stagger ${inView ? 'in-view' : ''}`}>
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
