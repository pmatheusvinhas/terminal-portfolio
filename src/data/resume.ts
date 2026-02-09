const basePath = import.meta.env.BASE_URL

/**
 * Resume data structure optimized for both web display and ATS parsing.
 *
 * Key considerations for ATS:
 * - Use consistent formatting
 * - Include relevant keywords
 * - Quantify achievements
 * - Maintain clear hierarchy
 *
 * CUSTOMIZE THIS FILE:
 * Replace all placeholder data below with your own information.
 * Keep the structure intact but update values to match your experience.
 */
export const resumeData = {
  header: {
    // YOUR PERSONAL INFORMATION
    // Update these fields with your actual contact details
    name: "Your Name",
    title: "Your Professional Title | Your Specialization",
    location: {
      current: "Your City, Country (UTC±X)",
      origin: "Your Origin City, Country"
    },
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    // Write a compelling 2-3 sentence summary highlighting your experience and expertise
    summary: `Senior Software Engineer with X+ years of experience in distributed systems and full-stack development. Specialized in building scalable cloud-native applications with proven track record of optimizing performance and reducing operational costs. Passionate about solving complex technical challenges and delivering high-quality solutions.`
  },

  // EDUCATION SECTION
  // Add your educational background, most recent first
  education: [
    {
      degree: "Your Degree (e.g., Bachelor in Computer Science)",
      institution: "Your University Name",
      period: "YYYY-YYYY"
    },
    {
      degree: "Another Degree or Certification",
      institution: "Institution Name",
      period: "YYYY-YYYY"
    }
  ],

  // CERTIFICATIONS SECTION
  // List your professional certifications
  certifications: [
    {
      name: "Certification Name",
      issuer: "Issuing Organization",
      year: "YYYY"
    },
    {
      name: "Another Certification",
      issuer: "Issuing Organization",
      year: "YYYY"
    },
    {
      name: "Third Certification",
      issuer: "Issuing Organization",
      year: "YYYY"
    }
  ],

  // PROFESSIONAL EXPERIENCE SECTION
  // Add your work experience, most recent first
  // Each entry can have basic info or expanded details with architecture/metrics
  experience: [
    // EXAMPLE 1: Experience WITH expanded details (architecture, metrics, diagrams)
    {
      title: "Senior Software Engineer",
      company: "Your Current Company",
      period: "Month YYYY - Present",
      location: "City, Country / Remote",
      // List your key achievements and responsibilities (3-5 bullet points)
      description: [
        "Led development of key feature that improved system performance by X%",
        "Architected and implemented scalable microservices handling X requests per second",
        "Collaborated with cross-functional teams to deliver critical business objectives",
        "Mentored junior developers and established best practices for code quality"
      ],
      // List main technologies used (8-15 items recommended)
      techStack: ["Python", "React", "TypeScript", "Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis"],
      // EXPANDED DETAILS: Include this section to show detailed architecture and metrics
      expanded: {
        architecture: {
          overview: "Brief description of the system architecture and your role in designing/implementing it",
          components: [
            {
              name: "Component Name",
              description: "What this component does and why it's important",
              techDetails: "Technologies used, key implementation details"
            },
            {
              name: "Another Component",
              description: "Description of this component's role in the system",
              techDetails: "Technical stack and implementation approach"
            },
            {
              name: "Third Component",
              description: "What this component provides to the overall system",
              techDetails: "Key technologies and architectural decisions"
            }
          ],
          // Optional: Add architecture diagrams (images should be in public/diagrams/)
          // diagrams: [
          //   {
          //     title: "System Architecture",
          //     description: "Overview of system components and data flow",
          //     imageUrl: `${basePath}diagrams/your-diagram.png`
          //   }
          // ],
          challenges: [
            {
              problem: "Description of a technical challenge you faced",
              solution: "How you solved it and why you chose this approach",
              outcome: "Measurable results or improvements achieved"
            },
            {
              problem: "Another significant technical challenge",
              solution: "Your innovative solution or approach",
              outcome: "The positive impact on the project or business"
            }
          ]
        },
        metrics: {
          // Business impact metrics
          business: [
            {
              metric: "Cost Reduction",
              value: "-40%",
              context: "Infrastructure costs through optimization",
              growth: "Via intelligent caching strategy"
            },
            {
              metric: "User Growth",
              value: "+150%",
              context: "Active users over 6 months",
              growth: "Through improved UX"
            }
          ],
          // Technical performance metrics
          technical: [
            {
              metric: "Response Time",
              value: "50ms",
              context: "Average API response time",
              growth: "Down from 200ms"
            },
            {
              metric: "Code Coverage",
              value: "95%",
              context: "Test coverage maintained",
              growth: "Across all services"
            }
          ],
          // Scale and throughput metrics
          scale: [
            {
              metric: "Throughput",
              value: "10k+",
              context: "Requests per second",
              growth: "99.9% uptime"
            }
          ]
        }
      }
    },
    // EXAMPLE 2: Experience WITHOUT expanded details (simpler format)
    {
      title: "Software Engineer",
      company: "Previous Company Name",
      period: "Month YYYY - Month YYYY",
      location: "City, Country",
      // List your key achievements (3-4 bullet points)
      description: [
        "Developed and maintained critical backend services serving thousands of users",
        "Implemented automated testing pipeline reducing bug rate by X%",
        "Collaborated with product team to deliver features on time and within scope"
      ],
      // Technologies used at this position
      techStack: ["Node.js", "JavaScript", "MongoDB", "Docker", "AWS"],
      // For simpler entries, you can control which sections appear with expandedFeatures
      expandedFeatures: {
        showArchitecture: false,
        showMetrics: false,
        showDiagrams: false
      }
    }
    // Add more experience entries as needed, following one of the above formats
  ],

  // TECHNICAL SKILLS SECTION
  // Organize your skills by category
  // Levels: "Beginner" | "Intermediate" | "Advanced"
  skills: {
    // Backend technologies and frameworks
    backend: [
      { name: "Python", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Java", level: "Intermediate" }
    ],
    // Frontend technologies and frameworks
    frontend: [
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "TailwindCSS", level: "Intermediate" }
    ],
    // Cloud platforms and services
    cloud: [
      { name: "AWS", level: "Advanced" },
      { name: "Azure", level: "Intermediate" },
      { name: "GCP", level: "Beginner" }
    ],
    // DevOps tools and practices
    devops: [
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "CI/CD", level: "Advanced" },
      { name: "GitHub Actions", level: "Intermediate" }
    ],
    // Databases and data technologies
    data: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
      { name: "Kafka", level: "Beginner" }
    ],
    // AI/ML technologies (optional, remove if not applicable)
    AI: [
      { name: "TensorFlow", level: "Intermediate" },
      { name: "PyTorch", level: "Beginner" },
      { name: "OpenAI", level: "Intermediate" },
      { name: "LangChain", level: "Beginner" }
    ]
  },

  // HOBBIES & INTERESTS SECTION (Optional)
  // Share personal interests to show you're well-rounded
  // Available icons: "radio", "meditation", "pets", and others from your icon set
  hobbies: {
    hobby1: {
      title: "Your Hobby Title",
      description: "Description of this hobby and why it's meaningful to you. Connect it to skills or perspectives that benefit your professional work.",
      icon: "radio"
    },
    hobby2: {
      title: "Another Interest",
      description: "Share another aspect of your life outside of work. This helps create a more complete picture of who you are.",
      icon: "meditation"
    },
    hobby3: {
      title: "Third Interest",
      description: "A final hobby or interest that rounds out your profile and shows your diverse interests.",
      icon: "pets"
    }
  }
};
