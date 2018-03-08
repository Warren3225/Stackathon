const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/inventory', require('./inventory'))
router.use('/pieces', require('./pieces'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
