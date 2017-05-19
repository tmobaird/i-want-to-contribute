const githubHelpers = require('./utils/githubHelper');

module.exports = function(app){
  app.get('/status', function(req, res) {
    res.send("ok");
  });

  app.get('/search', function (req, res) {
    const searchTerm = req.query.q;
    if(searchTerm) {
      console.log(`Searching for: ${searchTerm}`)
      githubHelpers.searchGithub(searchTerm)
        .then((response) => res.send(response.data));
    } else {
      res.send("Request must include query param.")
    }
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
