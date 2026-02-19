import { useInView } from '../hooks/useInView';
import { processSteps } from '../data/processSteps';

export default function Process() {
  const [ref, inView] = useInView();

  return (
    <section id="process" className="section process">
      <div ref={ref} className={`animate-in ${inView ? 'in-view' : ''}`}>
        <h2 className="section-title process-title">How it works</h2>
        <p className="process-intro">From concept to permit — clear steps so you know what to expect.</p>
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={step.number} className="process-card">
              <div className="process-card-connector" aria-hidden />
              <div className="process-card-inner">
                <span className="process-card-number">{step.number}</span>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
