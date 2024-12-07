import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { AvatarPixel } from './AvatarPixel';
import { resumeData } from '../data/resume';
import { TimeDisplay } from './TimeDisplay';

export const Header: React.FC = () => {
  return (
    <Box>   
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        gap: { xs: 1, sm: 2 },
        mb: { xs: 2, md: 3 }
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
                resumeData.header.name,
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
                resumeData.header.title,
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
              <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                📍 <span style={{ color: '#03dac6' }}>Currently in São Paulo, Brazil</span>
                <TimeDisplay />
              </Typography>
              <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}>
                🏠 Originally from {resumeData.header.location.origin}
              </Typography>
              <Typography variant="body2" component="div">
                📧 <Link href={`mailto:${resumeData.header.email}`}>{resumeData.header.email}</Link>
              </Typography>
              <Typography variant="body2" component="div">
                🔗 <Link href={resumeData.header.github} target="_blank">github.com/pmatheusvinhas</Link>
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
              {resumeData.header.summary}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}; 