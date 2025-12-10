import './styles.css';
import FilterCollapse from '../../components/atoms/filter';
import { useLanguage } from '../../context/LanguageContext';
import { projectMessages } from './texts';

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
        </section>
    );
};