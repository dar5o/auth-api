'use strict';

const { db } = require('./src/models');
const server = require('./src/server.js');
const { Authdb } = require('./src/auth/models');

Authdb.sync().then(() => {
  app.start(process.env.PORT || 3001);
});

db.sync().then(() => {
  server.start(3000);
});