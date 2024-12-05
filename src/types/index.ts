export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
}

export interface Project {
  title: string;
  role: string;
  description: string[];
  techStack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface GitHubStats {
  totalContributions: number;
  repositories: number;
  followers: number;
  topLanguages: Array<{
    name: string;
    percentage: number;
    color: string;
  }>;
}

export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
}

export interface ProjectDetails extends Project {
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  metrics?: {
    users?: number;
    requests?: number;
    uptime?: number;
    performance?: number;
  };
  status: 'completed' | 'in-progress' | 'archived';
} 