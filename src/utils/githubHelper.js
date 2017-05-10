import axios from 'axios';

const githubAxios = axios.create({
  baseURL: 'https://api.github.com',
  // baseURL: process.env.REACT_APP_EXPRESS_URL ? process.env.REACT_APP_EXPRESS_URL : "localhost:5000",
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
});

export function searchGithub(searchTerm) {
  return githubAxios.get(`/search/repositories?q=${searchTerm}`)
}

export function getContributing(repoName) {
  return githubAxios.get(`/repos/${repoName}/contents/CONTRIBUTING.md`);
}

export function getOpenIssues(repoName) {
  return githubAxios.get(`/search/issues?q=repo:${repoName}+state:open+is:issue&per_page=15`);
}
