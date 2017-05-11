const githubHelpers = require('./utils/githubHelper');

module.exports = function(app){
  app.get('/search/:searchTerm', function (req, res) {
    const searchTerm = req.params.searchTerm;
    console.log(searchTerm)
    githubHelpers.searchGithub(searchTerm)
      .then((response) => res.send(response.data))
  });

  app.get('/contributing/:repoName', function (req, res) {
    githubHelpers.getContributing(`${req.params.repoName}`)
      .then((response) => res.send(response.data))
      .catch((err) => {
        res.status(err.response.status)
          .send(err.response.data);
      });
  });

  app.get('/open_issues/:repoName', function (req, res) {
    githubHelpers.getOpenIssues(`${req.params.repoName}`)
      .then((response) => res.send(response.data))
      .catch((err) => {
        res.status(err.response.status)
          .send(err.response.data)
      });
  });
}
