
/**
 * Faz navegação por hash e scroll suave até a section.
 * Espera que exista um elemento com id="AboutMe", "Education", etc.
 */
export const scrollToSection = (sectionId: string): void => {
  if (typeof window === "undefined") return;

  const normalizedId = sectionId.startsWith("#")
    ? sectionId.slice(1)
    : sectionId;

  const element = document.getElementById(normalizedId);

  // Atualiza o hash da URL (navegação estilo react)
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
