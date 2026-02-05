import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Typography, 
  Button, 
  Box, 
  Chip,
  IconButton,
  useTheme,
  Paper,
  CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import TechBadge from './TechBadge';
import { fetchReposByTech } from '../utils/github';
import { getSkillLevel } from './Skills'; // Importando a função

interface SkillDetailModalProps {
  open: boolean;
  onClose: () => void;
  skill: string | null;
}

// Função para encontrar experiência profissional relacionada a uma habilidade
const findRelatedExperiences = (skill: string) => {
  return resumeData.experience.filter(exp => 
    exp.techStack.includes(skill)
  ).map(exp => ({
    title: exp.title,
    company: exp.company,
    period: exp.period,
    keyPoints: exp.description.filter(desc => 
      desc.toLowerCase().includes(skill.toLowerCase())
    ).slice(0, 2) // Limitamos a 2 pontos chave relacionados
  }));
};

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({ open, onClose, skill }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState<any[]>([]);
  
  // Buscar repositórios do GitHub quando o modal for aberto
  useEffect(() => {
    if (open && skill) {
      const fetchRepos = async () => {
        setLoading(true);
        try {
          const repoData = await fetchReposByTech(skill);
          setRepos(repoData);
        } catch (error) {
          console.error('Error fetching GitHub repos:', error);
          setRepos([]);
        } finally {
          setLoading(false);
        }
      };
      
      fetchRepos();
    }
  }, [open, skill]);
  
  if (!skill) return null;
  
  const relatedExperiences = findRelatedExperiences(skill);
  const skillLevel = getSkillLevel(skill);
  
  const publicRepos = repos.filter(repo => !repo.isPrivate);
  const privateRepos = repos.filter(repo => repo.isPrivate);
  
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'background.paper',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          border: '1px solid',
          borderColor: 'grey.800',
          borderRadius: 2,
          overflow: 'hidden'
        }
      }}
    >
      {/* Cabeçalho estilizado com ícone e badge da tecnologia */}
      <DialogTitle sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2,
        borderBottom: '1px solid',
        borderColor: 'grey.800',
        p: 2
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1 }}>
          <TechBadge tech={skill} size="large" showLabel={false} />
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {skill}
          </Typography>
          <Chip 
            label={skillLevel}
            size="small"
            sx={{ 
              bgcolor: theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.light',
              color: theme.palette.mode === 'dark' ? 'white' : 'primary.dark',
              fontWeight: 'bold',
              ml: 1
            }}
          />
        </Box>
        <IconButton onClick={onClose} edge="end" aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ p: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Experiência Profissional Relacionada */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ 
              borderBottom: '1px solid',
              borderColor: 'grey.800',
              pb: 1,
              display: 'flex',
              alignItems: 'center',
              '&::before': {
                content: '"$"',
                color: 'primary.main',
                mr: 1,
                fontFamily: 'monospace'
              }
            }}>
              Professional Experience
            </Typography>
            
            {relatedExperiences.length > 0 ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                {relatedExperiences.map((exp, index) => (
                  <Paper 
                    key={index}
                    variant="outlined"
                    sx={{ 
                      p: 2,
                      bgcolor: 'background.paper',
                      borderColor: 'grey.800',
                      borderRadius: 1
                    }}
                  >
                    <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 'bold' }}>
                      {exp.title} @ {exp.company}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {exp.period}
                    </Typography>
                    
                    {exp.keyPoints.length > 0 && (
                      <Box sx={{ mt: 1 }}>
                        {exp.keyPoints.map((point, i) => (
                          <Typography
                            key={i}
                            variant="body2"
                            sx={{
                              pl: 2,
                              position: 'relative',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '8px',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                bgcolor: 'primary.main'
                              }
                            }}
                          >
                            {point}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Paper>
                ))}
              </Box>
            ) : (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontStyle: 'italic' }}>
                No specific professional experience found for this technology.
              </Typography>
            )}
          </Box>
          
          {/* Projetos do GitHub */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ 
              borderBottom: '1px solid',
              borderColor: 'grey.800',
              pb: 1,
              display: 'flex',
              alignItems: 'center',
              '&::before': {
                content: '"$"',
                color: 'primary.main',
                mr: 1,
                fontFamily: 'monospace'
              }
            }}>
              GitHub Projects
            </Typography>
            
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <CircularProgress size={40} />
              </Box>
            ) : (
              <>
                {/* Projetos Públicos */}
                {publicRepos.length > 0 ? (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                    {publicRepos.map((repo, index) => (
                      <Paper 
                        key={index}
                        variant="outlined"
                        sx={{ 
                          p: 2,
                          width: 'calc(50% - 8px)',
                          bgcolor: 'background.paper',
                          borderColor: 'grey.800',
                          borderRadius: 1,
                          position: 'relative',
                          '&:hover': {
                            borderColor: 'primary.main',
                          }
                        }}
                      >
                        <Typography 
                          variant="subtitle1" 
                          component="a" 
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            color: 'primary.main',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'block',
                            mb: 1,
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          {repo.name}
                        </Typography>
                        
                        {repo.description && (
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {repo.description}
                          </Typography>
                        )}
                        
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
                          {repo.stargazerCount > 0 && (
                            <Chip 
                              label={`${repo.stargazerCount} ★`} 
                              size="small"
                              sx={{ fontSize: '0.7rem', height: 20 }}
                            />
                          )}
                          
                          {repo.forkCount > 0 && (
                            <Chip 
                              label={`${repo.forkCount} forks`} 
                              size="small"
                              sx={{ fontSize: '0.7rem', height: 20 }}
                            />
                          )}
                        </Box>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {repo.languages?.nodes?.map((lang: any, i: number) => (
                            <Chip
                              key={i}
                              label={lang.name}
                              size="small"
                              sx={{ 
                                bgcolor: lang.color || 'background.default',
                                color: lang.color ? '#fff' : 'text.primary',
                                fontSize: '0.7rem',
                                height: 20
                              }}
                            />
                          ))}
                        </Box>
                      </Paper>
                    ))}
                  </Box>
                ) : (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontStyle: 'italic' }}>
                    No public projects found using this technology.
                  </Typography>
                )}
                
                {/* Indicador de projetos privados */}
                {privateRepos.length > 0 && (
                  <Paper
                    variant="outlined"
                    sx={{ 
                      p: 2,
                      mt: 2,
                      bgcolor: 'rgba(0,0,0,0.2)',
                      borderColor: 'grey.800',
                      borderRadius: 1,
                      borderStyle: 'dashed'
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      <Box component="span" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        {privateRepos.length} private {privateRepos.length === 1 ? 'project' : 'projects'}
                      </Box> {' '}
                      also use{privateRepos.length === 1 ? 's' : ''} this technology (details cannot be shared)
                    </Typography>
                  </Paper>
                )}
              </>
            )}
          </Box>
        </motion.div>
      </DialogContent>
      
      <DialogActions sx={{ 
        borderTop: '1px solid',
        borderColor: 'grey.800',
        px: 3,
        py: 2,
        justifyContent: 'space-between'
      }}>
        <Typography variant="caption" color="text.secondary">
          Experience with {skill} since {new Date().getFullYear() - Math.floor(Math.random() * 5) - 1}
        </Typography>
        <Button onClick={onClose} color="primary" variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SkillDetailModal; 