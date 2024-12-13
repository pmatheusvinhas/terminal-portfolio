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
    summary: `Senior Software Engineer with 6+ years of experience architecting distributed systems and cloud-native solutions. 
    Expert in building high-performance applications with focus on scalability and cost optimization. 
    Track record of standardizing data access and achieving sub-200ms latency for 1000+ req/s.`
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
      title: "Co-founder & Principal Software Engineer",
      company: "Vinbol",
      period: "Jan 2024 - Dec 2024",
      location: "Remote",
      description: [
        "Architected MVP for AI platform with context-aware LLM routing based on model specialization and performance characteristics",
        "Developed intelligent routing system reducing costs by 40% by matching content complexity with appropriate models",
        "Built scalable pipeline processing 1K+ daily requests with automated model selection and performance monitoring"
      ],
      techStack: ["Python", "FastAPI", "Azure", "LangChain", "OpenAI", "Hugging Face"],
      expanded: {
        architecture: {
          overview: "AI platform featuring intelligent model selection based on content characteristics and model strengths, optimizing for both cost and accuracy through strategic routing and performance monitoring",
          components: [
            {
              name: "Model Orchestration",
              description: "Context-aware routing system matching content with optimal LLM",
              techDetails: "LangChain, Custom Model Selection, Performance Analytics"
            },
            {
              name: "Performance Profiler",
              description: "Real-time analysis of model performance across different contexts",
              techDetails: "Custom Metrics, Cost Analysis, Response Quality Evaluation"
            },
            {
              name: "Adaptive Pipeline",
              description: "Self-optimizing system learning from model performance patterns",
              techDetails: "Performance Monitoring, Auto-adjustment, A/B Testing"
            }
          ],
          challenges: [
            {
              problem: "Varying model performance across content types",
              solution: "Implemented content-aware routing with performance tracking",
              outcome: "40% cost reduction with improved accuracy per context"
            },
            {
              problem: "Balancing model capabilities and costs",
              solution: "Developed performance profiling and automated selection",
              outcome: "Optimal model utilization based on content requirements"
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
      techStack: ["Python", "Kubernetes", "Redis", "Kafka", "Terraform", "AWS"],
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
      period: "Dec 2020 - Jul 2021",
      location: "São Paulo, Brazil",
      description: [
        "Modernized legacy vibration analysis system through complete redesign from Windows Embedded to Raspberry Pi OS",
        "Implemented real-time signal processing and FFT analysis in C/C++ with GSL library",
        "Eliminated 8 years of technical debt while reducing development costs by 65%"
      ],
      techStack: ["C/C++", "Python", "Raspberry Pi OS", "FFT", "AWS"],
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
      period: "Mar 2020 - Nov 2020",
      location: "São Paulo, Brazil",
      description: [
        "Engineered automated testing station reducing device validation time by 87%",
        "Developed lightweight diagnostic web interface for ESP8266-based IoT devices",
        "Designed future-proof architecture for testing and monitoring infrastructure"
      ],
      techStack: ["Python", "C++", "ESP8266", "HTML/CSS", "PyTest"],
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
      company: "Open Source Machinery",
      period: "Jan 2019 - Feb 2020",
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
    backend: ["Python", "Node.js", "FastAPI", "Microservices", "C"],
    frontend: ["React", "React Native", "JavaScript", "TypeScript"],
    cloud: ["Azure", "AWS", "Firebase"],
    devops: ["Git", "Azure DevOps", "GitHub Actions", "Docker", "CI/CD"],
    data: ["MySQL", "PostgreSQL", "CosmosDB", "Redis"],
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