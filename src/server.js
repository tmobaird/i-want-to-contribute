var express = require('express')
const logger = require('morgan');
var app = express()
//const utils = require('./utils/githubHelper.js')
app.use(logger('dev'));

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

const port = process.env.NODE_ENV === 'production' ? 3000 : 5000
app.listen(port, function () {
  console.log(`Running on port ${port}`)
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('App up and running')
})

app.get('/search/:searchTerm', function (req, res) {
  const searchTerm = encodeURIComponent(req.params.searchTerm);
  searchGithub(searchTerm)
    .then((response) => res.send(response.data))
})

app.get('/contributing/:ownerName/:repoName', function (req, res) {
  getContributing(`${req.params.ownerName}/${req.params.repoName}`)
    .then((response) => res.send(response.data))
})

app.get('/open_issues/:ownerName/:repoName', function (req, res) {
  getOpenIssues(`${req.params.ownerName}/${req.params.repoName}`)
    .then((response) => res.send(response.data))
})
