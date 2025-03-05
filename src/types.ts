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

export interface ArchitectureDiagram {
  title: string;
  description: string;
  imageUrl?: string;
  type: 'flow' | 'architecture' | 'data';
  guidelines?: string[];
}

export interface ExpandedExperience {
  title: string;
  description: string;
  role: string;
  period: string;
  company: string;
  metrics: Array<{
    metric: string;
    value: string;
    context: string;
    growth?: string;
  }>;
  architecture: {
    overview: string;
    diagrams?: ArchitectureDiagram[];
    components: Array<{
      name: string;
      description: string;
      techDetails: string;
    }>;
    challenges: Array<{
      problem: string;
      solution: string;
      outcome: string;
    }>;
  };
} 