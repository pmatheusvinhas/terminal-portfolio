import React from 'react';
import { Typography, Box, Paper, Grid, Avatar, useTheme } from '@mui/material';

const AboutSection: React.FC = () => {
  const theme = useTheme();

  return (
    <section id="about">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="center">
            <Avatar 
              alt="Paulo Vinhas" 
              src="/images/profile.jpg" 
              sx={{ 
                width: 220, 
                height: 220,
                border: `4px solid ${theme.palette.primary.main}`
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" color="primary">
            Paulo Vinhas
          </Typography>
          <Typography variant="h5" gutterBottom color="textSecondary">
            Engineering intelligent systems at the intersection of software, data, and AI
          </Typography>
          <Paper elevation={0} sx={{ p: 3, bgcolor: '#f5f9ff', borderRadius: 2, mt: 2 }}>
            <Typography variant="body1" paragraph>
              I build scalable, high-performance systems that solve complex problems across the entire technology stack. 
              My work combines robust backend architectures with thoughtful frontend experiences, underpinned by data 
              engineering and machine learning.
            </Typography>
            <Typography variant="body1">
              Currently pursuing a Master in Data Engineering at FIA Business School while developing open source 
              tools for AI applications and exploring Julia and Rust for performance-critical components.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutSection; 