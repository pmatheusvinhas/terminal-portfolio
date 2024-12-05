import { useState } from 'react';
import { createTheme } from '@mui/material/styles';

type ColorMode = 'light' | 'dark';

export const useColorMode = () => {
  const [mode, setMode] = useState<ColorMode>('dark');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return { theme, toggleColorMode };
}; 