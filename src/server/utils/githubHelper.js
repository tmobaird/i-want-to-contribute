// Move this to a server/utils/githubHelper.js
const axios = require('axios');

const githubAxios = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  }
});

function searchGithub(searchTerm) {
  return githubAxios.get(`/search/repositories?q=${searchTerm}`)
}

function getContributing(repoName) {
  console.log(`Fetching data from Github API @ /repos/${repoName}/contents/CONTRIBUTING.md`)
  return githubAxios.get(`/repos/${repoName}/contents/CONTRIBUTING.md`);
}

function getOpenIssues(repoName) {
  console.log(`Fetching data from Github API @ /search/issues?q=repo:${repoName}+state:open+type:issue&per_page=15`)
  return githubAxios.get(`/search/issues?q=repo:${repoName}+state:open+type:issue&per_page=15`);
}

module.exports = {
  searchGithub: searchGithub,
  getContributing: getContributing,
  getOpenIssues: getOpenIssues
}
