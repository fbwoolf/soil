const Sequelize = require('sequelize')
const db = require('../db')

const Plant = db.define('plant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '/image/rosemary.jpg'
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reminder: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  moisture: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM('WET', 'DRY')
  }
})

module.exports = Plant
