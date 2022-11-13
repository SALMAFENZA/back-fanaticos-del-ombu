let router = require('express').Router()
let {create , getAll} = require('../controllers/city')

router.post('/',create)
router.get('/',getAll)
module.exports = router;