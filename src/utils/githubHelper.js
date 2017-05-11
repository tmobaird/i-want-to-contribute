import axios from 'axios';

const githubAxios = axios.create({
  //baseURL: 'https://api.github.com',
  baseURL: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_EXPRESS_URL : "http://localhost:5000"
});

export function searchGithub(searchTerm) {
  // These urls need encoded in the event they include special characters
  return githubAxios.get(`/search/${encodeURIComponent(searchTerm)}`);
}

export function getContributing(repoName) {
  return githubAxios.get(`/contributing/${encodeURIComponent(repoName)}`);
}

export function getOpenIssues(repoName) {
  return githubAxios.get(`/open_issues/${encodeURIComponent(repoName)}`);
}
