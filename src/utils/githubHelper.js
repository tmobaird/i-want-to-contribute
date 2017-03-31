import axios from 'axios';

const githubAxios = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
});

export function searchGithub(searchTerm) {
  return githubAxios.get(`/search/repositories?q=${searchTerm}`)
}

export function getContributing(repoName) {
  return githubAxios.get(`/repos/${repoName}/contents/CONTRIBUTING.md`);
}
