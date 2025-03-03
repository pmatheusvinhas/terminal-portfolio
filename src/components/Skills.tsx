import React, { useState, useMemo } from 'react';
import { Box, Typography, Paper, Grid, useTheme, Tooltip, ToggleButtonGroup, ToggleButton, Divider } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import TechBadge from './TechBadge';
import { resumeData } from '../data/resume';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, Cell, ResponsiveContainer } from 'recharts';
import SkillDetailModal from './SkillDetailModal';
import ViewListIcon from '@mui/icons-material/ViewList';
import BarChartIcon from '@mui/icons-material/BarChart';
import CategoryIcon from '@mui/icons-material/Category';
import GradientIcon from '@mui/icons-material/Gradient';

// Mapeamento de níveis de habilidade
const SKILL_LEVELS: Record<string, string> = {
  // Frontend
  'React': 'Expert',
  'TypeScript': 'Expert',
  'JavaScript': 'Expert',
  'HTML/CSS': 'Expert',
  'Next.js': 'Advanced',
  'Material-UI': 'Advanced',
  'Tailwind': 'Advanced',
  'Redux': 'Advanced',
  'Angular': 'Intermediate',
  'Vue': 'Intermediate',
  'Svelte': 'Beginner',
  
  // Backend
  'Node.js': 'Expert',
  'Express': 'Advanced',
  'Python': 'Advanced',
  'Django': 'Advanced',
  'Flask': 'Advanced',
  'GraphQL': 'Intermediate',
  'REST': 'Expert',
  'MongoDB': 'Advanced',
  'PostgreSQL': 'Advanced',
  'MySQL': 'Intermediate',
  'Redis': 'Intermediate',
  'FastAPI': 'Advanced',
  'Microservices': 'Advanced',
  'C': 'Intermediate',
  
  // DevOps/Cloud
  'Docker': 'Advanced',
  'Kubernetes': 'Intermediate',
  'AWS': 'Advanced',
  'Azure': 'Advanced',
  'GCP': 'Beginner',
  'CI/CD': 'Advanced',
  'Terraform': 'Intermediate',
  'Git': 'Expert',
  'GitHub Actions': 'Advanced',
  'Azure DevOps': 'Advanced',
  
  // Data
  'CosmosDB': 'Intermediate',
  'Firebase': 'Advanced',
  
  // OS
  'Fedora': 'Advanced',
  'Debian': 'Advanced',
  'Ubuntu': 'Advanced',
  'Windows': 'Advanced',
  'Raspberry Pi OS': 'Intermediate',
  'FreeRTOS': 'Beginner',
  
  // Mobile
  'React Native': 'Advanced',
  
  // Outras
  'Agile': 'Expert',
  'Testing': 'Advanced',
  'C++': 'Intermediate',
  'Go': 'Beginner',
  'Rust': 'Beginner',
  'Julia': 'Intermediate',
};

// Cores para as diferentes categorias
const CATEGORY_COLORS: Record<string, string[]> = {
  'frontend': ['#61dafb', '#3178c6', '#f7df1e', '#e34f26'],
  'backend': ['#339933', '#4479a1', '#47a248', '#e10098'],
  'devops': ['#2496ed', '#326ce5', '#232f3e', '#0078d4'],
  'ai/ml': ['#ee4c2c', '#ff6f00', '#f89939', '#0194e2'],
  'languages': ['#3178c6', '#f7df1e', '#3776ab', '#00599c'],
  'mobile': ['#61dafb', '#7b42bc', '#a4c639', '#f05138'],
  'design': ['#f24e1e', '#fa6400', '#31a8ff', '#ff9a00'],
  'database': ['#4479a1', '#47a248', '#336791', '#dc382d'],
  'cloud': ['#232f3e', '#0078d4', '#4285f4'],
  'other': ['#f05032', '#171515', '#007396', '#5849be'],
};

// Cores para níveis de proficiência
const LEVEL_COLORS = {
  'Expert': '#4caf50',
  'Advanced': '#2196f3',
  'Intermediate': '#ff9800',
  'Beginner': '#f44336'
};

// Mapeamento numérico para níveis de proficiência (para o gráfico)
const LEVEL_VALUES = {
  'Expert': 95,
  'Advanced': 80,
  'Intermediate': 65,
  'Beginner': 50
};

// Função auxiliar para agrupar habilidades em níveis de proficiência
const groupSkillsByLevel = (skills: string[]) => {
  const groups = {
    expert: skills.filter(skill => (SKILL_LEVELS[skill] || 'Intermediate') === 'Expert'),
    advanced: skills.filter(skill => (SKILL_LEVELS[skill] || 'Intermediate') === 'Advanced'),
    intermediate: skills.filter(skill => (SKILL_LEVELS[skill] || 'Intermediate') === 'Intermediate'),
    beginner: skills.filter(skill => (SKILL_LEVELS[skill] || 'Intermediate') === 'Beginner'),
  };
  return groups;
};

// Função para obter a cor da categoria com base no nome da habilidade
const getCategoryColor = (skill: string): string => {
  for (const [category, skills] of Object.entries(resumeData.skills)) {
    if (skills.includes(skill)) {
      const colors = CATEGORY_COLORS[category.toLowerCase()] || CATEGORY_COLORS.other;
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
  return '#777';
};

// Componente para exibir habilidade com visual mais rico
const SkillVisual: React.FC<{ 
  skill: string, 
  isHighlighted: boolean, 
  onClick: () => void, 
  animDelay: number,
  categoryColor: string
}> = ({ skill, isHighlighted, onClick, animDelay, categoryColor }) => {
  const level = SKILL_LEVELS[skill] || 'Intermediate';
  const theme = useTheme();
  
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animDelay * 0.1, duration: 0.3 }}
      onClick={onClick}
      style={{ width: '100%' }}
    >
      <Paper 
        sx={{ 
          p: 1.5, 
          borderRadius: 2,
          cursor: 'pointer',
          border: '1px solid',
          borderColor: isHighlighted ? 'primary.main' : 'grey.800',
          bgcolor: isHighlighted ? 'rgba(187, 134, 252, 0.1)' : 'background.paper',
          transition: 'all 0.3s',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          '&::before': isHighlighted ? {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            bgcolor: 'primary.main'
          } : {}
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
          <TechBadge tech={skill} size="small" showLabel={false} />
          <Typography 
            variant="subtitle2" 
            noWrap
            sx={{ 
              fontWeight: isHighlighted ? 'bold' : 'normal',
              color: isHighlighted ? 'primary.main' : 'text.primary'
            }}
          >
            {skill}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark',
              fontWeight: 'medium',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              bgcolor: `${categoryColor}20` // Cor da categoria com 20% de opacidade
            }}
          >
            {level}
          </Typography>
          
          {/* Removendo o indicador visual de seleção (bola) */}
        </Box>
      </Paper>
    </motion.div>
  );
};

// Componente para exibir uma categoria de habilidades
const CategoryVisual: React.FC<{
  category: string, 
  skills: string[],
  highlighted: string | null,
  onSkillClick: (skill: string) => void
}> = ({ category, skills, highlighted, onSkillClick }) => {
  const theme = useTheme();
  
  // Obter as cores para esta categoria
  const colors = CATEGORY_COLORS[category.toLowerCase()] || CATEGORY_COLORS.other;
  
  return (
    <Paper 
      sx={{ 
        p: 3, 
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'grey.800',
        height: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 2 
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold',
            color: 'text.primary',
            display: 'flex',
            alignItems: 'center',
            '&::before': {
              content: '"$"',
              color: 'primary.main',
              mr: 1,
              fontFamily: 'monospace'
            }
          }}
        >
          {category}
        </Typography>
      </Box>
      
      {/* Scanline effect para reforçar estilo de terminal */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: `repeating-linear-gradient(
          to bottom,
          transparent,
          transparent 2px,
          rgba(255,255,255,0.03) 2px,
          rgba(255,255,255,0.03) 4px
        )`
      }} />
      
      {/* Visualização em grade de habilidades */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={6} lg={4} key={skill}>
              <SkillVisual
                skill={skill}
                isHighlighted={highlighted === skill}
                onClick={() => onSkillClick(skill)}
                animDelay={index}
                categoryColor={colors[index % colors.length]}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

// Novo componente para visualização por nível de proficiência
const SkillsByLevel: React.FC<{
  skills: string[],
  highlighted: string | null,
  onSkillClick: (skill: string) => void
}> = ({ skills, highlighted, onSkillClick }) => {
  const theme = useTheme();

  // Agrupar todas as habilidades por nível
  const groupedSkills = useMemo(() => {
    // Remover duplicatas (priorizar a ocorrência na categoria mais relevante)
    const uniqueSkills = Array.from(new Set(skills));
    
    return {
      Expert: uniqueSkills.filter(skill => SKILL_LEVELS[skill] === 'Expert'),
      Advanced: uniqueSkills.filter(skill => SKILL_LEVELS[skill] === 'Advanced'),
      Intermediate: uniqueSkills.filter(skill => SKILL_LEVELS[skill] === 'Intermediate'),
      Beginner: uniqueSkills.filter(skill => SKILL_LEVELS[skill] === 'Beginner')
    };
  }, [skills]);

  // Preparar dados para o gráfico unificado
  const chartData = useMemo(() => {
    return Object.entries(groupedSkills).flatMap(([level, levelSkills]) => 
      levelSkills.map(skill => ({
        name: skill,
        value: LEVEL_VALUES[level as keyof typeof LEVEL_VALUES],
        level
      }))
    );
  }, [groupedSkills]);

  return (
    <Paper 
      sx={{ 
        p: 3, 
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'grey.800',
        height: '100%',
        mb: 3
      }}
    >
      {/* Título no estilo de terminal */}
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: 'bold',
          color: 'text.primary',
          display: 'flex',
          alignItems: 'center',
          mb: 3,
          '&::before': {
            content: '"$"',
            color: 'primary.main',
            mr: 1,
            fontFamily: 'monospace'
          }
        }}
      >
        Proficiency Overview
      </Typography>

      {/* Scanline effect */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: `repeating-linear-gradient(
          to bottom,
          transparent,
          transparent 2px,
          rgba(255,255,255,0.03) 2px,
          rgba(255,255,255,0.03) 4px
        )`
      }} />

      {/* Gráfico por nível */}
      <Box sx={{ height: 400, mt: 2, position: 'relative', zIndex: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={chartData} 
            layout="vertical" 
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={100}
              tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
            />
            <RechartsTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <Box sx={{ 
                      bgcolor: 'background.paper', 
                      p: 1.5, 
                      border: '1px solid', 
                      borderColor: 'grey.800',
                      boxShadow: 3,
                      borderRadius: 1
                    }}>
                      <Typography variant="subtitle2">{data.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.level}
                      </Typography>
                    </Box>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={LEVEL_COLORS[entry.level as keyof typeof LEVEL_COLORS]}
                  style={{ 
                    cursor: 'pointer',
                    filter: highlighted === entry.name ? 'brightness(1.2)' : 'none',
                    stroke: highlighted === entry.name ? theme.palette.primary.main : 'none',
                    strokeWidth: highlighted === entry.name ? 2 : 0
                  }}
                  onClick={() => onSkillClick(entry.name)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Legenda */}
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 2, 
        mt: 2,
        justifyContent: 'center' 
      }}>
        {Object.entries(LEVEL_COLORS).map(([level, color]) => (
          <Box 
            key={level} 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              p: 1,
              borderRadius: 1,
              bgcolor: `${color}10`
            }}
          >
            <Box 
              sx={{ 
                width: 12, 
                height: 12, 
                borderRadius: '2px', 
                bgcolor: color 
              }} 
            />
            <Typography variant="caption" color="text.secondary">
              {level}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export const Skills: React.FC = () => {
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'category' | 'level'>('category');
  const theme = useTheme();

  // Juntar todas as habilidades de todas as categorias
  const allSkills = useMemo(() => {
    return Object.values(resumeData.skills).flat();
  }, []);

  const handleSkillClick = (skill: string) => {
    setHighlighted(skill);
    setSelectedSkill(skill);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleViewModeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: 'category' | 'level' | null
  ) => {
    if (newMode !== null) {
      setViewMode(newMode);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <Box component={motion.div} 
      variants={container} 
      initial="hidden" 
      animate="show"
      sx={{ my: 4 }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 3,
        flexWrap: 'wrap',
        gap: 2
      }}>
        <Typography variant="h2" sx={{ 
          color: 'text.primary',
          fontWeight: 'bold',
          '&::before': {
            content: '"## "',
            color: 'primary.main'
          }
        }}>
          Technical Skills
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ 
            display: 'flex', 
            gap: 1, 
            alignItems: 'center',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'grey.800'
          }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: theme.palette.primary.main }} />
            <Typography variant="caption" color="text.secondary">
              Clique para detalhes
            </Typography>
          </Box>
          
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewModeChange}
            size="small"
            sx={{ 
              bgcolor: 'background.paper',
              '& .MuiToggleButton-root': {
                border: '1px solid',
                borderColor: 'grey.800',
                color: 'text.secondary',
                '&.Mui-selected': {
                  bgcolor: 'primary.dark',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.main',
                  }
                }
              }
            }}
          >
            <ToggleButton value="category">
              <Tooltip title="View by Category">
                <CategoryIcon fontSize="small" />
              </Tooltip>
            </ToggleButton>
            <ToggleButton value="level">
              <Tooltip title="View by Proficiency Level">
                <GradientIcon fontSize="small" />
              </Tooltip>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      <AnimatePresence mode="wait">
        {viewMode === 'category' ? (
          <motion.div
            key="categories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={3}>
              {Object.entries(resumeData.skills).map(([category, skills], categoryIndex) => (
                <Grid item xs={12} md={6} key={category}>
                  <CategoryVisual 
                    category={category}
                    skills={skills}
                    highlighted={highlighted}
                    onSkillClick={handleSkillClick}
                  />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        ) : (
          <motion.div
            key="levels"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SkillsByLevel 
              skills={allSkills}
              highlighted={highlighted}
              onSkillClick={handleSkillClick}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de detalhes da habilidade */}
      <SkillDetailModal 
        open={modalOpen}
        onClose={handleCloseModal}
        skill={selectedSkill}
      />
    </Box>
  );
}; 