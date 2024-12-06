# Terminal Portfolio

A modern portfolio website with a retro terminal theme, built using React, TypeScript, and Material-UI.

## 🚀 Features

- 🌙 Dark mode optimized design
- 📊 Real-time GitHub statistics and analytics
- 💾 Interactive tech stack visualization
- 🖨️ Print-friendly resume version
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance

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
