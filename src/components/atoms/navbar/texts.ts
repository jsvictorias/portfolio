export const navbarMessages = {
  pt: {
    aboutMe: "Sobre Mim",
    education: "Formação",
    projects: "Projetos",
    curriculum: "Currículo",
  },
  en: {
    aboutMe: "About Me",
    education: "Education",
    projects: "Projects",
    curriculum: "Curriculum",
  },
} as const;

export type NavbarKey = keyof typeof navbarMessages["pt"]; 
