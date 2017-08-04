const Sequelize = require('sequelize')
const db = require('../db')

const Soil = db.define('soil', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dry: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  wet: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Soil
