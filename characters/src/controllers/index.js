const { cachedAsync } = require('../utils')

module.exports = {
  getCharacters: cachedAsync(require('./getCharacters'))
}