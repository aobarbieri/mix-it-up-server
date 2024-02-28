const express = require('express')
const router = express.Router()

const favoriteCtrl = require('../controllers/favorites')

router.post('/user/:id/favorites', favoriteCtrl.create)
router.delete('/user/:id/favorites/:id', favoriteCtrl.delete)

module.exports = router
