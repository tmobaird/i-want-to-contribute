import axios from 'axios';

const apiUrl = () => {
  if(process.env.BUNDLED_DEPLOY === 'true') {
    return ""; // Uses relative path since client is being served from express server
  } else if(process.env.REACT_APP_EXPRESS_URL) {
    return process.env.REACT_APP_EXPRESS_URL; // Manually overridden URL
  } else {
    return "http://localhost:5000"; // Default URL for dev
  }
}

const githubAxios = axios.create({
  baseURL: apiUrl()
});

export function searchGithub(searchTerm) {
  // These urls need encoded in the event they include special characters
  return githubAxios.get(`/search?q=${encodeURIComponent(searchTerm)}`);
}

export function getContributing(repoName) {
  return githubAxios.get(`/contributing/${encodeURIComponent(repoName)}`);
}

export function getOpenIssues(repoName) {
  return githubAxios.get(`/open_issues/${encodeURIComponent(repoName)}`);
}
