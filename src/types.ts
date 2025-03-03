// Define types for type safety

export type SkillLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillWithDetails extends Skill {
  projects: Array<{
    name: string;
    description: string;
    isPublic: boolean;
    url?: string;
  }>;
  experiences: Array<{
    company: string;
    role: string;
    description: string;
  }>;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  isPublic: boolean;
  imageUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
} 