let router = require('express').Router()
let {create, update, destroy, read, readOne} = require('../controllers/hotel')


router.post('/',create)
router.patch('/:id', update)
router.delete('/:id', destroy)
router.get('/', read)
router.get('/:id', readOne)

module.exports = router;