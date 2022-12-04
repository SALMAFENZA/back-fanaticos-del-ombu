let router = require('express').Router()
let { create , getAll , deleteReaction , addDelUserId, getAllByUser } = require('../controllers/reaction')
const passport = require ('../config/passport')
const validator = require('../middlewares/validator')
const schema = require ('../schemas/reaction')

        router.post('/'  ,  validator(schema) , create )
        router.get('/?userId',  passport.authenticate('jwt', { session: false })  , getAllByUser)
        router.get('/',  getAll)
        router.put('/:id', passport.authenticate('jwt', { session: false })  , addDelUserId )
        router.delete('/' , passport.authenticate('jwt', { session: false }), deleteReaction )

module.exports = router;