const router = require('express').Router()
const {Plant} = require('../db/models')
module.exports = router

router.param('plantId', (req, res, next, id) => {
  Plant.findById(id)
    .then(plant => {
      if (!plant) {
        const err = Error('Plant not found')
        err.status = 400
        throw err
      }
      req.plant = plant
      next()
      return null
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
  Plant.findAll()
    .then(plants => res.json(plants))
    .catch(next)
})

router.get('/:plantId', (req, res, next) => {
  res.json(req.plant)
})

router.put('/:plantId', (req, res, next) => {
  req.plant.update(req.body)
    .then(plant => res.status(200).json(plant))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Plant.create(req.body)
    .then(plant => res.status(201).json(plant))
    .catch(next)
})

router.delete('/:plantId', (req, res, next) => {
  req.plant.destroy()
    .then(() => res.status(204).end())
    .catch(next)
})
