const express = require('express');
const http = require('http');
// const { start } = require('./fetch-pods-worker');
const { fetchFarms } = require('./fetch-farms');

// start(30000, './pods.json');

const app = express();

app.use(express.static('dist'));

app.get('/api/fetch-farms', (req, res) => {
  res.send(fetchFarms('./pods.json')());
});

const server = http.createServer(app);

server.listen(8080);
