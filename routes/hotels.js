let router = require('express').Router()
let {create} = require('../controllers/hotel')

router.post('/create',create)
module.exports = router;