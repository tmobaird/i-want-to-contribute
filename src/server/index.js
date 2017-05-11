require('dotenv').config();
const colors = require('colors');
colors.enabled = true; // enables colors so they show in foreman console

const app = require('./app');

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Running on port ${PORT}`.green)
})
