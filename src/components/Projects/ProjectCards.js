import React from "react";
import { FiArrowUpRight, FiMonitor } from "react-icons/fi";

function ProjectCards({
  title,
  description,
  technologies,
  ghLink,
  image,
  imageAlt,
  visualKind,
  visualLabel,
  icon: VisualIcon = FiMonitor,
}) {
  return (
    <article className="project-tile">
      <div className={`project-tile-visual${image ? " project-tile-visual--image" : ` project-tile-visual--${visualKind}`}`}>
        {image ? (
          <img src={image} alt={imageAlt} />
        ) : (
          <div className="project-illustration" aria-hidden="true">
            <VisualIcon />
            <span>{visualLabel}</span>
          </div>
        )}
        {!image && <span className="project-visual-label">{visualLabel}</span>}
      </div>
      <div className="project-tile-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech-list" aria-label={`${title} technologies`}>
          {technologies.map((technology) => (
            <span className="project-tech" key={technology}>{technology}</span>
          ))}
        </div>
        <a
          className="project-link"
          href={ghLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default ProjectCards;
