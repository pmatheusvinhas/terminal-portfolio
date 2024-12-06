import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Print } from '@mui/icons-material';
import html2pdf from 'html2pdf.js';
import { resumeData } from '../data/resume';

export const PrintButton: React.FC = () => {
  const generatePrintableContent = () => {
    const content = document.createElement('div');
    const { header, education, experience, skills, certifications } = resumeData;

    content.innerHTML = `
      <div style="font-family: Arial, sans-serif; color: black; line-height: 1.6;">
        <h1 style="font-size: 24px; margin-bottom: 4px;">${header.name}</h1>
        <p style="font-size: 14px; margin-bottom: 16px;">
          ${header.title}<br/>
          ${header.location.current}<br/>
          ${header.email} | ${header.github}
        </p>
        
        <h2 style="font-size: 18px; margin-top: 24px;">Professional Summary</h2>
        <p style="font-size: 12px;">${header.summary}</p>

        <h2 style="font-size: 18px; margin-top: 24px;">Experience</h2>
        ${experience.map(exp => `
          <div style="margin-bottom: 16px;">
            <h3 style="font-size: 14px; margin-bottom: 4px;">${exp.title} | ${exp.company}</h3>
            <p style="font-size: 12px; margin: 0;">${exp.period} | ${exp.location}</p>
            <ul style="font-size: 12px; margin-top: 4px;">
              ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
            <p style="font-size: 12px; margin: 4px 0;">Technologies: ${exp.techStack.join(', ')}</p>
          </div>
        `).join('')}

        <h2 style="font-size: 18px; margin-top: 24px;">Education</h2>
        ${education.map(edu => `
          <div style="margin-bottom: 8px;">
            <h3 style="font-size: 14px; margin-bottom: 2px;">${edu.degree}</h3>
            <p style="font-size: 12px; margin: 0;">${edu.institution} | ${edu.period}</p>
          </div>
        `).join('')}

        <h2 style="font-size: 18px; margin-top: 24px;">Skills</h2>
        ${Object.entries(skills).map(([category, items]) => `
          <div style="margin-bottom: 8px;">
            <h3 style="font-size: 14px; margin-bottom: 2px;">${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <p style="font-size: 12px; margin: 0;">${items.join(', ')}</p>
          </div>
        `).join('')}

        <h2 style="font-size: 18px; margin-top: 24px;">Certifications</h2>
        ${certifications.map(cert => `
          <div style="margin-bottom: 4px;">
            <p style="font-size: 12px; margin: 0;">${cert.name} - ${cert.issuer} (${cert.year})</p>
          </div>
        `).join('')}
      </div>
    `;

    return content;
  };

  const handlePrint = () => {
    const printContent = generatePrintableContent();
    const opt = {
      margin: [15, 15, 0, 15],
      filename: 'paulo-vinhas-cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        putOnlyUsedFonts: true,
        floatPrecision: 16
      },
      pagebreak: { mode: 'avoid-all' },
      output: 'datauristring'
    };

    html2pdf()
      .set(opt)
      .from(printContent)
      .toPdf()
      .output('save', 'paulo-vinhas-cv.pdf');
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