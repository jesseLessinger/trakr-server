const ActivityModel = require('../models/activity')
const { save, get } = require('./helpers')

//db actions
const Entity = {}

Entity.save = (data) => {
  const conditions = { id: null }
  if (data.id) {
    conditions = { id }
  }
  return save(ActivityModel, data.data, conditions)
}

Entity.get = (conditions) => {
  return get(ActivityModel, conditions)
}


module.exports = Entity