import { Skill, Project, Experience, SkillWithDetails, SkillCategory } from '../types';

// Skill data organized by categories
export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'TypeScript', level: 'EXPERT' },
      { name: 'Python', level: 'ADVANCED' },
      { name: 'Node.js', level: 'EXPERT' },
      { name: 'Julia', level: 'INTERMEDIATE' },
      { name: 'Rust', level: 'INTERMEDIATE' },
    ]
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 'EXPERT' },
      { name: 'Next.js', level: 'ADVANCED' },
      { name: 'Material-UI', level: 'ADVANCED' },
      { name: 'Responsive Design', level: 'EXPERT' },
    ]
  },
  {
    name: 'Backend & Infrastructure',
    skills: [
      { name: 'AWS', level: 'ADVANCED' },
      { name: 'Azure', level: 'INTERMEDIATE' },
      { name: 'Docker', level: 'ADVANCED' },
      { name: 'Kubernetes', level: 'INTERMEDIATE' },
      { name: 'API Design', level: 'EXPERT' },
    ]
  },
  {
    name: 'Data & AI',
    skills: [
      { name: 'PostgreSQL', level: 'ADVANCED' },
      { name: 'MongoDB', level: 'ADVANCED' },
      { name: 'Redis', level: 'INTERMEDIATE' },
      { name: 'Kafka', level: 'INTERMEDIATE' },
      { name: 'Machine Learning', level: 'INTERMEDIATE' },
      { name: 'LLM Integration', level: 'ADVANCED' },
    ]
  },
];

// Public projects for display
export const projects: Project[] = [
  {
    name: 'PromptVeil',
    description: 'Open-source framework for secure, efficient storage and retrieval of LLM conversations with hardware-accelerated security and token-aware compression.',
    technologies: ['Python', 'Julia', 'Rust', 'Machine Learning'],
    url: 'https://github.com/pmatheusvinhas/PromptVeil',
    isPublic: true,
    imageUrl: '/images/projects/promptveil.png',
  },
  {
    name: 'TokenCompression.jl',
    description: 'Julia package for efficient compression of token sequences using Byte Pair Encoding, optimized for LLM applications.',
    technologies: ['Julia', 'CUDA', 'Machine Learning'],
    url: 'https://github.com/pmatheusvinhas/TokenCompression.jl',
    isPublic: true,
    imageUrl: '/images/projects/tokencompression.png',
  },
  {
    name: 'Terminal CV',
    description: 'Modern portfolio with retro terminal aesthetics and interactive CLI experience.',
    technologies: ['React', 'TypeScript', 'Material-UI'],
    url: 'https://github.com/pmatheusvinhas/terminal-cv',
    isPublic: true,
    imageUrl: '/images/projects/terminalcv.png',
  },
];

// Work experience data
export const experiences: Experience[] = [
  {
    company: 'Tech Innovators Inc.',
    role: 'Senior Software Engineer',
    period: 'Jan 2022 - Present',
    description: 'Leading development of high-performance distributed systems and modern web applications. Architected systems handling 1000+ req/s with sub-200ms latency and 99.9% uptime.',
    technologies: ['TypeScript', 'React', 'Node.js', 'AWS', 'Kubernetes', 'PostgreSQL']
  },
  {
    company: 'AI Solutions Group',
    role: 'Software Developer',
    period: 'Mar 2019 - Dec 2021',
    description: 'Developed intelligent API integrations and data processing systems. Implemented optimization strategies that reduced resource utilization by 40%.',
    technologies: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'Docker', 'Machine Learning']
  },
  {
    company: 'Web Systems Ltd',
    role: 'Frontend Developer',
    period: 'Jun 2017 - Feb 2019',
    description: 'Created responsive, accessible web applications with modern JavaScript frameworks. Improved application performance by 35% through optimization.',
    technologies: ['JavaScript', 'React', 'CSS', 'Webpack', 'Responsive Design']
  },
];

// Detailed skill information including projects and experiences
const skillDetailsMap: Record<string, SkillWithDetails> = {
  'TypeScript': {
    name: 'TypeScript',
    level: 'EXPERT',
    projects: [
      {
        name: 'Terminal CV',
        description: 'Modern portfolio with retro terminal aesthetics',
        isPublic: true,
        url: 'https://github.com/pmatheusvinhas/terminal-cv'
      },
      {
        name: 'Enterprise Dashboard',
        description: 'Real-time analytics platform for enterprise clients',
        isPublic: false
      },
    ],
    experiences: [
      {
        company: 'Tech Innovators Inc.',
        role: 'Senior Software Engineer',
        description: 'Used TypeScript to build scalable frontend applications and type-safe backend services.'
      },
    ]
  },
  'React': {
    name: 'React',
    level: 'EXPERT',
    projects: [
      {
        name: 'Terminal CV',
        description: 'Interactive portfolio with terminal-like interface',
        isPublic: true,
        url: 'https://github.com/pmatheusvinhas/terminal-cv'
      },
      {
        name: 'Client Portal',
        description: 'Secure client-facing dashboard with real-time updates',
        isPublic: false
      },
    ],
    experiences: [
      {
        company: 'Tech Innovators Inc.',
        role: 'Senior Software Engineer',
        description: 'Developed complex React applications with custom hooks and optimized rendering.'
      },
      {
        company: 'Web Systems Ltd',
        role: 'Frontend Developer',
        description: 'Built responsive UIs with React and implemented state management solutions.'
      },
    ]
  },
  'Julia': {
    name: 'Julia',
    level: 'INTERMEDIATE',
    projects: [
      {
        name: 'TokenCompression.jl',
        description: 'Julia package for token sequence compression with BPE',
        isPublic: true,
        url: 'https://github.com/pmatheusvinhas/TokenCompression.jl'
      },
      {
        name: 'PromptVeil',
        description: 'Framework with Julia-powered compression engine',
        isPublic: true,
        url: 'https://github.com/pmatheusvinhas/PromptVeil'
      },
    ],
    experiences: [
      {
        company: 'AI Solutions Group',
        role: 'Software Developer',
        description: 'Leveraged Julia for high-performance data processing components.'
      },
    ]
  },
  // Add more detailed skill information as needed
};

// Function to get skill details by name
export const getSkillDetails = (skillName: string): SkillWithDetails => {
  return skillDetailsMap[skillName] || {
    name: skillName,
    level: 'INTERMEDIATE',
    projects: [],
    experiences: []
  };
}; 