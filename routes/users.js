let router = require('express').Router()
let {create} = require('../controllers/user')
const schema = require('../schemas/user')
const validator = require('../middlewares/validator')

router.post('/sign-up', (validator(schema),create))
module.exports = router; 
