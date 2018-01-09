// Move this to a server/utils/githubHelper.js
import axios from 'axios';

const githubAxios = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  }
});

export function searchGithub(searchTerm) {
  return githubAxios.get(`/search/repositories?q=${searchTerm}`)
}

export function getContributing(repoName) {
  console.log(`Fetching data from Github API @ /repos/${repoName}/contents/CONTRIBUTING.md`)
  return githubAxios.get(`/repos/${repoName}/contents/CONTRIBUTING.md`);
}

export function getOpenIssues(repoName) {
  console.log(`Fetching data from Github API @ /search/issues?q=repo:${repoName}+state:open+type:issue&per_page=15`)
  return githubAxios.get(`/search/issues?q=repo:${repoName}+state:open+type:issue&per_page=15`);
}
