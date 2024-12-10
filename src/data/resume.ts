import testingStationDiagram from '/diagrams/wow-testing-station.png'
import diagnosticFlowDiagram from '/diagrams/wow-diagnostic-flow.png'

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
    title: "Senior Software Engineer | Cloud & IoT Specialist",
    location: {
      current: "São Paulo, Brazil (UTC-3)",
      origin: "Rio, Brazil"
    },
    email: "paulomatheusvinhas@gmail.com",
    github: "https://github.com/pmatheusvinhas",
    summary: `Senior Full Stack Engineer with 6 years of experience specializing in cloud-native solutions and IoT systems. 
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
      title: "Co-Founder & Principal Software Engineer",
      company: "Vinbol",
      period: "Jan 2024 - Present",
      location: "Remote",
      description: [
        "Architected MVP for sentiment analysis combining multiple LLM providers (OpenAI, Cohere, Hugging Face)",
        "Developed prompt engineering framework reducing token usage by 40% while maintaining 95% accuracy",
        "Designed scalable architecture handling 100k+ daily requests with adaptive load balancing"
      ],
      techStack: ["Python", "FastAPI", "Azure", "OpenAI", "Cohere", "Hugging Face"],
      expandedFeatures: {
        showArchitecture: true,
        showMetrics: true,
        showDiagrams: true
      },
      expanded: {
        architecture: {
          overview: "Multi-model NLP platform leveraging different LLM providers for optimal cost-performance ratio, featuring intelligent prompt management and adaptive load distribution",
          diagrams: [
            {
              title: "AI Platform Architecture",
              description: "Multi-provider NLP system with adaptive routing",
              imageUrl: `${basePath}diagrams/vinbol-arch.png`
            }
          ],
          components: [
            {
              name: "Model Router",
              description: "Intelligent routing between different LLM providers",
              techDetails: "Python, FastAPI, Custom Routing Logic"
            },
            {
              name: "Prompt Management",
              description: "Dynamic prompt optimization system",
              techDetails: "Token Analysis, Context Management, Caching"
            },
            {
              name: "Load Balancer",
              description: "Cost and performance-aware request distribution",
              techDetails: "Azure Functions, Queue Management"
            }
          ],
          challenges: [
            {
              problem: "High costs of LLM API calls",
              solution: "Developed dynamic prompt optimization and caching",
              outcome: "40% cost reduction while maintaining accuracy"
            },
            {
              problem: "Varying provider performance",
              solution: "Implemented adaptive model routing",
              outcome: "95% accuracy with optimal cost-performance balance"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "Cost Efficiency",
              value: "-40%",
              context: "Token usage reduction",
              growth: "Through prompt optimization"
            },
            {
              metric: "Analysis Cost",
              value: "$0.002",
              context: "Per text analysis",
              growth: "From $0.005 initial cost"
            }
          ],
          technical: [
            {
              metric: "Accuracy",
              value: "95%",
              context: "Sentiment analysis precision",
              growth: "Across all providers"
            },
            {
              metric: "Response Time",
              value: "850ms",
              context: "Average analysis time",
              growth: "Including routing overhead"
            }
          ],
          scale: [
            {
              metric: "Daily Volume",
              value: "100k+",
              context: "Texts analyzed",
              growth: "With adaptive scaling"
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
        "Led development of globally distributed data integration layer connecting enterprise systems across Brazil, Uruguay, Austria, and USA",
        "Architected high-performance API gateway with Redis-based geo-replicated caching achieving sub-100ms response times",
        "Reduced M&A system integration timeline from 12 to 3 months through standardized Delta Lake access protocols"
      ],
      techStack: ["Python", "FastAPI", "Azure", "Delta Lake", "Redis", "Docker"],
      expandedFeatures: {
        showArchitecture: true,
        showMetrics: true,
        showDiagrams: true
      },
      expanded: {
        architecture: {
          overview: "Globally distributed data integration platform leveraging Redis geo-replication and Delta Lake protocols to enable standardized data access across international operations, facilitating rapid M&A integrations and real-time data synchronization",
          diagrams: [
            {
              title: "Enterprise Data Platform",
              description: "Integration architecture with geo-distributed caching",
              imageUrl: `${basePath}diagrams/nitro_architecture.png`
            }
          ],
          components: [
            {
              name: "API Gateway Layer",
              description: "Globally distributed access point with geo-replicated caching",
              techDetails: "Azure API Management, Redis Premium, FastAPI"
            },
            {
              name: "Data Access Layer",
              description: "Standardized protocols for enterprise data access",
              techDetails: "Delta Sharing, REST APIs, Event Grid Topics"
            },
            {
              name: "Regional Services",
              description: "Region-specific data synchronization with local caching",
              techDetails: "Redis Geo-replication, Event Grid Topics, Regional Failover"
            }
          ],
          challenges: [
            {
              problem: "High latency in cross-region data access",
              solution: "Implemented Redis geo-replicated caching strategy",
              outcome: "Achieved consistent sub-100ms response times across all regions"
            },
            {
              problem: "Complex M&A data integration process (12 months)",
              solution: "Developed standardized Delta Lake access protocols",
              outcome: "Reduced integration timeline to 3 months with consistent patterns"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "Integration Time",
              value: "-75%",
              context: "M&A system integration timeline",
              growth: "From 12 months to 3 months"
            },
            {
              metric: "Global Coverage",
              value: "4",
              context: "Regions with local caching",
              growth: "Brazil, Uruguay, Austria, USA"
            }
          ],
          technical: [
            {
              metric: "Response Time",
              value: "50ms",
              context: "Average global API response",
              growth: "With geo-replicated caching"
            },
            {
              metric: "Cache Hit Rate",
              value: "95%",
              context: "Global cache efficiency",
              growth: "Reducing backend load"
            }
          ],
          scale: [
            {
              metric: "Daily Operations",
              value: "500k+",
              context: "API requests handled",
              growth: "With 99.9% availability"
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
        "Led parallel MVP development of educational robotics and precision agriculture solutions",
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