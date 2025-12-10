import React, { useState, useMemo } from 'react';
import './styles.css';
import FilterCollapse from '../../components/atoms/filter';
import { useLanguage } from '../../context/LanguageContext';
import { projectMessages } from './texts';
import ProjectItem from '../../components/molecules/project-item';
import { projects } from './projects'; // Importando seu JSON

const ArrowIcon = ({ rotated }: { rotated?: boolean }) => (
  <svg 
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: rotated ? 'rotate(180deg)' : 'none' }}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const Projects = () => {
    const { getT } = useLanguage();
    const t = getT(projectMessages);
    const title = t('title');

    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    const ITEMS_PER_PAGE = 6;

    const allProjectsList = useMemo(() => {
        let list: any[] = [];
        
        const keysToSearch = activeFilters.length > 0 
            ? activeFilters 
            : Object.keys(projects);

        keysToSearch.forEach(key => {
            // @ts-ignore - Acessando chaves dinâmicas do JSON
            if (projects[key]) {
                // @ts-ignore
                list = [...list, ...projects[key]];
            }
        });

        return list;
    }, [activeFilters]);

    const totalPages = Math.ceil(allProjectsList.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = allProjectsList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleFilter = (ids: string[]) => {
        setActiveFilters(ids);
        setCurrentPage(1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    return (
        <section id="projects" className="container-projects">
            <h1 className='title-projects'>{title}</h1>
            
            <div className="filter-container">
                <FilterCollapse onFilterChange={handleFilter}/>
            </div>
        
            <div className="projects-grid-wrapper">
                <div className="projects-grid">
                    {currentProjects.map((proj, index) => (
                        <div className="grid-cell" key={proj.id || index}>
                            <ProjectItem 
                                img="/img/mock_image.png" 
                                title={proj.titulo} 
                                techs={(proj.techs || []).join(' * ')} 
                                
                                linksite={proj['link-site']}
                                linkgithub={proj['link-github']}
                                description={proj['descrição']}
                                id={proj['type']}
                            />
                        </div>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="pagination-controls">
                        <span className="page-indicator">
                            {currentPage} / {totalPages}
                        </span>
                        
                        <button 
                            onClick={handlePrevPage} 
                            disabled={currentPage === 1}
                            className="nav-btn"
                        >
                            <ArrowIcon rotated />
                        </button>
                        
                        <button 
                            onClick={handleNextPage} 
                            disabled={currentPage === totalPages}
                            className="nav-btn"
                        >
                            <ArrowIcon />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};