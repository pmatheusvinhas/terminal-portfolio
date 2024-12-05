import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Link,
  useTheme
} from '@mui/material';
import { 
  Launch, 
  GitHub, 
  Close,
  People,
  Speed,
  Timer
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectDetails } from '../types';
import { resumeData } from '../data/resume';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const theme = useTheme();

  const handleProjectClick = (project: ProjectDetails) => {
    setSelectedProject(project);
  };

  return (
    <>
      <Box component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom>Featured Projects</Typography>
        
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => (
            <Grid item xs={12} md={6} key={project.title}>
              <Paper
                component={motion.div}
                whileHover={{ 
                  y: -8,
                  boxShadow: theme.shadows[8]
                }}
                onClick={() => handleProjectClick(project as ProjectDetails)}
                sx={{ 
                  p: 3, 
                  cursor: 'pointer',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {project.imageUrl && (
                  <Box
                    component="img"
                    src={project.imageUrl}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      borderRadius: 1,
                      mb: 2
                    }}
                  />
                )}

                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {project.role}
                </Typography>

                <Typography variant="body2" paragraph>
                  {project.description[0]}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.techStack.map((tech) => (
                    <Chip 
                      key={tech} 
                      label={tech} 
                      size="small"
                      sx={{ borderRadius: 1 }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog 
        open={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {selectedProject.title}
              <IconButton onClick={() => setSelectedProject(null)}>
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {selectedProject.imageUrl && (
                <Box
                  component="img"
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  sx={{
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 2
                  }}
                />
              )}

              <Typography variant="h6" color="primary" gutterBottom>
                {selectedProject.role}
              </Typography>

              <Box sx={{ mb: 3 }}>
                {selectedProject.description.map((desc, index) => (
                  <Typography key={index} paragraph>
                    • {desc}
                  </Typography>
                ))}
              </Box>

              {selectedProject.metrics && (
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {selectedProject.metrics.users && (
                    <Grid item xs={4}>
                      <Paper sx={{ p: 2, textAlign: 'center' }}>
                        <People color="primary" />
                        <Typography variant="h6">{selectedProject.metrics.users}+</Typography>
                        <Typography variant="body2">Active Users</Typography>
                      </Paper>
                    </Grid>
                  )}
                  {selectedProject.metrics.requests && (
                    <Grid item xs={4}>
                      <Paper sx={{ p: 2, textAlign: 'center' }}>
                        <Speed color="primary" />
                        <Typography variant="h6">{selectedProject.metrics.requests}M+</Typography>
                        <Typography variant="body2">Daily Requests</Typography>
                      </Paper>
                    </Grid>
                  )}
                  {selectedProject.metrics.uptime && (
                    <Grid item xs={4}>
                      <Paper sx={{ p: 2, textAlign: 'center' }}>
                        <Timer color="primary" />
                        <Typography variant="h6">{selectedProject.metrics.uptime}%</Typography>
                        <Typography variant="body2">Uptime</Typography>
                      </Paper>
                    </Grid>
                  )}
                </Grid>
              )}

              <Box sx={{ display: 'flex', gap: 2 }}>
                {selectedProject.githubUrl && (
                  <Link href={selectedProject.githubUrl} target="_blank">
                    <IconButton color="primary">
                      <GitHub />
                    </IconButton>
                  </Link>
                )}
                {selectedProject.demoUrl && (
                  <Link href={selectedProject.demoUrl} target="_blank">
                    <IconButton color="primary">
                      <Launch />
                    </IconButton>
                  </Link>
                )}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
}; 