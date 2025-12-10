import React, { useState } from 'react';
import { useCategories } from './props';          // ← ajustado
import { toggleFilterById } from './helpers';
import { useLanguage } from '../../../context/LanguageContext';
import { filterMessages } from './texts';
import './styles.css';

interface FilterCollapseProps {
  onFilterChange?: (selectedIds: string[]) => void;
}

const FilterCollapse: React.FC<FilterCollapseProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const { getT } = useLanguage();
  const t = getT(filterMessages);

  const filtro = t('filtro');
  const categories = useCategories();            // ← categorias já traduzidas

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectCategory = (id: string) => {
    const newSelection = toggleFilterById(selectedIds, id);
    setSelectedIds(newSelection);

    if (onFilterChange) {
      onFilterChange(newSelection);
    }
  };

  return (
    <div className="filter-wrapper">
      <div
        className={`filter-header ${isOpen ? 'open' : ''}`}
        onClick={handleToggleOpen}
        role="button"
        aria-expanded={isOpen}
      >
        <span>{filtro}</span>
        <span
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
          }}
        >
          ▼
        </span>
      </div>

      <div className={`filter-collapse ${isOpen ? 'open' : ''}`}>
        <div className="filter-content">
          <ul className="filter-list">
            {categories.map((category) => {
              const isSelected = selectedIds.includes(category.id);

              return (
                <li
                  key={category.id}
                  className={`filter-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectCategory(category.id)}
                >
                  {category.label}
                  {isSelected && <span>⚬</span>}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterCollapse;
