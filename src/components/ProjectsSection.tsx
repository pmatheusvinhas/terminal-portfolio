import React from 'react';
import { Typography, Box, Card, CardContent, CardMedia, CardActions, Button, Chip, Grid, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projects } from '../data/portfolioData';

const ProjectsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <section id="projects">
      <Typography variant="h4" component="h2" gutterBottom>
        Featured Projects
      </Typography>
      
      <Grid container spacing={3}>
        {projects.filter(project => project.isPublic).map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              {project.imageUrl && (
                <CardMedia
                  component="img"
                  height="160"
                  image={project.imageUrl}
                  alt={project.name}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={0.5} mt={2}>
                  {project.technologies.map(tech => (
                    <Chip 
                      key={tech} 
                      label={tech} 
                      size="small"
                      sx={{
                        backgroundColor: theme.palette.secondary.main + '22',
                        color: theme.palette.secondary.dark,
                        fontSize: '0.7rem',
                        height: 24,
                        mr: 0.5,
                        mb: 0.5
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ padding: 2, pt: 0 }}>
                {project.url && (
                  <Button 
                    size="small" 
                    color="primary"
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default ProjectsSection; 