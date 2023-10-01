const { cachedAsync } = require('../utils');

module.exports = {
  getRequets: cachedAsync(require('./getRequest')),
  postRequest: cachedAsync(require('./postRequet')),
  oneRequest: cachedAsync(require('./oneRequets')),
  deleteRequest: cachedAsync(require('./deleteRequest')),
  putRequest: cachedAsync(require('./putRequets')),
}