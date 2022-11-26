let router = require('express').Router()
let {create , getAll, getOne , editCity, deleteCity} 
= require('../controllers/city')

let schema = require('../schemas/city')
let validator = require('../middlewares/validator')

router.post('/', validator(schema), create)
router.get('/',getAll),
router.get('/:id',getOne),
router.put('/:id',editCity),
router.delete('/:id',deleteCity),

module.exports = router;