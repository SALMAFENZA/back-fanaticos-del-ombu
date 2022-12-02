let router = require('express').Router()
let { create, getAll, deleteReaction , addDelUserId , delUserId} = require('../controllers/reaction')
const passport = require ('../config/passport')

router.post('/', create )
router.get('/', getAll)
router.put('/:id', passport.authenticate('jwt', { session: false }) , addDelUserId )
    // router.delete('/' , passport.authenticate('jwt', { session: false }) ,delUserId )

module.exports = router;