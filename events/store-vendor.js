'use  strict';

const events = require('events');

const vendorName = process.env

setInterval(() => {
  let orderPlaced = {name: 'Fake Order', id: '01'}
  events.EventEmitter('Order has been picked up!', order)
}, 2000);