import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { TechIcon } from './TechIcon';
import { resumeData } from '../data/resume';

export const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <Box component={motion.div} 
      variants={container} 
      initial="hidden" 
      animate="show"
      sx={{ my: 4 }}
    >
      <Typography variant="h2" gutterBottom sx={{ 
        color: 'text.primary',
        '&::before': {
          content: '"## "',
          color: 'primary.main'
        }
      }}>
        Technical Skills
      </Typography>

      <Grid container spacing={3}>
        {Object.entries(resumeData.skills).map(([category, skills]) => (
          <Grid item xs={12} md={6} key={category}>
            <Paper 
              component={motion.div}
              variants={item}
              sx={{ 
                p: 3,
                height: '100%',
                bgcolor: 'background.paper',
                '&:hover': {
                  borderColor: 'primary.main',
                  borderWidth: 1,
                  borderStyle: 'solid',
                }
              }}
            >
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  color: 'primary.main',
                  '&::before': {
                    content: '"$ "',
                    color: 'text.secondary'
                  }
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography>

              <Box sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                alignItems: 'center'
              }}>
                {skills.map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      bgcolor: 'background.default',
                      p: 1,
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: 'background.paper',
                      }
                    }}
                  >
                    <TechIcon tech={skill} />
                    <Typography variant="body2">
                      {skill}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}; 