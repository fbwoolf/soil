'use strict'

const Promise = require('bluebird')
const db = require('./server/db')
const User = require('./server/db/models/user')
const Species = require('./server/db/models/species')
const Soil = require('./server/db/models/soil')
const Plant = require('./server/db/models/plant')

const users = [{
  username: 'Fara Woolf',
  email: 'fara@gmail.com',
  password: '123'
}, {
  username: 'Uta Woolf',
  email: 'uta@gmail.com',
  password: '123'
}, {
  username: 'Kefa Woolf',
  email: 'kefa@gmail.com',
  password: '123'
}]

const species = [{
  name: 'Rosmarinus officinalis',
  nickname: 'Rosemary',
  schedule: '3'
}, {
  name: 'Thymus vulgaris',
  nickname: 'Thyme',
  schedule: '2'
}, {
  name: 'Salvia officinalis',
  nickname: 'Sage',
  schedule: '2'
}]

const soils = [{
  name: 'Sandy'
}, {
  name: 'Silty'
}, {
  name: 'Clay'
}]

const plants = [{
  name: 'Rosemary',
  image: '/image/rosemary.jpg',
  location: 'Kitchen',
  reminder: true
}, {
  name: 'Sage',
  image: '/image/sage.jpg',
  location: 'Porch',
  reminder: true
}]

console.log('Seeding Database')
db.sync({ force: true })
  .then(() => {
    console.log('Seeding Users')
    return Promise.all(users.map(user => User.create(user)))
  })
  .then(() => {
    console.log('Seeding Species')
    return Promise.all(species.map(species => Species.create(species)))
  })
  .then(() => {
    console.log('Seeding Soils')
    return Promise.all(soils.map(soil => Soil.create(soil)))
  })
  .then(() => {
    console.log('Seeding Plants')
    return Promise.all(plants.map(plant => Plant.create(plant)))
  })
  .catch(err => {
    console.log('Error while seeding')
    console.log(err.stack)
  })
  .then(() => {
    db.close()
    return null
  })
