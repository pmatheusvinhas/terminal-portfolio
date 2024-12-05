import React from 'react';
import { Box, Tooltip } from '@mui/material';
import {
  Language,
  Storage,
  Cloud,
  Code,
  Build,
  Assessment
} from '@mui/icons-material';

const techIcons: Record<string, string> = {
  // Languages & Frameworks
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  FastAPI: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  
  // Cloud & DevOps
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  Azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  
  // Databases
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  CosmosDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
};

interface TechIconProps {
  tech: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ tech, size = 24 }) => {
  const iconUrl = techIcons[tech];

  // Fallback icons for technologies without specific icons
  const getFallbackIcon = (tech: string) => {
    if (tech.includes('API') || tech.includes('REST')) return <Code />;
    if (tech.includes('Cloud') || tech.includes('AWS') || tech.includes('Azure')) return <Cloud />;
    if (tech.includes('SQL') || tech.includes('DB')) return <Storage />;
    if (tech.includes('Testing') || tech.includes('TDD') || tech.includes('BDD')) return <Assessment />;
    if (tech.includes('DevOps') || tech.includes('CI/CD')) return <Build />;
    return <Language />;
  };

  if (!iconUrl) {
    return (
      <Tooltip title={tech}>
        <Box
          sx={{
            width: size,
            height: size,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.main',
          }}
        >
          {getFallbackIcon(tech)}
        </Box>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={tech}>
      <Box
        component="img"
        src={iconUrl}
        alt={tech}
        className="tech-icon"
        sx={{
          width: size,
          height: size,
          filter: 'grayscale(0.2)',
          transition: 'filter 0.3s ease',
          '&:hover': {
            filter: 'grayscale(0)',
          },
        }}
      />
    </Tooltip>
  );
}; 