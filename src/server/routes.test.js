import request from 'supertest';
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const githubHelpers = require('./utils/githubHelper');


// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);
const express = require('express');
const app = express();
require('./routes')(app);

describe('Routes', () => {
  describe('/status', () => {
    it('has /status endpoint', () => {
      request(app)
        .get('/status')
        .expect(200, "ok")
        .end(function(err, res) {
          if (err) throw err;
        });
    });
  });
  describe('/search', () => {
    xit('returns json data', () => {
      // todo
    });
  });
  describe('/contributing/:repoName', () => {
    xit('returns json data', () => {
      // todo
    });
  });
  describe('/open_issues/:repoName', () => {
    xit('returns json data', () => {
      // todo
    });
  });
});
