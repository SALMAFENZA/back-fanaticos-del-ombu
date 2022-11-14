let router = require('express').Router()
let {create , getallbycity,editItinerary,deleteItinerary} = require('../controllers/itinerary')

router.post('/', create )
router.get('/',getallbycity)
router.put('/:id',editItinerary)
router.delete('/:id',deleteItinerary),

module.exports = router;