import axios from 'axios';

const apiUrl = () => {
  if(process.env.REACT_APP_BUNDLED_DEPLOY === 'true') {
    return ""; // Uses relative path since client is being served from express server
  } else if(process.env.REACT_APP_EXPRESS_URL) {
    return process.env.REACT_APP_EXPRESS_URL; // Manually overridden URL
  } else {
    return "http://localhost:5000"; // Default URL for dev
  }
}

const expressAxios = axios.create({
  baseURL: apiUrl()
});

export function searchGithub(searchTerm) {
  // These urls need encoded in the event they include special characters
  return expressAxios.get(`/search?q=${encodeURIComponent(searchTerm)}`);
}

export function getContributing(repoName) {
  return expressAxios.get(`/contributing/${encodeURIComponent(repoName)}`);
}

export function getOpenIssues(repoName) {
  return expressAxios.get(`/open_issues/${encodeURIComponent(repoName)}`);
}
