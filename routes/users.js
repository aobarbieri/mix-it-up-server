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
router.delete('/:id', (req, res) => {
	res.status(200).json({ message: 'user delete route: ' + req.params.id })
})

// user UPDATE ROUTE
router.put('/:id', (req, res) => {
	console.log(req.body)
	res.status(200).json({ message: 'user update route: ' + req.params.id })
})

module.exports = router
