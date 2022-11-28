let router = require('express').Router()
let {create , login ,  logout} = require('../controllers/user')
const schema = require('../schemas/user')
const Login = require ('../schemas/login')
const validator = require('../middlewares/validator')
const accountExistsSignUp = require('../middlewares/accountExistsSignUp');
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const passport = require ('../config/passport')

router.post('/sign-up', validator(schema), accountExistsSignUp ,create)
router.patch('/sign-in', validator(Login), accountExistsSignIn , login)
router.patch('/sign-out', passport.authenticate('jwt', { session: false }), logout)
module.exports = router; 
