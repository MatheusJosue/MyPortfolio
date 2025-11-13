export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'Em Desenvolvimento' | 'Concluído';
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  level?: 'Básico' | 'Intermediário' | 'Avançado' | 'Expert';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar?: string;
}
