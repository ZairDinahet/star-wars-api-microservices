const express = require('express')
const morgan = require('morgan')
const {createProxyMiddleware} = require('http-proxy-middleware')

const app = express()
const PORT = 8000
app.use(morgan('dev'))

app.use('/characters', createProxyMiddleware({
  target: 'http://characters:8001',
  changeOrigin: true,
}))

app.use('/films', createProxyMiddleware({
  target: 'http://films:8002',
  changeOrigin: true,
}))

app.use('/planets', createProxyMiddleware({
  target: 'http://planets:8003',
  changeOrigin: true,
}))


app.use('*', (req, res) => {
  res.status(404).json({
    error: true,
    message: 'Gateway: Route not found',
  });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error: true,
    message: 'Gateway: ' + err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Gateway on port ${PORT}`);
}) 