import React from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useColorMode } from '../hooks/useColorMode';

export const ThemeToggle: React.FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1000,
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Tooltip title={`Switch to ${theme.palette.mode === 'dark' ? 'light' : 'dark'} mode`}>
        <IconButton
          onClick={toggleColorMode}
          color="inherit"
          sx={{
            bgcolor: 'background.paper',
            '&:hover': {
              bgcolor: 'background.default',
            },
          }}
        >
          {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Tooltip>
    </motion.div>
  );
}; 