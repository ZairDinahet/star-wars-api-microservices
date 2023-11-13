const { cachedAsync } = require('../utils')

module.exports = {
  getPlanets: cachedAsync(require('./getPlanets')),
  getOnePlanet: cachedAsync(require('./getOnePlanet')),
  createPlanet: cachedAsync(require('./createPlanet')),
  deletePlanet: cachedAsync(require('./deletePlanet')),
  updatePlanet: cachedAsync(require('./updatePlanet')),
}