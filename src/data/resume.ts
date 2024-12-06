export const resumeData = {
  header: {
    name: "Paulo Vinhas",
    title: "Senior Software Engineer | Cloud & IoT Specialist",
    location: {
      current: "São Paulo, Brazil (UTC-3)",
      origin: "Rio, Brazil"
    },
    email: "paulomatheusvinhas@gmail.com",
    github: "https://github.com/pmatheusvinhas",
    summary: `Senior Full Stack Engineer with 5+ years of experience specializing in cloud-native solutions and IoT systems. 
    Expert in architecting distributed systems and real-time applications using Azure and AWS. 
    Proven track record of delivering high-impact solutions that process millions of requests daily.`
  },

  education: [
    {
      degree: "Master in Data & Analytics",
      institution: "FIA Business School",
      period: "2022-2024"
    },
    {
      degree: "Bachelor in Electronics Engineering",
      institution: "Federal Institute of São Paulo",
      period: "2014-2021"
    },
    {
      degree: "Technical Degree in Electronics",
      institution: "ETEC Getúlio Vargas",
      period: "2011-2012"
    }
  ],

  certifications: [
    {
      name: "Agile Coach Expert",
      issuer: "SETA",
      year: "2022"
    },
    {
      name: "Design Sprint Master",
      issuer: "SETA",
      year: "2021"
    },
    {
      name: "Certified Scrum Professional",
      issuer: "Certiprof",
      year: "2020"
    },
    {
      name: "Behaviour Driven Development",
      issuer: "SIITGO",
      year: "2020"
    }
  ],

  experience: [
    {
      title: "Co-Founder & Principal Software Engineer",
      company: "Vinbol",
      period: "Jan 2024 - Dec 2024",
      location: "Remote",
      description: [
        "Architected cloud-native sentiment analysis engine with 99.9% uptime for social media monitoring",
        "Developed web scraping solutions using Selenium for news portals and client websites",
        "Designed scalable microservices architecture using Azure Functions and FastAPI",
        "Implemented real-time data processing pipeline integrating multiple social media APIs",
      ],
      techStack: ["Python", "FastAPI", "Azure", "React", "MySQL"]
    },
    {
      title: "Software Engineer",
      company: "Nitro Química",
      period: "Jun 2021 - Dec 2023",
      location: "São Paulo, Brazil",
      description: [
        "Developed RESTful APIs for enterprise-wide data distribution platform",
        "Designed and implemented data integration services for multiple business units",
        "Created Flask web application for manual financial data ingestion into Data Lake",
        "Built real-time monitoring system for critical business metrics",
        "Implemented automated CI/CD pipelines for microservices deployment"
      ],
      techStack: ["Python", "FastAPI", "Flask", "PostgreSQL", "Docker", "Azure"]
    },
    {
      title: "Software Engineer",
      company: "HOTTEC",
      period: "Dec 2020 - Jul 2021",
      location: "São Paulo, Brazil",
      description: [
        "Refactored legacy vibration analysis software, reducing 8 years of technical debt in 8 months",
        "Implemented modern architecture while preserving critical C# equipment drivers",
        "Developed new backend systems for industrial IoT data processing",
        "Created cloud-based data analysis pipeline for vibration sensors",
        "Improved system reliability and maintainability through BDD practices"
      ],
      techStack: ["Python", "AWS", "IoT", "C#", "Node.js"]
    },
    {
      title: "Software Engineer",
      company: "WOW Smart Homes",
      period: "Mar 2020 - Nov 2020",
      location: "São Paulo, Brazil",
      description: [
        "Built IoT platform for smart home device management and automation",
        "Developed real-time monitoring system for home security and energy consumption",
        "Created React Native mobile app for remote device control and automation",
        "Implemented MQTT-based communication system for IoT devices"
      ],
      techStack: ["React Native", "Node.js", "AWS", "IoT", "MQTT"]
    },
    {
      title: "Software Engineer",
      company: "Open Source Machinery",
      period: "Jan 2019 - Feb 2020",
      location: "São Paulo, Brazil",
      description: [
        "Developed embedded firmware for industrial automation equipment in C++",
        "Created React-based dashboard for real-time machine monitoring",
        "Implemented data collection system for predictive maintenance",
        "Designed communication protocols for industrial equipment integration"
      ],
      techStack: ["Python", "React", "C++", "IoT", "MQTT"]
    }
  ],

  skills: {
    backend: ["Python", "Node.js", "FastAPI", "Microservices", "C"],
    frontend: ["React", "React Native", "JavaScript", "TypeScript"],
    cloud: ["Azure", "AWS", "Firebase"],
    devops: ["Git", "Azure DevOps", "GitHub Actions", "Docker", "CI/CD"],
    data: ["MySQL", "PostgreSQL", "CosmosDB", "Real-time Processing"],
    OS: ["Fedora", "Debian", "Ubuntu", "Windows", "Raspberry Pi OS", "FreeRTOS"]
  },

  hobbies: {
    electronics: {
      title: "Electronics & DIY",
      description: "Exploring the physical side of technology through electronics projects. It's where software meets hardware, keeping my engineering roots alive while fostering creativity and problem-solving.",
      icon: "radio"
    },
    running: {
      title: "Running & Fitness",
      description: "Balancing the sedentary nature of coding with active lifestyle. Running helps me maintain mental clarity and physical health, essential for peak performance in both life and work.",
      icon: "meditation"
    },
    family: {
      title: "Family Time & Travel",
      description: "Beyond the screens and code, quality time with family grounds me and brings perspective. It's a reminder that life's greatest achievements aren't measured in lines of code.",
      icon: "pets"
    }
  }
}; 