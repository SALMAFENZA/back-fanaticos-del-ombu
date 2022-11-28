let router = require('express').Router()
let {create} = require('../controllers/user')
const schema = require('../schemas/user')
const validator = require('../middlewares/validator')
const accountExistsSignUp = require('../middlewares/accountExistsSignUp');

router.post('/sign-up', validator(schema), accountExistsSignUp ,create)
module.exports = router; 
