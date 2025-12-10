export interface ProjectItemProps {
  img: string;
  title: string;
  techs: string;
  linksite?: string;
  linkgithub: string;
  description?: string;
  id: 'frontend' | 'mobile' | 'design' | 'quantica' | 'machine';
}