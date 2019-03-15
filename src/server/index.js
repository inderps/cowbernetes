const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
const { getControllers } = require('./kubectl');

const app = express();

app.use(express.static('dist'));

app.use('/socket.io', express.static(path.join(__dirname, 'node_modules/socket.io-client/dist/')));

app.get('/api/get_controllers', (req, res) => {
  res.send(getControllers());
});

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', () => { console.log('new socket connection'); });

server.listen(8080);
