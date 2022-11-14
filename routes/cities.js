let router = require('express').Router()
let {create , getAll, getOne , editCity} = require('../controllers/city')


router.post('/',create),
router.get('/',getAll),
router.get('/:id',getOne),
router.put('/:id',editCity),
module.exports = router;