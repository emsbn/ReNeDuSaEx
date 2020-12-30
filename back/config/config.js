const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'ReNeDuSaEx',
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'ReNeDuSaEx',
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'ReNeDuSaEx',
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres',
  },
};
