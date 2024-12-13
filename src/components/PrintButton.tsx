import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Print } from '@mui/icons-material';

export const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Box
      className="no-print"
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <Tooltip title="Download Resume">
        <IconButton 
          onClick={handlePrint} 
          sx={{ 
            bgcolor: 'background.paper',
            '&:hover': {
              bgcolor: 'background.paper',
              opacity: 0.8
            }
          }}
        >
          <Print />
        </IconButton>
      </Tooltip>
    </Box>
  );
}; 