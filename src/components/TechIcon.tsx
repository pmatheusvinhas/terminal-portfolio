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
  Microservices: 'https://www.svgrepo.com/show/8321/networking.svg',
  
  // Cloud & DevOps
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  Azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'GitHub Actions': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Azure DevOps': 'https://www.svgrepo.com/show/448271/azure-devops.svg',
  
  // Databases
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  CosmosDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',

  // IoT & Protocols
  MQTT: 'https://raw.githubusercontent.com/mqtt/mqttorg-graphics/a8eafc36d74023fb1fadcc2e82d353189071f2dd/svg/mqtt-icon-solid.svg',
  IoT: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
  
  // Operating Systems
  Fedora: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg',
  Debian: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg',
  Ubuntu: 'https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg',
  Windows: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
  'Raspberry Pi OS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
  FreeRTOS: 'https://icon.icepanel.io/AWS/svg/Internet-of-Things/FreeRTOS.svg'
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