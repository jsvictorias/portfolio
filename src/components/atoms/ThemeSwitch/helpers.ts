import type { Theme } from "../../../context/ThemeContext";

export const isDarkTheme = (theme: Theme) => theme === 'dark';

export const getThemeLabel = (theme: Theme) =>
  theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro';
