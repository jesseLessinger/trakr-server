module.exports.save = async (model, data, conditions) => {
  const options = {
    where: conditions,
    defaults: data
  }
  return model.findOrCreate(options)
}

module.exports.get = async (model, conditions) => {
  const options = {
    where: conditions
  }
  return model.findAll(options)
}