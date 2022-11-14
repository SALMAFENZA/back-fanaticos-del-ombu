let router = require('express').Router()
let {create , getallbycity,editItinerary} = require('../controllers/itinerary')

router.post('/', create )
router.get('/',getallbycity)
router.put('/:id',editItinerary)


module.exports = router;