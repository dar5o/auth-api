'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');

const mockRequest = supertest(server);

