'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const notFoundHandler = require('./error-handlers/404.js');
const logger = require('./middleware/logger.js');

const errorHandler = require('./error-handlers/500.js');
const authRoutes = require('./auth/routes.js');
const v1Routes = require('./routes/v1.js');
const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan('dev'));
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', v1Routes);
app.use(authRoutes);
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};