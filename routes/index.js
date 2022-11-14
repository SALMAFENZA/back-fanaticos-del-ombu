let router= require('express').Router()

let users= require('./users')

let cities= require('./cities')

let itineraries= require('./itineraries')


router.use('/api/users',users),
router.use('/api/cities',cities),
router.use('/api/itineraries',itineraries)
module.exports = router;
