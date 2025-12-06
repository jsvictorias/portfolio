import { useState } from "react";

export const useLanguageSwitch = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const switchClass = language === 'pt' ? 'language-switch--light' : 'language-switch--dark';

  return {
    language,
    toggleLanguage,
    switchClass,
  };
};
