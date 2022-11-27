let router = require('express').Router()
let {create , getAll, getOne , editCity, deleteCity} = require('../controllers/city')
const validator = require('../middlewares/validator')
const schema = require('../schemas/city')


router.post(((validator(schema)),create)),
router.get('/',getAll),

router.get('/:id',getOne),
router.put('/:id',editCity),
router.delete('/:id',deleteCity),

module.exports = router
