import React from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { Print, Description } from '@mui/icons-material';
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

  const handleExtendedProfile = () => {
    const doc = new jsPDF();
    const margin = 20;
    let y = margin;

    // Função auxiliar para adicionar texto com quebra de página
    const addText = (text: string, fontSize: number = 12) => {
      doc.setFontSize(fontSize);
      const lines = doc.splitTextToSize(text, doc.internal.pageSize.width - 2 * margin);
      
      if (y + (lines.length * 7) > doc.internal.pageSize.height - margin) {
        doc.addPage();
        y = margin;
      }
      
      doc.text(lines, margin, y);
      y += lines.length * 7 + 5;
    };

    // Header
    addText("Extended Professional Profile - Paulo Vinhas", 24);
    y += 10;

    // Problem Solver Profile
    addText("PROBLEM SOLVER PROFILE", 16);
    y += 5;
    addText(`As a senior software engineer, I approach challenges through systematic problem decomposition and innovative solution design. My experience spans from optimizing embedded systems to architecting distributed platforms and AI solutions. Key strengths include:

    • Strategic Thinking: Ability to understand business context and design technical solutions that address root causes
    • Innovation Focus: Track record of introducing new technologies and approaches to solve complex problems
    • Scalable Solutions: Experience in designing systems that can grow and adapt to changing requirements
    • Cross-functional Leadership: Success in leading teams and collaborating across departments`);
    y += 15;

    // Detailed Experience
    addText("DETAILED EXPERIENCE", 16);
    y += 5;

    resumeData.experience.forEach(exp => {
      addText(`${exp.title} @ ${exp.company} (${exp.period})`, 14);
      y += 5;

      // Context and Challenges
      if (exp.expanded?.architecture) {
        addText("Context:", 12);
        addText(exp.expanded.architecture.overview);
        y += 10;

        addText("Technical Challenges:", 12);
        exp.expanded.architecture.challenges.forEach(challenge => {
          addText(`• Problem: ${challenge.problem}`);
          addText(`  Solution: ${challenge.solution}`);
          addText(`  Outcome: ${challenge.outcome}`);
          y += 5;
        });
      }

      // Technical Implementation
      if (exp.expanded?.architecture.components) {
        addText("Technical Implementation:", 12);
        exp.expanded.architecture.components.forEach(component => {
          addText(`• ${component.name}: ${component.description}`);
          addText(`  Tech Stack: ${component.techDetails}`);
          y += 5;
        });
      }

      // Impact and Metrics
      if (exp.expanded?.metrics) {
        addText("Impact and Results:", 12);
        Object.entries(exp.expanded.metrics).forEach(([_, items]) => {
          items.forEach(item => {
            addText(`• ${item.metric}: ${item.value} ${item.context ? `(${item.context})` : ''}`);
          });
        });
      }
      y += 15;
    });

    // Leadership & Communication Style
    addText("LEADERSHIP APPROACH", 16);
    y += 5;
    addText(`My leadership style combines technical expertise with strong communication and mentorship abilities:

    • Team Building: Led development teams at Nitro Química and managed contractors at Vinbol, focusing on clear communication and knowledge sharing
    • Stakeholder Management: Collaborated with 18 business units across 4 countries at Nitro Química, translating business requirements into technical solutions
    • Technical Mentorship: Mentored junior engineers, focusing on code quality and architectural best practices
    • Cross-functional Leadership: Acted as technical Product Owner, bridging business needs with technical implementation`);
    y += 15;

    // Problem-Solving Approach
    addText("TECHNICAL DECISION MAKING", 16);
    y += 5;
    addText(`My approach to technical challenges combines systematic analysis with practical implementation:

    • Requirements Analysis: Deep dive into business context to understand root causes and design appropriate solutions
    • Technology Selection: Balance between innovation and reliability, considering team capabilities and business constraints
    • Quality Assurance: Implement robust testing and monitoring strategies to ensure solution reliability
    • Knowledge Transfer: Create comprehensive documentation and knowledge sharing processes`);
    y += 15;

    // Project Deep Dives
    resumeData.experience.forEach(exp => {
      addText(`${exp.title} @ ${exp.company} (${exp.period})`, 14);
      y += 5;

      // Leadership Context
      addText("Leadership Context:", 12);
      if (exp.company === "Nitro Química") {
        addText(`Led a cross-functional initiative involving 18 business units across 4 countries. Managed a junior engineer while acting as technical Product Owner, translating complex business requirements into technical specifications. Established development standards and mentoring processes.`);
      } else if (exp.company === "Vinbol") {
        addText(`Co-founded and led technical direction, managing contractors for specific deliverables. Established AI development practices and quality standards. Direct collaboration with stakeholders for requirements gathering and solution design.`);
      }
      y += 10;

      // Technical Implementation
      // ... resto do código existente ...
    });

    // Communication Examples
    addText("STAKEHOLDER COMMUNICATION", 16);
    y += 5;
    addText(`Examples of effective technical communication:

    • Business Stakeholders: Translated complex data architecture concepts into business value propositions at Nitro Química
    • Technical Teams: Created comprehensive documentation and knowledge sharing processes
    • Cross-functional Teams: Facilitated communication between business units and development team
    • Executive Level: Presented technical strategies and ROI analysis to leadership`);

    doc.save('paulo-vinhas-extended-profile.pdf');
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
        gap: 1
      }}
    >
      <Tooltip title="Download ATS Resume">
        <IconButton onClick={handlePrint} sx={{ bgcolor: 'background.paper' }}>
          <Print />
        </IconButton>
      </Tooltip>
      <Tooltip title="Download Extended Profile">
        <IconButton onClick={handleExtendedProfile} sx={{ bgcolor: 'background.paper' }}>
          <Description />
        </IconButton>
      </Tooltip>
    </Box>
  );
}; 