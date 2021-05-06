'use strict';

const PORT = process.env.PORT || 3000; 
const io = require('socket.io')(PORT);

io.on('connection', socket => {
  console.log('connected', socket.id);
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

// const events = require('.events.js');

// require('./events/driver.js')
// require('.store-vendor.js')