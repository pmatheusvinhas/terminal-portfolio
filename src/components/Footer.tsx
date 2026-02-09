import React from 'react';
import { Box, Typography } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3,
        textAlign: 'center',
        borderTop: '1px dashed rgba(187,134,252,0.2)',
        mt: 8
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.9rem',
          color: 'text.secondary',
          '& span': {
            color: '#bb86fc'
          }
        }}
      >
        $ echo "This site was crafted by me, so if anything breaks, at least you know who to blame 😅"
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.8rem',
          color: 'text.secondary',
          mt: 1,
          opacity: 0.7
        }}
      >
        <span style={{ color: '#03dac6' }}>{'// '}</span>
        Yes, I centered that div. No, I don't remember how.
      </Typography>
    </Box>
  );
}; 