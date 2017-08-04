const User = require('./user')
const Species = require('./species')
const Soil = require('./soil')
const Plant = require('./plant')

// Associations
User.hasMany(Plant)
Plant.belongsTo(User)

Soil.hasMany(Species)
Species.belongsTo(Soil)

Species.hasMany(Plant)
Plant.belongsTo(Species)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Species,
  Soil,
  Plant
}
