import React from 'react';
import {
  Box,
  Typography,
  Collapse,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { Architecture, Analytics, Speed, TrendingUp, BusinessCenter, Memory } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { ExpandedExperience as ExpandedExperienceType } from '../types';

interface ExpandedExperienceProps {
  expanded: ExpandedExperienceType;
  showArchitecture: boolean;
  showMetrics: boolean;
  onToggleArchitecture: () => void;
  onToggleMetrics: () => void;
}

export const ExpandedExperience: React.FC<ExpandedExperienceProps> = ({
  expanded,
  showArchitecture,
  showMetrics,
  onToggleArchitecture,
  onToggleMetrics,
}) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            startIcon={<Architecture />}
            onClick={onToggleArchitecture}
            variant={showArchitecture ? "contained" : "outlined"}
            sx={{ mb: 2 }}
          >
            {showArchitecture ? "Hide Technical Details" : "View Architecture 🔍"}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            startIcon={<Analytics />}
            onClick={onToggleMetrics}
            variant={showMetrics ? "contained" : "outlined"}
            sx={{ mb: 2 }}
          >
            {showMetrics ? "Hide Metrics" : "View Impact Metrics 📊"}
          </Button>
        </Grid>
      </Grid>

      <Collapse in={showArchitecture}>
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{ p: 3, mb: 2, bgcolor: 'background.paper' }}
        >
          <Typography variant="h6" gutterBottom color="primary">
            Technical Architecture
          </Typography>
          
          <Typography variant="body1" gutterBottom>
            {expanded.architecture.overview}
          </Typography>

          {expanded.architecture.diagramUrl && (
            <Box sx={{ my: 2, textAlign: 'center' }}>
              <img 
                src={expanded.architecture.diagramUrl} 
                alt="Architecture Diagram"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          )}

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Key Components
          </Typography>
          {expanded.architecture.components.map((component, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" color="primary">
                {component.name}
              </Typography>
              <Typography variant="body2">
                {component.description}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {component.techDetails}
              </Typography>
            </Box>
          ))}

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Technical Challenges
          </Typography>
          {expanded.architecture.challenges.map((challenge, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" color="error">
                Problem: {challenge.problem}
              </Typography>
              <Typography variant="body2" color="success.main">
                Solution: {challenge.solution}
              </Typography>
              <Typography variant="body2" color="primary">
                Outcome: {challenge.outcome}
              </Typography>
            </Box>
          ))}
        </Paper>
      </Collapse>

      <Collapse in={showMetrics}>
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{ 
            p: 3, 
            mb: 2, 
            bgcolor: 'background.paper',
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom color="primary" sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 1,
            mb: 3,
            '&::before': {
              content: '""',
              width: 4,
              height: 24,
              backgroundColor: 'primary.main',
              borderRadius: 1,
            }
          }}>
            <Analytics /> Sprint Metrics Review
          </Typography>

          <Grid container spacing={2}>
            {[
              { 
                category: 'business', 
                icon: <BusinessCenter />, 
                title: 'Business Impact',
                color: '#bb86fc'
              },
              { 
                category: 'technical', 
                icon: <Memory />, 
                title: 'Technical Achievement',
                color: '#03dac6'
              },
              { 
                category: 'scale', 
                icon: <Speed />, 
                title: 'Scale & Growth',
                color: '#cf6679'
              }
            ].map(({ category, icon, title, color }) => (
              <Grid item xs={12} md={4} key={category}>
                <Paper 
                  sx={{ 
                    p: 2,
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderTop: `3px solid ${color}`,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.2s ease-in-out'
                    }
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1, 
                    mb: 2,
                    color: color
                  }}>
                    {icon}
                    <Typography variant="subtitle1">
                      {title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {expanded.metrics[category].map((metric, index) => (
                      <Paper
                        key={index}
                        sx={{
                          p: 2,
                          bgcolor: 'background.default',
                          border: '1px solid',
                          borderColor: 'divider',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(45deg, ${color}22, transparent)`,
                            opacity: 0.1,
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                            {metric.value}
                          </Typography>
                          {metric.growth && (
                            <Box sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: 0.5,
                              color: 'success.main'
                            }}>
                              <TrendingUp fontSize="small" />
                              <Typography variant="caption">
                                {metric.growth}
                              </Typography>
                            </Box>
                          )}
                        </Box>
                        
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          {metric.metric}
                        </Typography>
                        
                        {metric.context && (
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              display: 'block',
                              color: 'text.secondary',
                              mt: 1,
                              fontSize: '0.75rem',
                              fontStyle: 'italic'
                            }}
                          >
                            {metric.context}
                          </Typography>
                        )}
                      </Paper>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Collapse>
    </Box>
  );
}; 