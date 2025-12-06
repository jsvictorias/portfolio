import { useLanguage } from "../../../context/LanguageContext";
import { navbarMessages } from "./texts"; 
import { MenuItem } from "./props";

export const scrollToSection = (sectionId: string): void => {
  if (typeof window === "undefined") return;

  const normalizedId = sectionId.startsWith("#")
    ? sectionId.slice(1)
    : sectionId;

  const element = document.getElementById(normalizedId);

  const hash = `#${normalizedId}`;
  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

/**
 * Retorna os itens de menu já traduzidos
 * de acordo com o idioma atual do contexto.
 */
export const useMenuItems = (): MenuItem[] => {
  const { getT } = useLanguage();
  const t = getT(navbarMessages); // t<'aboutMe' | 'education' | ...>

  const items: MenuItem[] = [
    { id: "aboutMe",    label: t("aboutMe") },
    { id: "education",  label: t("education") },
    { id: "projects",   label: t("projects") },
    { id: "curriculum", label: t("curriculum") },
  ];

  return items;
};