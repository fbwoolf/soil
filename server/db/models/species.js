const Sequelize = require('sequelize')
const db = require('../db')

const Species = db.define('species', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  schedule: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Species
