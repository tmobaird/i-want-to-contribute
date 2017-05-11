// Move this to a server/utils/githubHelper.js
const axios = require('axios');

const githubAxios = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
});

function searchGithub(searchTerm) {
  return githubAxios.get(`/search/repositories?q=${searchTerm}`)
}

function getContributing(repoName) {
  return githubAxios.get(`/repos/${repoName}/contents/CONTRIBUTING.md`);
}

function getOpenIssues(repoName) {
  return githubAxios.get(`/search/issues?q=repo:${repoName}+state:open+is:issue&per_page=15`);
}

module.exports = {
  searchGithub: searchGithub,
  getContributing: getContributing,
  getOpenIssues: getOpenIssues
}
