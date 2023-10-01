const axios = require('axios')

const url = 'http://database:8004/Character'

module.exports = {
  list: async () => {
    const { data } = await axios.get(url)
    return data
  }
}