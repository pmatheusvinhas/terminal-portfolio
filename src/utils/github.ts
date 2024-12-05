const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const githubFetch = (url: string) => {
  return fetch(url, {
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });
}; 