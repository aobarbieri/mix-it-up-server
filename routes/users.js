const express = require('express')
const userCtrl = require('../controllers/users')
const authCtrl = require('../controllers/auth')

const router = express.Router()

router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

router.get('/', userCtrl.index)
router.post('/', userCtrl.create)
router.get('/:id', userCtrl.show)
router.delete('/:id', userCtrl.delete)
router.put('/:id', userCtrl.update)

module.exports = router
