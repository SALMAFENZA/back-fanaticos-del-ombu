let router = require('express').Router()
let {create, update, destroy, read} = require('../controllers/hotel')


router.post('/',create)
router.patch('/:id', update)
router.delete('/:id', destroy)
router.get('/', read)

module.exports = router;