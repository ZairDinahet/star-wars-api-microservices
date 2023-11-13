const Planets = require('../data')
const { response } = require('../utils')

module.exports = async (req, res) => {
  const planet = await Planets.create(req.body)
  response(res, 200, planet)
}