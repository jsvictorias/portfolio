import { useLanguage } from "../../../context/LanguageContext";
import { navbarMessages, NavbarKey } from "./texts";

export interface MenuItem {
  id: string;
  label: string;
}

export const scrollToSection = (sectionId: string): void => {
  if (typeof window === "undefined") return;

  const normalizedId = sectionId.startsWith("#")
    ? sectionId.slice(1)
    : sectionId;

  const element = document.getElementById(normalizedId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.pushState(null, "", `#${normalizedId}`);
  }
};
export const useMenuItems = (): MenuItem[] => {
  const { getT } = useLanguage();
  const t = getT(navbarMessages);

  const items: MenuItem[] = [
    { id: "about",      label: t("aboutMe") },
    { id: "education",  label: t("education") },
    { id: "projects",   label: t("projects") },
    { id: "contact",    label: t("curriculum") },
  ];

  return items;
};