import * as githubHelpers from './utils/githubHelper';

export default (app) => {
  app.get('/status', (req, res) => {
    res.send("ok");
  });

  app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    if (searchTerm) {
      githubHelpers.searchGithub(searchTerm)
          .then((response) => res.send(response.data));
    } else {
      res.send("Request must include query param.")
    }
  });

  app.get('/contributing/:repoName', (req, res) => {
    githubHelpers.getContributing(`${req.params.repoName}`)
        .then((response) => res.send(response.data))
        .catch((err) => {
          res.status(err.response.status)
              .send(err.response.data);
        });
  });

  app.get('/open_issues/:repoName', (req, res) => {
    githubHelpers.getOpenIssues(`${req.params.repoName}`)
        .then((response) => res.send(response.data))
        .catch((err) => {
          res.status(err.response.status)
              .send(err.response.data)
        });
  });
};
