const { cachedAsync } = require('../utils')

module.exports = {
  getPlanets: cachedAsync(require('./getPlanets'))
}