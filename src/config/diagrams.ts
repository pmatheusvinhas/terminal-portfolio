interface DiagramConfig {
  title: string;
  description: string;
  defaultImage: string;  // Imagem padrão do template
  placeholderImage: string;  // Exemplo visual de como o diagrama deveria ser
  expectedDimensions?: {
    width: number;
    height: number;
  };
  guidelines?: string[];  // Dicas para criar diagramas similares
}

interface ProjectDiagrams {
  [key: string]: {
    [key: string]: DiagramConfig;
  };
}

export const projectDiagrams: ProjectDiagrams = {
  "WOW Smart Homes": {
    "testing-station": {
      title: "Automated Testing Station",
      description: "Hardware/software infrastructure for device validation",
      defaultImage: "/diagrams/wow-testing-station.png",
      placeholderImage: "/diagrams/examples/testing-station-example.png",
      expectedDimensions: {
        width: 1200,
        height: 800
      },
      guidelines: [
        "Use clear separation between hardware and software components",
        "Show bidirectional communication flows",
        "Include operator interaction points",
        "Highlight testing infrastructure components"
      ]
    },
    "diagnostic-flow": {
      title: "Device Diagnostic Flow",
      description: "Embedded diagnostic system and support workflow",
      defaultImage: "/diagrams/wow-diagnostic-flow.png",
      placeholderImage: "/diagrams/examples/diagnostic-flow-example.png",
      expectedDimensions: {
        width: 1200,
        height: 800
      },
      guidelines: [
        "Show clear step-by-step diagnostic process",
        "Include user and support analyst interaction",
        "Highlight embedded system constraints",
        "Show data flow between components"
      ]
    }
  }
}; 