let router = require('express').Router()
let {create , login} = require('../controllers/user')
const schema = require('../schemas/user')
const Login = require ('../schemas/login')
const validator = require('../middlewares/validator')
const accountExistsSignUp = require('../middlewares/accountExistsSignUp');
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')

router.post('/sign-up', validator(schema), accountExistsSignUp ,create)
router.patch('/sign-in', validator(Login), accountExistsSignIn , login)
module.exports = router; 
