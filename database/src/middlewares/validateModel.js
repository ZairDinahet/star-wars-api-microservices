const { ClientError } = require('../utils/errors')

module.exports = (req, res, next) => { 
  const { model } = req.params;
  const models = ['Character', 'Planet', 'Film']
  if(models.includes(model)){
    return next();
  } else {
    throw new ClientError('Model Invalid', 404)
  }
}