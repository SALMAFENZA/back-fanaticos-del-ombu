let router= require('express').Router()
let users= require('./users')
let cities= require('./cities')
let itineraries= require('./itineraries')

router.use('/api/itineraries',itineraries)
router.use('/api/auth',users),
router.use('/api/cities',cities)

module.exports = router;
