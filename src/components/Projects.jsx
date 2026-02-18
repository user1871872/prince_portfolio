import { useMemo, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { projects as projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';

const ALL = 'All';

export default function Projects() {
  const [category, setCategory] = useState(ALL);
  const [ref, inView] = useInView();

  const categories = useMemo(() => {
    const set = new Set(projectsData.map((p) => p.category));
    return [ALL, ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (category === ALL) return projectsData;
    return projectsData.filter((p) => p.category === category);
  }, [category]);

  return (
    <section id="projects" className="section projects">
      <div ref={ref} className={`animate-in animate-in-stagger ${inView ? 'in-view' : ''}`}>
        <h2 className="section-title">Projects</h2>
        <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-btn ${category === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      </div>
    </section>
  );
}
