import React from 'react';
import { Typography, Box, Chip, Card, CardContent, Divider, useTheme } from '@mui/material';
import { experiences } from '../data/portfolioData';

const ExperienceSection: React.FC = () => {
  const theme = useTheme();

  return (
    <section id="experience">
      <Typography variant="h4" component="h2" gutterBottom>
        Professional Experience
      </Typography>
      
      {experiences.map((exp, index) => (
        <Card 
          key={index} 
          sx={{ 
            mb: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h3" color="primary">
              {exp.role}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {exp.company} • {exp.period}
            </Typography>
            <Typography variant="body1" paragraph>
              {exp.description}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" flexWrap="wrap" gap={1}>
              {exp.technologies.map(tech => (
                <Chip 
                  key={tech} 
                  label={tech} 
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.primary.main + '22',
                    color: theme.palette.primary.dark,
                    fontWeight: 500
                  }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default ExperienceSection; 