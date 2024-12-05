declare const __GITHUB_TOKEN__: string;

export const githubFetch = (url: string) => {
  return fetch(url, {
    headers: {
      'Authorization': `Bearer ${__GITHUB_TOKEN__}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });
}; 