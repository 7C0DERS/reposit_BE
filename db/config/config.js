require('dotenv').config(); // this is important!
const config = require('config');

const { db: { host, name, user } } = config;

module.exports = {
  local: {
    username: user,
    password: process.env.dbpassword,
    database: name,
    host,
    dialect: 'mysql',
  },

  dev: {
    username: user,
    password: process.env.dbpassword,
    database: name,
    host,
    dialect: 'mysql',
  },
  test: {
    username: user,
    password: process.env.dbpassword,
    database: name,
    host,
    dialect: 'mysql',
  },
  prod: {
    username: user,
    password: process.env.dbpassword,
    database: name,
    host,
    dialect: 'mysql',
  },
  home: {
    username: user,
    password: process.env.dbpassword,
    database: name,
    host,
    dialect: 'mysql',
  },
};