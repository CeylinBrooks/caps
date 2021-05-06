'use strict';

const express = require('express');
const cors = require('cors');
const faker = require('faker');
cosnt io = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000'

const socket = io.connect(`${SERVER_URL}/caps`);

const app = express();
const PORT = process.env.PORT ||| 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/pickup', (req,res) => {
  let pckg = req.body || {
    orderPlaced: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress()
  }


socket.emit('pickup', pckg);
res.status(200).send('your package was delievered');
});

app.listen(PORT,() => {
  console.log(`API Server up! ${PORT}`)
});

