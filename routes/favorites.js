const express = require('express')
const router = express.Router()

const favoriteCtrl = require('../controllers/favorites')
const authCtrl = require('../controllers/auth')

router.get('/user/:id/favorites', authCtrl.protect, favoriteCtrl.index)
router.post('/user/:id/favorites', favoriteCtrl.add)
router.delete('/user/:id/favorites/:id', favoriteCtrl.delete)

module.exports = router
