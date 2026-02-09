# Terminal Portfolio

A modern, customizable portfolio template with a retro terminal theme, built with React, TypeScript, and Material-UI.

**[View Live Demo →](https://pmatheusvinhas.github.io/terminal-portfolio/)**

## 🚀 Features

- 🌙 Dark mode optimized design with retro CRT effects
- 📊 Real-time GitHub statistics and analytics
- 💾 Interactive tech stack visualization with detailed skill modals
- 🖨️ ATS-Optimized Resume Export (PDF)
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Vite
- 🎨 150+ technology badges mapped

## 🎯 ATS Optimization

This template is designed to be ATS (Applicant Tracking System) friendly:

- **Structured Data**: All resume data centralized in `src/data/resume.ts`
- **Keyword Optimization**: Skills and experiences organized for maximum ATS parsing
- **Clean Export**: PDF generation with selectable text and clear hierarchy
- **Quantifiable Achievements**: Easy to highlight metrics and impact

## 🛠️ Tech Stack

- React 18
- TypeScript
- Material-UI (MUI)
- Framer Motion
- Recharts
- Vite
- GitHub API Integration

## 🏃‍♂️ Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/pmatheusvinhas/terminal-portfolio.git
cd terminal-portfolio
npm install
```

### 2. Customize your data

Edit `src/data/resume.ts` with your information:

```typescript
export const resumeData = {
  header: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    summary: "Your professional summary..."
  },
  experience: [
    {
      title: "Job Title",
      company: "Company Name",
      period: "MMM YYYY - MMM YYYY",
      description: [
        "Achievement or responsibility 1",
        "Achievement or responsibility 2"
      ],
      techStack: ["Tech1", "Tech2", "Tech3"]
    }
  ],
  skills: {
    backend: [{ name: "Python", level: "Advanced" }],
    frontend: [{ name: "React", level: "Advanced" }],
    // ... more categories
  }
  // ... education, certifications, etc.
}
```

See `TEMPLATE_INSTRUCTIONS.md` for detailed customization guide.

### 3. (Optional) Add GitHub Token

For GitHub statistics integration:

1. Create a GitHub Personal Access Token with `read:user` and `repo` permissions
2. Add to `.env` file:
```env
VITE_GH_TOKEN=your_github_token_here
```

### 4. Run locally
```bash
npm run dev
```

Visit `http://localhost:5173`

### 5. Build for production
```bash
npm run build
```

## 🚢 Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. Push to GitHub and enable Pages in repository settings

3. The included GitHub Actions workflow will auto-deploy on push

### Other Platforms

The built files in `dist/` can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting service

## 📝 Customization Guide

### Replace Personal Images

Update images in `public/images/` (used in "Beyond Code" section):
```
public/images/1.jpg
public/images/2.jpg
public/images/3.jpg
```

### Add Architecture Diagrams (Optional)

For experiences with technical details, add diagrams to `public/diagrams/`:
```
public/diagrams/your-diagram.png
```

Reference in `resume.ts`:
```typescript
diagrams: [
  {
    title: "System Architecture",
    description: "Overview of the system",
    imageUrl: `${basePath}diagrams/your-diagram.png`
  }
]
```

### Customize Footer

Edit `src/components/Footer.tsx` to personalize the footer message.

### Adjust Theme Colors

Modify `src/theme/index.ts` to change color scheme:
```typescript
palette: {
  primary: { main: '#bb86fc' },  // Your primary color
  secondary: { main: '#03dac6' }, // Your secondary color
  // ...
}
```

## 📋 Features Breakdown

### Skills Section
- View by category or proficiency level
- Click any skill to see:
  - Related professional experiences
  - GitHub projects using that technology
  - Public and private project counts

### Experience Section
- Timeline visualization
- Expandable details with architecture diagrams
- Business, technical, and scale metrics
- Tech stack badges

### GitHub Integration
- Language statistics
- Activity charts
- Repository showcase
- Contribution patterns

### PDF Export
- ATS-optimized formatting
- Selectable text
- Clean hierarchy
- Automatic page breaks

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

MIT License - feel free to use this template for your portfolio.

## 💡 Credits

Created by [Paulo Vinhas](https://github.com/pmatheusvinhas)

If you use this template, consider giving it a ⭐!
