'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000'
const caps = io.connect(host)

caps.on('newOrderPickUp', itemPickup)
caps.on('deliverMessage', deliveryNotification)

function itemPickedup(payload) {
  console.log(`Parcel For ${payload.customerName} needs to be delievered`)
  setTimeout(() => {
    caps.emit('in-tranist', payload)
  },2000)

  function itemNotification(payload){
    caps.emit('delivered', payload)
  }

  module.exports = {
    itemPickedup: itemPickedup,
  }

  console.log('Driver Notified')


}

// const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000'

// const driverIO = io.conect(`${SERVER_URL}/caps`);

// driverIO.on('pick-up', payload => {

//   setTimeout(() => {
  
//     driverIO.emit('in-transit', order)
//     console.log({
//       EE: 'Parcel has been picked up!',
//       Driver: `Picked up parcel: ${order.orderId}`,
//       Time: new Date().toTimeString()})
//     },2000)
// })
// // driverIO.on('in-transit', transitLog);

// // function pickUpOrder(order) {
// //   }
// }

// function transitLog(order) {
//   setTimeout(() => {
//     console.log({ 
//       EE: 'Parcel Delivered',
//       Driver: `Parcel Delivered: ${order.orderId}`,
//       Time: newDate().toTimeString()
//     })
//     driverIO.emit('delivered, order')
//   }, 2500)
// }