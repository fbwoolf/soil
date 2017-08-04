const router = require('express').Router()
const {Species} = require('../db/models')
module.exports = router

router.param('speciesId', (req, res, next, id) => {
  Species.findById(id)
    .then(species => {
      if (!species) {
        const err = Error('Species not found')
        err.status = 400
        throw err
      }
      req.species = species
      next()
      return null
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
  Species.findAll()
    .then(species => res.json(species))
    .catch(next)
})

router.get('/:speciesId', (req, res, next) => {
  res.json(req.species)
})

router.put('/:speciesId', (req, res, next) => {
  req.species.update(req.body)
    .then(species => res.status(200).json(species))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Species.create(req.body)
    .then(species => res.status(201).json(species))
    .catch(next)
})

router.delete('/:speciesId', (req, res, next) => {
  req.species.destroy()
    .then(() => res.status(204).end())
    .catch(next)
})
