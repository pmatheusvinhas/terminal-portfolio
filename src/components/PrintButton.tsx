import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Print, Download } from '@mui/icons-material';
import html2pdf from 'html2pdf.js';

export const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.body;
    const opt = {
      margin: 1,
      filename: 'paulo-vinhas-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <Box
      className="no-print"
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1000,
        display: 'flex',
        gap: 1,
      }}
    >
      <Tooltip title="Print Resume">
        <IconButton onClick={handlePrint} sx={{ bgcolor: 'background.paper' }}>
          <Print />
        </IconButton>
      </Tooltip>
      <Tooltip title="Download PDF">
        <IconButton onClick={handleDownload} sx={{ bgcolor: 'background.paper' }}>
          <Download />
        </IconButton>
      </Tooltip>
    </Box>
  );
}; 