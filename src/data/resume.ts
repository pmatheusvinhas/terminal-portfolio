const basePath = import.meta.env.BASE_URL

/**
 * Resume data structure optimized for both web display and ATS parsing.
 * 
 * Key considerations for ATS:
 * - Use consistent formatting
 * - Include relevant keywords
 * - Quantify achievements
 * - Maintain clear hierarchy
 */
export const resumeData = {
  header: {
    name: "Paulo Vinhas",
    title: "Senior Software Engineer | Distributed Systems",
    location: {
      current: "São Paulo, Brazil (UTC-3)",
      origin: "Rio, Brazil"
    },
    email: "paulomatheusvinhas@gmail.com",
    github: "https://github.com/pmatheusvinhas",
    summary: `Senior Software Engineer with 6+ years of experience evolving from distributed systems to AI engineering. 
    Started by architecting high-performance cloud-native solutions achieving sub-200ms latency for 1000+ req/s, 
    progressed to data distribution platforms, and now specializing in AI systems engineering with focus on LLM orchestration and autonomous agents. 
    Track record of reducing costs by 40% through intelligent system design across different domains.`
  },

  education: [
    {
      degree: "Master in Data Engineering",
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
      institution: "São Paulo State Technical School",
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
      title: "Co-founder & Principal AI Engineer",
      company: "Vinbol",
      period: "Jan 2024 - Dec 2024",
      location: "Remote",
      description: [
        "Led end-to-end development of an AI orchestration platform managing multiple LLMs (OpenAI, Anthropic, Cohere) with intelligent routing and performance optimization",
        "Engineered autonomous AI agents for specialized tasks using LangChain, achieving 95% task completion rate and 40% cost reduction through context-aware model selection",
        "Implemented MLOps pipeline with automated model evaluation, A/B testing, and performance monitoring handling 1K+ daily requests",
        "Developed custom fine-tuning and prompt engineering framework improving model performance by 35% for domain-specific tasks"
      ],
      techStack: ["Python", "LangChain", "OpenAI", "Anthropic", "Cohere", "FastAPI", "Docker", "Azure", "MLflow"],
      expanded: {
        architecture: {
          overview: "Advanced AI orchestration platform featuring autonomous agents, intelligent model selection, and MLOps infrastructure for optimal performance and cost efficiency",
          components: [
            {
              name: "AI Agent Framework",
              description: "Autonomous agent system with specialized capabilities and inter-agent communication",
              techDetails: "LangChain, Custom Agent Protocols, Task Planning Systems"
            },
            {
              name: "Model Orchestration",
              description: "Intelligent routing system with real-time performance optimization",
              techDetails: "Multi-LLM Integration, Dynamic Routing, Cost Optimization"
            },
            {
              name: "MLOps Pipeline",
              description: "Comprehensive ML infrastructure for model deployment and monitoring",
              techDetails: "Docker, MLflow, Custom Metrics, A/B Testing Framework"
            }
          ],
          challenges: [
            {
              problem: "Complex multi-model orchestration",
              solution: "Developed intelligent routing system with performance profiling",
              outcome: "40% cost reduction while maintaining 95% task success rate"
            },
            {
              problem: "Specialized task requirements",
              solution: "Engineered autonomous agents with domain expertise",
              outcome: "35% improvement in domain-specific task performance"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "Processing Cost",
              value: "-40%",
              context: "Through intelligent routing",
              growth: "Model-specific optimization"
            },
            {
              metric: "Context Coverage",
              value: "95%",
              context: "Content types handled effectively",
              growth: "Via specialized model selection"
            }
          ],
          technical: [
            {
              metric: "Model Efficiency",
              value: "85%",
              context: "Optimal model utilization",
              growth: "Through context matching"
            },
            {
              metric: "Response Quality",
              value: "93%",
              context: "Content-appropriate responses",
              growth: "Via specialized routing"
            }
          ],
          scale: [
            {
              metric: "Daily Volume",
              value: "1K+",
              context: "High-engagement profiles analyzed",
              growth: "With consistent quality"
            }
          ]
        }
      }
    },
    {
      title: "Software Engineer",
      company: "Nitro Química",
      period: "Jun 2021 - Dec 2023",
      location: "São Paulo, Brazil",
      description: [
        "Architected data distribution layer enabling standardized REST API access to enterprise Data Lake across multiple business units",
        "Implemented high-performance caching and streaming solutions achieving 99.9% availability and sub-200ms latency for 1000+ req/s",
        "Developed reusable connector framework reducing integration time by 60% for new data consumers"
      ],
      techStack: ["Node.js", "JavaScript", "TypeScript", "Kubernetes", "Redis", "Kafka", "Terraform", "AWS"],
      expanded: {
        architecture: {
          overview: "REST API layer for enterprise Data Lake access, complementing data engineering efforts by providing standardized, high-performance data distribution to various business applications through caching, streaming, and automated scaling capabilities",
          diagrams: [
            {
              title: "Data Lake Distribution Layer",
              description: "Distributed data access architecture with bidirectional flows",
              imageUrl: `${basePath}diagrams/nitro_architecture.png`
            }
          ],
          components: [
            {
              name: "API Gateway Layer",
              description: "REST interface with intelligent routing and access control",
              techDetails: "Python, FastAPI, Service Mesh, OAuth2/JWT"
            },
            {
              name: "Data Distribution",
              description: "High-performance data access layer with caching and streaming",
              techDetails: "Redis Cluster, Kafka, Custom Data Transformations"
            },
            {
              name: "Data Lake Integration",
              description: "Efficient integration with enterprise Data Lake",
              techDetails: "Data Lake Connectors, Query Optimization, Access Patterns"
            }
          ],
          challenges: [
            {
              problem: "Complex Data Lake access patterns for applications",
              solution: "Implemented standardized REST APIs with intelligent caching",
              outcome: "Enabled self-service data access while maintaining performance"
            },
            {
              problem: "High latency in data retrieval for global applications",
              solution: "Developed distributed caching and streaming strategies",
              outcome: "Achieved sub-200ms latency with 40% resource optimization"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "Integration Time",
              value: "-60%",
              context: "New consumer onboarding",
              growth: "Through automation"
            },
            {
              metric: "Business Impact",
              value: "10+",
              context: "New use cases enabled",
              growth: "Via standardized access"
            }
          ],
          technical: [
            {
              metric: "Response Time",
              value: "200ms",
              context: "99th percentile latency",
              growth: "With adaptive caching"
            },
            {
              metric: "Resource Usage",
              value: "-40%",
              context: "Compute resources",
              growth: "Through optimization"
            }
          ],
          scale: [
            {
              metric: "Throughput",
              value: "1000+",
              context: "Requests per second",
              growth: "99.9% availability"
            }
          ]
        }
      }
    },
    {
      title: "Software Engineer",
      company: "HOTTEC",
      period: "Aug 2020 - Jul 2021",
      location: "Santo André, Brazil",
      description: [
        "Modernized legacy vibration analysis system through complete redesign from Windows Embedded to Raspberry Pi OS",
        "Implemented real-time signal processing and FFT analysis in C and C++ with GSL library",
        "Eliminated 8 years of technical debt while reducing development costs by 65%"
      ],
      techStack: ["C", "C++", "Python", "Raspberry Pi OS", "AWS"],
      expandedFeatures: {
        showArchitecture: true,
        showMetrics: true,
        showDiagrams: true
      },
      expanded: {
        architecture: {
          overview: "Modern vibration analysis system built on UNIX architecture, featuring real-time signal processing and FFT analysis, with cloud integration capabilities",
          diagrams: [
            {
              title: "System Architecture",
              description: "Core system components and data flow",
              imageUrl: `${basePath}diagrams/hottec_architecture.png`
            }
          ],
          components: [
            {
              name: "Data Acquisition System",
              description: "High-performance vibration data collection with real-time processing",
              techDetails: "C++, Real-time Extensions, SPI/I2C Interfaces"
            },
            {
              name: "Signal Processing Engine",
              description: "Advanced FFT and vibration analysis implementation",
              techDetails: "C++, GSL Library, Custom DSP Algorithms"
            },
            {
              name: "System Services",
              description: "Scheduling and monitoring daemons with hardware abstraction",
              techDetails: "C, POSIX APIs, Hardware Abstraction Layer"
            }
          ],
          challenges: [
            {
              problem: "Legacy Windows Embedded system with 8 years of technical debt",
              solution: "Redesigned system using modern UNIX architecture and C/C++",
              outcome: "Successful migration in 8 months with enhanced performance"
            },
            {
              problem: "Knowledge transfer taking 6+ months for new developers",
              solution: "Implemented clean architecture with comprehensive documentation",
              outcome: "Reduced onboarding time to 1 month for new team members"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "Development Cost",
              value: "-65%",
              context: "Reduction in development and maintenance costs"
            },
            {
              metric: "Time to Market",
              value: "-75%",
              context: "For new feature implementation"
            }
          ],
          technical: [
            {
              metric: "Code Base",
              value: "-40%",
              context: "Reduction in codebase size",
              growth: "With improved functionality"
            },
            {
              metric: "Knowledge Transfer",
              value: "83%",
              context: "Reduction in onboarding time",
              growth: "From 6 months to 1 month"
            }
          ],
          scale: [
            {
              metric: "Processing",
              value: "2x",
              context: "Increase in processing capability",
              growth: "Same hardware resources"
            }
          ]
        }
      }
    },
    {
      title: "Software Engineer",
      company: "WOW Smart Homes",
      period: "Aug 2019 - Jul 2020",
      location: "Barueri, Brazil",
      description: [
        "Engineered automated testing station reducing device validation time by 87%",
        "Developed lightweight diagnostic web interface for ESP8266-based IoT devices",
        "Designed future-proof architecture for testing and monitoring infrastructure"
      ],
      techStack: ["Python", "C++", "ESP8266", "React", "PyTest"],
      expandedFeatures: {
        showArchitecture: true,
        showMetrics: true,
        showDiagrams: true
      },
      expanded: {
        architecture: {
          overview: "Two-phase IoT quality assurance solution: automated testing station for distribution and embedded diagnostic system for field support",
          diagrams: [
            {
              title: "Automated Testing Station",
              description: "Hardware/software infrastructure for device validation",
              imageUrl: `${basePath}diagrams/wow-testing-station.png`
            },
            {
              title: "Device Diagnostic Flow",
              description: "Embedded diagnostic system and support workflow",
              imageUrl: `${basePath}diagrams/wow-diagnostic-flow.png`
            }
          ],
          components: [
            {
              name: "Automated Testing Station",
              description: "Hardware/software solution for device validation before distribution",
              techDetails: "Python, PyTest, PySerial, Custom Testing Hardware"
            },
            {
              name: "Embedded Diagnostic System",
              description: "Lightweight web server embedded in IoT devices",
              techDetails: "C++, ESP8266 WebServer, Minified HTML/CSS (~32KB)"
            },
            {
              name: "Future Integration Design",
              description: "Architecture planning for cloud integration",
              techDetails: "System Design Documentation, API Specifications"
            }
          ],
          challenges: [
            {
              problem: "Limited flash memory on ESP8266",
              solution: "Optimized web interface with minimal dependencies",
              outcome: "Complete diagnostic interface under 32KB"
            },
            {
              problem: "Complex manual testing process",
              solution: "Custom testing station with automated validation",
              outcome: "Reduced testing time from 15 minutes to 2 minutes per device"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "Testing Efficiency",
              value: "87%",
              context: "Reduction in device validation time"
            },
            {
              metric: "Support Process",
              value: "60%",
              context: "Faster issue diagnosis through embedded interface"
            }
          ],
          technical: [
            {
              metric: "Web Server Size",
              value: "32KB",
              context: "Optimized embedded diagnostic interface",
              growth: "From 128KB initial size"
            },
            {
              metric: "Test Coverage",
              value: "100%",
              context: "Device functionality verification"
            }
          ],
          scale: [
            {
              metric: "Devices Tested",
              value: "5k+",
              context: "Through automated testing station",
              growth: "240 devices/day capacity"
            }
          ]
        }
      }
    },
    {
      title: "Software Engineer",
      company: "Tekla Industrial Têxtil",
      period: "Jul 2018 - Jul 2019",
      location: "São Paulo, Brazil",
      description: [
        "Developed MVPs for educational robotics and precision agriculture solutions",
        "Implemented Google's Blockly visual programming for both robotics education and farming automation",
        "Engineered embedded control systems for robot arm and precision CNC farming equipment"
      ],
      techStack: ["C++", "Python", "React", "Google Blockly", "STM32", "MQTT"],
      expandedFeatures: {
        showArchitecture: true,
        showMetrics: true,
        showDiagrams: true
      },
      expanded: {
        architecture: {
          overview: "Dual MVP development featuring Google's Blockly visual programming language: a STEM education robot arm and a precision farming CNC system, both focused on making complex automation accessible to non-technical users",
          diagrams: [
            {
              title: "Product Architecture",
              description: "Educational robotics and precision farming systems",
              imageUrl: `${basePath}diagrams/osm_architecture.png`
            }
          ],
          components: [
            {
              name: "Educational Robot MVP",
              description: "STEM-focused robot arm with visual programming interface",
              techDetails: "C++, STM32, Google Blockly, React, Python Interpreter"
            },
            {
              name: "Precision Farming MVP",
              description: "Agricultural CNC system with crop planning interface",
              techDetails: "C++, ATMega, Google Blockly, MQTT, Position Control"
            },
            {
              name: "Visual Programming Layer",
              description: "Custom Blockly implementations for both systems",
              techDetails: "Google Blockly, JavaScript, Custom Block Definitions"
            }
          ],
          challenges: [
            {
              problem: "Making robotics accessible to 8-12 year olds",
              solution: "Developed custom Blockly blocks for intuitive motion control",
              outcome: "Successfully tested with 20+ students in pilot program"
            },
            {
              problem: "Complex agricultural planning requirements",
              solution: "Created specialized Blockly toolset for farming patterns",
              outcome: "Enabled farmers to program planting sequences without coding"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "Education MVP",
              value: "20+",
              context: "Students in pilot program",
              growth: "100% completion rate"
            },
            {
              metric: "Farming MVP",
              value: "5",
              context: "Crop patterns automated",
              growth: "From manual planning"
            }
          ],
          technical: [
            {
              metric: "Robot Control",
              value: "15",
              context: "Custom Blockly blocks for robotics",
              growth: "Covering all arm movements"
            },
            {
              metric: "Farm Planning",
              value: "12",
              context: "Agricultural automation blocks",
              growth: "Supporting major crop patterns"
            }
          ],
          scale: [
            {
              metric: "Development",
              value: "2",
              context: "Parallel MVPs delivered",
              growth: "4 months per MVP"
            }
          ]
        }
      }
    }
  ],

  skills: {
    backend: [
      { name: "Python", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "Microservices", level: "Intermediate" },
      { name: "Modular Mononolith", level: "Intermediate" },
      { name: "C++", level: "Advanced" },
      { name: "Rust", level: "Beginner" },
    ],
    frontend: [
      { name: "React", level: "Advanced" },
      { name: "React Native", level: "Advanced" },
      { name: "Vite", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "TailwindCSS", level: "Advanced" },
      { name: "Material UI", level: "Intermediate" }
      
    ],
    cloud: [
      { name: "Azure", level: "Advanced" },
      { name: "AWS", level: "Advanced" },
      { name: "GCP", level: "Intermediate" },
      { name: "Firebase", level: "Advanced" }
    ],
    devops: [
      { name: "Git", level: "Advanced" },
      { name: "Azure DevOps", level: "Advanced" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "Terraform", level: "Beginner" },
    ],
    data: [
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "CosmosDB", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Kafka", level: "Intermediate" }
    ],
    AI: [
      { name: "LangChain", level: "Intermediate" },
      { name: "PyTorch", level: "Advanced" },
      { name: "TensorFlow", level: "Advanced" },
      { name: "Hugging Face", level: "Intermediate" },
      { name: "OpenAI", level: "Intermediate" },
      { name: "Anthropic", level: "Intermediate" },
      { name: "Cohere", level: "Intermediate" },
      { name: "MLFlow", level: "Intermediate" }
    ]
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