import React, { useState, useMemo } from 'react';
import './styles.css';
import FilterCollapse from '../../components/atoms/filter';
import { useLanguage } from '../../context/LanguageContext';
import { projectMessages } from './texts';
import ProjectItem from '../../components/molecules/project-item';
import { projects } from './projects';

interface ProjectData {
    id: number;
    titulo: string;
    translationKey?: string;
    techs: string[];
    "link-github": string;
    "link-site"?: string;
    descrição: string;
    type: string;
    img: string;
}
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
        // @ts-ignore - Ignora verificação estrita na conversão do objeto JSON
        const allProjects: ProjectData[] = Object.values(projects).flat();

        if (activeFilters.length === 0) {
            return allProjects;
        }
        return allProjects.filter((project) =>
            activeFilters.includes(project.type)
        );
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
                <FilterCollapse onFilterChange={handleFilter} />
            </div>

            <div className="projects-grid-wrapper">
                <div className="projects-grid">
                    {currentProjects.map((proj, index) => {
                        // LÓGICA DE TRADUÇÃO AQUI:
                        // 1. Tenta pegar a translationKey
                        // 2. Se existir, usa a função t()
                        // 3. Se não existir chave ou tradução, usa proj.titulo como fallback
                        const translatedTitle = proj.translationKey
                            ? t(proj.translationKey)
                            : proj.titulo;

                        return (
                            <div className="grid-cell" key={proj.id || index}>
                                <ProjectItem
                                    img={proj['img']}

                                    // Usa o título traduzido
                                    title={translatedTitle}

                                    techs={(proj.techs || []).join(' * ')}
                                    linksite={proj['link-site']}
                                    linkgithub={proj['link-github']}
                                    description={proj['descrição']}
                                    id={proj.type as any}
                                />
                            </div>
                        );
                    })}
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