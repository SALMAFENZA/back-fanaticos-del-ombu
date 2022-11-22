let router = require('express').Router()
let {create , getAll,editItinerary,deleteItinerary} = require('../controllers/itinerary')

router.post('/', create )
router.get('/',getAll)
router.put('/:id',editItinerary)
router.delete('/:id',deleteItinerary),

module.exports = router;
