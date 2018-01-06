import request from 'supertest';
import express from 'express';

const app = express();
import routes from './routes';
routes(app);

describe('Routes', () => {
  describe('/status', () => {
    it('has 200 status code', () => {
      request(app)
          .get('/status')
          .then((res) => {
            expect(res.status).toEqual(200);
          });
    });
    it('has ok text', () => {
      request(app)
          .get('/status')
          .then((res) => {
            expect(res.text).toEqual("ok");
          });
    });
  });
  describe('/search', () => {
    describe('when query params are undefined', () => {
      it('returns 200 status', () => {
        request(app)
            .get('/search')
            .then((res) => {
              expect(res.status).toEqual(200);
            });
      });
      it('returns text that request must include query params', () => {
        request(app)
            .get('/search')
            .then((res) => {
              expect(res.text).toEqual("Request must include query param.");
            });
      });
    });
    describe('when query params exist', () => {
      xit('returns json data', () => {
        // todo
      });
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
