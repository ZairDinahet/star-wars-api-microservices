const axios = require('axios')

const url = 'http://database:8004/Film'
// const url = 'http://localhost:8004/Film'

module.exports = {
  list: async () => {
    const { data } = await axios.get(url)
    return data
  },
  getOne: async (id) => {
    const { data } = await axios.get(`${url}/${id}`)
    return data
  },
  create: async (film) => {
    const { data } = await axios.post(url, film)
    return data
  },
  delete: async (id) => {
    const { data } = await axios.delete(`${url}/${id}`)
    return data
  },
  update: async (id, film) => {
    const { data } = await axios.put(`${url}/${id}`, film)
    return data
  }
}