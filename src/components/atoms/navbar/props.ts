export interface MenuItem {
  id: string;     
  label: string;   
};

export const MENU_ITEMS: MenuItem[] = [
  { id: "AboutMe", label: "Sobre mim" },
  { id: "Education", label: "Formação" },
  { id: "Projects", label: "Projetos" },
  { id: "Curriculum", label: "Currículo" },
];