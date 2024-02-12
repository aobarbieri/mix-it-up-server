///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users')

///////////////////////////////
// ROUTES
////////////////////////////////

/// user INDEX ROUTE
router.get('/', userCtrl.index)

// user CREATE ROUTE
router.post('/', userCtrl.create)

// user SHOW ROUTE
router.get('/:id', userCtrl.show)

// user DELETE ROUTE
router.delete('/:id', userCtrl.delete)

// user UPDATE ROUTE
router.put('/:id', userCtrl.update)

module.exports = router
