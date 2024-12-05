import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeText {
    highlight: string;
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
      light: '#e4b5ff',
      dark: '#8858c8',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      highlight: '#bb86fc',
    },
  },
  typography: {
    fontFamily: '"Fira Code", "Roboto Mono", monospace',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.00833em',
    },
    body1: {
      fontFamily: '"Fira Code", "Roboto Mono", monospace',
      fontSize: '1rem',
      letterSpacing: '-0.00833em',
    },
    body2: {
      fontFamily: '"Fira Code", "Roboto Mono", monospace',
      fontSize: '0.875rem',
      letterSpacing: '-0.00833em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@media print': {
          'html, body': {
            backgroundColor: '#ffffff !important',
            color: '#000000 !important',
          },
          '.no-print': {
            display: 'none !important',
          },
          '.print-only': {
            display: 'block !important',
          },
          'a': {
            color: '#000000 !important',
            textDecoration: 'none',
          },
          '.MuiPaper-root': {
            backgroundColor: '#ffffff !important',
            color: '#000000 !important',
            boxShadow: 'none !important',
          },
          '.tech-icon': {
            filter: 'grayscale(100%) !important',
          },
          '@page': {
            margin: '1cm',
          },
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions); 