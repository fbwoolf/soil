const Sequelize = require('sequelize')
const db = require('../db')

const Soil = db.define('soil', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dry: {
    type: Sequelize.INTEGER
  },
  wet: {
    type: Sequelize.INTEGER
  }
})

module.exports = Soil
