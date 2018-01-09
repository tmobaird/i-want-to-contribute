import express from 'express';
import logger from 'morgan';
import path from 'path';
import routes from './routes';

const App = express();

const loggerType = process.env.NODE_ENV === 'production' ? 'common' : 'dev';
App.use(logger(loggerType));

// Accept CORS
App.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(App);

if (process.env.REACT_APP_BUNDLED_DEPLOY === 'true') {
  console.log("Bundling express server and static assets together");
  // The following paths assume that the app is being served from dist/
  App.use(express.static(path.resolve(__dirname, '..', 'build')));
  // Always return the main index.html, so react-router render the route in the client
  App.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });
}

export default App;
