import React from 'react';
import './style.css';
import { useLanguageSwitch } from "./helpers";

const LanguageSwitch: React.FC = () => {
  const { language, toggleLanguage, switchClass } = useLanguageSwitch();

  return (
    <button
      type="button"
      className={`language-switch ${switchClass}`}
      onClick={toggleLanguage}
    >
      <div className="language-switch__inner">
        <div className="language-switch__thumb" />
        
        <span className="language-switch__icon language-switch__icon--dark">
          PT
        </span>

        <span className="language-switch__icon language-switch__icon--light">
          EN
        </span>
      </div>
    </button>
  );
};

export default LanguageSwitch;
