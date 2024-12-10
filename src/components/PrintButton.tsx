import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Print } from '@mui/icons-material';
import { jsPDF } from 'jspdf';
import { resumeData } from '../data/resume';

export const PrintButton: React.FC = () => {
  const handlePrint = () => {
    const doc = new jsPDF();
    const { header, education, experience, skills, certifications } = resumeData;
    const margin = 20;
    let y = margin;

    const addSection = (title: string, content: string) => {
      y += 10;
      doc.setFontSize(16);
      doc.text(title, margin, y);
      y += 8;
      doc.setFontSize(12);
      const lines = doc.splitTextToSize(content, doc.internal.pageSize.width - 2 * margin);
      doc.text(lines, margin, y);
      y += lines.length * 7;
    };

    // Header usando dados do resume.ts
    doc.setFontSize(24);
    doc.text(header.name, margin, y);
    y += 10;
    doc.setFontSize(12);
    doc.text([
      header.title,
      `Location: ${header.location.current}`,
      `Contact: ${header.email}`,
      `GitHub: ${header.github}`
    ], margin, y);
    y += 20;

    // Summary do resume.ts
    addSection('PROFESSIONAL SUMMARY', header.summary);

    // Skills do resume.ts
    addSection('TECHNICAL EXPERTISE',
      Object.entries(skills)
        .map(([category, items]) => `${category}: ${items.join(' | ')}`)
        .join('\n')
    );

    // Experience do resume.ts com métricas
    y += 10;
    doc.setFontSize(16);
    doc.text('PROFESSIONAL EXPERIENCE', margin, y);
    y += 10;

    experience.forEach(exp => {
      if (y > doc.internal.pageSize.height - 50) {
        doc.addPage();
        y = margin;
      }

      // Título e período
      doc.setFontSize(14);
      doc.text(`${exp.title} | ${exp.company}`, margin, y);
      y += 7;
      doc.setFontSize(12);
      doc.text(`${exp.period} | ${exp.location}`, margin, y);
      y += 7;

      // Achievements com métricas
      if (exp.expanded?.metrics) {
        const achievements = Object.entries(exp.expanded.metrics)
          .flatMap(([category, items]) => 
            items.map(item => `• ${item.metric}: ${item.value} ${item.context ? `(${item.context})` : ''}`)
          );
        
        achievements.forEach(achievement => {
          const lines = doc.splitTextToSize(achievement, doc.internal.pageSize.width - 2 * margin);
          doc.text(lines, margin, y);
          y += lines.length * 7;
        });
      }

      // Responsabilidades principais
      exp.description.forEach(desc => {
        const lines = doc.splitTextToSize(`• ${desc}`, doc.internal.pageSize.width - 2 * margin);
        doc.text(lines, margin, y);
        y += lines.length * 7;
      });

      // Tech Stack
      doc.text(`Technical Environment: ${exp.techStack.join(' | ')}`, margin, y);
      y += 10;
    });

    // Education - Mantendo relevante e conciso
    if (y > doc.internal.pageSize.height - 50) {
      doc.addPage();
      y = margin;
    }

    addSection('EDUCATION',
      education.map(edu => 
        `${edu.degree}\n${edu.institution} (${edu.period})`
      ).join('\n\n')
    );

    // Certifications - Destacando desenvolvimento contínuo
    if (y > doc.internal.pageSize.height - 50) {
      doc.addPage();
      y = margin;
    }

    addSection('PROFESSIONAL CERTIFICATIONS',
      certifications.map(cert => 
        `${cert.name} - ${cert.issuer} (${cert.year})`
      ).join('\n')
    );

    doc.save('paulo-vinhas-cv.pdf');
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