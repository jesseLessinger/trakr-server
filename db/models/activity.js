const Sequelize = require('sequelize');
const connection = require('../db-connection')

//db definition
module.exports = connection.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

