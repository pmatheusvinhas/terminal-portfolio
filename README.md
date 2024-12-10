# Terminal Portfolio

A modern portfolio website with a retro terminal theme, built using React, TypeScript, and Material-UI.

## 🚀 Features

- 🌙 Dark mode optimized design
- 📊 Real-time GitHub statistics and analytics
- 💾 Interactive tech stack visualization
- 🖨️ ATS-Optimized Resume Export
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance

## 🎯 ATS Optimization

This template is designed to be ATS (Applicant Tracking System) friendly:

1. **Structured Data**: All resume data is centralized in `src/data/resume.ts` following ATS-friendly patterns
2. **Keyword Optimization**: Skills and experiences are organized to maximize ATS parsing
3. **Clean Export**: PDF generation with selectable text and clear hierarchy
4. **Consistent Formatting**: Standardized sections and bullet points
5. **Metrics Focus**: Easy to highlight quantifiable achievements

### Resume Export Options
- **Web View**: Interactive portfolio with expanded details
- **ATS PDF**: Clean, parseable format optimized for ATS
- **Print Version**: Printer-friendly layout

## 🛠️ Built With

- React
- TypeScript
- Material-UI
- Framer Motion
- Recharts
- GitHub API

## 🏃‍♂️ Running Locally

1. Clone the repository
```bash
git clone https://github.com/your-username/terminal-portfolio.git
```

2. Install dependencies
```bash
cd terminal-portfolio
npm install
```

3. Create a `.env` file in the root directory and add your GitHub token:
```
VITE_GITHUB_TOKEN=your_github_token
```

4. Start the development server
```bash
npm run dev
```

## 🔑 GitHub Token Setup

To use the GitHub integration features:

1. Go to GitHub Settings > Developer Settings > Personal Access Tokens
2. Generate a new token with the following permissions:
   - read:user
   - read:project
   - repo (for private repos statistics)
3. Add the token to your repository secrets:
   - Go to Settings > Secrets and variables > Actions
   - Create a new secret named `PERSONAL_ACCESS_TOKEN`
   - Paste your token
4. Add the token to your local `.env` file:
```
VITE_GITHUB_TOKEN=your_github_token
```

## Images

The project includes images in the `public/images` directory for the "Beyond Code" section. If you fork this project:

1. Replace the images in `public/images` with your own:
```bash
public/images/
├── 1.jpg  # First showcase image
├── 2.jpg  # Second showcase image
└── 3.jpg  # Third showcase image
```

2. Maintain the same naming convention (1.jpg, 2.jpg, 3.jpg)
3. Recommended image size: 800x600px or similar aspect ratio

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 👨‍💻 Author & Credits

**Original Author:** [Paulo Vinhas](https://github.com/pmatheusvinhas)

If you use this project as a template for your portfolio, please give appropriate credit by linking back to the original repository and author.

### Fork & Use Guidelines
If you'd like to fork this project:
1. Maintain the original author credits in your README
2. Replace the content in `src/data/resume.ts` with your own information
3. Consider starring the original repository if you find it useful

## 🙏 Acknowledgments

- Icons from [devicons](https://devicon.dev/)
- Inspired by retro terminal interfaces
- Built with React + TypeScript + Material-UI
- GitHub integration for real-time analytics


## 🤝 Contributing

While this is primarily a personal portfolio template, bug fixes and improvements are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a Pull Request

## ⭐ Support

If you found this project helpful, consider:
- Giving it a star ⭐
- Following the [author](https://github.com/pmatheusvinhas) on GitHub
- Sharing it with others who might find it useful

## Customizing Diagrams

The portfolio includes several architecture diagrams that you can customize:

1. Check `/public/diagrams/examples/` for reference diagrams
2. Use `/public/diagrams/templates/` as starting points
3. Follow the guidelines in `src/config/diagrams.ts`
4. Replace the diagrams in `/public/diagrams/` with your own

### Diagram Requirements:
- Follow recommended dimensions for consistent display
- Maintain similar information hierarchy
- Use clear and professional visual style
- Include all key components and flows

See individual diagram guidelines for specific recommendations.

## Customizing Experiences

Each experience in your portfolio can be customized with different levels of detail:

### Expandable Features
You can enable/disable different aspects for each experience:
```typescript
expandedFeatures: {
  showArchitecture: boolean;  // Show technical architecture details
  showMetrics: boolean;       // Show impact metrics
  showDiagrams: boolean;      // Show architecture diagrams
}
```

### Example Configuration:
```typescript
{
  title: "Software Engineer",
  company: "Example Corp",
  // ... basic info ...
  expandedFeatures: {
    showArchitecture: true,   // Enable architecture section
    showMetrics: true,        // Enable metrics section
    showDiagrams: false       // Disable diagrams
  },
  expanded: {
    // ... detailed content ...
  }
}
```

This allows you to:
- Show only relevant information for each experience
- Keep simpler experiences concise
- Highlight complex projects with full details
