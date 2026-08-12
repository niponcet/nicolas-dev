export interface Profile {
  name: string;
  role: string;
  tagline: string;
  mention: string;
  stack: string[];
  company: {
    name: string;
    role: string;
  };
  education: {
    institution: string;
    graduationDate: string;
  };
  status: {
    id: string;
    label: string;
  };
  location: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
  about: {
    paragraph1: string;
    paragraph2: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export type ProjectStatus = 'En producción' | 'Completado';

export interface Project {
  id: string; // e.g. PROJECT_01
  title: string;
  status: ProjectStatus;
  role: string;
  description: string;
  stack: string[];
}
