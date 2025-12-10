export const navbarMessages = {
  pt: {
    aboutMe: "Sobre Mim",
    education: "Formação",
    projects: "Projetos",
    curriculum: "Artigos",
  },
  en: {
    aboutMe: "About Me",
    education: "Education",
    projects: "Projects",
    curriculum: "Articles",
  },
} as const;

export type NavbarKey = keyof typeof navbarMessages["pt"];