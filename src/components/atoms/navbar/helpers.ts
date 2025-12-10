import { useLanguage } from "../../../context/LanguageContext";
import { navbarMessages } from "./texts";

export interface MenuItem {
  id: string;
  label: string;
}
const easeInOutCubic = (t: number): number => {
  return t < 0.5 
    ? 4 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const scrollToSection = (sectionId: string): void => {
  if (typeof window === "undefined") return;

  const normalizedId = sectionId.startsWith("#")
    ? sectionId.slice(1)
    : sectionId;

  const element = document.getElementById(normalizedId);
  if (!element) return;

  const header = document.querySelector(".container-navbar") as HTMLElement | null;
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  
  const elementPosition = element.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const offsetPosition = elementPosition + startPosition - headerHeight - 16;
  const distance = offsetPosition - startPosition;
  
  let startTime: number | null = null;
  const duration = 1000;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    
    const progress = Math.min(timeElapsed / duration, 1);
    
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + (distance * ease));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.history.pushState(null, "", `#${normalizedId}`);
    }
  };

  requestAnimationFrame(animation);
};

export const useMenuItems = (): MenuItem[] => {
  const { getT } = useLanguage();
  const t = getT(navbarMessages);

  const items: MenuItem[] = [
    { id: "aboutMe",      label: t("aboutMe") },
    { id: "education",  label: t("education") },
    { id: "projects",   label: t("projects") },
    { id: "curriculum",    label: t("curriculum") },
  ];

  return items;
};