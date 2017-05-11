const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();

app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// Accept CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./routes')(app);

if(process.env.BUNDLED_DEPLOY === 'true') {
  console.log("Bundling express server and static assets together")
  app.use(express.static(path.resolve(__dirname, '../..', 'build')));
  // Always return the main index.html, so react-router render the route in the client
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../..', 'build', 'index.html'));
  });
}

module.exports = app;
