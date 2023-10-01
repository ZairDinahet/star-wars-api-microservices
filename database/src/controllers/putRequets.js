const store = require('../database');
const { response } = require('../utils')

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const data = await store[model].put(id, req.body);
  response(res, 200, data)
}