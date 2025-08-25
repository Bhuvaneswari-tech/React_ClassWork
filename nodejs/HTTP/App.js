// server.js
const app = require('http').createServer();
const io = require('socket.io')(app, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('chat message', (msg) => {
    console.log('message:', msg);
    io.emit('chat message', msg); // broadcast to all clients
  });
});

app.listen(5006, () => {
  console.log('listening on *:5006');
});
