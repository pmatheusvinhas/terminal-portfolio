import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const HobbyCard: React.FC<{ 
  hobby: typeof resumeData.hobbies[keyof typeof resumeData.hobbies];
  imageIndex: string;
  index: number;
}> = ({ hobby, imageIndex, index }) => (
  <Grid item xs={12} md={4}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        delay: index * 0.3,
        duration: 1.2,
        ease: [0.6, 0.05, 0.01, 0.9]
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: { xs: '70vh', md: '80vh' },
          cursor: 'pointer',
          overflow: 'hidden',
          '&:hover': {
            '& .hobby-image': {
              transform: 'scale(1.05)',
              filter: 'brightness(0.6) saturate(1.2)',
            },
            '& .hobby-content': {
              transform: 'translateY(0)',
              opacity: 1,
            },
            '& .hobby-title': {
              transform: 'translateY(0)',
              opacity: 1,
            }
          }
        }}
      >
        <Box
          className="hobby-image"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${import.meta.env.BASE_URL}images/${imageIndex}.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.8) saturate(0.8)',
            transition: 'all 1.2s cubic-bezier(0.6, 0.05, 0.01, 0.9)',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
              opacity: 0.8
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
            padding: { xs: 3, md: 4 },
            transform: 'translateY(20px)',
            opacity: 0.8,
            transition: 'all 0.8s cubic-bezier(0.6, 0.05, 0.01, 0.9)',
          }}
        >
          <Typography 
            className="hobby-title"
            variant="h3"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 300,
              color: 'white',
              marginBottom: 2,
              opacity: 0.9,
              transform: 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.6, 0.05, 0.01, 0.9)',
              textTransform: 'lowercase',
              letterSpacing: '0.05em'
            }}
          >
            {hobby.title}
          </Typography>

          <Typography 
            variant="body1"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '90%',
              fontWeight: 300,
              fontStyle: 'italic'
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
      </motion.div>
    </Box>
  );
}; 