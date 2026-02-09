# Terminal Portfolio - Template Instructions

This is a terminal-themed developer portfolio template built with React, TypeScript, and Material-UI.

## 🌿 Branch Structure

- **`main`** - Clean template with placeholder data (use this as starting point)
- **`personal`** - Example implementation with real data (for reference)

## 🚀 Quick Start

### 1. Fork or Clone
```bash
git clone https://github.com/pmatheusvinhas/terminal-portfolio.git
cd terminal-portfolio
npm install
```

### 2. Customize Your Data

Edit `src/data/resume.ts` with your information:

```typescript
export const resumeData = {
  header: {
    name: "Your Name",
    title: "Your Title",
    location: {
      current: "Your Location",
      origin: "Your Origin"
    },
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    summary: `Your professional summary...`
  },

  education: [
    {
      degree: "Your Degree",
      institution: "Your Institution",
      period: "YYYY-YYYY"
    }
  ],

  certifications: [
    {
      name: "Certification Name",
      issuer: "Issuer",
      year: "YYYY"
    }
  ],

  experience: [
    {
      title: "Job Title",
      company: "Company Name",
      period: "MMM YYYY - MMM YYYY",
      location: "Location",
      description: [
        "Achievement or responsibility 1",
        "Achievement or responsibility 2"
      ],
      techStack: ["Tech1", "Tech2", "Tech3"],
      expandedFeatures: {
        showArchitecture: false,
        showMetrics: false,
        showDiagrams: false
      }
    }
  ],

  skills: {
    backend: [
      { name: "Python", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" }
    ],
    frontend: [
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" }
    ],
    // ... more categories
  }
}
```

### 3. Optional: Add Expanded Experience Details

For experiences where you want to show architecture diagrams and metrics:

```typescript
{
  title: "Senior Engineer",
  company: "Tech Company",
  // ... basic info
  expandedFeatures: {
    showArchitecture: true,
    showMetrics: true,
    showDiagrams: true
  },
  expanded: {
    architecture: {
      overview: "Technical overview of your work...",
      components: [
        {
          name: "Component Name",
          description: "What it does",
          techDetails: "Technologies used"
        }
      ],
      challenges: [
        {
          problem: "Problem you faced",
          solution: "How you solved it",
          outcome: "Results achieved"
        }
      ],
      diagrams: [
        {
          title: "Diagram Title",
          description: "Diagram description",
          imageUrl: `${basePath}diagrams/your-diagram.png`
        }
      ]
    },
    metrics: {
      business: [
        {
          metric: "Metric Name",
          value: "Value",
          context: "Context",
          growth: "Growth indicator"
        }
      ],
      technical: [...],
      scale: [...]
    }
  }
}
```

### 4. Add Diagrams (Optional)

Place architecture diagrams in `public/diagrams/` and reference them in your experience expanded section.

### 5. Customize Footer

Edit `src/components/Footer.tsx` to personalize the footer message.

### 6. Run Locally

```bash
npm run dev
```

Visit `http://localhost:1234` to see your portfolio.

### 7. Build for Production

```bash
npm run build
```

### 8. Deploy

#### GitHub Pages (Recommended)

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. The included GitHub Actions workflow will automatically deploy to GitHub Pages on push to `main` (or configure to deploy from `personal` branch if using the branch strategy).

3. Enable GitHub Pages in repository settings pointing to the `gh-pages` branch.

## 🎨 Features

- ✅ Terminal-themed design with CRT effects
- ✅ Responsive layout (mobile-friendly)
- ✅ ATS-optimized PDF export
- ✅ Interactive skill details with GitHub integration
- ✅ Professional experience timeline with expandable details
- ✅ Tech stack badges (150+ technologies mapped)
- ✅ GitHub statistics integration
- ✅ Dark mode with retro terminal aesthetics

## 🔧 Tech Stack

- React 18
- TypeScript
- Vite
- Material-UI
- Framer Motion
- Recharts
- jsPDF

## 📝 Branch Strategy (If Forking)

If you want to keep this as a reusable template:

1. Keep `main` clean with placeholder data
2. Create a `personal` branch for your real data
3. Configure GitHub Pages to deploy from `personal`
4. When pulling template updates: `git checkout main && git pull upstream main`

## 🤝 Contributing

Feel free to submit issues or pull requests to improve the template!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 💡 Tips

- Use real metrics and achievements in your experience descriptions
- Keep summaries concise and action-oriented
- Leverage the expanded sections for roles you want to highlight
- Add architecture diagrams to showcase technical complexity
- Ensure tech stacks are accurate - they're used for skill filtering

## 🆘 Need Help?

Check the example implementation in the `personal` branch for reference.
