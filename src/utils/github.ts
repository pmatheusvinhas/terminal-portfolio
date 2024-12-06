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