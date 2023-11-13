const Films = require('../data')
const { response } = require('../utils')

module.exports = async (req, res) =>{
  const { id } = req.params
  const films = await Films.getOne(id);
  response(res, 200, films)
}