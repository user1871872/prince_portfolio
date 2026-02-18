import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const { id, title, category, image, images, description } = project;
  const thumb = image || (images && images[0]);

  const content = (
    <>
      <img
        src={thumb}
        alt=""
        className="project-card-image"
        loading="lazy"
      />
      <div className="project-card-body">
        <span className="project-card-category">{category}</span>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <span className="project-card-view">View project →</span>
      </div>
    </>
  );

  return (
    <Link to={`/project/${id}`} className="project-card">
      {content}
    </Link>
  );
}
