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

    // Função auxiliar para verificar espaço e adicionar nova página
    const checkSpace = (neededSpace: number) => {
      if (y + neededSpace > doc.internal.pageSize.height - margin) {
        doc.addPage();
        y = margin;
        return true;
      }
      return false;
    };

    const addSection = (title: string, content: string) => {
      checkSpace(30); // Verifica espaço para título + conteúdo inicial
      
      doc.setFontSize(16);
      doc.text(title, margin, y);
      y += 8;
      
      doc.setFontSize(12);
      const lines = doc.splitTextToSize(content, doc.internal.pageSize.width - 2 * margin);
      
      // Verifica se precisa de nova página para o conteúdo
      if (checkSpace(lines.length * 7)) {
        doc.setFontSize(12);
      }
      
      doc.text(lines, margin, y);
      y += lines.length * 7 + 5;
    };

    // Header
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
    y += 25;

    // Summary
    const summaryLines = doc.splitTextToSize(header.summary, doc.internal.pageSize.width - 2 * margin);
    checkSpace(summaryLines.length * 7 + 15);
    addSection('PROFESSIONAL SUMMARY', header.summary);

    // Technical Expertise
    const techContent = Object.entries(skills)
      .map(([category, items]) => `${category}: ${items.join(' | ')}`)
      .join('\n');
    checkSpace(40);
    addSection('TECHNICAL EXPERTISE', techContent);

    // Professional Experience
    checkSpace(20);
    doc.setFontSize(16);
    doc.text('PROFESSIONAL EXPERIENCE', margin, y);
    y += 10;

    experience.forEach(exp => {
      // Verifica espaço para cada experiência
      checkSpace(40);

      // Título e período
      doc.setFontSize(14);
      doc.text(`${exp.title} | ${exp.company}`, margin, y);
      y += 7;
      doc.setFontSize(12);
      doc.text(`${exp.period} | ${exp.location}`, margin, y);
      y += 7;

      // Métricas
      if (exp.expanded?.metrics) {
        Object.entries(exp.expanded.metrics).forEach(([_, items]) => {
          items.forEach(item => {
            const metricText = `• ${item.metric}: ${item.value} ${item.context ? `(${item.context})` : ''}`;
            const lines = doc.splitTextToSize(metricText, doc.internal.pageSize.width - 2 * margin);
            
            checkSpace(lines.length * 7);
            doc.text(lines, margin, y);
            y += lines.length * 7;
          });
        });
      }

      // Descrições
      exp.description.forEach(desc => {
        const lines = doc.splitTextToSize(`• ${desc}`, doc.internal.pageSize.width - 2 * margin);
        checkSpace(lines.length * 7);
        doc.text(lines, margin, y);
        y += lines.length * 7;
      });

      // Tech Stack
      const techStackLines = doc.splitTextToSize(
        `Technical Environment: ${exp.techStack.join(' | ')}`,
        doc.internal.pageSize.width - 2 * margin
      );
      checkSpace(techStackLines.length * 7 + 10);
      doc.text(techStackLines, margin, y);
      y += techStackLines.length * 7 + 10;
    });

    // Education
    const eduContent = education
      .map(edu => `${edu.degree}\n${edu.institution} (${edu.period})`)
      .join('\n\n');
    checkSpace(30);
    addSection('EDUCATION', eduContent);

    // Certifications
    const certContent = certifications
      .map(cert => `${cert.name} - ${cert.issuer} (${cert.year})`)
      .join('\n');
    checkSpace(30);
    addSection('PROFESSIONAL CERTIFICATIONS', certContent);

    // Portfolio Link
    checkSpace(20);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 238);
    doc.text(
      'Portfolio & More About Me: https://pmatheusvinhas.github.io/terminal-portfolio',
      margin,
      y
    );
    doc.setTextColor(0);

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