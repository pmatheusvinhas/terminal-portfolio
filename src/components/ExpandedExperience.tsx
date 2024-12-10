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
import { ExpandedExperience as ExpandedExperienceType, ArchitectureDiagram } from '../types';
import { projectDiagrams } from '../config/diagrams';

interface ExpandedExperienceProps {
  expanded: ExpandedExperienceType;
  company: string;
  showArchitecture: boolean;
  showMetrics: boolean;
  onToggleArchitecture: () => void;
  onToggleMetrics: () => void;
}

export const ExpandedExperience: React.FC<ExpandedExperienceProps> = ({
  expanded,
  company,
  showArchitecture,
  showMetrics,
  onToggleArchitecture,
  onToggleMetrics,
}) => {
  const companyDiagrams = projectDiagrams[company];

  const renderDiagramWithGuidelines = (diagram: ArchitectureDiagram) => {
    const diagramConfig = companyDiagrams?.[diagram.title.toLowerCase().replace(/\s+/g, '-')];

    return (
      <Paper sx={{ p: 2, bgcolor: 'background.default' }}>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          {diagram.title}
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 2 }}>
          {diagram.description}
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <img 
            src={diagram.imageUrl} 
            alt={diagram.title}
            loading="lazy"
            style={{ 
              maxWidth: '100%', 
              height: 'auto',
              display: 'block',
              margin: '0 auto'
            }}
          />
          
          {diagramConfig && (
            <Box sx={{ mt: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
              <Typography variant="subtitle2" color="primary" gutterBottom>
                Guidelines for Customization:
              </Typography>
              <ul>
                {diagramConfig.guidelines?.map((guideline, idx) => (
                  <li key={idx}>
                    <Typography variant="caption">{guideline}</Typography>
                  </li>
                ))}
              </ul>
              {diagramConfig.expectedDimensions && (
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Recommended dimensions: {diagramConfig.expectedDimensions.width}x{diagramConfig.expectedDimensions.height}px
                </Typography>
              )}
              <Button
                size="small"
                variant="outlined"
                sx={{ mt: 1 }}
                onClick={() => window.open(diagramConfig.placeholderImage, '_blank')}
              >
                View Example Diagram
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    );
  };

  const renderMetrics = (category: 'business' | 'technical' | 'scale', icon: JSX.Element, title: string, color: string) => {
    const metrics = expanded.metrics[category];
    if (!metrics?.length) return null;

    return (
      <Grid item xs={12} md={4}>
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
            {metrics.map((metric, index) => (
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
    );
  };

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

          {expanded.architecture.diagrams && (
            <Box sx={{ my: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                Architecture Diagrams
              </Typography>
              <Grid container spacing={3}>
                {expanded.architecture.diagrams.map((diagram, index) => (
                  <Grid item xs={12} key={index}>
                    {renderDiagramWithGuidelines(diagram)}
                  </Grid>
                ))}
              </Grid>
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
            {renderMetrics('business', <BusinessCenter />, 'Business Impact', '#bb86fc')}
            {renderMetrics('technical', <Memory />, 'Technical Achievement', '#03dac6')}
            {renderMetrics('scale', <Speed />, 'Scale & Growth', '#cf6679')}
          </Grid>
        </Paper>
      </Collapse>
    </Box>
  );
}; 