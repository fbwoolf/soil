const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/species', require('./species'))
router.use('/soils', require('./soils'))
router.use('/plants', require('./plants'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
