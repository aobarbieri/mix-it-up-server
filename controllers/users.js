///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const { User } = require('../models')

module.exports = {
	index,
	create,
	show,
	delete: destroy,
	update,
}

///////////////////////////////
// CONTROLLER ACTIONS
////////////////////////////////
async function index(req, res, next) {
	try {
		res.json(await User.find({}))
	} catch (error) {
		res.status(400).json(error)
	}
}

async function create(req, res, next) {
	try {
		res.json(await User.create(req.body))
		console.log(req.body)
	} catch (error) {
		res.status(400).json(error)
	}
}

async function show(req, res, next) {
	try {
		res.json(await User.findById(req.params.id))
	} catch (error) {
		res.status(400).json(error)
	}
}

async function destroy(req, res, next) {
	try {
		res.json(await User.findByIdAndDelete(req.params.id))
	} catch (error) {
		res.status(400).json(error)
	}
}

async function update(req, res, next) {
	try {
		// update user by ID, provide the form data, and return the updated document.
		res.json(await User.findByIdAndUpdate(req.params.id, req.body, { new: true }))
	} catch (error) {
		res.status(400).json(error)
	}
}
