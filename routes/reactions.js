let router = require('express').Router()
let { create, getAll, deleteReaction , addUserId , delUserId} = require('../controllers/reaction')
const passport = require ('../config/passport')

router.post('/', create )
router.get('/', getAll)
router.put('/',  addUserId )
router.delete('/' , passport.authenticate('jwt', { session: false }) ,delUserId )

module.exports = router;