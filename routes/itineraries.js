let router = require('express').Router()
let {create , getallbycity} = require('../controllers/itinerary')

router.post('/', create )
router.get('/',getallbycity)
// router.get('/:id',getallbycity)

module.exports = router;