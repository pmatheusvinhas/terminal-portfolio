import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Chip, Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { skillCategories, getSkillDetails } from '../data/portfolioData';
import { SkillLevel, SkillWithDetails } from '../types';
import Link from '@mui/material/Link';

// Skill level mapping
const skillLevelLabels: Record<SkillLevel, string> = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
  EXPERT: 'Expert',
};

const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillWithDetails | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSkillClick = (skillName: string) => {
    const skillDetails = getSkillDetails(skillName);
    setSelectedSkill(skillDetails);
    setModalOpen(true);
  };

  return (
    <section id="skills">
      <Typography variant="h4" component="h2" gutterBottom>
        Technical Skills
      </Typography>
      
      {skillCategories.map((category) => (
        <Box key={category.name} mb={4}>
          <Typography variant="h5" component="h3" gutterBottom>
            {category.name}
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {category.skills.map(skill => (
              <Chip
                key={skill.name}
                label={`${skill.name} • ${skillLevelLabels[skill.level]}`}
                onClick={() => handleSkillClick(skill.name)}
                clickable
                color="primary"
                variant="outlined"
                sx={{
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main + '22',
                    transform: 'translateY(-2px)',
                  },
                  my: 0.5,
                }}
              />
            ))}
          </Box>
        </Box>
      ))}

      {/* Skill Detail Modal */}
      <Dialog 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
        maxWidth="md" 
        fullWidth
        fullScreen={isMobile}
      >
        {selectedSkill && (
          <>
            <DialogTitle sx={{ 
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              py: 2
            }}>
              {selectedSkill.name} • {skillLevelLabels[selectedSkill.level]}
            </DialogTitle>
            <DialogContent dividers>
              <Box mb={3}>
                <Typography variant="h6" gutterBottom>Related Projects</Typography>
                {selectedSkill.projects.length > 0 ? (
                  <Grid container spacing={2}>
                    {selectedSkill.projects
                      .filter(project => project.isPublic)
                      .map(project => (
                        <Grid item xs={12} sm={6} key={project.name}>
                          <Box p={2} border="1px solid #eee" borderRadius={2} sx={{
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }
                          }}>
                            <Typography variant="subtitle1" component="h4">
                              {project.url ? (
                                <Link 
                                  href={project.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  sx={{ 
                                    color: theme.palette.primary.main,
                                    textDecoration: 'none',
                                    '&:hover': {
                                      textDecoration: 'underline'
                                    }
                                  }}
                                >
                                  {project.name}
                                </Link>
                              ) : (
                                project.name
                              )}
                            </Typography>
                            <Typography variant="body2">{project.description}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    {selectedSkill.projects.some(p => !p.isPublic) && (
                      <Grid item xs={12}>
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 1, fontStyle: 'italic' }}>
                          + Additional private projects utilizing {selectedSkill.name}
                        </Typography>
                      </Grid>
                    )}
                  </Grid>
                ) : (
                  <Typography variant="body2" color="textSecondary">
                    No public projects available for {selectedSkill.name}
                  </Typography>
                )}
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>Professional Experience</Typography>
                {selectedSkill.experiences.length > 0 ? (
                  selectedSkill.experiences.map(exp => (
                    <Box key={`${exp.company}-${exp.role}`} mb={2} p={2} bgcolor="#f9f9f9" borderRadius={2}>
                      <Typography variant="subtitle1" component="h4" fontWeight="bold">
                        {exp.role} at {exp.company}
                      </Typography>
                      <Typography variant="body2">{exp.description}</Typography>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2" color="textSecondary">
                    No professional experience details available for {selectedSkill.name}
                  </Typography>
                )}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button 
                onClick={() => setModalOpen(false)}
                variant="contained"
                color="primary"
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </section>
  );
};

export default SkillsSection; 