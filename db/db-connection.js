// this is where the database connection will happen
const Sequelize = require('sequelize');

const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const port = process.env.DB_PORT || 3306;
const password = process.env.DB_PASSWORD || 'password';
const database = process.env.DB_DATABASE || 'trakr';

const connection = new Sequelize(database, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: false,
});


module.exports = connection;



