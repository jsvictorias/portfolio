import React from 'react';
import './styles.css';
import { ProjectItemProps } from './props';
import { formatTechs, isExternalLink } from './helpers';

const ProjectItem: React.FC<ProjectItemProps> = ({ 
  img, 
  title, 
  techs, 
  link, 
  description = "Ver detalhes"
}) => {
  
  const formattedTechs = formatTechs(techs);
  const target = isExternalLink(link) ? "_blank" : "_self";

  return (
    <div className="project-item-container">
      
      <div className="image-wrapper">
        <img src={img} alt={`Preview do projeto ${title}`} className="project-img" />
        <div className="description-overlay">
          <span className="description-text">{description}</span>
        </div>
      </div>

      <div className="content-wrapper">
        <h2 className="project-title">
          {title}
        </h2>
        
        <p className="project-techs">
          {formattedTechs}
        </p>

        <a 
          href={link} 
          className="project-link" 
          target={target} 
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          Ver Projeto <span className="arrow">→</span>
        </a>
      </div>

    </div>
  );
};

export default ProjectItem;