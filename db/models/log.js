const Sequelize = require('sequelize');
const connection = require('../db-connection')
const ActivityModel = require('../models/activity')

//db definition
module.exports = connection.define('log', {
  activity_id: {
    type: Sequelize.INTEGER,
    references: {
      model: ActivityModel,
      key: 'id'
    }
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start: {
    type: Sequelize.DATE,
  },
  stop: {
    type: Sequelize.DATE,
  },
  value: {
    type: Sequelize.STRING
  }
});