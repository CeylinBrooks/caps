'use  strict';

const io = require('socket.io-client')
const host = 'http://localhost:3000'
const caps = io.connect(host)
const faker = require('faker');

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000';
const socket = io.connect(`${SERVER_URL}/caps`);

caps.on('delivered', parcelDelivered)

setInterval(() => {
  let fakeData = {
    storeName: faker.company.companyName(),
    orderPlaced = faker.address.zipCode(),
    customerId = faker.name.findName(),
    address: faker.address.streetAddress()
  }, 
  caps.emit('pick-up', fakeData)
},2000);

function parcelDelivered(payload) {
  console.log(` Parcel Delivered! .. Pacrcel ${payload.order} On ${new Date()}`)
}
 
module.exports = {
  parcelDelivered: parcelDelivered
}

console.log('Vendor Active')



// socket.emit('join', store);

// socket.on('delivered', payload => {
//   console.log('Order #: Delivered', payload.orderPlaced);
// });


// events.EventEmitter('Order has been picked up!', order)


// const events = require('events');

// const vendorName = process.env
