import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, CircularProgress, useTheme, Tooltip, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Assessment from '@mui/icons-material/Assessment';
import Speed from '@mui/icons-material/Speed';
import TechBadge from './TechBadge';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Interfaces
interface Project {
  name: string;
  repo: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  animationType: 'encryption' | 'compression' | 'terminal' | 'performance';
  keyFeatures: string[];
  githubData?: any; // Will store GitHub API data
}

// Hardcoded projects data - easily editable
const featuredProjects: Project[] = [
  {
    name: "PromptVeil",
    repo: "https://github.com/PromptVeil/PromptVeil",
    description: "A comprehensive framework for secure, efficient storage and retrieval of AI conversations",
    shortDescription: "Securely store and search LLM conversations with hardware acceleration",
    technologies: ["Python", "Julia", "Rust", "CUDA"],
    animationType: "encryption",
    keyFeatures: [
      "Hardware-accelerated encryption", 
      "Token-aware compression",
      "Semantic search capabilities", 
      "Distributed storage support"
    ]
  },
  {
    name: "TokenCompression.jl",
    repo: "https://github.com/pmatheusvinhas/TokenCompression.jl",
    description: "A Julia package for efficient compression of token sequences using Byte Pair Encoding (BPE)",
    shortDescription: "Compress token sequences with optimized Julia implementation",
    technologies: ["Julia", "BPE", "CUDA", "Threading"],
    animationType: "compression",
    keyFeatures: [
      "Byte Pair Encoding implementation", 
      "GPU acceleration support",
      "Multi-threaded processing", 
      "Model sharing capabilities"
    ]
  },
  {
    name: "terminal-cv",
    repo: "https://github.com/pmatheusvinhas/terminal-cv",
    description: "A modern portfolio template with a retro terminal theme, built using React, TypeScript, and Material-UI",
    shortDescription: "This very website! Terminal-themed portfolio with ATS optimization",
    technologies: ["React", "TypeScript", "Material-UI", "Framer Motion"],
    animationType: "terminal",
    keyFeatures: [
      "Terminal-inspired UI", 
      "ATS-optimized resume export",
      "Interactive visualization", 
      "Responsive design"
    ]
  },
  {
    name: "webformance-guardian",
    repo: "https://github.com/pmatheusvinhas/webformance-guardian",
    description: "Monitor and optimize web performance metrics with automated testing and alerting",
    shortDescription: "Track core web vitals and performance metrics with customizable alerts",
    technologies: ["Node.js", "Express", "Lighthouse", "Chart.js"],
    animationType: "performance",
    keyFeatures: [
      "Core Web Vitals monitoring", 
      "Automated performance testing",
      "Customizable alert thresholds", 
      "Historical performance tracking"
    ]
  }
];

// Terminal component
export const TerminalInnovations: React.FC = () => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [showProjectDetails, setShowProjectDetails] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>(featuredProjects);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          setSelectedIndex(prev => {
            return prev > 0 ? prev - 1 : prev;
          });
          break;
        case 'ArrowDown':
          setSelectedIndex(prev => {
            return prev < projects.length - 1 ? prev + 1 : prev;
          });
          break;
        case 'Enter':
          if (!showProjectDetails) handleSelectProject();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, showProjectDetails, projects.length]);

  // Fetch GitHub data for the projects
  useEffect(() => {
    const fetchProjectData = async () => {
      const updatedProjects = [...projects];
      
      for (let i = 0; i < updatedProjects.length; i++) {
        try {
          const repoPath = updatedProjects[i].repo.replace('https://github.com/', '');
          const response = await fetch(`https://api.github.com/repos/${repoPath}`);
          
          if (response.ok) {
            const data = await response.json();
            updatedProjects[i].githubData = {
              stars: data.stargazers_count,
              forks: data.forks_count,
              updated: new Date(data.updated_at).toLocaleDateString(),
              language: data.language
            };
          }
        } catch (error) {
          console.error(`Failed to fetch data for ${updatedProjects[i].name}:`, error);
        }
      }
      
      setProjects(updatedProjects);
    };
    
    fetchProjectData();
  }, []);

  const handleSelectProject = () => {
    setLoading(true);
    
    // Simular tempo de clone
    setTimeout(() => {
      setShowProjectDetails(true);
      setLoading(false);
    }, 1500);
  };

  const resetTerminal = () => {
    setShowProjectDetails(false);
  };

  const TerminalPrompt = () => (
    <Typography component="div" sx={{ fontFamily: 'monospace', mb: 1 }}>
      <span style={{ color: theme.palette.primary.main }}>~/projects$</span> <span>ls -la</span>
    </Typography>
  );

  // Animation based on project type
  const renderProjectAnimation = (project: Project) => {
    switch (project.animationType) {
      case 'encryption':
        return <EncryptionAnimation />;
      case 'compression':
        return <CompressionAnimation />;
      case 'terminal':
        return <TerminalAnimation />;
      case 'performance':
        return <PerformanceAnimation />;
      default:
        return null;
    }
  };

  // Placeholder animations - these would be more elaborate in production
  const EncryptionAnimation = () => (
    <Box sx={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Secure Encryption Pipeline</Typography>
      </motion.div>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Typography sx={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
            Data
          </Typography>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          <Box component="span" sx={{ color: 'primary.main', fontSize: '1.5rem' }}>→</Box>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <Box sx={{ p: 1, border: '1px solid', borderColor: 'primary.main', borderRadius: 1 }}>
            🔒
          </Box>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6, duration: 0.3 }}
        >
          <Box component="span" sx={{ color: 'primary.main', fontSize: '1.5rem' }}>→</Box>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          <Typography sx={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
            Secure
          </Typography>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
      >
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          Hardware-accelerated encryption for maximum security
        </Typography>
      </motion.div>
    </Box>
  );

  const CompressionAnimation = () => (
    <Box sx={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Token Compression</Typography>
      </motion.div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Typography sx={{ fontFamily: 'monospace', bgcolor: 'rgba(3, 218, 198, 0.1)', p: 1, borderRadius: 1 }}>
            ["hello", "world", "hello", "world", "test"]
          </Typography>
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            delay: 1, 
            duration: 1,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <Box component="span" sx={{ color: 'primary.main', fontSize: '2rem' }}>🧩</Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Typography sx={{ fontFamily: 'monospace', bgcolor: 'rgba(187, 134, 252, 0.1)', p: 1, borderRadius: 1 }}>
            ["hello", "world", &ref0, &ref1, "test"]
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );

  const TerminalAnimation = () => (
    <Box sx={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>Terminal Interface</Typography>
      </motion.div>
      <Box sx={{ 
        border: '1px solid', 
        borderColor: 'grey.800', 
        p: 2, 
        borderRadius: 1, 
        bgcolor: 'rgba(0,0,0,0.7)',
        width: '80%',
        maxWidth: 300
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Typography sx={{ color: 'primary.main', fontFamily: 'monospace' }}>
            $ whoami
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Typography sx={{ fontFamily: 'monospace', mt: 1 }}>
            developer
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Typography sx={{ color: 'primary.main', fontFamily: 'monospace', mt: 1 }}>
            $ ls projects
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Typography sx={{ fontFamily: 'monospace', mt: 1 }}>
            terminal-cv
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 2.5, duration: 0.8, repeat: Infinity }}
        >
          <Box sx={{ width: '0.8rem', height: '1rem', bgcolor: 'primary.main', mt: 1 }} />
        </motion.div>
      </Box>
    </Box>
  );

  const PerformanceAnimation = () => (
    <Box sx={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Performance Monitoring</Typography>
      </motion.div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Box sx={{ 
              color: 'error.main', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center' 
            }}>
              <Typography variant="body2">Slow</Typography>
              <Assessment fontSize="large" />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Box component="span" sx={{ color: 'primary.main', fontSize: '2rem' }}>→</Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <Box sx={{ 
              color: 'success.main', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center' 
            }}>
              <Typography variant="body2">Fast</Typography>
              <Speed fontSize="large" />
            </Box>
          </motion.div>
        </Box>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Box sx={{ height: 8, bgcolor: 'success.main', borderRadius: 4, width: '100%', maxWidth: 200, mt: 2 }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            Optimization complete!
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );

  return (
    <Paper
      ref={terminalRef}
      sx={{
        p: 2,
        background: 'rgba(0,0,0,0.85)',
        borderRadius: 1,
        minHeight: 400,
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid',
        borderColor: 'grey.800'
      }}
    >
      <AnimatePresence mode="wait">
        {!showProjectDetails ? (
          // Terminal listing view
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="terminal-listing"
          >
            <TerminalPrompt />
            
            <Box sx={{ 
              mb: 2, 
              display: 'flex', 
              alignItems: 'center', 
              bgcolor: 'rgba(255,255,255,0.05)',
              p: 1.5,
              borderRadius: 1,
              border: '1px dashed',
              borderColor: 'primary.light'
            }}>
              <Typography sx={{ color: 'grey.300', fontSize: '0.9rem', mr: 1, fontWeight: 'medium' }}>
                📌 Navigation: 
              </Typography>
              <Typography sx={{ color: 'grey.400', fontSize: '0.85rem' }}>
                Select any project with 
                <Box component="span" sx={{ mx: 0.5, display: 'inline-flex', alignItems: 'center' }}>
                  <KeyboardArrowUpIcon fontSize="small" sx={{ color: 'grey.500' }} />
                  <KeyboardArrowDownIcon fontSize="small" sx={{ color: 'grey.500' }} />
                </Box>
                keys or by clicking, then press
                <Box component="span" sx={{ mx: 0.5, display: 'inline-flex', alignItems: 'center' }}>
                  <KeyboardReturnIcon fontSize="small" sx={{ color: 'grey.500' }} />
                </Box>
                to explore more details.
              </Typography>
            </Box>
            
            <Box sx={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
              {projects.map((project, index) => (
                <Box
                  component={motion.div}
                  key={project.name}
                  onClick={() => {
                    setSelectedIndex(index);
                    handleSelectProject();
                  }}
                  whileHover={{ x: 5 }}
                  sx={{
                    py: 1,
                    px: 1,
                    cursor: 'pointer',
                    display: 'flex',
                    backgroundColor: selectedIndex === index ? 'rgba(187, 134, 252, 0.1)' : 'transparent',
                    borderLeft: selectedIndex === index ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(187, 134, 252, 0.1)',
                    }
                  }}
                >
                  <Typography 
                    component="span" 
                    sx={{ 
                      color: selectedIndex === index ? theme.palette.primary.main : 'inherit',
                      fontFamily: 'monospace', 
                      mr: 2 
                    }}
                  >
                    {project.name}
                  </Typography>
                  <Typography 
                    component="span" 
                    sx={{ 
                      color: 'grey.500',
                      fontFamily: 'monospace',
                      fontSize: '0.8rem',
                      display: { xs: 'none', sm: 'inline' } 
                    }}
                  >
                    {project.shortDescription}
                  </Typography>
                </Box>
              ))}
            </Box>
            
            {loading && (
              <Box sx={{ mt: 2, fontFamily: 'monospace' }}>
                <Typography component="div">
                  <span style={{ color: theme.palette.primary.main }}>~/projects$</span> git clone {projects[selectedIndex].repo}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  <Typography>Cloning into '{projects[selectedIndex].name}'...</Typography>
                </Box>
              </Box>
            )}
          </motion.div>
        ) : (
          // Project detail view
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            key="project-detail"
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3
              }}
            >
              {/* Left side - Animation */}
              <Box sx={{ 
                flex: 1, 
                border: `1px dashed ${theme.palette.grey[700]}`,
                borderRadius: 1,
                p: 2,
                minHeight: 200
              }}>
                {renderProjectAnimation(projects[selectedIndex])}
              </Box>
              
              {/* Right side - Project details */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontFamily: 'monospace' }}>
                  {projects[selectedIndex].name}
                </Typography>
                
                <Typography variant="caption" sx={{ color: 'grey.500', display: 'block', mb: 1 }}>
                  GitHub Repository: {projects[selectedIndex].repo.replace('https://github.com/', '')}
                </Typography>
                
                <Typography variant="body2" sx={{ mt: 1, mb: 2, color: 'grey.300' }}>
                  {projects[selectedIndex].description}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography component="div" variant="body2" sx={{ color: 'grey.400', mb: 0.5 }}>
                    Technologies:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {projects[selectedIndex].technologies.map((tech: string) => (
                      <TechBadge 
                        key={tech}
                        tech={tech}
                        size="small"
                      />
                    ))}
                  </Box>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography component="div" variant="body2" sx={{ color: 'grey.400', mb: 0.5 }}>
                    Key Features:
                  </Typography>
                  <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
                    {projects[selectedIndex].keyFeatures.map((feature: string, idx: number) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <Box component="span" sx={{ mr: 1, color: 'primary.main' }}>•</Box>
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                
                {projects[selectedIndex].githubData && (
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    flexWrap: 'wrap',
                    mt: 2,
                    pt: 2,
                    borderTop: `1px dashed ${theme.palette.grey[700]}`,
                  }}>
                    <Box>
                      <Typography variant="caption" sx={{ color: 'grey.500' }}>
                        Stars
                      </Typography>
                      <Typography variant="body2">
                        {projects[selectedIndex].githubData.stars}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: 'grey.500' }}>
                        Forks
                      </Typography>
                      <Typography variant="body2">
                        {projects[selectedIndex].githubData.forks}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: 'grey.500' }}>
                        Language
                      </Typography>
                      <Typography variant="body2">
                        {projects[selectedIndex].githubData.language}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: 'grey.500' }}>
                        Updated
                      </Typography>
                      <Typography variant="body2">
                        {projects[selectedIndex].githubData.updated}
                      </Typography>
                    </Box>
                  </Box>
                )}
                
                {/* Social Share */}
                <Box sx={{ 
                  mt: 2, 
                  display: 'flex', 
                  gap: 1,
                  justifyContent: 'flex-end',
                  borderTop: `1px dashed ${theme.palette.grey[700]}`,
                  pt: 2
                }}>
                  <Typography variant="body2" sx={{ color: 'grey.500', mr: 1 }}>
                    Share:
                  </Typography>
                  <Tooltip title="Share on Twitter">
                    <IconButton 
                      size="small"
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check out this awesome project: ${projects[selectedIndex].name}&url=${encodeURIComponent(projects[selectedIndex].repo)}`, '_blank')}
                      sx={{ color: '#1DA1F2' }}
                    >
                      <TwitterIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share on LinkedIn">
                    <IconButton 
                      size="small"
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(projects[selectedIndex].repo)}`, '_blank')}
                      sx={{ color: '#0077B5' }}
                    >
                      <LinkedInIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Copy link">
                    <IconButton 
                      size="small"
                      onClick={() => {
                        navigator.clipboard.writeText(projects[selectedIndex].repo);
                        // Adicionar feedback aqui se necessário
                      }}
                      sx={{ color: 'grey.500' }}
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
                
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Typography 
                      onClick={resetTerminal}
                      sx={{ 
                        cursor: 'pointer', 
                        color: theme.palette.grey[400],
                        '&:hover': { color: theme.palette.primary.main },
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      ← Back to Projects
                    </Typography>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Typography 
                      onClick={() => window.open(projects[selectedIndex].repo, '_blank')}
                      sx={{ 
                        cursor: 'pointer', 
                        color: theme.palette.primary.main,
                        fontWeight: 'bold'
                      }}
                    >
                      View on GitHub →
                    </Typography>
                  </motion.div>
                </Box>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Paper>
  );
};

export default TerminalInnovations; 