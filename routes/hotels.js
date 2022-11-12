let router = require('express').Router()
let {create} = require('../controllers/hotel')

router.post('/',create)
module.exports = router;