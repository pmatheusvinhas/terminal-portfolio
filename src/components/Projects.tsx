import React from 'react';
import { Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface Project {
  url?: string;
  // adicionar outras propriedades necessárias
}

const projects: Project[] = [
  // definir projetos aqui
];

export const Projects: React.FC = () => {
  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Grid container spacing={2}>
      {projects.map((project: Project, index: number) => (
        <Grid item xs={12} md={6} key={index}>
          <Paper
            component={motion.div}
            onClick={() => project.url && handleProjectClick(project.url)}
            sx={{
              p: 3,
              cursor: project.url ? 'pointer' : 'default',
              '&:hover': project.url ? {
                transform: 'translateY(-4px)',
                transition: 'transform 0.2s ease-in-out'
              } : {}
            }}
          >
            {/* Conteúdo do projeto */}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}; 