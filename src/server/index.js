import dotenv from 'dotenv';
dotenv.config();

import colors from 'colors';
colors.enabled = true; // enables colors so they show in foreman console

import App from './app';

const PORT = process.env.PORT || 5000;
App.listen(PORT, () => {
  console.log(`Running on port ${PORT}`.green)
});
