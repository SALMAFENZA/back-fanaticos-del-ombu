let router = require('express').Router()
let {create , getAll, getOne} = require('../controllers/city')


router.post('/',create),
router.get('/',getAll),
router.get('/:id',getOne),

module.exports = router;