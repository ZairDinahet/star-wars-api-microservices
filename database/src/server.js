const express = require('express');
const morgar = require('morgan');



const server = express();


server.use(express.json());
server.use(morgar('dev'));
server.use(require('./routers'))

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message})
})

module.exports = server;