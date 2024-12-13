import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { TechIcon } from './TechIcon';
import { resumeData } from '../data/resume';
import { ExpandedExperience } from './ExpandedExperience';
import { Architecture, Analytics } from '@mui/icons-material';

export const Experience: React.FC = () => {
  const [expandedStates, setExpandedStates] = useState<{
    [key: string]: { architecture: boolean; metrics: boolean };
  }>({});

  const handleToggleArchitecture = (index: number) => {
    setExpandedStates((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        architecture: !prev[index]?.architecture
      }
    }));
  };

  const handleToggleMetrics = (index: number) => {
    setExpandedStates((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        metrics: !prev[index]?.metrics
      }
    }));
  };

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
        Education
      </Typography>

      {resumeData.education.map((edu, index) => (
        <Paper key={index} sx={{ p: 3, mb: 2, bgcolor: 'background.paper' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6" color="primary.main">
              {edu.institution}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {edu.period}
            </Typography>
          </Box>
          <Typography variant="body1">{edu.degree}</Typography>
        </Paper>
      ))}

      <Box sx={{ mt: 4 }}>
        <Typography variant="h2" gutterBottom sx={{ 
          color: 'text.primary',
          '&::before': {
            content: '"## "',
            color: 'primary.main'
          }
        }}>
          Professional Experience
        </Typography>

        {resumeData.experience.map((exp, index) => (
          <Paper 
            key={index}
            component={motion.div}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            sx={{ p: 3, mb: 3, bgcolor: 'background.paper' }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="h6" color="primary.main">
                {exp.title} @ {exp.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.period}
              </Typography>
            </Box>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              {exp.location}
            </Typography>

            <Box sx={{ my: 2 }}>
              {exp.description.map((desc, i) => (
                <Typography 
                  key={i} 
                  variant="body2" 
                  sx={{ 
                    mb: 1,
                    pl: 2,
                    borderLeft: '2px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  {desc}
                </Typography>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {exp.techStack.map((tech) => (
                <TechIcon key={tech} tech={tech} />
              ))}
            </Box>

            {exp.expanded && (
              <ExpandedExperience
                expanded={exp.expanded}
                company={exp.company}
                showArchitecture={expandedStates[index]?.architecture || false}
                showMetrics={expandedStates[index]?.metrics || false}
                onToggleArchitecture={() => handleToggleArchitecture(index)}
                onToggleMetrics={() => handleToggleMetrics(index)}
              />
            )}
          </Paper>
        ))}
      </Box>
    </Box>
  );
}; 