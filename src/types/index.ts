export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
  expandedFeatures?: {
    showArchitecture?: boolean;
    showMetrics?: boolean;
    showDiagrams?: boolean;
  };
  expanded?: ExpandedExperience;
  atsHighlights?: string[];
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

export interface ArchitectureDiagram {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ArchitectureComponent {
  name: string;
  description: string;
  techDetails: string;
}

export interface TechnicalChallenge {
  problem: string;
  solution: string;
  outcome: string;
}

export interface MetricItem {
  metric: string;
  value: string;
  context?: string;
  growth?: string;
}

export interface ExpandedExperience {
  architecture: {
    overview: string;
    diagrams?: ArchitectureDiagram[];
    components: ArchitectureComponent[];
    challenges: TechnicalChallenge[];
  };
  metrics: {
    business: MetricItem[];
    technical: MetricItem[];
    scale: MetricItem[];
  };
}

export interface ATSFormat {
  sections: {
    summary: string[];
    expertise: {
      [category: string]: string[];
    };
    achievements: string[];
  };
}

export interface ExpandedExperienceProps {
  expanded: {
    architecture: {
      overview: string;
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
    metrics: {
      business: Array<{
        metric: string;
        value: string;
        context: string;
        growth?: string;
      }>;
      technical: Array<{
        metric: string;
        value: string;
        context: string;
        growth?: string;
      }>;
      scale: Array<{
        metric: string;
        value: string;
        context: string;
        growth?: string;
      }>;
    };
  };
  company: string;
  showArchitecture: boolean;
  showMetrics: boolean;
  onToggleArchitecture: () => void;
  onToggleMetrics: () => void;
} 