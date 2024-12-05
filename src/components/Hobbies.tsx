import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Pets, RadioOutlined, SelfImprovement } from '@mui/icons-material';
import { resumeData } from '../data/resume';

const HobbyIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'radio':
      return <RadioOutlined sx={{ fontSize: 40 }} />;
    case 'meditation':
      return <SelfImprovement sx={{ fontSize: 40 }} />;
    case 'pets':
      return <Pets sx={{ fontSize: 40 }} />;
    default:
      return null;
  }
};

export const Hobbies: React.FC = () => {
  return (
    <Box component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h2" gutterBottom sx={{ 
        color: 'text.primary',
        '&::before': {
          content: '"## "',
          color: 'primary.main'
        }
      }}>
        Beyond Code
      </Typography>

      <Grid container spacing={3}>
        {Object.entries(resumeData.hobbies).map(([key, hobby], index) => (
          <Grid item xs={12} md={4} key={key}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              style={{ height: '100%' }}
            >
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  minHeight: 250,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    '& .hobby-icon': {
                      transform: 'scale(1.1)',
                    },
                    '& .hobby-background': {
                      opacity: 0.1,
                    }
                  }
                }}
              >
                <Box
                  className="hobby-background"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.05,
                    transition: 'opacity 0.3s ease',
                    background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }}
                />
                
                <Box
                  className="hobby-icon"
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <HobbyIcon type={hobby.icon} />
                </Box>

                <Typography variant="h6" gutterBottom color="primary.main">
                  {hobby.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {hobby.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}; 