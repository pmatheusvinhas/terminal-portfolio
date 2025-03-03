import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';

interface TechBadgeProps {
  tech: string;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
}

// Mapeia tecnologias para cores e abreviações
const techMap: Record<string, { color: string; abbr: string; category: string }> = {
  // Linguagens de programação
  'JavaScript': { color: '#f7df1e', abbr: 'JS', category: 'language' },
  'TypeScript': { color: '#3178c6', abbr: 'TS', category: 'language' },
  'Python': { color: '#3776ab', abbr: 'PY', category: 'language' },
  'Java': { color: '#007396', abbr: 'JV', category: 'language' },
  'C++': { color: '#00599c', abbr: 'C++', category: 'language' },
  'C#': { color: '#239120', abbr: 'C#', category: 'language' },
  'Go': { color: '#00add8', abbr: 'GO', category: 'language' },
  'Rust': { color: '#dea584', abbr: 'RS', category: 'language' },
  'PHP': { color: '#777bb4', abbr: 'PHP', category: 'language' },
  'Ruby': { color: '#cc342d', abbr: 'RB', category: 'language' },
  'Swift': { color: '#f05138', abbr: 'SW', category: 'language' },
  'Kotlin': { color: '#7f52ff', abbr: 'KT', category: 'language' },
  'Julia': { color: '#9558b2', abbr: 'JL', category: 'language' },
  'Scala': { color: '#dc322f', abbr: 'SC', category: 'language' },
  'Clojure': { color: '#5881d8', abbr: 'CLJ', category: 'language' },
  'Haskell': { color: '#5e5086', abbr: 'HS', category: 'language' },
  'Erlang': { color: '#a90533', abbr: 'ER', category: 'language' },
  'Elixir': { color: '#6e4a7e', abbr: 'EX', category: 'language' },
  'R': { color: '#276dc3', abbr: 'R', category: 'language' },
  'CUDA': { color: '#76b900', abbr: 'CU', category: 'language' },

  // Frontend frameworks & libraries
  'React': { color: '#61dafb', abbr: 'Re', category: 'frontend' },
  'Vue': { color: '#4fc08d', abbr: 'Vu', category: 'frontend' },
  'Angular': { color: '#dd0031', abbr: 'Ng', category: 'frontend' },
  'Svelte': { color: '#ff3e00', abbr: 'Sv', category: 'frontend' },
  'Next.js': { color: '#000000', abbr: 'NX', category: 'frontend' },
  'Material-UI': { color: '#0081cb', abbr: 'MUI', category: 'frontend' },
  'Tailwind': { color: '#06b6d4', abbr: 'TW', category: 'frontend' },
  'Bootstrap': { color: '#7952b3', abbr: 'BS', category: 'frontend' },
  'Redux': { color: '#764abc', abbr: 'RX', category: 'frontend' },
  'jQuery': { color: '#0769ad', abbr: 'jQ', category: 'frontend' },
  'CSS': { color: '#1572b6', abbr: 'CSS', category: 'frontend' },
  'HTML': { color: '#e34f26', abbr: 'HTML', category: 'frontend' },
  'SASS': { color: '#cc6699', abbr: 'SASS', category: 'frontend' },
  'Chart.js': { color: '#ff6384', abbr: 'CJS', category: 'frontend' },
  'D3.js': { color: '#f9a03c', abbr: 'D3', category: 'frontend' },
  'Framer Motion': { color: '#0055ff', abbr: 'FM', category: 'frontend' },

  // Backend & databases
  'Node.js': { color: '#339933', abbr: 'Nd', category: 'backend' },
  'Express': { color: '#000000', abbr: 'Ex', category: 'backend' },
  'Django': { color: '#092e20', abbr: 'Dj', category: 'backend' },
  'Flask': { color: '#000000', abbr: 'Fl', category: 'backend' },
  'Spring': { color: '#6db33f', abbr: 'Sp', category: 'backend' },
  'Laravel': { color: '#ff2d20', abbr: 'Lv', category: 'backend' },
  'ASP.NET': { color: '#512bd4', abbr: 'ASP', category: 'backend' },
  'MongoDB': { color: '#47a248', abbr: 'MDB', category: 'database' },
  'PostgreSQL': { color: '#336791', abbr: 'PG', category: 'database' },
  'MySQL': { color: '#4479a1', abbr: 'SQL', category: 'database' },
  'Redis': { color: '#dc382d', abbr: 'RD', category: 'database' },
  'SQLite': { color: '#003b57', abbr: 'SQ', category: 'database' },
  'GraphQL': { color: '#e10098', abbr: 'GQL', category: 'backend' },
  'Apollo': { color: '#311c87', abbr: 'AP', category: 'backend' },
  'REST': { color: '#0096c7', abbr: 'REST', category: 'backend' },
  'Firebase': { color: '#ffca28', abbr: 'FB', category: 'backend' },

  // DevOps & tools
  'Docker': { color: '#2496ed', abbr: 'DK', category: 'devops' },
  'Kubernetes': { color: '#326ce5', abbr: 'K8s', category: 'devops' },
  'Git': { color: '#f05032', abbr: 'Git', category: 'tool' },
  'AWS': { color: '#232f3e', abbr: 'AWS', category: 'cloud' },
  'Azure': { color: '#0078d4', abbr: 'AZ', category: 'cloud' },
  'GCP': { color: '#4285f4', abbr: 'GCP', category: 'cloud' },
  'Jenkins': { color: '#d24939', abbr: 'JK', category: 'devops' },
  'Travis CI': { color: '#3eaaaf', abbr: 'TCI', category: 'devops' },
  'CircleCI': { color: '#343434', abbr: 'CCI', category: 'devops' },
  'Terraform': { color: '#7b42bc', abbr: 'TF', category: 'devops' },
  'Ansible': { color: '#ee0000', abbr: 'ANS', category: 'devops' },
  
  // AI/ML
  'TensorFlow': { color: '#ff6f00', abbr: 'TF', category: 'ml' },
  'PyTorch': { color: '#ee4c2c', abbr: 'PT', category: 'ml' },
  'Keras': { color: '#d00000', abbr: 'KR', category: 'ml' },
  'Scikit-learn': { color: '#f89939', abbr: 'SKL', category: 'ml' },
  'Pandas': { color: '#150458', abbr: 'PD', category: 'ml' },
  'NumPy': { color: '#013243', abbr: 'NP', category: 'ml' },
  'OpenAI': { color: '#412991', abbr: 'OAI', category: 'ml' },
  'Hugging Face': { color: '#ffad00', abbr: 'HF', category: 'ml' },
  'MLFlow': { color: '#0194e2', abbr: 'MLF', category: 'ml' },
  'BPE': { color: '#5a3b5d', abbr: 'BPE', category: 'ml' },
  'Cohere': { color: '#2596be', abbr: 'COH', category: 'ml' },
  
  // Outras tecnologias/ferramentas
  'Webpack': { color: '#8dd6f9', abbr: 'WP', category: 'tool' },
  'Vite': { color: '#646cff', abbr: 'VT', category: 'tool' },
  'Babel': { color: '#f9dc3e', abbr: 'BL', category: 'tool' },
  'ESLint': { color: '#4b32c3', abbr: 'ES', category: 'tool' },
  'Jest': { color: '#c21325', abbr: 'JT', category: 'tool' },
  'Cypress': { color: '#17202c', abbr: 'CY', category: 'tool' },
  'Jira': { color: '#0052cc', abbr: 'JR', category: 'tool' },
  'Confluence': { color: '#172b4d', abbr: 'CF', category: 'tool' },
  'Figma': { color: '#f24e1e', abbr: 'FM', category: 'design' },
  'Sketch': { color: '#fa6400', abbr: 'SK', category: 'design' },
  'Photoshop': { color: '#31a8ff', abbr: 'PS', category: 'design' },
  'Illustrator': { color: '#ff9a00', abbr: 'AI', category: 'design' },
  'Threading': { color: '#6200ea', abbr: 'THR', category: 'performance' },
  'Lighthouse': { color: '#f44b21', abbr: 'LH', category: 'tool' },
};

// Função para determinar a cor do texto baseado no contraste
function getTextColor(bgColor: string): string {
  // Converte hex para RGB
  const hex = bgColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Calcula a luminância aproximada
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Retorna branco para cores escuras, preto para cores claras
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

// Função para gerar um identificador único baseado no nome da tecnologia
function generateTechColor(techName: string): { color: string; abbr: string; category: string } {
  // Gerar uma cor pseudo-aleatória consistente baseada no nome da tecnologia
  let hash = 0;
  for (let i = 0; i < techName.length; i++) {
    hash = techName.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const hue = Math.abs(hash % 360);
  const saturation = 65 + Math.abs((hash % 20));
  const lightness = 45 + Math.abs((hash % 20));
  
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  
  // Gerar abreviação (primeiras 2-3 letras ou iniciais para palavras compostas)
  let abbr = '';
  if (techName.includes(' ') || techName.includes('.') || techName.includes('-')) {
    // Para nomes compostos, use as iniciais
    abbr = techName
      .split(/[\s\.-]+/)
      .map(word => word.charAt(0).toUpperCase())
      .join('');
    
    // Limite a 3 caracteres
    abbr = abbr.substring(0, 3);
  } else {
    // Para nomes únicos, use as primeiras letras
    abbr = techName.substring(0, Math.min(3, techName.length)).toUpperCase();
  }
  
  return {
    color,
    abbr,
    category: 'other'
  };
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech, size = 'medium', showLabel = true }) => {
  // Obtem informações da tecnologia do mapa ou gera dinamicamente
  const techInfo = techMap[tech] || generateTechColor(tech);
  
  // Determina o tamanho baseado no prop size
  const dimensions = {
    small: { badge: 24, fontSize: '0.6rem', labelSize: '0.65rem' },
    medium: { badge: 36, fontSize: '0.75rem', labelSize: '0.75rem' },
    large: { badge: 48, fontSize: '0.85rem', labelSize: '0.85rem' }
  }[size];
  
  const textColor = getTextColor(techInfo.color);
  
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
      <Tooltip title={tech}>
        <Box
          sx={{
            width: dimensions.badge,
            height: dimensions.badge,
            borderRadius: '4px',
            backgroundColor: techInfo.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: textColor,
            fontWeight: 'bold',
            fontSize: dimensions.fontSize,
            fontFamily: 'monospace',
            userSelect: 'none',
            border: '1px solid',
            borderColor: `${textColor}20` // Cor do texto com 20% de opacidade para a borda
          }}
        >
          {techInfo.abbr}
        </Box>
      </Tooltip>
      
      {showLabel && (
        <Typography 
          variant="body2" 
          sx={{ 
            fontSize: dimensions.labelSize,
            display: { xs: size === 'small' ? 'none' : 'block', sm: 'block' } 
          }}
        >
          {tech}
        </Typography>
      )}
    </Box>
  );
};

export default TechBadge; 