export default function ProjectCard({ project }) {
  const { title, category, image, description, link } = project;

  const content = (
    <>
      <img
        src={image}
        alt=""
        className="project-card-image"
        loading="lazy"
      />
      <div className="project-card-body">
        <span className="project-card-category">{category}</span>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <a href={link} className="project-card" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <article className="project-card">{content}</article>;
}
