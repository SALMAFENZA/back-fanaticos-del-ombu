let router= require('express').Router()
let users= require('./users')
let cities= require('./cities')
let itineraries= require('./itineraries')
let hotels= require('./hotels')
let shows= require('./shows')
let myHotels= require('./myhotels')



router.use('/api/itineraries',itineraries)
router.use('/api/users',users),
router.use('/api/cities',cities)
router.use('/api/hotels', hotels)
router.use('/api/shows',shows)
router.use('/api/myhotels', myHotels)

module.exports = router;
