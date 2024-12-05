import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { AvatarPixel } from './AvatarPixel';
import { resumeData } from '../data/resume';

export const Header: React.FC = () => {
  const { header } = resumeData;

  return (
    <Container
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{
        fontFamily: '"Fira Code", monospace',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #bb86fc, transparent)',
        },
      }}
    >
      <Box sx={{ 
        my: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
      }}>
        <Box>
          <AvatarPixel />
        </Box>
        
        <Box>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 2,
          }}>
            <Typography
              component="span"
              sx={{ 
                color: '#bb86fc',
                fontWeight: 'bold',
              }}
            >
              ~/developer$
            </Typography>
            <TypeAnimation
              sequence={[
                'whoami',
                1000,
                header.name,
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ 
                fontSize: '2rem',
                display: 'inline-block',
                color: '#03dac6',
              }}
              repeat={0}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TypeAnimation
              sequence={[
                2000,
                header.title,
              ]}
              wrapper="span"
              speed={50}
              style={{ 
                fontSize: '1.2rem',
                color: '#bb86fc',
              }}
              repeat={0}
            />
          </Box>

          <Box sx={{ 
            mb: 3,
            '& a': { 
              color: '#03dac6',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}>
            <Typography variant="body2" component="div" sx={{ mb: 1 }}>
              <span style={{ color: '#bb86fc' }}>$ cat</span> contact.txt
            </Typography>
            <Box sx={{ pl: 2 }}>
              <Typography variant="body2" component="div">
                📍 <span style={{ color: '#03dac6' }}>{header.location}</span>
              </Typography>
              <Typography variant="body2" component="div">
                📧 <Link href={`mailto:${header.email}`}>{header.email}</Link>
              </Typography>
              <Typography variant="body2" component="div">
                🔗 <Link href={header.github} target="_blank">github.com/pmatheusvinhas</Link>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ 
            pl: 2,
            borderLeft: '2px solid #bb86fc',
            position: 'relative',
            '&::before': {
              content: '"$ cat summary.md"',
              position: 'absolute',
              top: -20,
              left: -2,
              color: '#bb86fc',
            },
          }}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255,255,255,0.87)',
                fontStyle: 'italic',
              }}
            >
              {header.summary}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}; 