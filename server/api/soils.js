const router = require('express').Router()
const {Soil} = require('../db/models')
module.exports = router

router.param('soilId', (req, res, next, id) => {
  Soil.findById(id)
    .then(soil => {
      if (!soil) {
        const err = Error('Soil not found')
        err.status = 400
        throw err
      }
      req.soil = soil
      next()
      return null
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
  Soil.findAll()
    .then(soils => res.json(soils))
    .catch(next)
})

router.get('/:soilId', (req, res, next) => {
  res.json(req.soil)
})

router.put('/:soilId', (req, res, next) => {
  req.soil.update(req.body)
    .then(soil => res.status(200).json(soil))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Soil.create(req.body)
    .then(soil => res.status(201).json(soil))
    .catch(next)
})

router.delete('/:soilId', (req, res, next) => {
  req.soil.destroy()
    .then(() => res.status(204).end())
    .catch(next)
})
