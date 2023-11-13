const { cachedAsync } = require('../utils')

module.exports = {
  getCharacters: cachedAsync(require('./getCharacters')),
  getOneCharacter: cachedAsync(require('./getOneCharacter')),
  deleteCharacter: cachedAsync(require('./deleteCharacter')),
  createCharacter: cachedAsync(require('./createCharacter')),
  updateCharacter: cachedAsync(require('./updateCharacter')),
}