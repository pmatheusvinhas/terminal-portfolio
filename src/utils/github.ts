const GH_TOKEN = import.meta.env.VITE_GH_TOKEN;

const PINNED_REPOS_QUERY = `
  query {
    user(login: "pmatheusvinhas") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            primaryLanguage {
              name
              color
            }
            stargazerCount
            forkCount
          }
        }
      }
    }
  }
`;

// Query para buscar repositórios por linguagem
const REPOS_BY_LANGUAGE_QUERY = `
  query($username: String!) {
    user(login: $username) {
      repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}, ownerAffiliations: OWNER) {
        nodes {
          name
          description
          url
          primaryLanguage {
            name
            color
          }
          languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
            nodes {
              name
              color
            }
          }
          stargazerCount
          forkCount
          isPrivate
        }
      }
    }
  }
`;

export const fetchPinnedRepos = async () => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${GH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: PINNED_REPOS_QUERY }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch pinned repositories');
  }

  const data = await response.json();
  return data.data.user.pinnedItems.nodes;
};

export const fetchReposByTech = async (tech: string) => {
  // Definir mapeamentos para tecnologias que não são linguagens primárias no GitHub
  const techMappings: Record<string, string[]> = {
    'React': ['JavaScript', 'TypeScript', 'JSX'],
    'Node.js': ['JavaScript', 'TypeScript'],
    'Express': ['JavaScript', 'TypeScript'],
    'Next.js': ['JavaScript', 'TypeScript'],
    'TypeScript': ['TypeScript'],
    'JavaScript': ['JavaScript'],
    'Python': ['Python'],
    'Julia': ['Julia'],
    'C': ['C'],
    'C++': ['C++'],
    'Go': ['Go'],
    'Rust': ['Rust'],
    'Material-UI': ['JavaScript', 'TypeScript'],
    'FastAPI': ['Python'],
    'Django': ['Python'],
    'Flask': ['Python'],
    'AWS': ['JavaScript', 'TypeScript', 'Python', 'YAML', 'JSON'],
    'Azure': ['JavaScript', 'TypeScript', 'Python', 'YAML', 'JSON'],
    'Docker': ['Dockerfile', 'YAML', 'Shell'],
    'Kubernetes': ['YAML', 'JSON'],
    'GraphQL': ['JavaScript', 'TypeScript', 'GraphQL'],
    'REST': ['JavaScript', 'TypeScript', 'Python'],
    'MongoDB': ['JavaScript', 'TypeScript'],
    'PostgreSQL': ['SQL', 'TypeScript', 'JavaScript', 'Python'],
    'MySQL': ['SQL', 'JavaScript', 'TypeScript', 'Python'],
    'Redis': ['JavaScript', 'TypeScript', 'Python'],
    'Microservices': ['JavaScript', 'TypeScript', 'Python', 'Go'],
    'CI/CD': ['YAML', 'Shell', 'JavaScript'],
    'GitHub Actions': ['YAML'],
    'Azure DevOps': ['YAML', 'Shell'],
    'Git': ['JavaScript', 'TypeScript', 'Python'],
    'CosmosDB': ['JavaScript', 'TypeScript'],
    'Firebase': ['JavaScript', 'TypeScript'],
    'React Native': ['JavaScript', 'TypeScript']
    // Adicione mais mapeamentos conforme necessário
  };
  
  try {
    const username = "pmatheusvinhas"; // Configure para o username correto
    
    // Buscar todos os repositórios primeiro 
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${GH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        query: REPOS_BY_LANGUAGE_QUERY,
        variables: {
          username
        }
      }),
    });

    if (!response.ok) {
      console.error(`Failed to fetch repos`);
      return [];
    }

    const data = await response.json();
    if (!data.data?.user?.repositories?.nodes) {
      console.error('Invalid response format from GitHub API');
      return [];
    }
    
    const repos = data.data.user.repositories.nodes;
    
    // Usar o mapeamento ou a própria tecnologia para filtrar
    const languages = techMappings[tech] || [tech];
    const techLower = tech.toLowerCase();
    
    // Filtrar repositórios que usam a tecnologia
    const matchingRepos = repos.filter((repo: any) => {
      // Verificar no nome ou descrição do repositório
      if (repo.name.toLowerCase().includes(techLower) || 
          (repo.description && repo.description.toLowerCase().includes(techLower))) {
        return true;
      }
      
      // Verificar na linguagem primária
      if (repo.primaryLanguage && languages.includes(repo.primaryLanguage.name)) {
        return true;
      }
      
      // Verificar nas linguagens usadas
      if (repo.languages && repo.languages.nodes) {
        return repo.languages.nodes.some((lang: any) => 
          languages.includes(lang.name) || 
          lang.name.toLowerCase() === techLower
        );
      }
      
      return false;
    });
    
    return matchingRepos;
  } catch (error) {
    console.error('Error fetching repos by technology:', error);
    return [];
  }
};

export const githubFetch = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      'Authorization': `token ${GH_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response;
};