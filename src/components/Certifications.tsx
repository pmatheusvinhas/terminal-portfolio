import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { School } from '@mui/icons-material';

export const Certifications: React.FC = () => {
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
        Certifications
      </Typography>

      <Grid container spacing={2}>
        {resumeData.certifications.map((cert, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              component={motion.div}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                '&:hover': {
                  borderColor: 'primary.main',
                  borderWidth: 1,
                  borderStyle: 'solid',
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <School color="primary" />
                <Typography variant="h6" color="primary.main">
                  {cert.name}
                </Typography>
              </Box>
              
              <Typography variant="body2" color="text.secondary">
                {cert.issuer}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" sx={{ mt: 'auto' }}>
                {cert.year}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}; 