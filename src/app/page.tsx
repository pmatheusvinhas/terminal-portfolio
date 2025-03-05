import { Container, Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Header } from '../components/Header';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection'; 
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import { Footer } from '../components/Footer';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // A nice blue for primary actions
    },
    secondary: {
      main: '#10b981', // A green for secondary elements
    },
    background: {
      default: '#f9fafb',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 700,
      marginBottom: '1.5rem',
    },
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          borderRadius: 12,
        },
      },
    },
  },
});

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Box component="main" sx={{ py: 8 }}>
          <AboutSection />
          <Box sx={{ my: 6 }} />
          <SkillsSection />
          <Box sx={{ my: 6 }} />
          <ExperienceSection />
          <Box sx={{ my: 6 }} />
          <ProjectsSection />
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
} 