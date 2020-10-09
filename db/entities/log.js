const LogModel = require('../models/log')
const { save, get } = require('./helpers')

//db actions
const Entity = {}

Entity.save = (data) => {
  conditions = { id: null}
  if (data.id){
    conditions = { id }
  }   
  return save(LogModel, data.data, conditions)
}

Entity.get = (data) => {
  const { activityId, logId } = data;
  conditions = {}
  if (activityId){
    conditions = { activity_id: activityId }
  } else if (logId){
    conditions = { id: logId }
  }
  return get(LogModel, conditions);
}


module.exports = Entity;