const { cachedAsync } = require('../utils')

module.exports = {
  getFilms: cachedAsync(require('./getFilms')),
  getOneFilm: cachedAsync(require('./getOneFilm')),
  createFilm: cachedAsync(require('./createFilm')),
  deleteFilm: cachedAsync(require('./deleteFilm')),
  updateFilm: cachedAsync(require('./updateFilm'))
}
