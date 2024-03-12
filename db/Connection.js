const config = require('config');
const Sequelize = require('sequelize');
const mysql2 = require('mysql2');
require('dotenv').config();

const {
  db: {
    host, port, name, user,
  },
} = config;

const sequelize = new Sequelize(name, user, process.env.dbpassword, {
  host,
  dialect: 'mysql',
  dialectModule: mysql2,
  port,
  dialectOptions: {
    connectTimeout: 60000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    // console.log('Connection has been established successfully.');
  })
  .catch(() => {
    // console.error('Unable to connect to the database:', err);
  });

module.exports.sequelize = sequelize;
