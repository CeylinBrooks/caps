'use strict';

// const events = require('./events');

// events.on('picked up', orderPickUp)

// function orderPickUp(payload) {
//   console.log(() => {
//     console.log(`Your Driver has picked up your order ${payload.id}`)
//   }, 1000);
// }

const io = require('socket.io-client');

const driverIO = io.conect('host');

driverIO.on('pick-up', pickUpOrder);
driverIO.on('in-transit', transitLog);

function pickUpOrder(order) {
  setTimeout(() => {

    driverIO.emit('in-transit', order)
    console.log({
      EE: 'Parcel has been picked up!',
      Driver: `Picked up parcel: ${order.orderId}`,
      Time: new Date().toTimeString()})
    },2000)
  }
}

function transitLog(order) {
  setTimeout(() => {
    console.log({ 
      EE: 'Parcel Delivered',
      Driver: `Parcel Delivered: ${order.orderId}`,
      Time: newDate().toTimeString()
    })
    driverIO.emit('delivered, order')
  }, 2500)
}