'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3000; 
const caps = require('socket.io')(PORT);

caps.on('connection', (socket) => {
  console.log('connected', `${socket.id} is connected!`);
  socket.on('pick-up', (payload) =>
});

const caps = io.of('/caps');

caps.on('connected', socket => {
  console.log('connected customer - name:')
}

socket.on('pickup', payload => {
  logger('pickup', payload);
  caps.emit('pickup', payload);
});

socket.on('delivered', payload => {
  logger('delivered', payload);
  caps.to(payload.store).emit('delivered', payload);
});

function logger(event, payload) {
  let timeStamp = new Date();
  console.log({ timeStamp, event, payload});
}

