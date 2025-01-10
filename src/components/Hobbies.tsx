import React from 'react';
import { Box, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

interface HobbyCardProps {
  hobby: {
    title: string;
    description: string;
  };
  imageIndex: string;
  index: number;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ hobby, imageIndex, index }) => (
  <Grid item xs={12} md={4}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <Box
        sx={{
          position: 'relative',
          height: { xs: '70vh', md: '80vh' },
          overflow: 'hidden',
          borderRadius: 2,
          '&:hover .hobby-content': {
            transform: 'translateY(0)',
            opacity: 1,
          },
          '&:hover .hobby-title': {
            transform: 'translateY(0)',
            opacity: 1,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
            zIndex: 1,
            opacity: 0.7,
            transition: 'opacity 0.3s ease-in-out',
          },
          '&:hover::before': {
            opacity: 0.85,
          }
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${import.meta.env.BASE_URL}images/${imageIndex}.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.8s cubic-bezier(0.6, 0.05, 0.01, 0.9)',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
        />
        <Box
          className="hobby-content"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: { xs: 4, md: 5 },
            transform: 'translateY(20px)',
            opacity: 0.8,
            transition: 'all 0.8s cubic-bezier(0.6, 0.05, 0.01, 0.9)',
            zIndex: 2,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)',
          }}
        >
          <Typography 
            className="hobby-title"
            variant="h3"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: '2.5rem', md: '3.2rem' },
              fontWeight: 300,
              color: 'white',
              marginBottom: 2,
              opacity: 0.9,
              transform: 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.6, 0.05, 0.01, 0.9)',
              textTransform: 'lowercase',
              letterSpacing: '0.05em',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            {hobby.title}
          </Typography>

          <Typography 
            variant="body1"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '90%',
              fontWeight: 300,
              fontStyle: 'italic',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            {hobby.description}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  </Grid>
);

export const Hobbies: React.FC = () => {
  return (
    <Box 
      component="section"
      sx={{ 
        py: { xs: 10, md: 15 },
        background: '#000',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Typography 
          component="h2"
          sx={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: { xs: '3rem', md: '4.5rem' },
            fontWeight: 300,
            textAlign: 'center',
            mb: { xs: 2, md: 3 },
            color: 'white',
            opacity: 0.9,
            letterSpacing: '0.1em',
            textTransform: 'lowercase'
          }}
        >
          beyond the code
        </Typography>

        <Typography 
          sx={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            textAlign: 'center',
            mb: { xs: 8, md: 12 },
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            mx: 'auto',
            fontStyle: 'italic',
            letterSpacing: '0.05em',
            lineHeight: 1.8
          }}
        >
          because great engineers have lives beyond their terminals
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {Object.entries(resumeData.hobbies).map(([key, hobby], index) => (
            <HobbyCard
              key={key}
              hobby={hobby}
              imageIndex={String(index + 1)}
              index={index}
            />
          ))}
        </Grid>

        {/* About This Portfolio */}
        <Box sx={{ mt: { xs: 10, md: 15 } }}>
          <Paper 
            sx={{ 
              p: { xs: 4, md: 6 },
              background: 'linear-gradient(45deg, rgba(187,134,252,0.05), rgba(3,218,198,0.05))',
              border: '1px solid rgba(187,134,252,0.1)',
              borderRadius: 2
            }}
          >
            <Typography 
              variant="h3"
              sx={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: { xs: '2rem', md: '2.8rem' },
                fontWeight: 300,
                color: 'primary.main',
                mb: 3,
                textAlign: 'center'
              }}
            >
              About This Portfolio
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                color: 'text.primary',
                fontFamily: "'Cormorant Garamond', serif",
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto'
              }}
            >
              From studying graphene at LME/EPUSP to engineering AI systems, my journey reflects a fundamental belief: 
              the most innovative solutions emerge at the intersection of diverse disciplines. This portfolio showcases 
              not just projects, but a philosophy of using technology as a means to solve complex problems.
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                color: 'text.primary',
                fontFamily: "'Cormorant Garamond', serif",
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto'
              }}
            >
              Whether it's optimizing distributed systems, developing AI solutions, or crafting user interfaces, 
              I approach each challenge with a holistic perspective. This versatility, combined with deep technical expertise, 
              enables me to bridge the gap between complex technical requirements and tangible business value.
            </Typography>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3
            }}>
              <Box sx={{ 
                display: 'flex', 
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <Chip 
                  label="Full Stack Development" 
                  size="medium"
                  sx={{ 
                    bgcolor: 'rgba(187,134,252,0.1)',
                    fontSize: '0.9rem',
                    py: 1.5
                  }}
                />
                <Chip 
                  label="AI Engineering" 
                  size="medium"
                  sx={{ 
                    bgcolor: 'rgba(3,218,198,0.1)',
                    fontSize: '0.9rem',
                    py: 1.5
                  }}
                />
                <Chip 
                  label="Distributed Systems" 
                  size="medium"
                  sx={{ 
                    bgcolor: 'rgba(187,134,252,0.1)',
                    fontSize: '0.9rem',
                    py: 1.5
                  }}
                />
                <Chip 
                  label="Performance Optimization" 
                  size="medium"
                  sx={{ 
                    bgcolor: 'rgba(3,218,198,0.1)',
                    fontSize: '0.9rem',
                    py: 1.5
                  }}
                />
              </Box>

              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  textAlign: 'center',
                  fontStyle: 'italic',
                  mt: 2
                }}
              >
                Built with React, TypeScript, Material-UI, and integrated with GitHub's GraphQL/REST APIs
              </Typography>
            </Box>
          </Paper>
        </Box>
      </motion.div>
    </Box>
  );
}; 