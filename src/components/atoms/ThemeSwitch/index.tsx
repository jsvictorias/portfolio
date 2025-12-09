import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { getThemeLabel, isDarkTheme } from './helpers';
import { LightSun, DarkMoon } from './constants';
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
          <DarkMoon />
        </span>
        <span className="theme-switch__icon theme-switch__icon--light">
          <LightSun />
        </span>
      </div>
    </button>
  );
};

export default ThemeSwitch;
