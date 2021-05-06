'use  strict';

const faker = require('faker');
const io = require('socket.io-client');

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000';

const socket = io.connect(`${SERVER_URL}/caps`);

socket.emit('join', store);

socket.on('delivered', payload => {
  console.log('Order #: Delivered', payload.orderPlaced);
});

setInterval(() => {
  store: store,
  let orderPlaced = {name: 'Fake Order', id: '01'}
}, 2000);

events.EventEmitter('Order has been picked up!', order)


// const events = require('events');

// const vendorName = process.env
