import React from 'react';
import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { useTheme } from '../../../context/ThemeContext';
import { getThemeLabel, isDarkTheme } from './helpers';
import './style.css';

const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const dark = isDarkTheme(theme);

  return (
    <button
      type="button"
      className={`theme-switch theme-switch--${theme}`}
      onClick={toggleTheme}
      aria-label={getThemeLabel(theme)}
      aria-pressed={dark}
    >
      <div className="theme-switch__inner">
        <div className="theme-switch__thumb" />
        <span className="theme-switch__icon theme-switch__icon--dark">
          <MdOutlineDarkMode />
        </span>
        <span className="theme-switch__icon theme-switch__icon--light">
          <MdLightMode />
        </span>
      </div>
    </button>
  );
};

export default ThemeSwitch;
