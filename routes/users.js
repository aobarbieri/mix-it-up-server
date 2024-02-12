///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// users INDEX ROUTE
router.get('/', async (req, res) => {
	res.status(200).json({ message: 'users index route' })
})

// usersCREATE ROUTE
router.post('/', async (req, res) => {
	res.status(201).json({ message: 'users create route', data: { ...req.body } })
})

// users SHOW ROUTE
router.get('/:id', (req, res) => {
	res.status(200).json({ message: 'users show route: ' + req.params.id })
})

// users DELETE ROUTE
router.delete('/:id', (req, res) => {
	res.status(200).json({ message: 'users delete route: ' + req.params.id })
})

// users UPDATE ROUTE
router.put('/:id', (req, res) => {
	console.log(req.body)
	res.status(200).json({ message: 'users update route: ' + req.params.id })
})

module.exports = router
