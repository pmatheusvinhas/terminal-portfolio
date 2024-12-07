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
      institution: "ETEC Getúlio Vargas (State Technical School)",
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
        "Architected and implemented NLP-powered sentiment analysis platform",
        "Achieved 99.9% uptime while processing 1M+ daily social media posts",
        "Optimized prompt engineering and model selection to reduce costs by 40%"
      ],
      techStack: ["Python", "FastAPI", "Azure", "OpenAI", "Cohere", "Hugging Face"],
      expanded: {
        architecture: {
          overview: "Distributed system processing millions of social media posts daily through a multi-stage NLP pipeline",
          diagramUrl: "/diagrams/vinbol-arch.svg",
          components: [
            {
              name: "Data Ingestion Layer",
              description: "Scalable pipeline using Azure Event Hubs",
              techDetails: "Python, Azure Functions, Event Hubs"
            },
            {
              name: "NLP Processing Pipeline",
              description: "Multi-model sentiment analysis system",
              techDetails: "OpenAI GPT-4, Cohere Classify, Custom BERT models"
            }
          ],
          challenges: [
            {
              problem: "Handling spikes of 100k+ concurrent requests",
              solution: "Implemented adaptive throttling with Azure Functions",
              outcome: "Maintained 99.9% uptime during peak loads"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "Cost Reduction",
              value: "40%",
              context: "Through optimized prompt engineering"
            }
          ],
          technical: [
            {
              metric: "System Reliability",
              value: "99.9%",
              context: "Up from 98.5% baseline"
            }
          ],
          scale: [
            {
              metric: "Daily Processing",
              value: "1M+",
              context: "Social media posts",
              growth: "10x in 6 months"
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
        "Desenvolveu plataforma de distribuição de dados empresariais",
        "Implementou integrações de dados para múltiplas unidades",
        "Criou sistema de monitoramento em tempo real"
      ],
      techStack: ["Python", "FastAPI", "Flask", "PostgreSQL", "Docker", "Azure"],
      expanded: {
        architecture: {
          overview: "Plataforma distribuída de integração de dados empresariais com processamento em tempo real",
          diagramUrl: "/diagrams/nitro-arch.svg",
          components: [
            {
              name: "API Gateway Layer",
              description: "Gateway centralizado para todas as APIs da empresa",
              techDetails: "FastAPI, Azure API Management, JWT Auth"
            },
            {
              name: "Data Integration Pipeline",
              description: "Sistema de ETL para múltiplas fontes de dados",
              techDetails: "Apache Airflow, Azure Data Factory, PostgreSQL"
            },
            {
              name: "Real-time Monitoring",
              description: "Dashboard em tempo real para métricas críticas",
              techDetails: "Flask, WebSockets, Azure Event Hub"
            }
          ],
          challenges: [
            {
              problem: "Integração com sistemas legados sem APIs",
              solution: "Desenvolvimento de adaptadores personalizados e sistema de filas",
              outcome: "Redução de 70% no tempo de integração de novos sistemas"
            },
            {
              problem: "Alta latência em consultas complexas",
              solution: "Implementação de cache distribuído e otimização de queries",
              outcome: "Redução de 90% no tempo de resposta médio"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "Tempo de Integração",
              value: "-70%",
              context: "Redução no tempo de integração de sistemas"
            },
            {
              metric: "Produtividade",
              value: "+45%",
              context: "Aumento na eficiência das equipes"
            }
          ],
          technical: [
            {
              metric: "Latência",
              value: "50ms",
              context: "Tempo médio de resposta das APIs",
              growth: "90% mais rápido"
            },
            {
              metric: "Disponibilidade",
              value: "99.95%",
              context: "Uptime do sistema em 2023"
            }
          ],
          scale: [
            {
              metric: "Requisições",
              value: "500k",
              context: "Requisições diárias",
              growth: "5x em 12 meses"
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
        "Modernizou software legado de análise de vibração",
        "Implementou pipeline de dados IoT na nuvem",
        "Melhorou confiabilidade através de práticas BDD"
      ],
      techStack: ["Python", "AWS", "IoT", "C#", "Node.js"],
      expanded: {
        architecture: {
          overview: "Sistema distribuído para análise de vibração industrial com processamento em nuvem",
          diagramUrl: "/diagrams/hottec-arch.svg",
          components: [
            {
              name: "Legacy Integration Layer",
              description: "Interface com drivers C# existentes",
              techDetails: "C#, .NET Core, Message Queue"
            },
            {
              name: "Cloud Processing Pipeline",
              description: "Processamento de dados de sensores IoT",
              techDetails: "AWS IoT Core, Lambda, DynamoDB"
            },
            {
              name: "Real-time Analytics",
              description: "Análise em tempo real de padrões de vibração",
              techDetails: "Python, NumPy, AWS Kinesis"
            }
          ],
          challenges: [
            {
              problem: "8 anos de dívida técnica",
              solution: "Refatoração gradual com testes automatizados",
              outcome: "Modernização completa em 8 meses mantendo compatibilidade"
            },
            {
              problem: "Perda de dados em picos de vibração",
              solution: "Buffer local e sincronização resiliente",
              outcome: "Zero perda de dados críticos"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "ROI Cliente",
              value: "3x",
              context: "Retorno sobre investimento em manutenção"
            }
          ],
          technical: [
            {
              metric: "Cobertura",
              value: "95%",
              context: "Cobertura de testes",
              growth: "De 20% para 95%"
            },
            {
              metric: "Precisão",
              value: "99.9%",
              context: "Na detecç��o de falhas"
            }
          ],
          scale: [
            {
              metric: "Sensores",
              value: "2k+",
              context: "Dispositivos monitorados",
              growth: "2x em 6 meses"
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
        "Desenvolveu plataforma IoT para automação residencial",
        "Criou app mobile para controle remoto",
        "Implementou sistema de comunicação MQTT"
      ],
      techStack: ["React Native", "Node.js", "AWS", "IoT", "MQTT"],
      expanded: {
        architecture: {
          overview: "Plataforma IoT para automação residencial com controle em tempo real",
          diagramUrl: "/diagrams/wow-arch.svg",
          components: [
            {
              name: "Mobile App",
              description: "Interface de controle para usuários",
              techDetails: "React Native, Redux, Push Notifications"
            },
            {
              name: "IoT Control Layer",
              description: "Gerenciamento de dispositivos smart home",
              techDetails: "AWS IoT Core, MQTT, Node.js"
            },
            {
              name: "Automation Engine",
              description: "Motor de regras para automação",
              techDetails: "Node.js, Redis, AWS Lambda"
            }
          ],
          challenges: [
            {
              problem: "Latência em controles críticos",
              solution: "Implementação de conexão MQTT otimizada",
              outcome: "Tempo de resposta < 100ms para comandos críticos"
            },
            {
              problem: "Consumo de bateria em dispositivos",
              solution: "Protocolo de sono profundo customizado",
              outcome: "Aumento de 300% na duração da bateria"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "Economia",
              value: "30%",
              context: "Redução média no consumo de energia"
            }
          ],
          technical: [
            {
              metric: "Latência",
              value: "100ms",
              context: "Tempo de resposta dos comandos"
            },
            {
              metric: "Bateria",
              value: "+300%",
              context: "Aumento na duração"
            }
          ],
          scale: [
            {
              metric: "Devices",
              value: "5k+",
              context: "Dispositivos conectados",
              growth: "3x em 8 meses"
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
        "Desenvolveu firmware embarcado para automação industrial",
        "Criou dashboard para monitoramento em tempo real",
        "Implementou sistema de manutenção preditiva"
      ],
      techStack: ["Python", "React", "C++", "IoT", "MQTT"],
      expanded: {
        architecture: {
          overview: "Sistema embarcado para automação industrial com monitoramento em tempo real e manutenção preditiva",
          diagramUrl: "/diagrams/osm-arch.svg",
          components: [
            {
              name: "Embedded Control System",
              description: "Firmware para controle de equipamentos industriais",
              techDetails: "C++, FreeRTOS, STM32"
            },
            {
              name: "Real-time Dashboard",
              description: "Interface web para monitoramento em tempo real",
              techDetails: "React, WebSocket, D3.js"
            },
            {
              name: "Predictive Maintenance",
              description: "Sistema de análise preditiva de falhas",
              techDetails: "Python, scikit-learn, Time Series Analysis"
            }
          ],
          challenges: [
            {
              problem: "Restrições de hardware limitado",
              solution: "Otimização de memória e implementação de buffer circular",
              outcome: "Redução de 60% no uso de memória"
            },
            {
              problem: "Comunicação em ambiente industrial",
              solution: "Protocolo customizado com retry inteligente",
              outcome: "99.99% de confiabilidade na transmissão"
            }
          ]
        },
        metrics: {
          business: [
            {
              metric: "Tempo de Parada",
              value: "-45%",
              context: "Redução em paradas não programadas"
            }
          ],
          technical: [
            {
              metric: "Memória",
              value: "-60%",
              context: "Redução no uso de RAM",
              growth: "Mantendo mesmas funcionalidades"
            },
            {
              metric: "Precisão",
              value: "92%",
              context: "Na previsão de falhas"
            }
          ],
          scale: [
            {
              metric: "Máquinas",
              value: "50+",
              context: "Equipamentos monitorados",
              growth: "Em 3 países"
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