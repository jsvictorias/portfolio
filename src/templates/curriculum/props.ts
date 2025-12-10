export interface Article {
  id: number;
  titulo: string;
  descrição: string;
  techs: string[];
  "link-github": string;
  type: string;
  date?: string;
}

export interface Star {
  id: number;
  left: string;
  top: string;
  delay: string;
  sizeClass: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (page: number) => void;
}