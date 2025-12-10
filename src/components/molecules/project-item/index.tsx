import React, { useState } from 'react';
import './styles.css';
import { ProjectItemProps } from './props';
import { formatTechs } from './helpers';

const ProjectItem: React.FC<ProjectItemProps> = ({ 
  img, 
  title, 
  techs, 
  linksite,
  linkgithub, 
  description = "Ver detalhes"
}) => {
  
  const [showPopup, setShowPopup] = useState(false);
  const formattedTechs = formatTechs(techs);

  const hasSite = !!linksite && linksite.trim() !== "";
  const hasGithub = !!linkgithub && linkgithub.trim() !== "";
  const hasBoth = hasSite && hasGithub;

  const mainLink = hasBoth ? undefined : (hasSite ? linksite : linkgithub);
  
  const handleMainClick = (e: React.MouseEvent) => {
    if (hasBoth) {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  const closePopup = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  };

  return (
    <div className="project-item-container">
      
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box">
            <h3 className="popup-title">Escolha uma opção</h3>
            <div className="popup-actions">
                <a href={linkgithub} target="_blank" rel="noopener noreferrer" className="popup-btn code-btn">
                    Código
                </a>
                <a href={linksite} target="_blank" rel="noopener noreferrer" className="popup-btn site-btn">
                    Site
                </a>
            </div>
          </div>
        </div>
      )}

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
          href={mainLink} 
          className="project-link" 
          onClick={handleMainClick}
          target={!hasBoth ? "_blank" : undefined}
          rel={!hasBoth ? "noopener noreferrer" : undefined}
          style={{ cursor: 'pointer' }}
        >
          Ver Projeto <span className="arrow">→</span>
        </a>
      </div>

    </div>
  );
};

export default ProjectItem;