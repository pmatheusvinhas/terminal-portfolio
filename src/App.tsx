import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Hobbies } from './components/Hobbies';
import { GitHubSection } from './components/GitHubSection';
import { PrintButton } from './components/PrintButton';
import { theme } from './theme';
import './styles/global.css';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="scanline no-print" />
      <div className="crt-effect no-print" />
      <PrintButton />
      <Container maxWidth="lg" sx={{ 
        py: { xs: 2, sm: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 }
      }}>
        <Header />
        <Box sx={{ my: 4 }}>
          <Skills />
        </Box>
        <Box sx={{ my: 4 }}>
          <Experience />
        </Box>
        <Box sx={{ my: 4 }}>
          <Certifications />
        </Box>
        <Box sx={{ my: 4 }} className="no-print">
          <GitHubSection />
        </Box>
        <Box sx={{ my: 4 }}>
          <Hobbies />
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App; 