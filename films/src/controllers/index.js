const { cachedAsync } = require('../utils')

module.exports = {
  getFilms: cachedAsync(require('./getFilms'))
}
