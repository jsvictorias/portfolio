import './styles.css';
import FilterCollapse from '../../components/atoms/filter';
import { useLanguage } from '../../context/LanguageContext';
import { projectMessages } from './texts';
import ProjectItem from '../../components/molecules/project-item';

export const Projects = () => {
    const { getT } = useLanguage();
    const t = getT(projectMessages);

    const title = t('title');

    const handleFilter = (ids: string[]) => {
        console.log("Filtros ativos:", ids);
    };
    return (
        <section id="projects" className="container-projects">
            <h1 className='title-projects'>{title}</h1>
            <div className="filter-container">
                <FilterCollapse onFilterChange={handleFilter}/>
            </div>
            <div className="projects-grid">
                <ProjectItem 
                    img="/img/mock_image.png" 
                    title="Título do projeto" 
                    techs="React * SaaS * Styled Components" 
                    linksite="https://meuprojeto.com"
                    linkgithub="https://meuprojeto.com"
                    description="Descrição do Projeto"
                    id="frontend"
                />
            </div>
        </section>
    );
};