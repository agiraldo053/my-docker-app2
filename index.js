const express = require('express');
const app = express();
const port = 4000;

const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics();

app.get('/metrics', (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(client.register.metrics());
});

app.get('/', (req, res) => res.send('bienvenido'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));