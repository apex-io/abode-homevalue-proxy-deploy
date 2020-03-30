const { createProxyMiddleware } = require('http-proxy-middleware');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const port = 4444;

app.use(morgan('dev'));

app.use(bodyParser({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public/')));

app.use('/exampleHomeSummary/', createProxyMiddleware({ target: 'http://13.59.246.108/', changeOrigin: true }));

app.use('/properties', createProxyMiddleware({ target: 'http://3.101.38.144/', changeOrigin: true }));

app.use('/api/neighborhoods', createProxyMiddleware({ target: 'http://54.151.36.136/', changeOrigin: true }));

app.use('/api/houses', createProxyMiddleware({ target: 'http://54.151.36.136/', changeOrigin: true }));

app.use('/api/gethomepictures', createProxyMiddleware({ target: 'http://18.222.201.225', changeOrigin: true }));


app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
