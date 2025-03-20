export interface Profile {
  name: string;
  title: string;
  summary: string;
  avatar: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  projectAcceptanceDate: string;
  availableForProjects: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  githubLink?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
}
export interface EmailFormData {
  email: string;
  subject: string;
  name: string;
  message: string;
}
