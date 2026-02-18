import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const [visible, setVisible] = useState(false);
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!project) {
    return (
      <section className="section project-detail">
        <p>Project not found.</p>
        <Link to="/#projects" className="btn">
          Back to projects
        </Link>
      </section>
    );
  }

  const { title, category, image, description, longDescription, link } = project;

  return (
    <section className="section project-detail">
      <Link to="/#projects" className="project-detail-back">
        ← Back to projects
      </Link>
      <article className={`project-detail-content project-detail-enter ${visible ? 'visible' : ''}`}>
        <img
          src={image}
          alt=""
          className="project-detail-image"
        />
        <div className="project-detail-body">
          <span className="project-detail-category">{category}</span>
          <h1 className="project-detail-title">{title}</h1>
          <p className="project-detail-description">{description}</p>
          {longDescription && (
            <div className="project-detail-long">
              {longDescription}
            </div>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
              View external link
            </a>
          )}
        </div>
      </article>
    </section>
  );
}
