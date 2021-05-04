'use strict';

const events = require('./events');

events.on('picked up', orderPickUp)

function orderPickUp(payload) {
  console.log(() => {
    console.log(`Your Driver has picked up your order ${payload.id}`)
  }, 1000);
}