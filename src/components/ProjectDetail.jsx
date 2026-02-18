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

  const { title, category, image, images, description, longDescription, link } = project;
  const galleryImages = images && images.length > 0 ? images : (image ? [image] : []);

  return (
    <section className="section project-detail">
      <Link to="/#projects" className="project-detail-back">
        ← Back to projects
      </Link>

      <article className={`project-detail-article project-detail-enter ${visible ? 'visible' : ''}`}>
        <header className="project-detail-hero">
          <span className="project-detail-category">{category}</span>
          <h1 className="project-detail-title">{title}</h1>
          <p className="project-detail-lead">{description}</p>
        </header>

        {galleryImages.length > 0 && (
          <div className="project-detail-gallery">
            {galleryImages.map((src, index) => (
              <div key={index} className="project-detail-gallery-item">
                <img src={src} alt="" loading={index === 0 ? 'eager' : 'lazy'} />
              </div>
            ))}
          </div>
        )}

        <div className="project-detail-body">
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
