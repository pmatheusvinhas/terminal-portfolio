import React from 'react';
import { Box, Typography } from '@mui/material';

export const Terminal: React.FC = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 1,
      '& > *': {
        whiteSpace: 'nowrap'
      }
    }}>
      <Typography component="span" color="primary.main">
        ~
      </Typography>
      <Typography component="span" color="text.primary">
        /developer$
      </Typography>
      {/* ... resto do conteúdo ... */}
    </Box>
  );
}; 